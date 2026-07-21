/**
 * Nexara Traders — website form handler (no custom backend required).
 *
 * What it does on every form submission:
 *   1. Appends the data as a new row in a Google Sheet.
 *   2. Emails the form data to the owner via the Resend API.
 *
 * Deploy this as a Web App (Deploy > New deployment > type: Web app,
 * "Execute as: Me", "Who has access: Anyone"). Copy the /exec URL into the
 * website's .env file as VITE_FORMS_ENDPOINT.
 */

// ============================ CONFIG ============================

// Google Sheet ID — the long string in your sheet URL:
// https://docs.google.com/spreadsheets/d/THIS_PART/edit
const SHEET_ID = "138iCK3wuMJXEtOA3KiJP_w4ZT_pQtgNN8lEaXS0nINM";

// Tab name inside the sheet (created automatically if missing).
const SHEET_NAME = "Submissions";

// Where enquiry emails are sent.
const OWNER_EMAIL = "nexaratraders@gmail.com";

// Sender shown on the email.
// In Resend test mode use "onboarding@resend.dev" (it can only deliver to the
// email address that owns the Resend account, i.e. nexaratraders@gmail.com).
// After verifying your own domain in Resend, change this to e.g.
// "Nexara Website <enquiry@nexaratraders.com>".
const FROM_EMAIL = "Nexara Website <onboarding@resend.dev>";

// The Resend API key is read from Script Properties (recommended):
//   Project Settings > Script Properties > add key "RESEND_API_KEY".
// You can paste it in the fallback below instead, but Script Properties is safer.
const RESEND_API_KEY_FALLBACK = "re_8PvgZJKh_2pVpE44QULg3sfUujNVDzvyu";

const HEADERS = [
  "Timestamp",
  "Form Type",
  "Name",
  "Company",
  "Email",
  "Phone",
  "Product Interest",
  "Message",
  "Page URL",
];

// ============================ HANDLERS ============================

function doPost(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};
    const row = {
      timestamp: p.submittedAt ? new Date(p.submittedAt) : new Date(),
      formType: p.formType || "Website Form",
      name: p.name || "",
      company: p.company || "",
      email: p.email || "",
      phone: p.phone || "",
      product: p.product || "",
      message: p.message || "",
      pageUrl: p.pageUrl || "",
    };

    saveToSheet_(row);
    sendEmail_(row);

    return json_({ result: "success" });
  } catch (err) {
    return json_({ result: "error", message: String(err) });
  }
}

// Lets you open the /exec URL in a browser to confirm it is live.
function doGet() {
  return json_({ result: "ok", message: "Nexara form endpoint is live." });
}

// ============================ HELPERS ============================

function saveToSheet_(row) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  sheet.appendRow([
    row.timestamp,
    row.formType,
    row.name,
    row.company,
    row.email,
    row.phone,
    row.product,
    row.message,
    row.pageUrl,
  ]);
}

function sendEmail_(row) {
  const apiKey =
    PropertiesService.getScriptProperties().getProperty("RESEND_API_KEY") ||
    RESEND_API_KEY_FALLBACK;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set (Script Properties or fallback).");
  }

  const payload = {
    from: FROM_EMAIL,
    to: [OWNER_EMAIL],
    subject: "New " + row.formType + " - " + (row.name || "Website visitor"),
    html: buildEmailHtml_(row),
  };
  if (row.email) {
    payload.reply_to = row.email;
  }

  const response = UrlFetchApp.fetch("https://api.resend.com/emails", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + apiKey },
    muteHttpExceptions: true,
    payload: JSON.stringify(payload),
  });

  const code = response.getResponseCode();
  if (code >= 300) {
    throw new Error("Resend error " + code + ": " + response.getContentText());
  }
}

function buildEmailHtml_(row) {
  const rows = [
    ["Form", row.formType],
    ["Name", row.name],
    ["Company", row.company],
    ["Email", row.email],
    ["Phone", row.phone],
    ["Product interest", row.product],
    ["Message", row.message],
    ["Submitted at", row.timestamp],
    ["Page", row.pageUrl],
  ];

  const cells = rows
    .map(function (pair) {
      const value = String(pair[1] || "-").replace(/\n/g, "<br>");
      return (
        '<tr>' +
        '<td style="padding:8px 12px;font-weight:bold;background:#faf7f0;border:1px solid #eee;white-space:nowrap;">' +
        pair[0] +
        "</td>" +
        '<td style="padding:8px 12px;border:1px solid #eee;">' +
        value +
        "</td></tr>"
      );
    })
    .join("");

  return (
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;color:#111;">' +
    '<h2 style="margin:0 0 16px;">New enquiry from nexaratraders.com</h2>' +
    '<table style="border-collapse:collapse;width:100%;font-size:14px;">' +
    cells +
    "</table>" +
    '<p style="color:#888;font-size:12px;margin-top:16px;">Sent automatically from the Nexara Traders website.</p>' +
    "</div>"
  );
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
