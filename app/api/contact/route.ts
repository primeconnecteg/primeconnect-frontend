import { POST as contactHandler } from "../v1/contact/route";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return contactHandler(request);
}
