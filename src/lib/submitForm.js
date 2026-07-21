// Central helper for sending website form submissions to the Google Apps Script
// web app. The web app appends the data to a Google Sheet and emails the owner
// via Resend — so no custom backend is required.
//
// Set the deployed web app URL in a .env file at the project root:
//   VITE_FORMS_ENDPOINT="https://script.google.com/macros/s/XXXXX/exec"

const ENDPOINT = import.meta.env.VITE_FORMS_ENDPOINT || "";

/**
 * Submits a form payload to the Google Apps Script web app.
 *
 * Uses URLSearchParams (application/x-www-form-urlencoded) which is a CORS
 * "simple request", so the browser does not fire a preflight OPTIONS call that
 * Apps Script cannot answer.
 *
 * @param {Record<string, string>} payload key/value fields to store & email
 * @returns {Promise<object>} parsed response ({ result: "success" })
 */
export async function submitForm(payload) {
  if (!ENDPOINT) {
    throw new Error(
      "Forms endpoint is not configured. Add VITE_FORMS_ENDPOINT to your .env file and restart the dev server."
    );
  }

  const body = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => {
    body.append(key, value == null ? "" : String(value));
  });
  body.append("submittedAt", new Date().toISOString());
  if (typeof window !== "undefined") {
    body.append("pageUrl", window.location.href);
  }

  const response = await fetch(ENDPOINT, { method: "POST", body });

  if (!response.ok) {
    throw new Error(`Submission failed (HTTP ${response.status}). Please try again.`);
  }

  let result;
  try {
    result = await response.json();
  } catch {
    // Some Apps Script deployments return an opaque/non-JSON body even on
    // success — treat a 2xx response as success in that case.
    return { result: "success" };
  }

  if (result && result.result === "error") {
    throw new Error(result.message || "Submission failed. Please try again.");
  }
  return result;
}
