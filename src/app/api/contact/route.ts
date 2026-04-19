// =============================================================================
// CONTACT FORM API — sends lead notifications directly via SMTP
// Recipients: moshe@flycomm.co, yehuda@flycomm.co, amir@flycomm.co, yehudit@flycomm.co
//
// Configure SMTP in .env.local:
//   SMTP_HOST=smtp.gmail.com        (or your mail provider)
//   SMTP_PORT=587
//   SMTP_USER=noreply@flycomm.co    (sender account)
//   SMTP_PASS=your-app-password
// =============================================================================

import nodemailer from "nodemailer";

const RECIPIENTS = [
  "moshe@flycomm.co",
  "yehuda@flycomm.co",
  "amir@flycomm.co",
  "yehudit@flycomm.co",
];

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  market: string;
  message: string;
  website?: string; // honeypot field — should always be empty
}

// --- Spam detection helpers ---

/** Honeypot: bots fill this hidden field, real users never see it */
function isHoneypotFilled(value?: string): boolean {
  return !!value && value.trim().length > 0;
}

/** Check if a string looks like gibberish (no spaces, random chars) */
function looksLikeGibberish(text: string): boolean {
  const trimmed = text.trim();
  // Very short inputs are fine (e.g. "Li Wei", "IBM")
  if (trimmed.length < 6) return false;
  // Real names/companies have spaces or hyphens or dots
  const hasWordSeparator = /[\s\-.]/.test(trimmed);
  // Ratio of uppercase to total chars — gibberish often mixes case randomly
  const uppercaseRatio = (trimmed.match(/[A-Z]/g) || []).length / trimmed.length;
  const hasExcessiveMixedCase = uppercaseRatio > 0.3 && uppercaseRatio < 0.9 && trimmed.length > 8;
  // Consonant clusters — long runs without vowels are a red flag
  const hasLongConsonantCluster = /[bcdfghjklmnpqrstvwxyz]{5,}/i.test(trimmed);

  if (!hasWordSeparator && trimmed.length > 12) return true;
  if (hasExcessiveMixedCase && !hasWordSeparator) return true;
  if (hasLongConsonantCluster) return true;
  return false;
}

/** Check for suspicious email patterns */
function isSuspiciousEmail(email: string): boolean {
  // Emails with excessive dots in the local part (used to bypass filters)
  const localPart = email.split("@")[0] || "";
  const dotCount = (localPart.match(/\./g) || []).length;
  if (dotCount >= 5) return true;
  return false;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Basic validation
    if (!body.name || !body.email || !body.company) {
      return Response.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return Response.json({ error: "Invalid email address." }, { status: 400 });
    }

    // --- Spam checks (return 200 to not tip off bots) ---
    if (isHoneypotFilled(body.website)) {
      console.log("🚫 SPAM (honeypot):", body.name, body.email);
      return Response.json({ success: true }); // silent reject
    }

    if (looksLikeGibberish(body.name) || looksLikeGibberish(body.company)) {
      console.log("🚫 SPAM (gibberish):", body.name, body.company, body.email);
      return Response.json({ success: true }); // silent reject
    }

    if (isSuspiciousEmail(body.email)) {
      console.log("🚫 SPAM (suspicious email):", body.email);
      return Response.json({ success: true }); // silent reject
    }

    const timestamp = new Date().toISOString();

    // --- Send email via SMTP ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Flycomm Website" <${process.env.SMTP_USER || "noreply@flycomm.co"}>`,
      to: RECIPIENTS.join(", "),
      replyTo: body.email,
      subject: `New Lead: ${body.name} — ${body.company}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;">
          <h2 style="color:#0c1222;border-bottom:2px solid #00a6f4;padding-bottom:10px;">
            New Contact Form Submission
          </h2>
          <table style="border-collapse:collapse;width:100%;margin:20px 0;">
            <tr style="background:#f8f9fa;">
              <td style="padding:10px 14px;font-weight:bold;color:#333;width:120px;">Name</td>
              <td style="padding:10px 14px;color:#555;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:bold;color:#333;">Email</td>
              <td style="padding:10px 14px;"><a href="mailto:${body.email}" style="color:#00a6f4;">${body.email}</a></td>
            </tr>
            <tr style="background:#f8f9fa;">
              <td style="padding:10px 14px;font-weight:bold;color:#333;">Company</td>
              <td style="padding:10px 14px;color:#555;">${body.company}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:bold;color:#333;">Market</td>
              <td style="padding:10px 14px;color:#555;">${body.market || "Not specified"}</td>
            </tr>
            <tr style="background:#f8f9fa;">
              <td style="padding:10px 14px;font-weight:bold;color:#333;">Message</td>
              <td style="padding:10px 14px;color:#555;">${body.message || "—"}</td>
            </tr>
          </table>
          <p style="color:#999;font-size:12px;">Submitted via flycomm.co · ${timestamp}</p>
        </div>
      `,
    });

    // Also log to console
    console.log("📩 NEW LEAD:", body.name, body.email, body.company);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
