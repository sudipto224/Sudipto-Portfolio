import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Basic in-memory rate protection per IP (sufficient for a portfolio contact form).
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 3;
const attempts = new Map<string, { count: number; first: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const record = attempts.get(ip);
  if (!record || now - record.first > RATE_LIMIT_WINDOW) {
    attempts.set(ip, { count: 1, first: now });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count += 1;
  return true;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body as {
      name?: unknown;
      email?: unknown;
      subject?: unknown;
      message?: unknown;
      honeypot?: unknown;
    };

    // Honeypot: any value in the hidden field means a bot submission.
    if (honeypot !== undefined && String(honeypot).trim() !== '') {
      return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 });
    }

    const nameStr = String(name ?? '').trim();
    const emailStr = String(email ?? '').trim();
    const subjectStr = String(subject ?? '').trim();
    const messageStr = String(message ?? '').trim();

    if (!nameStr) return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
    if (!emailStr) return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
    if (!isValidEmail(emailStr)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    if (!subjectStr) return NextResponse.json({ error: 'Subject is required.' }, { status: 400 });
    if (!messageStr) return NextResponse.json({ error: 'Message is required.' }, { status: 400 });

    const ip = (request.headers.get('x-forwarded-for') || 'unknown')
      .split(',')[0]
      .trim() || 'unknown';
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'sudiptodas8900@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resend || !fromEmail) {
      // Email service is not configured. Never fake a successful delivery.
      return NextResponse.json(
        { error: 'Email delivery is not configured on the server.' },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: emailStr,
      subject: `[Portfolio Contact] ${subjectStr}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height: 1.6; color: #1A1816; padding: 24px;">
            <div style="max-width: 660px; margin: 0 auto; border: 1px solid #D9D6CE; border-radius: 16px; overflow: hidden;">
              <div style="background: #0E7C6B; color: #F8F8F5; padding: 24px 28px;">
                <h2 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">New portfolio contact message</h2>
              </div>
              <div style="padding: 24px 28px; background: #FFFFFF;">
                <p style="margin: 0 0 16px; font-size: 15px;">You received a new message from your portfolio contact form.</p>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #EDE9DD; font-weight: 700; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #9B968C; width: 110px;">Full name</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #EDE9DD; font-size: 15px; color: #1A1816;">${escapeHtml(nameStr)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #EDE9DD; font-weight: 700; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #9B968C;">Email address</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #EDE9DD; font-size: 15px; color: #1A1816;">${escapeHtml(emailStr)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #EDE9DD; font-weight: 700; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #9B968C;">Subject</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #EDE9DD; font-size: 15px; color: #1A1816;">${escapeHtml(subjectStr)}</td>
                  </tr>
                </table>
                <div style="margin-top: 20px;">
                  <p style="font-weight: 700; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #9B968C; margin: 0 0 8px;">Message</p>
                  <div style="background: #F2F0E8; border: 1px solid #EDE9DD; border-radius: 10px; padding: 16px; font-size: 15px; color: #1A1816; white-space: pre-wrap; word-break: break-word;">${escapeHtml(messageStr)}</div>
                </div>
                <p style="margin: 24px 0 0; font-size: 13px; color: #6E6A62;">Reply directly to this email to respond to ${escapeHtml(nameStr)} (${escapeHtml(emailStr)}).</p>
              </div>
              <div style="background: #F2F0E8; padding: 16px 28px; font-size: 12px; color: #9B968C; border-top: 1px solid #EDE9DD;">
                Sudipto Das — Full Stack Portfolio &middot; sudiptodas.vercel.app
              </div>
            </div>
          </body>
        </html>
      `,
      text: `New portfolio contact message\n\nFull name: ${nameStr}\nEmail address: ${emailStr}\nSubject: ${subjectStr}\n\nMessage:\n${messageStr}\n\nReply to: ${emailStr}`,
    });

    return NextResponse.json({ ok: true, message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later or email sudiptodas8900@gmail.com directly.' },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
