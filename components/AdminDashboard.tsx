"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  getStoredLeads,
  updateLeadStatus,
  deleteLead,
  LeadRequest,
} from "@/lib/leadStore";
import {
  Search,
  Download,
  Calendar,
  Mail,
  Phone,
  Building,
  CheckCircle2,
  Trash2,
  Eye,
  LogOut,
  Sparkles,
  Target,
  Inbox,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  CheckSquare,
  Square,
  Bell,
  RotateCcw,
} from "lucide-react";

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [leads, setLeads] = useState<LeadRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [selectedLead, setSelectedLead] = useState<LeadRequest | null>(null);
  const [isLiveConnected, setIsLiveConnected] = useState(false);

  // High Volume & UX Enhancements State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [newLeadCount, setNewLeadCount] = useState(0);

  useEffect(() => {
    // Initial fetch from stored leads
    setLeads(getStoredLeads());

    // Connect to Backend Real-Time SSE Stream
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    const eventSource = new EventSource(`${apiUrl}/api/v1/contact/stream`);

    eventSource.onopen = () => {
      setIsLiveConnected(true);
    };

    eventSource.onerror = () => {
      setIsLiveConnected(false);
    };

    eventSource.addEventListener("new_lead", (event) => {
      try {
        const payload = JSON.parse(event.data);
        const newLead: LeadRequest = payload.data;
        if (newLead && newLead.id) {
          setLeads((prev) => [
            newLead,
            ...prev.filter((item) => item.id !== newLead.id),
          ]);
          setNewLeadCount((count) => count + 1);
        }
      } catch (err) {
        console.error("Error parsing SSE real-time event:", err);
      }
    });

    return () => {
      eventSource.close();
    };
  }, []);

  const handleStatusChange = (id: string, newStatus: LeadRequest["status"]) => {
    const updated = updateLeadStatus(id, newStatus);
    setLeads(updated);
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this request entry?")) {
      const updated = deleteLead(id);
      setLeads(updated);
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead(null);
      }
    }
  };

  // Reset pagination to page 1 whenever filters or search query changes
  useEffect(() => {
    setCurrentPage(1);
    setSelectedIds([]);
  }, [searchQuery, statusFilter, typeFilter, sortOrder]);

  // Filtered Leads Calculation
  const filteredLeads = useMemo(() => {
    return leads.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ? true : item.status === statusFilter;
      const matchesType =
        typeFilter === "All" ? true : item.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [leads, searchQuery, statusFilter, typeFilter]);

  // Sorted Leads Calculation
  const sortedLeads = useMemo(() => {
    return [...filteredLeads].sort((a, b) => {
      const timeA = new Date(a.createdAt).getTime();
      const timeB = new Date(b.createdAt).getTime();
      return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
    });
  }, [filteredLeads, sortOrder]);

  // Pagination Calculation
  const totalPages = Math.max(1, Math.ceil(sortedLeads.length / itemsPerPage));
  const paginatedLeads = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedLeads.slice(start, start + itemsPerPage);
  }, [sortedLeads, currentPage, itemsPerPage]);

  // Multi-select actions
  const toggleSelectAll = () => {
    if (selectedIds.length === paginatedLeads.length && paginatedLeads.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedLeads.map((item) => item.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleBulkStatusChange = (newStatus: LeadRequest["status"]) => {
    let currentLeads = leads;
    selectedIds.forEach((id) => {
      currentLeads = updateLeadStatus(id, newStatus);
    });
    setLeads(currentLeads);
    setSelectedIds([]);
  };

  const handleBulkDelete = () => {
    if (
      confirm(
        `Are you sure you want to delete ${selectedIds.length} selected request(s)?`
      )
    ) {
      let currentLeads = leads;
      selectedIds.forEach((id) => {
        currentLeads = deleteLead(id);
      });
      setLeads(currentLeads);
      setSelectedIds([]);
    }
  };

  // Statistics
  const stats = useMemo(() => {
    const total = leads.length;
    const unread = leads.filter((l) => l.status === "New").length;
    const calls = leads.filter((l) => l.type === "Discovery Call").length;
    const forms = leads.filter((l) => l.type === "Contact Form").length;
    return { total, unread, calls, forms };
  }, [leads]);

  // Export to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = [
      "ID",
      "Type",
      "Status",
      "Name",
      "Email",
      "Company",
      "Phone",
      "Message",
      "Date",
    ];
    const rows = leads.map((l) => [
      l.id,
      l.type,
      l.status,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.email.replace(/"/g, '""')}"`,
      `"${l.company.replace(/"/g, '""')}"`,
      `"${(l.phone || "").replace(/"/g, '""')}"`,
      `"${(l.message || "").replace(/"/g, '""')}"`,
      `"${new Date(l.createdAt).toLocaleString()}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `prime_connect_leads_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white selection:bg-[#F4821F] selection:text-[#0a192f]">
      {/* Top Admin Header */}
      <header className="border-b border-white/10 bg-[#0a192f]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Prime Connect EG" className="h-12 w-auto object-contain" />
            <span className="hidden sm:inline-block px-3 py-1 bg-[#F4821F]/10 border border-[#F4821F]/30 text-[#F4821F] rounded-full text-xs font-mono font-semibold">
              Admin Portal
            </span>
            <span
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                isLiveConnected
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-amber-500/10 border-amber-500/30 text-amber-300"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isLiveConnected ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span>{isLiveConnected ? "Real-Time Sync" : "Syncing..."}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#F4821F]" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl text-sm font-semibold transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-white">
            Lead Requests <span className="text-[#F4821F]">Dashboard</span>
          </h1>
          <p className="text-white/60 text-sm mt-1">
            Manage incoming Discovery Calls and Contact Form submissions in real-time.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-white/50 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Total Requests</span>
              <Inbox className="w-5 h-5 text-white/40" />
            </div>
            <p className="text-3xl font-black text-white">{stats.total}</p>
          </div>

          <div className="bg-[#F4821F]/10 border border-[#F4821F]/30 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-[#F4821F] mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">New / Unread</span>
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-3xl font-black text-[#F4821F]">{stats.unread}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-white/50 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Discovery Calls</span>
              <Target className="w-5 h-5 text-orange-400" />
            </div>
            <p className="text-3xl font-black text-white">{stats.calls}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-white/50 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Contact Forms</span>
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-3xl font-black text-white">{stats.forms}</p>
          </div>
        </div>

        {/* New Lead Real-Time Notification Banner */}
        {newLeadCount > 0 && (
          <div className="mb-6 p-4 bg-[#F4821F]/20 border border-[#F4821F]/40 rounded-2xl flex items-center justify-between backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F4821F]/20 flex items-center justify-center text-[#F4821F]">
                <Bell className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  {newLeadCount} new lead{newLeadCount > 1 ? "s" : ""} received in real-time!
                </p>
                <p className="text-xs text-white/60">
                  New submissions have been automatically loaded into your stream.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setCurrentPage(1);
                setSortOrder("newest");
                setNewLeadCount(0);
              }}
              className="px-4 py-2 bg-[#F4821F] text-[#0a192f] font-bold text-xs rounded-xl hover:bg-orange-400 transition-all cursor-pointer shadow-md"
            >
              View Latest
            </button>
          </div>
        )}

        {/* Bulk Actions Toolbar */}
        {selectedIds.length > 0 && (
          <div className="mb-6 p-4 bg-[#0f2b48] border border-white/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-[#F4821F]" />
              <span className="text-sm font-bold text-white">
                {selectedIds.length} item{selectedIds.length > 1 ? "s" : ""} selected
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => handleBulkStatusChange("Contacted")}
                className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-bold hover:bg-emerald-500/30 transition-all cursor-pointer"
              >
                Mark as Contacted
              </button>
              <button
                onClick={() => handleBulkStatusChange("Archived")}
                className="px-3 py-1.5 bg-white/10 text-white/70 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/20 transition-all cursor-pointer"
              >
                Mark as Archived
              </button>
              <button
                onClick={handleBulkDelete}
                className="px-3 py-1.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-xs font-bold hover:bg-red-500/30 transition-all cursor-pointer"
              >
                Delete Selected
              </button>
            </div>
          </div>
        )}

        {/* Filters & Search Controls */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Search by Name, Email, or Company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 bg-white/10 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4821F] text-sm"
            />
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Filters & Controls */}
          <div className="flex items-center gap-3 w-full lg:w-auto flex-wrap justify-between lg:justify-end">
            <div className="flex items-center gap-1.5 bg-white/10 rounded-xl p-1 text-xs">
              <Filter className="w-3.5 h-3.5 text-white/40 ml-2" />
              {["All", "New", "Contacted", "Archived"].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    statusFilter === st
                      ? "bg-[#F4821F] text-[#0a192f] font-bold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Type Select */}
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-3 py-2 bg-white/10 border border-white/10 rounded-xl text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#F4821F] cursor-pointer"
              >
                <option value="All" className="bg-[#0a192f]">All Types</option>
                <option value="Discovery Call" className="bg-[#0a192f]">Discovery Call</option>
                <option value="Contact Form" className="bg-[#0a192f]">Contact Form</option>
              </select>

              {/* Sort Order */}
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                className="px-3 py-2 bg-white/10 border border-white/10 rounded-xl text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#F4821F] cursor-pointer"
              >
                <option value="newest" className="bg-[#0a192f]">Newest First</option>
                <option value="oldest" className="bg-[#0a192f]">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-white/80">
              <thead className="bg-white/5 text-xs uppercase font-bold text-white/50 border-b border-white/10">
                <tr>
                  <th className="px-4 py-4 w-12 text-center">
                    <button
                      onClick={toggleSelectAll}
                      className="p-1 hover:text-white transition-colors cursor-pointer"
                      title="Select All on Page"
                    >
                      {selectedIds.length > 0 && selectedIds.length === paginatedLeads.length ? (
                        <CheckSquare className="w-4 h-4 text-[#F4821F]" />
                      ) : (
                        <Square className="w-4 h-4 text-white/40" />
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Client Name</th>
                  <th className="px-6 py-4">Company</th>
                  <th className="px-6 py-4">Contact Info</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {paginatedLeads.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-white/40">
                      No matching lead requests found.
                    </td>
                  </tr>
                ) : (
                  paginatedLeads.map((item) => {
                    const isNew = item.status === "New";
                    const isCall = item.type === "Discovery Call";
                    const isSelected = selectedIds.includes(item.id);
                    return (
                      <tr
                        key={item.id}
                        className={`hover:bg-white/5 transition-colors ${
                          isSelected ? "bg-[#F4821F]/10" : ""
                        }`}
                      >
                        <td className="px-4 py-4 text-center">
                          <button
                            onClick={() => toggleSelectOne(item.id)}
                            className="p-1 hover:text-white transition-colors cursor-pointer"
                          >
                            {isSelected ? (
                              <CheckSquare className="w-4 h-4 text-[#F4821F]" />
                            ) : (
                              <Square className="w-4 h-4 text-white/30" />
                            )}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              isCall
                                ? "bg-orange-500/10 text-[#F4821F] border border-[#F4821F]/30"
                                : "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                            }`}
                          >
                            {item.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-bold text-white">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 text-white/70">
                          {item.company}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-white/80">{item.email}</span>
                            {item.phone && (
                              <span className="text-xs text-white/40">
                                {item.phone}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              isNew
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                                : item.status === "Contacted"
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                                : "bg-white/10 text-white/40"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-white/40">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedLead(item)}
                              title="View Details"
                              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all cursor-pointer"
                            >
                              <Eye className="w-4 h-4" />
                            </button>

                            {isNew ? (
                              <button
                                onClick={() =>
                                  handleStatusChange(item.id, "Contacted")
                                }
                                title="Mark as Contacted"
                                className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 rounded-lg transition-all cursor-pointer"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  handleStatusChange(item.id, "New")
                                }
                                title="Mark as New"
                                className="p-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg transition-all cursor-pointer"
                              >
                                <Sparkles className="w-4 h-4" />
                              </button>
                            )}

                            <button
                              onClick={() => handleDelete(item.id)}
                              title="Delete Entry"
                              className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {sortedLeads.length > 0 && (
            <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
              <div className="flex items-center gap-4">
                <span>
                  Showing{" "}
                  <strong className="text-white">
                    {(currentPage - 1) * itemsPerPage + 1}
                  </strong>{" "}
                  to{" "}
                  <strong className="text-white">
                    {Math.min(currentPage * itemsPerPage, sortedLeads.length)}
                  </strong>{" "}
                  of <strong className="text-white">{sortedLeads.length}</strong> entries
                </span>

                <div className="flex items-center gap-2">
                  <span>Per page:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="px-2 py-1 bg-white/10 border border-white/10 rounded-lg text-white font-semibold focus:outline-none cursor-pointer"
                  >
                    <option value={10} className="bg-[#0a192f]">10</option>
                    <option value={25} className="bg-[#0a192f]">25</option>
                    <option value={50} className="bg-[#0a192f]">50</option>
                    <option value={100} className="bg-[#0a192f]">100</option>
                  </select>
                </div>
              </div>

              {/* Page Buttons */}
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                  title="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="px-3 py-1 font-bold text-white">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                  title="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-[#0a192f]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0f2b48] border border-white/10 rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative text-white">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#F4821F]/10 border border-[#F4821F]/30 text-[#F4821F] rounded-full text-xs font-bold uppercase">
                {selectedLead.type}
              </span>
              <span className="text-xs text-white/40">
                Submitted {new Date(selectedLead.createdAt).toLocaleString()}
              </span>
            </div>

            <h2 className="text-2xl font-black text-white mb-1">
              {selectedLead.name}
            </h2>
            <p className="text-[#F4821F] font-semibold text-sm mb-6">
              {selectedLead.company}
            </p>

            <div className="space-y-3 text-sm bg-white/5 rounded-2xl p-4 border border-white/5 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/40" />
                <a
                  href={`mailto:${selectedLead.email}`}
                  className="text-white hover:underline"
                >
                  {selectedLead.email}
                </a>
              </div>
              {selectedLead.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/40" />
                  <a
                    href={`tel:${selectedLead.phone}`}
                    className="text-white hover:underline"
                  >
                    {selectedLead.phone}
                  </a>
                </div>
              )}
            </div>

            {selectedLead.message && (
              <div className="mb-6">
                <p className="text-xs font-bold uppercase text-white/40 mb-2">
                  Message / Details
                </p>
                <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-white/80 text-sm leading-relaxed max-h-48 overflow-y-auto">
                  {selectedLead.message}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/50">Status:</span>
                <select
                  value={selectedLead.status}
                  onChange={(e) =>
                    handleStatusChange(
                      selectedLead.id,
                      e.target.value as LeadRequest["status"]
                    )
                  }
                  className="px-3 py-1 bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-white focus:outline-none"
                >
                  <option value="New" className="bg-[#0a192f]">New</option>
                  <option value="Contacted" className="bg-[#0a192f]">Contacted</option>
                  <option value="Archived" className="bg-[#0a192f]">Archived</option>
                </select>
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                className="px-6 py-2 bg-[#F4821F] text-[#0a192f] font-bold text-sm rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
