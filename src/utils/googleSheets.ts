import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut
} from "firebase/auth";
import firebaseConfig from "../../firebase-applet-config.json";
import { SubmissionRecord } from "../types";

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Provider Config with scopes
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/spreadsheets");
provider.addScope("https://www.googleapis.com/auth/drive.file");
provider.addScope("https://www.googleapis.com/auth/drive");

// In-memory token cache with sessionStorage backup for page refreshes
let cachedAccessToken: string | null = sessionStorage.getItem("skillforge_google_token");
let isSigningIn = false;

// Initialize Auth listener
export const initGoogleAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // We have a user session, but we might need to prompt login to get a fresh access token
        cachedAccessToken = null;
        sessionStorage.removeItem("skillforge_google_token");
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      sessionStorage.removeItem("skillforge_google_token");
      if (onAuthFailure) onAuthFailure();
    }
  });
};

// Sign in with Google Popup
export const signInWithGoogle = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error("Failed to retrieve Google OAuth access token.");
    }
    cachedAccessToken = credential.accessToken;
    sessionStorage.setItem("skillforge_google_token", credential.accessToken);
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (err) {
    console.error("Google login failed:", err);
    throw err;
  } finally {
    isSigningIn = false;
  }
};

// Sign out and clear cache
export const signOutGoogle = async () => {
  await signOut(auth);
  cachedAccessToken = null;
  sessionStorage.removeItem("skillforge_google_token");
};

// Get active cached token
export const getCachedToken = (): string | null => {
  return cachedAccessToken;
};

// Save Sheet info in localStorage
const SHEET_ID_KEY = "skillforge_google_spreadsheet_id";
const SHEET_URL_KEY = "skillforge_google_spreadsheet_url";

export function getLinkedSheetId(): string | null {
  return localStorage.getItem(SHEET_ID_KEY);
}

export function getLinkedSheetUrl(): string | null {
  return localStorage.getItem(SHEET_URL_KEY);
}

export function setLinkedSheet(id: string | null, url: string | null): void {
  if (id && url) {
    localStorage.setItem(SHEET_ID_KEY, id);
    localStorage.setItem(SHEET_URL_KEY, url);
  } else {
    localStorage.removeItem(SHEET_ID_KEY);
    localStorage.removeItem(SHEET_URL_KEY);
  }
}

// Search for an existing "Skill Forge - Live Submissions" Spreadsheet in Drive
export async function findExistingSpreadsheet(token: string): Promise<{ id: string; url: string } | null> {
  try {
    const q = encodeURIComponent("name = 'Skill Forge - Live Submissions' and mimeType = 'application/vnd.google-apps.spreadsheet' and trashed = false");
    const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name,webViewLink)`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to search Google Drive: ${res.statusText}`);
    }

    const data = await res.json();
    if (data.files && data.files.length > 0) {
      const file = data.files[0];
      return {
        id: file.id,
        url: file.webViewLink || `https://docs.google.com/spreadsheets/d/${file.id}/edit`
      };
    }
    return null;
  } catch (err) {
    console.error("Error finding spreadsheet in Google Drive:", err);
    return null;
  }
}

// Create sheet headers helper
async function setSheetHeaders(token: string, spreadsheetId: string, sheetName: string, type: "Counseling" | "Scholarship" | "Brochure") {
  const headers = [
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

  const range = `${sheetName}!A1:I1`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}?valueInputOption=RAW`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      values: [headers]
    })
  });

  if (!res.ok) {
    console.warn(`Could not set headers for sheet ${sheetName}:`, await res.text());
  }
}

// Create a new Spreadsheet with the standard three sheets/tabs
export async function createGoogleSpreadsheet(token: string): Promise<{ id: string; url: string }> {
  try {
    const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        properties: {
          title: "Skill Forge - Live Submissions"
        },
        sheets: [
          { properties: { title: "Career Counseling" } },
          { properties: { title: "Scholarship Applications" } },
          { properties: { title: "Brochure Downloads" } }
        ]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Failed to create spreadsheet: ${errText}`);
    }

    const data = await response.json();
    const spreadsheetId = data.spreadsheetId;
    const spreadsheetUrl = data.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

    // Now write the professional headers for each of the three sheets
    await setSheetHeaders(token, spreadsheetId, "Career Counseling", "Counseling");
    await setSheetHeaders(token, spreadsheetId, "Scholarship Applications", "Scholarship");
    await setSheetHeaders(token, spreadsheetId, "Brochure Downloads", "Brochure");

    return { id: spreadsheetId, url: spreadsheetUrl };
  } catch (err) {
    console.error("Error creating Google Spreadsheet:", err);
    throw err;
  }
}

// Direct Sync helper for a single record to the linked spreadsheet
export async function syncRecordToGoogleSheetDirect(token: string, spreadsheetId: string, record: SubmissionRecord): Promise<boolean> {
  const sheetName =
    record.type === "Counseling"
      ? "Career Counseling"
      : record.type === "Scholarship"
      ? "Scholarship Applications"
      : "Brochure Downloads";

  const source =
    record.type === "Counseling"
      ? "Admission Form"
      : record.type === "Scholarship"
      ? "Scholarship Application"
      : "Brochure Form";

  const range = `${sheetName}!A:I`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=RAW`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        values: [
          [
            record.id,
            record.timestamp,
            record.name,
            record.email,
            record.phone,
            record.program,
            record.degree,
            record.city,
            source
          ]
        ]
      })
    });

    if (!res.ok) {
      console.error(`Google Sheets API append failed: ${res.statusText}`, await res.text());
      return false;
    }

    return true;
  } catch (err) {
    console.error("Failed to append row direct to Google Sheet:", err);
    return false;
  }
}
