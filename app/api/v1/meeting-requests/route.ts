import { NextResponse } from "next/server";
import {
  formatMeetingDateForApi,
  normalizeMeetingRequestApiPayload,
  startOfToday,
  validateMeetingRequestForm,
} from "@/lib/meetingRequest";
import { sendDiscoveryCallNotifications } from "@/lib/meetingRequestEmail";

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

  const normalized = normalizeMeetingRequestApiPayload(body);
  const validationErrors = validateMeetingRequestForm(normalized.values);
  const combinedErrors = { ...normalized.errors, ...validationErrors };

  if (Object.keys(combinedErrors).length > 0) {
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

  // Send request to FastAPI backend
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  
  try {
    const fastApiResponse = await fetch(`${apiUrl}/api/v1/meeting-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: normalized.values.fullName.trim(),
        company_name: normalized.values.companyName.trim(),
        business_email: normalizedEmail,
        meeting_date: apiMeetingDate,
        comment: normalized.values.comment.trim(),
      }),
    });

    if (fastApiResponse.status === 409) {
      return NextResponse.json(
        {
          error: "A pending request already exists for this email and date.",
          errors: {
            businessEmail: "A pending request already exists for this email and date.",
            meetingDate: "Please choose another date or wait for the existing request to be processed.",
          },
        },
        { status: 409 }
      );
    }

    if (!fastApiResponse.ok) {
      console.error("FastAPI Error:", await fastApiResponse.text().catch(() => ""));
      return NextResponse.json(
        { error: "Failed to submit request to backend." },
        { status: 400 }
      );
    }

    const requestRecord = await fastApiResponse.json();

    // Send confirmation email
    await sendDiscoveryCallNotifications(requestRecord).catch((error) => {
      console.error("Discovery call email dispatch failed:", error);
    });

    return NextResponse.json(
      {
        message: "Meeting request submitted successfully.",
        request: requestRecord,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Failed to connect to FastAPI:", error);
    return NextResponse.json(
      { error: "Could not connect to backend server." },
      { status: 500 }
    );
  }
}