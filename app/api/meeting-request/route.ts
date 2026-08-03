import { POST as meetingRequestHandler } from "../v1/meeting-requests/route";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return meetingRequestHandler(request);
}
