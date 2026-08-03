export interface MeetingRequestFormValues {
  fullName: string;
  companyName: string;
  businessEmail: string;
  comment: string;
}

export interface MeetingRequestFieldErrors {
  fullName?: string;
  companyName?: string;
  businessEmail?: string;
  comment?: string;
  meetingDate?: string;
  server?: string;
}

export interface MeetingRequestApiPayload {
  full_name: string;
  company_name: string;
  business_email: string;
  meeting_date: string;
  comment: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function startOfToday(referenceDate = new Date()): Date {
  const date = new Date(referenceDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function isValidBusinessEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}

export function formatSelectedDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatMeetingDateForApi(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function parseMeetingDateFromApi(meetingDate: string): Date | undefined {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meetingDate)) {
    return undefined;
  }

  const [year, month, day] = meetingDate.split("-").map(Number);
  const parsedDate = new Date(year, month - 1, day);

  if (
    parsedDate.getFullYear() !== year ||
    parsedDate.getMonth() !== month - 1 ||
    parsedDate.getDate() !== day
  ) {
    return undefined;
  }

  return parsedDate;
}

export function validateMeetingRequestForm(values: {
  fullName: string;
  companyName: string;
  businessEmail: string;
  comment: string;
  meetingDate?: Date;
}): MeetingRequestFieldErrors {
  const errors: MeetingRequestFieldErrors = {};
  const trimmedFullName = values.fullName.trim();
  const trimmedCompanyName = values.companyName.trim();
  const trimmedBusinessEmail = values.businessEmail.trim();
  const trimmedComment = values.comment.trim();

  if (trimmedFullName.length < 3) {
    errors.fullName = "Full Name must be at least 3 characters long.";
  }

  if (!trimmedCompanyName) {
    errors.companyName = "Company Name is required.";
  }

  if (!trimmedBusinessEmail) {
    errors.businessEmail = "Business Email is required.";
  } else if (!isValidBusinessEmail(trimmedBusinessEmail)) {
    errors.businessEmail = "Please enter a valid business email address.";
  }

  if (trimmedComment.length > 5000) {
    errors.comment = "Comment must be 5,000 characters or fewer."
  }

  if (!values.meetingDate) {
    errors.meetingDate = "Please select a date.";
  } else if (values.meetingDate < startOfToday()) {
    errors.meetingDate = "Please select today or a future date.";
  }

  return errors;
}

export function toMeetingRequestApiPayload(values: {
  fullName: string;
  companyName: string;
  businessEmail: string;
  comment: string;
  meetingDate: Date;
}): MeetingRequestApiPayload {
  return {
    full_name: values.fullName.trim(),
    company_name: values.companyName.trim(),
    business_email: values.businessEmail.trim().toLowerCase(),
    meeting_date: formatMeetingDateForApi(values.meetingDate),
    comment: values.comment.trim(),
  };
}

export function normalizeMeetingRequestApiPayload(body: unknown): {
  values: {
    fullName: string;
    companyName: string;
    businessEmail: string;
    comment: string;
    meetingDate?: Date;
  };
  errors: MeetingRequestFieldErrors;
} {
  const payload = (body ?? {}) as Record<string, any>;
  
  const rawFullName = payload.full_name ?? payload.fullName ?? payload.name ?? "";
  const rawCompanyName = payload.company_name ?? payload.companyName ?? payload.company ?? "";
  const rawBusinessEmail = payload.business_email ?? payload.businessEmail ?? payload.email ?? "";
  const rawComment = payload.comment ?? payload.comments ?? payload.message ?? "";
  const rawMeetingDate = payload.meeting_date ?? payload.meetingDate ?? payload.preferredDate ?? payload.date;

  let meetingDate: Date | undefined = undefined;
  if (typeof rawMeetingDate === "string" && rawMeetingDate.trim()) {
    const cleanDateStr = rawMeetingDate.split("T")[0].trim();
    meetingDate = parseMeetingDateFromApi(cleanDateStr);
    if (!meetingDate) {
      const parsedDirect = new Date(rawMeetingDate);
      if (!isNaN(parsedDirect.getTime())) {
        meetingDate = startOfToday(parsedDirect);
      }
    }
  } else if (rawMeetingDate instanceof Date) {
    meetingDate = startOfToday(rawMeetingDate);
  }

  return {
    values: {
      fullName: String(rawFullName),
      companyName: String(rawCompanyName),
      businessEmail: String(rawBusinessEmail),
      comment: String(rawComment),
      meetingDate,
    },
    errors: {
      ...(rawMeetingDate && !meetingDate
        ? { meetingDate: "Please provide a valid meeting date (e.g. YYYY-MM-DD)." }
        : {}),
    },
  };
}