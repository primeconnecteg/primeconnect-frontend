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

const STORAGE_KEY = "prime_connect_leads_v1";

const INITIAL_SAMPLE_LEADS: LeadRequest[] = [
  {
    id: "lead-101",
    name: "John Smith",
    email: "john.smith@apexglobal.com",
    company: "Apex Global Solutions",
    phone: "+1 415 555 0192",
    type: "Contact Form",
    status: "New",
    message:
      "We are looking to outsource 15-20 customer support seats for our US East Coast operations. Would love to review pricing and SLA benchmarks.",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(), // 4 hrs ago
  },
  {
    id: "lead-102",
    name: "Sarah Miller",
    email: "s.miller@talentfirst.co.uk",
    company: "TalentFirst UK",
    phone: "+44 20 7946 0912",
    type: "Discovery Call",
    status: "New",
    message: "Requested discovery call with Yousef Mattar regarding BPO client acquisition partnership.",
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(), // 18 hrs ago
  },
  {
    id: "lead-103",
    name: "Omar Badawi",
    email: "o.badawi@allstatecareers.com",
    company: "Allstate Careers",
    phone: "+20 10 0000 9999",
    type: "Discovery Call",
    status: "Contacted",
    message: "Active infrastructure partnership review & CRM integration alignment.",
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString(), // 3 days ago
  },
];

export function getStoredLeads(): LeadRequest[] {
  if (typeof window === "undefined") return INITIAL_SAMPLE_LEADS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_LEADS));
      return INITIAL_SAMPLE_LEADS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading stored leads:", err);
    return INITIAL_SAMPLE_LEADS;
  }
}

export function saveLead(lead: Omit<LeadRequest, "id" | "createdAt" | "status">): LeadRequest {
  const current = getStoredLeads();
  const newLead: LeadRequest = {
    ...lead,
    id: "lead-" + Date.now(),
    status: "New",
    createdAt: new Date().toISOString(),
  };
  const updated = [newLead, ...current];
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return newLead;
}

export function updateLeadStatus(id: string, status: LeadRequest["status"]): LeadRequest[] {
  const current = getStoredLeads();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function deleteLead(id: string): LeadRequest[] {
  const current = getStoredLeads();
  const updated = current.filter((item) => item.id !== id);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}
