import { NextResponse } from "next/server";
import {
  formatMeetingDateForApi,
  normalizeMeetingRequestApiPayload,
  startOfToday,
  validateMeetingRequestForm,
} from "@/lib/meetingRequest";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  console.log("[API Route] Received body:", JSON.stringify(body));

  const normalized = normalizeMeetingRequestApiPayload(body);
  const validationErrors = validateMeetingRequestForm(normalized.values);
  const combinedErrors = { ...normalized.errors, ...validationErrors };

  if (Object.keys(combinedErrors).length > 0) {
    console.warn("[API Route] Validation errors:", combinedErrors);
    return NextResponse.json(
      {
        error: "Please correct the highlighted fields and try again.",
        errors: combinedErrors,
      },
      { status: 400 }
    );
  }

  const meetingDate = normalized.values.meetingDate;
  if (!meetingDate || meetingDate < startOfToday()) {
    return NextResponse.json(
      {
        error: "Meeting date must be today or a future date.",
        errors: { meetingDate: "Please select today or a future date." },
      },
      { status: 400 }
    );
  }

  const normalizedEmail = normalized.values.businessEmail.trim().toLowerCase();
  const apiMeetingDate = formatMeetingDateForApi(meetingDate);

  // Forward to FastAPI backend
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.API_URL ||
    "https://primeconnect-api.vercel.app";

  const targetUrl = `${apiUrl.replace(/\/$/, "")}/api/v1/meeting-requests`;

  console.log(`[API Route] Forwarding to FastAPI: ${targetUrl}`);

  const backendPayload = {
    full_name: normalized.values.fullName.trim(),
    company_name: normalized.values.companyName.trim(),
    business_email: normalizedEmail,
    meeting_date: apiMeetingDate,
    comment: normalized.values.comment.trim() || undefined,
  };

  console.log("[API Route] Backend payload:", JSON.stringify(backendPayload));

  try {
    const fastApiResponse = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(backendPayload),
    });

    const responseData = await fastApiResponse.json().catch(() => null);

    console.log(`[API Route] FastAPI HTTP Status: ${fastApiResponse.status}`);
    console.log("[API Route] FastAPI Response:", JSON.stringify(responseData));

    if (!fastApiResponse.ok) {
      // Pass exact backend error through — never replace with a generic message
      return NextResponse.json(
        responseData || { error: "Backend error", detail: "No response body" },
        { status: fastApiResponse.status }
      );
    }

    return NextResponse.json(
      {
        message: "Meeting request submitted successfully.",
        id: responseData?.id,
        status: responseData?.status,
      },
      { status: 201 }
    );
  } catch (error: any) {
    const errMsg = error?.message || String(error);
    console.error("[API Route] Failed to connect to FastAPI:", errMsg);
    return NextResponse.json(
      {
        error: "proxy_connection_error",
        message: `Could not connect to backend: ${errMsg}`,
        detail: `Could not connect to backend: ${errMsg}`,
      },
      { status: 502 }
    );
  }
}