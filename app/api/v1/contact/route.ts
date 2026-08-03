import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  console.log("[API Route /contact] Received body:", JSON.stringify(body));

  const name = String(body?.name || body?.fullName || body?.full_name || "").trim();
  const email = String(body?.email || body?.businessEmail || body?.business_email || "").trim().toLowerCase();
  const company = body?.company || body?.companyName || body?.company_name ? String(body.company || body.companyName || body.company_name).trim() : null;
  const message = String(body?.message || body?.comment || body?.comments || "").trim();

  // Basic field validation
  const errors: Record<string, string> = {};
  if (!name || name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!email || !email.includes("@") || !email.includes(".")) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        error: "Please correct the highlighted fields and try again.",
        errors,
      },
      { status: 400 }
    );
  }

  // Target FastAPI backend URL
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.API_URL ||
    (process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://primeconnect-api.vercel.app");

  const baseClean = apiUrl.replace(/\/$/, "");
  const targetUrl = baseClean.endsWith("/api/v1")
    ? `${baseClean}/contact`
    : `${baseClean}/api/v1/contact`;

  console.log(`[API Route /contact] Forwarding to FastAPI: ${targetUrl}`);

  const backendPayload = {
    name,
    company: company || undefined,
    email,
    message,
  };

  try {
    const fastApiResponse = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(backendPayload),
    });

    const responseData = await fastApiResponse.json().catch(() => null);

    console.log(`[API Route /contact] FastAPI Status: ${fastApiResponse.status}`);
    console.log("[API Route /contact] FastAPI Response:", JSON.stringify(responseData));

    if (!fastApiResponse.ok) {
      return NextResponse.json(
        responseData || { error: "Backend error", detail: "Failed to submit contact request." },
        { status: fastApiResponse.status }
      );
    }

    return NextResponse.json(
      {
        message: "Contact request submitted successfully.",
        data: responseData,
      },
      { status: 201 }
    );
  } catch (error: any) {
    const errMsg = error?.message || String(error);
    console.error("[API Route /contact] Connection Error:", errMsg);
    return NextResponse.json(
      {
        error: "proxy_connection_error",
        message: `Could not connect to backend: ${errMsg}`,
      },
      { status: 502 }
    );
  }
}
