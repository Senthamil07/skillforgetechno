import { SubmissionRecord } from "../types";
import { getLinkedSheetId, getCachedToken, syncRecordToGoogleSheetDirect } from "./googleSheets";

const SUBMISSIONS_KEY = "skillforge_all_submissions";
const SCRIPT_URL_KEY = "skillforge_custom_script_url";

export const DEFAULT_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz_xDHaNO1zJ4J1tWj7mtfDTqfGnZk66kOajR8wlpmvu_y6K4R9iR4t2nG2dzAO05bCpA/exec";

// Get configured Apps Script URL
export function getScriptUrl(): string {
  const customUrl = localStorage.getItem(SCRIPT_URL_KEY);
  return customUrl || DEFAULT_SCRIPT_URL;
}

// Set custom Apps Script URL
export function setScriptUrl(url: string): void {
  if (!url) {
    localStorage.removeItem(SCRIPT_URL_KEY);
  } else {
    localStorage.setItem(SCRIPT_URL_KEY, url.trim());
  }
}

// Get all submissions from local storage
export function getSubmissions(): SubmissionRecord[] {
  try {
    const raw = localStorage.getItem(SUBMISSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to load submissions:", err);
    return [];
  }
}

// Save submissions to local storage
export function saveSubmissions(records: SubmissionRecord[]): void {
  try {
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(records));
  } catch (err) {
    console.error("Failed to save submissions:", err);
  }
}

// Add a new submission and trigger background sync
export async function addSubmission(
  recordData: Omit<SubmissionRecord, "id" | "timestamp" | "syncStatus">
): Promise<SubmissionRecord> {
  const submissions = getSubmissions();
  
  const newRecord: SubmissionRecord = {
    ...recordData,
    id: `sub_${Math.random().toString(36).substring(2, 11)}`,
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    syncStatus: "pending"
  };

  // Add to local list first
  submissions.unshift(newRecord);
  saveSubmissions(submissions);

  // Attempt real-time sync in background
  try {
    const success = await syncRecordToSheets(newRecord);
    if (success) {
      const updatedSubmissions = getSubmissions();
      const match = updatedSubmissions.find(s => s.id === newRecord.id);
      if (match) {
        match.syncStatus = "success";
        saveSubmissions(updatedSubmissions);
        newRecord.syncStatus = "success";
      }
    }
  } catch (err) {
    console.warn("Real-time sync pending background retry:", err);
  }

  return newRecord;
}

// Sync a single record to the Google Sheets direct API or Apps Script Web App
export async function syncRecordToSheets(record: SubmissionRecord): Promise<boolean> {
  // If we have a connected direct Google Sheet & active token, prioritize direct API syncing
  const linkedSheetId = getLinkedSheetId();
  const token = getCachedToken();
  if (linkedSheetId && token) {
    try {
      const success = await syncRecordToGoogleSheetDirect(token, linkedSheetId, record);
      if (success) return true;
    } catch (err) {
      console.warn("Direct Google Sheets API sync failed, trying Apps Script Web App fallback:", err);
    }
  }

  const url = getScriptUrl();
  if (!url) return false;

  try {
    // We send form data as URLSearchParams to support standard Apps Script doPost(e)
    const params = new URLSearchParams({
      id: record.id,
      timestamp: record.timestamp,
      type: record.type,
      name: record.name,
      email: record.email,
      phone: record.phone,
      program: record.program,
      degree: record.degree,
      city: record.city,
      source: record.type === "Counseling" ? "Admission Form" : record.type === "Scholarship" ? "Scholarship Application" : "Brochure Form"
    });

    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors", // Apps Script redirects cause CORS issues, no-cors lets us post safely
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params
    });

    // With "no-cors", the response type is "opaque" and status is 0,
    // but the request completes successfully on Google's server.
    // If it didn't throw an error, we treat it as successfully submitted.
    return true;
  } catch (err) {
    console.error(`Failed to sync record ${record.id}:`, err);
    return false;
  }
}

// Sync all pending records
export async function syncPendingQueue(): Promise<{ successCount: number; failCount: number }> {
  const submissions = getSubmissions();
  const pending = submissions.filter(s => s.syncStatus === "pending");
  
  let successCount = 0;
  let failCount = 0;

  for (const record of pending) {
    const success = await syncRecordToSheets(record);
    if (success) {
      record.syncStatus = "success";
      successCount++;
    } else {
      failCount++;
    }
  }

  if (successCount > 0) {
    saveSubmissions(submissions);
  }

  return { successCount, failCount };
}

// Export all submissions to Excel-compatible CSV format
export function exportToCSV(): void {
  const submissions = getSubmissions();
  if (submissions.length === 0) return;

  const headers = ["ID", "Timestamp", "Submission Type", "Name", "Email Address", "Phone / WhatsApp", "Selected Program / Course", "Highest Qualification", "City", "Sync Status"];
  
  const csvRows = [
    headers.join(","), // Headers
    ...submissions.map(r => [
      `"${r.id}"`,
      `"${r.timestamp}"`,
      `"${r.type}"`,
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.email.replace(/"/g, '""')}"`,
      `"${r.phone}"`,
      `"${r.program.replace(/"/g, '""')}"`,
      `"${r.degree.replace(/"/g, '""')}"`,
      `"${r.city.replace(/"/g, '""')}"`,
      `"${r.syncStatus}"`
    ].join(","))
  ];

  const csvContent = "\uFEFF" + csvRows.join("\n"); // Add UTF-8 BOM for Excel compatibility
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `skill_forge_submissions_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = "hidden";
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Blueprint Google Apps Script Code
export const APPS_SCRIPT_BLUEPRINT = `/**
 * Skill Forge Google Sheets Connector
 * 
 * 1. Open Google Sheets (sheets.google.com).
 * 2. Create a new Spreadsheet and name it "Skill Forge - Live Submissions".
 * 3. Rename the first sheet tab to "Career Counseling".
 * 4. Add a second tab by clicking the '+' icon at the bottom, and name it "Brochure Downloads".
 * 5. Open Extensions -> Apps Script.
 * 6. Replace all existing script code with this blueprint.
 * 7. Click 'Save' (floppy disk icon).
 * 8. Click 'Deploy' -> 'New deployment'.
 * 9. Select type: 'Web app'.
 * 10. Set Description: "Skill Forge Submissions Sync"
 *     - Execute as: "Me (your email)"
 *     - Who has access: "Anyone"
 * 11. Click 'Deploy', authorize the Google Account permissions, and copy the 'Web app URL'.
 * 12. Paste the 'Web app URL' into your Skill Forge Admin Portal.
 */

function doPost(e) {
  try {
    var params = e.parameter;
    
    var id = params.id || "";
    var timestamp = params.timestamp || new Date().toLocaleString();
    var type = params.type || "Counseling"; // "Counseling" or "Brochure"
    var name = params.name || "";
    var email = params.email || "";
    var phone = params.phone || "";
    var program = params.program || "";
    var degree = params.degree || "";
    var city = params.city || "";
    var source = params.source || "Website Form";

    var doc = SpreadsheetApp.getActiveSpreadsheet();
    if (!doc) {
      // Fallback if script is not bound: Open by active sheet or create one
      doc = SpreadsheetApp.openByUrl(SpreadsheetApp.getActiveSpreadsheet().getUrl());
    }

    var sheetName = type === "Counseling" ? "Career Counseling" : type === "Scholarship" ? "Scholarship Applications" : "Brochure Downloads";
    var sheet = doc.getSheetByName(sheetName);
    
    // Create tab if it doesn't exist
    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
      writeHeaders(sheet, type);
    }

    // Append row
    sheet.appendRow([
      id,
      timestamp,
      name,
      email,
      phone,
      program,
      degree,
      city,
      source
    ]);

    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "success", 
      "message": "Row successfully appended to " + sheetName 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "error", 
      "message": err.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function writeHeaders(sheet, type) {
  var headers = [
    "Submission ID",
    "Timestamp",
    "Candidate Name",
    "Email Address",
    "Phone / WhatsApp",
    type === "Counseling" ? "Selected Program" : type === "Scholarship" ? "Scholarship & Course Details" : "Course Stream",
    "Highest Qualification",
    "Current City Hub",
    "Source"
  ];
  sheet.appendRow(headers);
  sheet.getRange(1, 1, 1, headers.length)
       .setFontWeight("bold")
       .setBackground("#FFF2CC")
       .setBorder(true, true, true, true, true, true);
}
`;
