import React, { useState, useEffect } from "react";
import {
  Settings,
  Database,
  Search,
  RefreshCw,
  Download,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  X,
  FileSpreadsheet,
  AlertCircle,
  Filter,
  CheckCircle2,
  Lock,
  ArrowRight,
  UserCheck,
  LogOut,
  PlusCircle,
  Unlink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  getSubmissions,
  getScriptUrl,
  setScriptUrl,
  syncPendingQueue,
  exportToCSV,
  saveSubmissions,
  syncRecordToSheets,
  DEFAULT_SCRIPT_URL,
  APPS_SCRIPT_BLUEPRINT
} from "../utils/submissionStore";
import {
  initGoogleAuth,
  signInWithGoogle,
  signOutGoogle,
  getLinkedSheetId,
  getLinkedSheetUrl,
  setLinkedSheet,
  findExistingSpreadsheet,
  createGoogleSpreadsheet,
  syncRecordToGoogleSheetDirect
} from "../utils/googleSheets";
import { SubmissionRecord } from "../types";
import { User } from "firebase/auth";

export const SheetsAdminPortal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(() => localStorage.getItem("sf_admin_open") === "true");
  const [activeTab, setActiveTab] = useState<"submissions" | "config">(() => {
    return (localStorage.getItem("sf_admin_active_tab") as "submissions" | "config") || "submissions";
  });
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [scriptUrl, setScriptUrlState] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "Counseling" | "Brochure" | "Scholarship">("all");
  const [syncFilter, setSyncFilter] = useState<"all" | "success" | "pending">("all");
  
  // Security Authentication states
  const [isAuthorized, setIsAuthorized] = useState(() => localStorage.getItem("sf_admin_authorized") === "true");
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Custom persistent credentials stored in localStorage
  const [adminId, setAdminId] = useState(() => localStorage.getItem("sf_admin_id") || "Admin");
  const [adminPassword, setAdminPassword] = useState(() => localStorage.getItem("sf_admin_password") || "Admin2026");
  const [newAdminId, setNewAdminId] = useState(adminId);
  const [newAdminPassword, setNewAdminPassword] = useState(adminPassword);
  const [credentialsAlert, setCredentialsAlert] = useState(false);

  // UI States
  const [isSyncingAll, setIsSyncingAll] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [testStatus, setTestStatus] = useState<"idle" | "testing" | "success" | "error">("idle");
  const [testLogs, setTestLogs] = useState<string[]>([]);
  const [showConfigAlert, setShowConfigAlert] = useState(false);

  // Custom Modals & Elegant Feedback Notifications
  const [successBannerMessage, setSuccessBannerMessage] = useState("");
  const [errorBannerMessage, setErrorBannerMessage] = useState("");
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearConfirmText, setClearConfirmText] = useState("");
  const [clearError, setClearError] = useState("");

  const [showResetCredentialsConfirm, setShowResetCredentialsConfirm] = useState(false);
  const [showResetUrlConfirm, setShowResetUrlConfirm] = useState(false);
  const [syncResultMessage, setSyncResultMessage] = useState("");

  // Google OAuth & Direct Sheets Integration States
  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const [linkedSheetId, setLinkedSheetIdState] = useState<string | null>(null);
  const [linkedSheetUrl, setLinkedSheetUrlState] = useState<string | null>(null);
  const [existingSpreadsheet, setExistingSpreadsheet] = useState<{ id: string; url: string } | null>(null);
  const [isConnectingGoogle, setIsConnectingGoogle] = useState(false);
  const [isCreatingSheet, setIsCreatingSheet] = useState(false);
  const [isBulkSyncing, setIsBulkSyncing] = useState(false);

  // Sync isOpen and activeTab to localStorage
  useEffect(() => {
    localStorage.setItem("sf_admin_open", isOpen ? "true" : "false");
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem("sf_admin_active_tab", activeTab);
  }, [activeTab]);

  // Sync state on load
  useEffect(() => {
    setSubmissions(getSubmissions());
    setScriptUrlState(getScriptUrl());
    // Refresh customized credential fields
    const storedId = localStorage.getItem("sf_admin_id") || "Admin";
    const storedPw = localStorage.getItem("sf_admin_password") || "Admin2026";
    setAdminId(storedId);
    setAdminPassword(storedPw);
    setNewAdminId(storedId);
    setNewAdminPassword(storedPw);
  }, [isOpen]);

  // Google Auth Setup Listener
  useEffect(() => {
    const unsubscribe = initGoogleAuth(
      async (user, token) => {
        setGoogleUser(user);
        setGoogleToken(token);
        const existing = await findExistingSpreadsheet(token);
        setExistingSpreadsheet(existing);
      },
      () => {
        setGoogleUser(null);
        setGoogleToken(null);
      }
    );
    setLinkedSheetIdState(getLinkedSheetId());
    setLinkedSheetUrlState(getLinkedSheetUrl());
    return () => unsubscribe();
  }, [isOpen]);

  const checkExistingSpreadsheet = async (token: string) => {
    const existing = await findExistingSpreadsheet(token);
    setExistingSpreadsheet(existing);
  };

  const handleGoogleLogin = async () => {
    setIsConnectingGoogle(true);
    try {
      const result = await signInWithGoogle();
      if (result) {
        setGoogleUser(result.user);
        setGoogleToken(result.accessToken);
        setSuccessBannerMessage(`Successfully connected to Google Workspace (${result.user.email})!`);
        setTimeout(() => setSuccessBannerMessage(""), 4000);
        await checkExistingSpreadsheet(result.accessToken);
      }
    } catch (err: any) {
      console.error("Google login failed:", err);
      setErrorBannerMessage(`Failed to connect Google Workspace: ${err.message || err.toString()}`);
      setTimeout(() => setErrorBannerMessage(""), 5000);
    } finally {
      setIsConnectingGoogle(false);
    }
  };

  const handleGoogleLogout = async () => {
    try {
      await signOutGoogle();
      setGoogleUser(null);
      setGoogleToken(null);
      setSuccessBannerMessage("Signed out from Google Workspace.");
      setTimeout(() => setSuccessBannerMessage(""), 4000);
    } catch (err: any) {
      setErrorBannerMessage(`Sign out failed: ${err.message || err.toString()}`);
      setTimeout(() => setErrorBannerMessage(""), 5000);
    }
  };

  const handleCreateGoogleSheet = async () => {
    if (!googleToken) {
      setErrorBannerMessage("Please connect to Google Workspace first.");
      setTimeout(() => setErrorBannerMessage(""), 4000);
      return;
    }
    setIsCreatingSheet(true);
    try {
      const sheetInfo = await createGoogleSpreadsheet(googleToken);
      setLinkedSheet(sheetInfo.id, sheetInfo.url);
      setLinkedSheetIdState(sheetInfo.id);
      setLinkedSheetUrlState(sheetInfo.url);
      setSuccessBannerMessage("Successfully created and linked Google Spreadsheet!");
      setTimeout(() => setSuccessBannerMessage(""), 5000);
    } catch (err: any) {
      console.error("Failed to create spreadsheet:", err);
      setErrorBannerMessage(`Failed to create spreadsheet: ${err.message || err.toString()}`);
      setTimeout(() => setErrorBannerMessage(""), 5000);
    } finally {
      setIsCreatingSheet(false);
    }
  };

  const handleLinkExistingSheet = () => {
    if (existingSpreadsheet) {
      setLinkedSheet(existingSpreadsheet.id, existingSpreadsheet.url);
      setLinkedSheetIdState(existingSpreadsheet.id);
      setLinkedSheetUrlState(existingSpreadsheet.url);
      setSuccessBannerMessage("Linked existing 'Skill Forge - Live Submissions' spreadsheet!");
      setTimeout(() => setSuccessBannerMessage(""), 4000);
    }
  };

  const handleUnlinkSheet = () => {
    const confirmUnlink = window.confirm("Are you sure you want to unlink the current Google Spreadsheet? Submissions will no longer be direct-synced to it.");
    if (confirmUnlink) {
      setLinkedSheet(null, null);
      setLinkedSheetIdState(null);
      setLinkedSheetUrlState(null);
      setSuccessBannerMessage("Google Spreadsheet unlinked successfully.");
      setTimeout(() => setSuccessBannerMessage(""), 4000);
    }
  };

  const handleBulkSyncToGoogleSheets = async () => {
    if (!googleToken || !linkedSheetId) {
      setErrorBannerMessage("Google Sheet connection or authentication is missing.");
      setTimeout(() => setErrorBannerMessage(""), 4000);
      return;
    }

    setIsBulkSyncing(true);
    try {
      const records = getSubmissions();
      let successCount = 0;
      let failCount = 0;

      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const success = await syncRecordToGoogleSheetDirect(googleToken, linkedSheetId, record);
        if (success) {
          records[i].syncStatus = "success";
          successCount++;
        } else {
          failCount = failCount + 1;
        }
      }

      saveSubmissions(records);
      setSubmissions(records);
      setSuccessBannerMessage(`Bulk sync complete! Successfully exported ${successCount} records to your Google Sheet.`);
      setTimeout(() => setSuccessBannerMessage(""), 5000);
    } catch (err: any) {
      console.error("Bulk sync failed:", err);
      setErrorBannerMessage(`Bulk sync failed: ${err.message || err.toString()}`);
      setTimeout(() => setErrorBannerMessage(""), 5000);
    } finally {
      setIsBulkSyncing(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId.trim() === adminId && loginPassword === adminPassword) {
      setIsAuthorized(true);
      localStorage.setItem("sf_admin_authorized", "true");
      setLoginError("");
    } else {
      setLoginError("Invalid Admin ID or Password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    localStorage.removeItem("sf_admin_authorized");
    setLoginId("");
    setLoginPassword("");
  };

  const handleUpdateCredentials = () => {
    if (!newAdminId.trim() || !newAdminPassword.trim()) {
      setErrorBannerMessage("Admin ID and Password cannot be empty.");
      setTimeout(() => setErrorBannerMessage(""), 4000);
      return;
    }
    localStorage.setItem("sf_admin_id", newAdminId.trim());
    localStorage.setItem("sf_admin_password", newAdminPassword.trim());
    setAdminId(newAdminId.trim());
    setAdminPassword(newAdminPassword.trim());
    setCredentialsAlert(true);
    setTimeout(() => setCredentialsAlert(false), 3000);
  };

  const handleResetCredentials = () => {
    localStorage.removeItem("sf_admin_id");
    localStorage.removeItem("sf_admin_password");
    setAdminId("Admin");
    setAdminPassword("Admin2026");
    setNewAdminId("Admin");
    setNewAdminPassword("Admin2026");
    setShowResetCredentialsConfirm(false);
    setSuccessBannerMessage("Admin credentials reset to defaults successfully (ID: Admin, Password: Admin2026).");
    setTimeout(() => setSuccessBannerMessage(""), 5000);
  };

  const handleSaveUrl = () => {
    setScriptUrl(scriptUrl);
    setShowConfigAlert(true);
    setTimeout(() => setShowConfigAlert(false), 3000);
  };

  const handleConfirmResetUrl = () => {
    setScriptUrl("");
    setScriptUrlState(DEFAULT_SCRIPT_URL);
    setShowResetUrlConfirm(false);
    setSuccessBannerMessage("Google Apps Script URL restored to standard API configuration.");
    setTimeout(() => setSuccessBannerMessage(""), 5000);
  };

  const handleSyncQueue = async () => {
    setIsSyncingAll(true);
    try {
      const result = await syncPendingQueue();
      setSubmissions(getSubmissions());
      setSyncResultMessage(`Sync completed! Success: ${result.successCount}, Failed: ${result.failCount}`);
      setTimeout(() => setSyncResultMessage(""), 6000);
    } catch (err) {
      console.error("Sync error:", err);
      setErrorBannerMessage("Dynamic sync operation encountered an unexpected channel error.");
      setTimeout(() => setErrorBannerMessage(""), 5000);
    } finally {
      setIsSyncingAll(false);
    }
  };

  const handleExport = () => {
    exportToCSV();
  };

  const handleClearAll = () => {
    setShowClearConfirm(true);
    setClearConfirmText("");
    setClearError("");
  };

  const handleConfirmClearAll = () => {
    const normalizedInput = clearConfirmText.trim().toLowerCase();
    if (
      normalizedInput === "clear local logs" || 
      normalizedInput === "delete all data permanently" || 
      normalizedInput === "delete"
    ) {
      saveSubmissions([]);
      setSubmissions([]);
      setShowClearConfirm(false);
      setSuccessBannerMessage("All local admission and submission records have been cleared.");
      setTimeout(() => setSuccessBannerMessage(""), 5000);
    } else {
      setClearError("Verification failed. Please type 'DELETE' or 'Clear Local Logs' to confirm.");
    }
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(APPS_SCRIPT_BLUEPRINT);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const handleTestConnection = async () => {
    setTestStatus("testing");
    setTestLogs(["Initializing connection test to Apps Script...", `Target Web App: ${scriptUrl}`]);
    
    const mockRecord: SubmissionRecord = {
      id: "test_conn_check",
      timestamp: new Date().toLocaleString(),
      type: "Counseling",
      name: "Admin Connection Check",
      email: "test-sync@skillforge.in",
      phone: "0000000000",
      program: "System Integration",
      degree: "Admin Diagnostic",
      city: "Cloud Gateway",
      syncStatus: "pending"
    };

    try {
      setTestLogs(prev => [...prev, "Sending HTTP POST payload..."]);
      const success = await syncRecordToSheets(mockRecord);
      
      if (success) {
        setTestStatus("success");
        setTestLogs(prev => [
          ...prev,
          "POST request successfully completed!",
          "Google Apps Script successfully coordinated row allocation.",
          "Check your connected Google Sheet to verify 'Admin Connection Check' is appended."
        ]);
      } else {
        throw new Error("HTTP POST request failed or returned non-200 block");
      }
    } catch (err: any) {
      setTestStatus("error");
      setTestLogs(prev => [
        ...prev,
        `Connection failed: ${err.message || err.toString()}`,
        "Troubleshooting Checklist:",
        "1. Did you deploy the Web App as 'Anyone' access?",
        "2. Did you authorize Google Sheet permissions during deployment?",
        "3. Is the Web App URL pasted completely and correctly?"
      ]);
    }
  };

  const handleSingleResync = async (record: SubmissionRecord) => {
    const idx = submissions.findIndex(s => s.id === record.id);
    if (idx === -1) return;

    const success = await syncRecordToSheets(record);
    if (success) {
      const updated = [...submissions];
      updated[idx].syncStatus = "success";
      saveSubmissions(updated);
      setSubmissions(updated);
      setSuccessBannerMessage("Record resynced successfully!");
      setTimeout(() => setSuccessBannerMessage(""), 4000);
    } else {
      setErrorBannerMessage("Individual resync failed. Please check Sheets connection configuration.");
      setTimeout(() => setErrorBannerMessage(""), 5000);
    }
  };

  // Filter Submissions
  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch =
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.phone.includes(searchQuery);
    
    const matchesType = typeFilter === "all" || sub.type === typeFilter;
    const matchesSync = syncFilter === "all" || sub.syncStatus === syncFilter;

    return matchesSearch && matchesType && matchesSync;
  });

  const totalCount = submissions.length;
  const syncedCount = submissions.filter(s => s.syncStatus === "success").length;
  const pendingCount = submissions.filter(s => s.syncStatus === "pending").length;

  return (
    <>
      {/* Floating Gear Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-[#F5B400] rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer font-sans"
        title="SKILL FORGE Submissions Sync Admin"
      >
        <div className="relative">
          <Settings size={18} className="animate-spin duration-1000 text-amber-400" style={{ animationDuration: "12s" }} />
          {pendingCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 h-2.5 w-2.5 bg-amber-500 rounded-full animate-ping" />
          )}
        </div>
        <span className="text-[11px] font-mono tracking-wider font-extrabold uppercase text-white sm:inline hidden">
          SKILL FORGE {pendingCount > 0 && `(${pendingCount})`}
        </span>
      </button>

      {/* Admin Panel Drawer Portal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end font-sans">
            {/* Backdrop Cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black backdrop-blur-xs"
            />

            {/* Sidebar drawer body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl h-full bg-zinc-50 border-l border-zinc-200 shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Drawer Header */}
              <div className="bg-zinc-950 text-white p-5 flex items-center justify-between border-b border-zinc-800 select-none">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[#F5B400]">
                    <FileSpreadsheet size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#F5B400] font-extrabold tracking-wider uppercase">
                      <Lock size={10} /> SECURITY CREDENTIALS {isAuthorized ? "VERIFIED" : "LOCKED"}
                    </div>
                    <h3 className="text-base font-extrabold uppercase tracking-tight">
                      SKILL FORGE
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 text-zinc-400 hover:text-white transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {!isAuthorized ? (
                /* AUTH LOGIN GATE SCREEN */
                <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-10 bg-zinc-50 text-left">
                  <div className="w-full max-w-md bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-xl">
                    <div className="flex justify-center mb-5">
                      <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-full text-[#F5B400]">
                        <Lock size={32} />
                      </div>
                    </div>
                    
                    <h4 className="text-center text-sm font-black uppercase tracking-wider text-zinc-950 mb-1">
                      SKILL FORGE Access Lock
                    </h4>
                    <p className="text-center text-xs text-zinc-500 font-light mb-6">
                      Secure verification required. Enter portal ID & password.
                    </p>

                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                          Admin Login ID
                        </label>
                        <input
                          type="text"
                          required
                          value={loginId}
                          onChange={e => setLoginId(e.target.value)}
                          placeholder="e.g. admin"
                          className="w-full bg-zinc-50 border border-zinc-250 rounded-lg px-3 py-2 text-xs outline-none focus:border-amber-400 focus:bg-white transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                          Secure Password
                        </label>
                        <input
                          type="password"
                          required
                          value={loginPassword}
                          onChange={e => setLoginPassword(e.target.value)}
                          placeholder="Enter secret key"
                          className="w-full bg-zinc-50 border border-zinc-250 rounded-lg px-3 py-2 text-xs outline-none focus:border-amber-400 focus:bg-white transition-all font-sans"
                        />
                      </div>

                      {loginError && (
                        <div className="flex items-center gap-1.5 p-2.5 rounded-lg bg-red-50 text-red-700 text-[11px] font-medium border border-red-150">
                          <AlertCircle size={13} className="flex-shrink-0" />
                          <span>{loginError}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 font-bold text-zinc-950 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs font-sans"
                      >
                        <span>Unlock Hub</span>
                        <ArrowRight size={14} />
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                /* MAIN PORTAL AREA */
                <>
                  {/* Sub Header Navigation Tabs */}
                  <div className="bg-white px-6 py-1.5 border-b border-zinc-200 flex items-center justify-between shadow-xs">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveTab("submissions")}
                        className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold font-mono uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                          activeTab === "submissions"
                            ? "border-[#F5B400] text-zinc-950 font-black"
                            : "border-transparent text-zinc-550 hover:text-zinc-900"
                        }`}
                      >
                        <Database size={13} />
                        <span>Submissions Queue ({totalCount})</span>
                      </button>
                      <button
                        onClick={() => setActiveTab("config")}
                        className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold font-mono uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                          activeTab === "config"
                            ? "border-[#F5B400] text-zinc-950 font-black"
                            : "border-transparent text-zinc-550 hover:text-zinc-900"
                        }`}
                      >
                        <Settings size={13} />
                        <span>Sheets Config</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={handleLogout}
                        className="text-[10px] text-red-650 hover:text-red-800 hover:underline font-mono font-bold uppercase cursor-pointer"
                        title="Lock Admin Portal again"
                      >
                        Lock Portal
                      </button>
                      <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono">
                        <span className={`h-2 w-2 rounded-full ${scriptUrl ? "bg-emerald-500 animate-pulse" : "bg-red-400"}`} />
                        <span>{scriptUrl ? "Dynamic Webhook Ready" : "Offline Storage Only"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Drawer Content */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {activeTab === "submissions" ? (
                      <div className="space-y-6 text-left">
                        {/* STATS ROW */}
                        <div className="grid grid-cols-3 gap-3.5">
                          <div className="bg-white border border-zinc-200 p-3.5 rounded-xl text-left shadow-xs">
                            <span className="font-mono text-[9px] text-zinc-400 block font-bold tracking-wider uppercase">
                              TOTAL RECORDS
                            </span>
                            <span className="text-2xl font-black text-zinc-950 font-mono block mt-1">
                              {totalCount}
                            </span>
                          </div>
                          <div className="bg-white border border-zinc-200 p-3.5 rounded-xl text-left shadow-xs">
                            <span className="font-mono text-[9px] text-emerald-600 block font-bold tracking-wider uppercase">
                              SYNCED OK
                            </span>
                            <span className="text-2xl font-black text-emerald-600 font-mono block mt-1">
                              {syncedCount}
                            </span>
                          </div>
                          <div className="bg-white border border-zinc-200 p-3.5 rounded-xl text-left shadow-xs">
                            <span className="font-mono text-[9px] text-amber-600 block font-bold tracking-wider uppercase">
                              PENDING RETRY
                            </span>
                            <span className="text-2xl font-black text-amber-500 font-mono block mt-1">
                              {pendingCount}
                            </span>
                          </div>
                        </div>

                        {/* ACTIONS BAR */}
                        <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={handleSyncQueue}
                              disabled={pendingCount === 0 || isSyncingAll}
                              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold font-mono tracking-wider uppercase rounded-lg border cursor-pointer transition-all ${
                                pendingCount === 0
                                  ? "bg-zinc-100 text-zinc-400 border-zinc-200 cursor-not-allowed"
                                  : "bg-amber-500 hover:bg-amber-400 border-amber-500 text-zinc-950 shadow-xs"
                              }`}
                            >
                              <RefreshCw size={13} className={isSyncingAll ? "animate-spin" : ""} />
                              <span>Sync Queue</span>
                            </button>
                            <button
                              onClick={handleExport}
                              disabled={totalCount === 0}
                              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold font-mono tracking-wider uppercase rounded-lg border border-zinc-200 hover:border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-700 shadow-xs cursor-pointer transition-all"
                            >
                              <Download size={13} />
                              <span>Export CSV</span>
                            </button>
                            <button
                              onClick={handleClearAll}
                              disabled={totalCount === 0}
                              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold font-mono tracking-wider uppercase rounded-lg border border-red-200 hover:border-red-300 bg-red-50 hover:bg-red-100 text-red-700 cursor-pointer transition-all"
                            >
                              <Trash2 size={13} />
                              <span>Clear Local Logs</span>
                            </button>
                          </div>
                        </div>

                        {/* SEARCH AND FILTERS */}
                        <div className="bg-white border border-zinc-200 rounded-xl p-4 space-y-3.5 shadow-xs">
                          <div className="relative">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                            <input
                              type="text"
                              placeholder="Search candidate name, email, or phone..."
                              value={searchQuery}
                              onChange={e => setSearchQuery(e.target.value)}
                              className="w-full bg-zinc-50 border border-zinc-200 focus:border-amber-400 rounded-lg pl-10 pr-4 py-2 text-xs outline-none transition-all font-sans"
                            />
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-3.5">
                            <div className="flex-1">
                              <label className="block text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1 pl-0.5">
                                Form Stream
                              </label>
                              <div className="flex border border-zinc-200 rounded-lg overflow-hidden text-xs">
                                <button
                                  onClick={() => setTypeFilter("all")}
                                  className={`flex-1 py-1.5 font-semibold cursor-pointer transition-colors ${
                                    typeFilter === "all" ? "bg-zinc-950 text-white" : "bg-white text-zinc-650 hover:bg-zinc-50"
                                  }`}
                                >
                                  All
                                </button>
                                <button
                                  onClick={() => setTypeFilter("Counseling")}
                                  className={`flex-1 py-1.5 font-semibold cursor-pointer transition-colors border-l border-zinc-200 ${
                                    typeFilter === "Counseling" ? "bg-zinc-950 text-white" : "bg-white text-zinc-650 hover:bg-zinc-50"
                                  }`}
                                >
                                  Counseling
                                </button>
                                <button
                                  onClick={() => setTypeFilter("Brochure")}
                                  className={`flex-1 py-1.5 font-semibold cursor-pointer transition-colors border-l border-zinc-200 ${
                                    typeFilter === "Brochure" ? "bg-zinc-950 text-white" : "bg-white text-zinc-650 hover:bg-zinc-50"
                                  }`}
                                >
                                  Brochure
                                </button>
                                <button
                                  onClick={() => setTypeFilter("Scholarship")}
                                  className={`flex-1 py-1.5 font-semibold cursor-pointer transition-colors border-l border-zinc-200 ${
                                    typeFilter === "Scholarship" ? "bg-zinc-950 text-white" : "bg-white text-zinc-650 hover:bg-zinc-50"
                                  }`}
                                >
                                  Scholarship
                                </button>
                              </div>
                            </div>

                            <div className="flex-1">
                              <label className="block text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1 pl-0.5">
                                Sheets Sync Status
                              </label>
                              <div className="flex border border-zinc-200 rounded-lg overflow-hidden text-xs">
                                <button
                                  onClick={() => setSyncFilter("all")}
                                  className={`flex-1 py-1.5 font-semibold cursor-pointer transition-colors ${
                                    syncFilter === "all" ? "bg-zinc-950 text-white" : "bg-white text-zinc-650 hover:bg-zinc-50"
                                  }`}
                                >
                                  All
                                </button>
                                <button
                                  onClick={() => setSyncFilter("success")}
                                  className={`flex-1 py-1.5 font-semibold cursor-pointer transition-colors border-x border-zinc-200 ${
                                    syncFilter === "success" ? "bg-zinc-950 text-white" : "bg-white text-zinc-650 hover:bg-zinc-50"
                                  }`}
                                >
                                  Synced
                                </button>
                                <button
                                  onClick={() => setSyncFilter("pending")}
                                  className={`flex-1 py-1.5 font-semibold cursor-pointer transition-colors ${
                                    syncFilter === "pending" ? "bg-zinc-950 text-white" : "bg-white text-zinc-650 hover:bg-zinc-50"
                                  }`}
                                >
                                  Pending
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* SUBMISSIONS TABLE */}
                        <div className="space-y-3">
                          <span className="font-mono text-[10px] text-zinc-400 block font-bold tracking-wider uppercase pl-0.5">
                            RECENT SUBMISSIONS LOGS ({filteredSubmissions.length})
                          </span>

                          {filteredSubmissions.length === 0 ? (
                            <div className="bg-white border border-zinc-200 rounded-2xl p-8 text-center text-zinc-450 shadow-xs">
                              <AlertCircle className="mx-auto text-zinc-400 mb-2.5" size={24} />
                              <p className="text-xs font-bold text-zinc-700">No submissions found matching criteria</p>
                              <p className="text-[11px] text-zinc-450 mt-1 font-light">Submissions registered on the portal will appear here.</p>
                            </div>
                          ) : (
                            <div className="space-y-3.5 max-h-[480px] overflow-y-auto pr-1">
                              {filteredSubmissions.map(sub => (
                                <div
                                  key={sub.id}
                                  className="bg-white border border-zinc-200 hover:border-zinc-300 rounded-xl p-4 shadow-xs transition-colors text-left text-xs"
                                >
                                  <div className="flex items-start justify-between gap-3 mb-2.5">
                                    <div>
                                      <span className="font-mono text-[9px] text-zinc-400 block font-semibold">
                                        {sub.timestamp}
                                      </span>
                                      <h4 className="text-sm font-bold text-zinc-900 mt-0.5">
                                        {sub.name}
                                      </h4>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      {/* Form type pill */}
                                      <span
                                        className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider ${
                                          sub.type === "Counseling"
                                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                                            : sub.type === "Scholarship"
                                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                                            : "bg-purple-50 text-purple-700 border border-purple-200"
                                        }`}
                                      >
                                        {sub.type}
                                      </span>
                                      
                                      {/* Sync status indicator */}
                                      {sub.syncStatus === "success" ? (
                                        <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-mono font-bold bg-emerald-50 border border-emerald-150 px-1.5 py-0.5 rounded">
                                          <Check size={10} className="stroke-[3]" />
                                          <span>SYNCED</span>
                                        </span>
                                      ) : (
                                        <button
                                          onClick={() => handleSingleResync(sub)}
                                          className="flex items-center gap-1 text-[10px] text-amber-800 font-mono font-bold bg-amber-50 hover:bg-amber-100 border border-amber-200 px-1.5 py-0.5 rounded cursor-pointer transition-colors"
                                          title="Resync this submission manually"
                                        >
                                          <RefreshCw size={9} className="animate-pulse" />
                                          <span>RETRY</span>
                                        </button>
                                      )}
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-4 pt-2.5 border-t border-zinc-100 text-zinc-650">
                                    <div className="col-span-2 sm:col-span-1">
                                      <span className="text-[10px] text-zinc-400 block font-light">Email Address</span>
                                      <span className="font-medium text-zinc-850 truncate block" title={sub.email}>{sub.email}</span>
                                    </div>
                                    <div>
                                      <span className="text-[10px] text-zinc-400 block font-light">Phone / WhatsApp</span>
                                      <span className="font-medium text-zinc-850">{sub.phone}</span>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                      <span className="text-[10px] text-zinc-400 block font-light">Program Track</span>
                                      <span className="font-medium text-zinc-850 truncate block" title={sub.program}>{sub.program}</span>
                                    </div>
                                    <div>
                                      <span className="text-[10px] text-zinc-400 block font-light">Qual & Hub</span>
                                      <span className="font-medium text-zinc-850 truncate block" title={`${sub.degree} | ${sub.city}`}>{sub.degree} • {sub.city}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 text-left">
                        {/* GOOGLE WORKSPACE DIRECT INTEGRATION (OAUTH) */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 md:p-6 shadow-xs space-y-5 text-left">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileSpreadsheet className="text-[#F5B400]" size={20} />
                              <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                                Google Workspace Integration (Direct API)
                              </h4>
                            </div>
                            <span className="bg-amber-100 text-[#d97706] font-mono text-[9px] font-black uppercase px-2 py-0.5 rounded border border-amber-200">
                              Official API Flow
                            </span>
                          </div>

                          <p className="text-zinc-500 text-xs font-light leading-relaxed">
                            Connect your Google Account to automatically generate, structure, and direct-sync lead submissions into your personal Google Drive and Sheets without requiring Apps Script setup.
                          </p>

                          {!googleUser ? (
                            /* NOT CONNECTED STATE */
                            <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200 flex flex-col items-center justify-center text-center py-6">
                              <div className="p-3 bg-zinc-100 rounded-full text-zinc-400 mb-3">
                                <FileSpreadsheet size={32} />
                              </div>
                              <p className="text-xs font-semibold text-zinc-800 mb-1">
                                Google Account Not Connected
                              </p>
                              <p className="text-[11px] text-zinc-500 mb-4 max-w-sm font-light">
                                Connect to authorize secure sheet creation and row synchronization directly inside your Google Drive.
                              </p>
                              <button
                                onClick={handleGoogleLogin}
                                disabled={isConnectingGoogle}
                                className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-900 disabled:bg-zinc-200 disabled:text-zinc-400 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shadow-md cursor-pointer"
                              >
                                {isConnectingGoogle ? (
                                  <>
                                    <RefreshCw size={14} className="animate-spin" />
                                    <span>Authorizing...</span>
                                  </>
                                ) : (
                                  <>
                                    {/* Google Logo Icon SVG */}
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                      <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.483 1 0 6.483 0 13.24s5.483 12.24 12.24 12.24c7.05 0 11.732-4.907 11.732-11.93 0-.803-.085-1.414-.188-2.112H12.24z"/>
                                    </svg>
                                    <span>Connect Google Workspace</span>
                                  </>
                                )}
                              </button>
                            </div>
                          ) : (
                            /* CONNECTED STATE */
                            <div className="space-y-4">
                              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-zinc-50 border border-zinc-200 rounded-xl gap-4">
                                <div className="flex items-center gap-3">
                                  {googleUser.photoURL ? (
                                    <img src={googleUser.photoURL} alt={googleUser.displayName || "Google User"} className="h-9 w-9 rounded-full border border-zinc-200" referrerPolicy="no-referrer" />
                                  ) : (
                                    <div className="h-9 w-9 bg-amber-500/10 border border-amber-500/20 text-[#F5B400] rounded-full flex items-center justify-center font-bold font-mono text-sm">
                                      {googleUser.displayName?.[0] || "G"}
                                    </div>
                                  )}
                                  <div>
                                    <div className="text-xs font-bold text-zinc-950 flex items-center gap-1.5">
                                      <span>{googleUser.displayName || "Connected User"}</span>
                                      <span className="bg-emerald-100 text-emerald-800 font-mono text-[8px] font-bold px-1.5 py-0.2 rounded-full border border-emerald-200">ACTIVE</span>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 font-mono">{googleUser.email}</p>
                                  </div>
                                </div>

                                <button
                                  onClick={handleGoogleLogout}
                                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-zinc-100 text-red-600 hover:text-red-700 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg border border-zinc-200 cursor-pointer transition-colors"
                                >
                                  <LogOut size={11} />
                                  <span>Disconnect</span>
                                </button>
                              </div>

                              {/* SPREADSHEET LINKING CONFIG */}
                              <div className="p-4 border border-zinc-200 rounded-xl space-y-4 bg-white">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider block">
                                    Linked Google Spreadsheet
                                  </span>
                                  {linkedSheetId ? (
                                    <span className="flex items-center gap-1 text-[9px] text-emerald-700 font-mono font-bold bg-emerald-50 border border-emerald-150 px-1.5 py-0.5 rounded">
                                      <CheckCircle2 size={9} />
                                      <span>LINKED & ACTIVE</span>
                                    </span>
                                  ) : (
                                    <span className="flex items-center gap-1 text-[9px] text-amber-700 font-mono font-bold bg-amber-50 border border-amber-150 px-1.5 py-0.5 rounded">
                                      <AlertCircle size={9} />
                                      <span>NOT LINKED</span>
                                    </span>
                                  )}
                                </div>

                                {linkedSheetId ? (
                                  <div className="space-y-3">
                                    <div className="p-3 bg-zinc-50 border border-zinc-150 rounded-lg flex items-center justify-between">
                                      <div className="flex items-center gap-2 truncate pr-4">
                                        <FileSpreadsheet className="text-emerald-600 flex-shrink-0" size={16} />
                                        <div className="truncate">
                                          <p className="text-xs font-bold text-zinc-900 truncate">Skill Forge - Live Submissions</p>
                                          <p className="text-[9px] text-zinc-400 font-mono truncate">{linkedSheetId}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <a
                                          href={linkedSheetUrl || "#"}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="p-1.5 text-zinc-500 hover:text-zinc-900 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-lg transition-colors cursor-pointer"
                                          title="Open Spreadsheet in new tab"
                                        >
                                          <ExternalLink size={14} />
                                        </a>
                                        <button
                                          onClick={handleUnlinkSheet}
                                          className="p-1.5 text-red-500 hover:text-red-700 bg-white border border-zinc-200 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                          title="Disconnect this spreadsheet"
                                        >
                                          <Unlink size={14} />
                                        </button>
                                      </div>
                                    </div>

                                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                                      <button
                                        onClick={handleBulkSyncToGoogleSheets}
                                        disabled={isBulkSyncing}
                                        className="flex-1 py-2.5 bg-zinc-950 hover:bg-zinc-900 disabled:bg-zinc-100 disabled:text-zinc-450 text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                                      >
                                        {isBulkSyncing ? (
                                          <>
                                            <RefreshCw size={12} className="animate-spin" />
                                            <span>Exporting Submissions...</span>
                                          </>
                                        ) : (
                                          <>
                                            <Download size={12} />
                                            <span>Bulk Sync All Logs to Sheet</span>
                                          </>
                                        )}
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="space-y-3.5">
                                    <p className="text-[11px] text-zinc-500 leading-relaxed font-light font-sans">
                                      You don't have a Google Spreadsheet linked. You can either auto-generate a fresh, pre-structured three-tab spreadsheet, or link an existing one if we detected it in your Google Drive.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                      <button
                                        onClick={handleCreateGoogleSheet}
                                        disabled={isCreatingSheet}
                                        className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-100 disabled:text-zinc-400 text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                                      >
                                        {isCreatingSheet ? (
                                          <>
                                            <RefreshCw size={12} className="animate-spin" />
                                            <span>Creating Spreadsheet...</span>
                                          </>
                                        ) : (
                                          <>
                                            <PlusCircle size={12} />
                                            <span>Create & Structure Sheet</span>
                                          </>
                                        )}
                                      </button>

                                      {existingSpreadsheet && (
                                        <button
                                          onClick={handleLinkExistingSheet}
                                          className="flex-1 py-2.5 bg-white hover:bg-zinc-50 border border-zinc-250 text-zinc-800 text-[11px] font-mono font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                                        >
                                          <Check size={12} />
                                          <span>Link Existing 'Skill Forge' Sheet</span>
                                        </button>
                                      )}
                                    </div>

                                    {existingSpreadsheet && (
                                      <div className="flex items-center gap-1.5 p-2 px-2.5 bg-amber-50/70 border border-amber-200 rounded-lg text-[10px] text-amber-800 font-mono leading-relaxed">
                                        <AlertCircle size={12} className="flex-shrink-0" />
                                        <span>We detected a pre-existing <b>'Skill Forge - Live Submissions'</b> spreadsheet in your Google Drive! Click the button above to link it.</span>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* ADMIN PASSWORD CREDENTIALS MANAGER */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 md:p-6 shadow-xs space-y-4 text-left">
                          <div className="flex items-center gap-2">
                            <Lock className="text-[#F5B400]" size={18} />
                            <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                              Admin ID & Password Manager
                            </h4>
                          </div>
                          
                          <p className="text-zinc-500 text-xs font-light leading-relaxed">
                            Configure or change the ID and Password required to unlock this Sync Hub panel. Keep your submitted lead database safe.
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                              <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                                Change Admin ID
                              </label>
                              <input
                                type="text"
                                value={newAdminId}
                                onChange={e => setNewAdminId(e.target.value)}
                                className="w-full bg-zinc-50 border border-zinc-250 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-amber-500 focus:bg-white transition-all"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                                Change Secure Password
                              </label>
                              <input
                                type="password"
                                value={newAdminPassword}
                                onChange={e => setNewAdminPassword(e.target.value)}
                                className="w-full bg-zinc-50 border border-zinc-250 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-amber-500 focus:bg-white transition-all"
                              />
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <button
                              onClick={() => setShowResetCredentialsConfirm(true)}
                              className="text-[10px] text-zinc-400 hover:text-amber-800 font-mono font-bold underline cursor-pointer"
                            >
                              Reset default credentials
                            </button>
                            <button
                              onClick={handleUpdateCredentials}
                              className="px-4 py-2 bg-[#F5B400] hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                            >
                              Save Credentials
                            </button>
                          </div>

                          {credentialsAlert && (
                            <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-mono pl-1">
                              <CheckCircle2 size={13} />
                              <span>Admin credentials successfully updated!</span>
                            </div>
                          )}
                        </div>

                        {/* CONNECTION CONFIGURATOR */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 md:p-6 shadow-xs space-y-4 text-left">
                          <div className="flex items-center gap-2">
                            <FileSpreadsheet className="text-[#F5B400]" size={18} />
                            <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                              Google Apps Script Connection
                            </h4>
                          </div>
                          
                          <p className="text-zinc-500 text-xs font-light leading-relaxed">
                            Submissions made by students on SKILL FORGE will be posted to this deployed Google Apps Script Web App. This app appends rows to your designated spreadsheet sheets.
                          </p>

                          <div className="space-y-2.5 pt-1">
                            <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider">
                              Apps Script Web App URL
                            </label>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="https://script.google.com/macros/s/..."
                                value={scriptUrl}
                                onChange={e => setScriptUrlState(e.target.value)}
                                className="flex-1 bg-zinc-50 border border-zinc-250 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-amber-500 focus:bg-white transition-all"
                              />
                              <button
                                onClick={handleSaveUrl}
                                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                              >
                                Save
                              </button>
                            </div>
                            {showConfigAlert && (
                              <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-mono pl-1">
                                <CheckCircle2 size={13} />
                                <span>Custom URL saved to persistent memory!</span>
                              </div>
                            )}
                            <div className="flex items-center justify-between pt-1">
                              <span className="text-[10px] text-zinc-400 font-mono">
                                Need a custom Sheet? Restoring standard sheets is accessible below.
                              </span>
                              <button
                                onClick={() => setShowResetUrlConfirm(true)}
                                className="text-[10px] text-amber-800 font-mono font-bold underline cursor-pointer"
                              >
                                Reset to Default API
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* LIVE CONNECTION DIAGNOSTIC */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 md:p-6 shadow-xs space-y-4 text-left">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                              Dynamic Connection Diagnostic
                            </h4>
                            <button
                              onClick={handleTestConnection}
                              disabled={testStatus === "testing" || !scriptUrl}
                              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 disabled:bg-zinc-100 disabled:text-zinc-450 text-zinc-950 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg border border-amber-500/10 cursor-pointer transition-colors"
                            >
                              <RefreshCw size={11} className={testStatus === "testing" ? "animate-spin" : ""} />
                              <span>Trigger test record</span>
                            </button>
                          </div>

                          <p className="text-zinc-500 text-xs font-light leading-relaxed">
                            Submit a diagnostics record ("Admin Connection Check") to test if the active Sheets Web App responds correctly.
                          </p>

                          {/* Diagnostic Logger Container */}
                          {testStatus !== "idle" && (
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 font-mono text-[11px] text-zinc-300 space-y-2 max-h-48 overflow-y-auto">
                              <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800 text-zinc-500 font-bold">
                                <span>DIAGNOSTIC LOG STREAM</span>
                                <span className={testStatus === "testing" ? "text-amber-500 animate-pulse" : testStatus === "success" ? "text-emerald-500" : "text-red-500"}>
                                  ● {testStatus.toUpperCase()}
                                </span>
                              </div>
                              {testLogs.map((log, i) => (
                                <div key={i} className="flex gap-2 items-start leading-relaxed">
                                  <span className="text-zinc-650 font-semibold select-none">{">"}</span>
                                  <p className={log.includes("Connection Check") ? "text-amber-300 font-semibold" : log.includes("success") || log.includes("successfully") ? "text-emerald-400" : log.includes("failed") ? "text-red-400" : "text-zinc-300"}>
                                    {log}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* APPS SCRIPT Blueprints step guide */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-5 md:p-6 shadow-xs space-y-4 text-left">
                          <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                            <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                              Step-by-step custom Google Sheets Setup
                            </h4>
                            <button
                              onClick={handleCopyScript}
                              className="flex items-center gap-1 px-3 py-1 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-[10px] font-mono font-bold uppercase rounded-md cursor-pointer transition-colors"
                            >
                              {copiedScript ? <Check size={11} className="text-emerald-600 stroke-[3]" /> : <Copy size={11} />}
                              <span>{copiedScript ? "Copied blueprint!" : "Copy code template"}</span>
                            </button>
                          </div>

                          <div className="space-y-4 text-xs">
                            <div className="flex gap-3 items-start">
                              <div className="h-5 w-5 rounded-full bg-zinc-900 text-[#F5B400] font-bold text-[10px] font-mono flex items-center justify-center flex-shrink-0 mt-0.5">
                                1
                              </div>
                              <div>
                                <p className="font-bold text-zinc-900">Create Spreadsheet and Sheets</p>
                                <p className="text-zinc-500 text-[11px] font-light mt-0.5 leading-relaxed">
                                  Open <a href="https://sheets.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-bold hover:underline inline-flex items-center gap-0.5">sheets.google.com <ExternalLink size={10} /></a>. Create a sheet, name it <code className="bg-zinc-100 px-1 py-0.5 text-zinc-800 font-semibold rounded font-mono">Skill Forge - Live Submissions</code>. Rename tab 1 to <code className="bg-zinc-100 px-1 py-0.5 text-zinc-800 font-semibold rounded font-mono">Career Counseling</code>. Create tab 2 and name it <code className="bg-zinc-100 px-1 py-0.5 text-zinc-800 font-semibold rounded font-mono">Brochure Downloads</code>.
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-3 items-start">
                              <div className="h-5 w-5 rounded-full bg-zinc-900 text-[#F5B400] font-bold text-[10px] font-mono flex items-center justify-center flex-shrink-0 mt-0.5">
                                2
                              </div>
                              <div>
                                <p className="font-bold text-zinc-900">Bind Apps Script and Deploy</p>
                                <p className="text-zinc-500 text-[11px] font-light mt-0.5 leading-relaxed">
                                  Click <strong className="text-zinc-850 font-medium">Extensions</strong> → <strong className="text-zinc-850 font-medium">Apps Script</strong>. Paste the template blueprint code. Click Save, then click <strong className="text-zinc-850 font-medium">Deploy</strong> → <strong className="text-zinc-850 font-medium">New deployment</strong>. Select type <strong className="text-zinc-850 font-medium">Web app</strong>, execute as "Me", and set who has access to <strong className="text-zinc-850 font-medium font-bold">Anyone</strong>.
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-3 items-start">
                              <div className="h-5 w-5 rounded-full bg-zinc-900 text-[#F5B400] font-bold text-[10px] font-mono flex items-center justify-center flex-shrink-0 mt-0.5">
                                3
                              </div>
                              <div>
                                <p className="font-bold text-zinc-900">Connect Web App URL</p>
                                <p className="text-zinc-500 text-[11px] font-light mt-0.5 leading-relaxed">
                                  Authorize permissions when prompted. Copy the resulting Web App URL, paste it into the field above and click "Save". Trigger a diagnostics test row to verify!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Safe in-app Overlay Dialogs and Toast Banners */}
      <AnimatePresence>
        {/* Success Alert Banner */}
        {successBannerMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] max-w-md w-full px-4 font-sans"
          >
            <div className="bg-emerald-600 text-white border border-emerald-500/30 rounded-xl p-4 shadow-2xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-100 shrink-0" />
              <span className="text-xs font-semibold leading-relaxed">{successBannerMessage}</span>
            </div>
          </motion.div>
        )}

        {/* Error Alert Banner */}
        {errorBannerMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] max-w-md w-full px-4 font-sans"
          >
            <div className="bg-red-650 text-white border border-red-500/30 rounded-xl p-4 shadow-2xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-100 shrink-0" />
              <span className="text-xs font-semibold leading-relaxed">{errorBannerMessage}</span>
            </div>
          </motion.div>
        )}

        {/* Sync Result Toast */}
        {syncResultMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] max-w-md w-full px-4 font-sans"
          >
            <div className="bg-zinc-950 text-white border border-zinc-800 rounded-xl p-4 shadow-2xl flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-amber-400 animate-spin shrink-0" style={{ animationDuration: "3s" }} />
              <span className="text-xs font-semibold leading-relaxed">{syncResultMessage}</span>
            </div>
          </motion.div>
        )}

        {/* Clear Local Logs Confirm Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 font-sans">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowClearConfirm(false)}
              className="absolute inset-0 bg-black backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-zinc-200 rounded-2xl max-w-md w-full p-6 shadow-2xl relative z-10 text-left"
            >
              <div className="flex items-center gap-3 text-red-600 mb-4">
                <div className="p-2 bg-red-50 border border-red-200 rounded-xl">
                  <Trash2 size={20} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900">
                  Delete All Data Permanently
                </h3>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-light">
                <strong>DANGER:</strong> This action is completely irreversible. You are about to permanently delete all local admission and submission lead records from your browser's persistent cache.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
                    To confirm deletion, please type <span className="text-red-700 font-bold select-all bg-red-50 px-1 py-0.5 rounded border border-red-200 font-mono">DELETE</span> or <span className="text-red-700 font-bold select-all bg-red-50 px-1 py-0.5 rounded border border-red-200 font-mono">Clear Local Logs</span> below:
                  </label>
                  <input
                    type="text"
                    className="w-full bg-zinc-50 border border-zinc-250 rounded-lg px-3 py-2 text-xs font-mono outline-none focus:border-red-500 focus:bg-white transition-all text-center font-bold text-zinc-900 placeholder-zinc-400"
                    value={clearConfirmText}
                    onChange={e => {
                      setClearConfirmText(e.target.value);
                      setClearError("");
                    }}
                    placeholder="Type DELETE or Clear Local Logs"
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        handleConfirmClearAll();
                      }
                    }}
                  />
                </div>

                {clearError && (
                  <div className="flex items-center gap-1.5 p-2 bg-red-50 text-red-700 text-[11px] font-bold rounded-lg border border-red-150">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{clearError}</span>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="flex-1 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-250 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmClearAll}
                    className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center shadow-md shadow-red-200"
                  >
                    Delete All Data
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Reset Default Credentials Confirm Modal */}
        {showResetCredentialsConfirm && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 font-sans">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetCredentialsConfirm(false)}
              className="absolute inset-0 bg-black backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-zinc-200 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative z-10 text-left"
            >
              <div className="flex items-center gap-3 text-amber-600 mb-4">
                <div className="p-2 bg-amber-50 border border-amber-200 rounded-xl">
                  <Lock size={18} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900">
                  Reset Credentials?
                </h3>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed mb-6 font-light">
                Are you absolutely sure you want to reset the administrator login credentials back to standard system defaults?
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowResetCredentialsConfirm(false)}
                  className="flex-1 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[11px] font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center border border-zinc-250"
                >
                  No, Cancel
                </button>
                <button
                  onClick={handleResetCredentials}
                  className="flex-1 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-[11px] font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center shadow-sm"
                >
                  Yes, Reset
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Reset Default Apps Script URL Confirm Modal */}
        {showResetUrlConfirm && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 font-sans">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetUrlConfirm(false)}
              className="absolute inset-0 bg-black backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-zinc-200 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative z-10 text-left"
            >
              <div className="flex items-center gap-3 text-amber-600 mb-4">
                <div className="p-2 bg-amber-50 border border-amber-200 rounded-xl">
                  <FileSpreadsheet size={18} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900">
                  Restore Default URL?
                </h3>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed mb-6 font-light">
                Are you sure you want to restore the default Skill Forge Apps Script webhook URL? Any custom script links you saved will be overwritten.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowResetUrlConfirm(false)}
                  className="flex-1 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[11px] font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center border border-zinc-250"
                >
                  No, Cancel
                </button>
                <button
                  onClick={handleConfirmResetUrl}
                  className="flex-1 py-2 bg-zinc-950 hover:bg-zinc-900 text-[#F5B400] text-[11px] font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center shadow-sm"
                >
                  Restore Default
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
