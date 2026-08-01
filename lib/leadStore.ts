export interface LeadRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  type: "Discovery Call" | "Contact Form";
  status: "New" | "Contacted" | "Archived";
  message?: string;
  createdAt: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export async function loginAdmin(username: string, password: string): Promise<string | null> {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.access_token;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
}

export async function getDashboardStats(token: string) {
  try {
    const res = await fetch(`${API_URL}/admin/dashboard`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to fetch stats");
    return await res.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return {
      total_messages: 0,
      unread_messages: 0,
      total_meeting_requests: 0,
      pending_meeting_requests: 0
    };
  }
}

export async function getLeads(token: string): Promise<LeadRequest[]> {
  try {
    const [messagesRes, meetingsRes] = await Promise.all([
      fetch(`${API_URL}/admin/messages?limit=100`, { headers: { Authorization: `Bearer ${token}` } }),
      fetch(`${API_URL}/admin/meeting-requests?limit=100`, { headers: { Authorization: `Bearer ${token}` } })
    ]);

    const messages = messagesRes.ok ? await messagesRes.json() : [];
    // The backend meeting requests endpoint returns { items: [...], total, page, size }
    const meetingsData = meetingsRes.ok ? await meetingsRes.json() : { items: [] };
    const meetings = meetingsData.items || [];

    const formattedMessages: LeadRequest[] = messages.map((m: any) => ({
      id: m.id,
      name: m.name,
      email: m.email,
      company: m.company || "Not specified",
      type: "Contact Form",
      status: m.status,
      message: m.message,
      createdAt: m.created_at,
    }));

    const formattedMeetings: LeadRequest[] = meetings.map((m: any) => ({
      id: m.id,
      name: m.full_name,
      email: m.business_email,
      company: m.company_name || "Not specified",
      type: "Discovery Call",
      status: m.status,
      message: `Requested date: ${m.meeting_date}${m.comment ? `\nComment: ${m.comment}` : ''}`,
      createdAt: m.created_at,
    }));

    // Combine and sort by date descending
    const combined = [...formattedMessages, ...formattedMeetings].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return combined;
  } catch (error) {
    console.error("Error fetching leads:", error);
    return [];
  }
}

export async function createMeetingRequest(data: { name: string; email: string; company: string; date: string; comment?: string }): Promise<boolean> {
  try {
    const payload = {
      full_name: data.name,
      business_email: data.email,
      company_name: data.company || "Not specified",
      meeting_date: data.date, 
      comment: data.comment,
    };
    
    const res = await fetch(`${API_URL}/meeting-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    
    return res.ok;
  } catch (error) {
    console.error("Error creating meeting request:", error);
    return false;
  }
}

export async function updateLeadStatus(id: string, type: "Discovery Call" | "Contact Form", status: string, token: string): Promise<boolean> {
  try {
    const endpoint = type === "Contact Form" 
      ? `${API_URL}/admin/messages/${id}/status`
      : `${API_URL}/admin/meeting-requests/${id}`;
    
    const payload = type === "Contact Form" 
      ? { status } 
      : { status }; // For meeting-request, it expects MeetingRequestUpdate which is just {status: ...}

    const res = await fetch(endpoint, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (error) {
    console.error("Error updating lead status:", error);
    return false;
  }
}

export async function deleteLead(id: string, type: "Discovery Call" | "Contact Form", token: string): Promise<boolean> {
  try {
    const endpoint = type === "Contact Form" 
      ? `${API_URL}/admin/messages/${id}`
      : `${API_URL}/admin/meeting-requests/${id}`;

    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.ok || res.status === 204;
  } catch (error) {
    console.error("Error deleting lead:", error);
    return false;
  }
}
