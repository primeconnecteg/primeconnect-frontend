import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL || "https://primeconnect-api.vercel.app";
  const targetUrl = `${backendUrl.replace(/\/$/, "")}/api/v1/meeting-requests`;

  let rawBodyText = "";
  try {
    rawBodyText = await request.text();
  } catch (err) {
    console.error("[Next.js Proxy Route] Failed to read incoming request body:", err);
  }

  console.log(`[Next.js Proxy Route] Forwarding POST to backend: ${targetUrl}`);
  console.log(`[Next.js Proxy Route] Request Payload:`, rawBodyText);

  try {
    const backendResponse = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: rawBodyText,
    });

    const status = backendResponse.status;
    const responseData = await backendResponse.json().catch(() => null);

    console.log(`[Next.js Proxy Route] Backend Response Status: ${status}`);
    console.log(`[Next.js Proxy Route] Backend Response Body:`, responseData);

    // Return exact backend status code and exact JSON payload to frontend caller
    return NextResponse.json(
      responseData || { error: "empty_response", message: "Empty backend response" },
      { status }
    );
  } catch (error: any) {
    const errorMsg = error?.message || String(error);
    console.error("[Next.js Proxy Route] Error communicating with FastAPI backend:", errorMsg);
    return NextResponse.json(
      {
        error: "proxy_connection_error",
        message: `Failed to connect to FastAPI backend: ${errorMsg}`,
        detail: `Failed to connect to FastAPI backend: ${errorMsg}`
      },
      { status: 502 }
    );
  }
}