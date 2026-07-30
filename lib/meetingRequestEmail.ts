import { formatSelectedDate } from "@/lib/meetingRequest";

export interface MeetingRequestRecord {
  id: string;
  full_name: string;
  company_name: string;
  business_email: string;
  meeting_date: string;
  comment: string;
  status: string;
  created_at: string;
}

interface EmailMessage {
  to: string;
  subject: string;
  text: string;
  html: string;
}

function getInternalRecipient(): string {
  return process.env.DISCOVERY_CALL_NOTIFICATION_EMAIL || "info@primeconnecteg.com";
}

function getResendFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL || "Prime Connect EG <onboarding@resend.dev>";
}

async function sendEmail(message: EmailMessage): Promise<void> {
    const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: getResendFromAddress(),
      to: [message.to],
      subject: message.subject,
      text: message.text,
      html: message.html,
    }),
  });

  if (!response.ok) {
  const error = await response.json().catch(async () => ({
    message: await response.text(),
  }));

  console.error("Resend response:", error);

  throw new Error(
    `Email provider responded with ${response.status}: ${JSON.stringify(error)}`
  );
}
}

function buildInternalEmail(request: MeetingRequestRecord): EmailMessage {
  const displayDate = formatSelectedDate(new Date(`${request.meeting_date}T00:00:00`));
  const comment = request.comment || "No comment provided.";

  return {
    to: getInternalRecipient(),
    subject: "New Discovery Call Request",
    text: [
      "A new discovery call request has been submitted.",
      `Name: ${request.full_name}`,
      `Company: ${request.company_name}`,
      `Email: ${request.business_email}`,
      `Meeting Date: ${displayDate}`,
      `Comment: ${comment}`,
    ].join("\n"),
    html: `
      <p>A new discovery call request has been submitted.</p>
      <p><strong>Name:</strong> ${request.full_name}</p>
      <p><strong>Company:</strong> ${request.company_name}</p>
      <p><strong>Email:</strong> ${request.business_email}</p>
      <p><strong>Meeting Date:</strong> ${displayDate}</p>
      <p><strong>Comment:</strong><br />${comment}</p>
    `,
  };
}

function buildCustomerEmail(request: MeetingRequestRecord): EmailMessage {
  const displayDate = formatSelectedDate(new Date(`${request.meeting_date}T00:00:00`));

  return {
    to: request.business_email,
    subject: "We've Received Your Discovery Call Request",
    text: [
      `Hi ${request.full_name},`,
      "",
      "Thank you for requesting a discovery call.",
      `Requested Date: ${displayDate}`,
      "",
      "Our team will review your request and contact you shortly.",
    ].join("\n"),
    html: `
      <p>Hi ${request.full_name},</p>
      <p>Thank you for requesting a discovery call.</p>
      <p><strong>Requested Date:</strong> ${displayDate}</p>
      <p>Our team will review your request and contact you shortly.</p>
    `,
  };
}

export async function sendDiscoveryCallNotifications(request: MeetingRequestRecord): Promise<void> {
  const messages = [buildInternalEmail(request), buildCustomerEmail(request)];
  const results = await Promise.allSettled(messages.map((message) => sendEmail(message)));

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      const recipient = messages[index]?.to ?? "unknown";
      console.error(`Failed to send discovery call email to ${recipient}:`, result.reason);
    }
  });
}