import { randomUUID } from "crypto";
import { mkdirSync } from "fs";
import path from "path";
import { DatabaseSync } from "node:sqlite";

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

const DATABASE_DIR = path.join(process.cwd(), "data");
const DATABASE_PATH = path.join(DATABASE_DIR, "meeting-requests.sqlite");

let database: DatabaseSync | null = null;

function getDatabase(): DatabaseSync {
  if (database) {
    return database;
  }

  mkdirSync(DATABASE_DIR, { recursive: true });
  database = new DatabaseSync(DATABASE_PATH);
  database.exec(`
    CREATE TABLE IF NOT EXISTS meeting_requests (
      id TEXT PRIMARY KEY,
      full_name TEXT NOT NULL,
      company_name TEXT NOT NULL,
      business_email TEXT NOT NULL,
      meeting_date TEXT NOT NULL,
      comment TEXT,
      status TEXT NOT NULL DEFAULT 'Pending',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE UNIQUE INDEX IF NOT EXISTS meeting_requests_pending_duplicate
    ON meeting_requests (business_email, meeting_date)
    WHERE status = 'Pending';
  `);

  return database;
}

export interface CreateMeetingRequestInput {
  full_name: string;
  company_name: string;
  business_email: string;
  meeting_date: string;
  comment: string;
}

export function hasPendingDuplicate(businessEmail: string, meetingDate: string): boolean {
  const db = getDatabase();
  const statement = db.prepare(
    `
      SELECT 1
      FROM meeting_requests
      WHERE business_email = ? AND meeting_date = ? AND status = 'Pending'
      LIMIT 1
    `
  );

  return Boolean(statement.get(businessEmail, meetingDate));
}

export function createMeetingRequest(input: CreateMeetingRequestInput): MeetingRequestRecord {
  const db = getDatabase();
  const statement = db.prepare(
    `
      INSERT INTO meeting_requests (
        id,
        full_name,
        company_name,
        business_email,
        meeting_date,
        comment,
        status,
        created_at
      ) VALUES (?, ?, ?, ?, ?, ?, 'Pending', ?)
    `
  );

  const now = new Date().toISOString();
  const id = randomUUID();
  statement.run(
    id,
    input.full_name,
    input.company_name,
    input.business_email,
    input.meeting_date,
    input.comment,
    now
  );

  return {
    id,
    ...input,
    status: "Pending",
    created_at: now,
  };
}