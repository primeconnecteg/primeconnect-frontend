import { NextResponse } from "next/server";
import {
  formatMeetingDateForApi,
  normalizeMeetingRequestApiPayload,
  startOfToday,
  validateMeetingRequestForm,
} from "@/lib/meetingRequest";

import { sendDiscoveryCallNotifications } from "@/lib/meetingRequestEmail";

import { randomUUID } from "crypto";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: "Invalid request payload.",
      },
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
        errors: {
          meetingDate: "Please select today or a future date.",
        },
      },
      { status: 400 }
    );
  }

  const normalizedEmail = normalized.values.businessEmail.trim().toLowerCase();
  const apiMeetingDate = formatMeetingDateForApi(meetingDate);

  
  const requestRecord = {
  id: randomUUID(),
  full_name: normalized.values.fullName.trim(),
  company_name: normalized.values.companyName.trim(),
  business_email: normalizedEmail,
  meeting_date: apiMeetingDate,
  comment: normalized.values.comment.trim(),
  status: "Pending",
  created_at: new Date().toISOString(),
};

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
}