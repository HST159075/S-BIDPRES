import nodemailer from "nodemailer";
import { logger } from "./logger";

// ── Transporter ───────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify connection
transporter.verify((error) => {
  if (error) {
    logger.warn({ error }, "Email transporter not ready");
  } else {
    logger.info("Email transporter ready");
  }
});

// ── Send OTP Email ────────────────────────────────────────────
export async function sendEmailOTP(to: string, code: string, name = "User") {
  const subject = "Your BidBD Verification Code";
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 12px; max-width: 400px;">
      <h1 style="color: #F97316;">BidBD</h1>
      <p>Hello <strong>${name}</strong>,</p>
      <p>Your verification code is:</p>
      <div style="font-size: 32px; font-weight: bold; color: #F97316; letter-spacing: 4px; padding: 10px; background: #fff7ed; text-align: center;">
        ${code}
      </div>
      <p style="font-size: 12px; color: #666;">Valid for 5 minutes.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"BidBD" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html,
    });
  } catch (error) {
    logger.error({ error }, `Failed to send OTP to ${to}`);
    throw new Error("Failed to send email.");
  }
}

// ── NEW: Send Seller Application (Object Format) ─────────────
export async function sendSellerApplicationEmail(data: {
  applicantName: string;
  applicantEmail?: string;
  applicantPhone?: string;
  idCardUrl: string;
  profilePhotoUrl: string;
  reviewLink: string;
}) {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "hsttasin90@gmail.com";
  try {
    await transporter.sendMail({
      from: `"BidBD" <${process.env.GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: "New Seller Application — BidBD",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #F97316;">New Seller Application</h2>
          <p><strong>Name:</strong> ${data.applicantName}</p>
          <p><strong>Email:</strong> ${data.applicantEmail || "N/A"}</p>
          <a href="${data.reviewLink}" style="padding: 10px 20px; background: #F97316; color: white; text-decoration: none; border-radius: 5px;">Review Now</a>
        </div>
      `,
    });
  } catch (error) {
    logger.warn({ error }, "Failed to send seller application email");
  }
}

export async function sendSellerApprovedEmail(to: string, name: string) {
  try {
    await transporter.sendMail({
      from: `"BidBD" <${process.env.GMAIL_USER}>`,
      to,
      subject: "Congratulations! Your Seller Account is Approved",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #10b981;">Welcome, ${name}!</h2>
          <p>Your application has been approved. You can now start listing items.</p>
        </div>
      `,
    });
  } catch (error) {
    logger.warn({ error }, "Failed to send approval email");
  }
}

export async function sendSellerRejectedEmail(
  to: string,
  name: string,
  reason: string,
) {
  try {
    await transporter.sendMail({
      from: `"BidBD" <${process.env.GMAIL_USER}>`,
      to,
      subject: "Seller Application Status Update",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #ef4444;">Application Update</h2>
          <p>Hello ${name}, your application was rejected.</p>
          <p><strong>Reason:</strong> ${reason}</p>
        </div>
      `,
    });
  } catch (error) {
    logger.warn({ error }, "Failed to send rejection email");
  }
}

export async function sendAuctionWinnerEmail(
  to: string,
  name: string,
  itemTitle: string,
  amount: number,
) {
  try {
    await transporter.sendMail({
      from: `"BidBD" <${process.env.GMAIL_USER}>`,
      to,
      subject: `🎉 You won: ${itemTitle}`,
      html: `<p>Congratulations ${name}! You won with a bid of ৳${amount.toLocaleString()}.</p>`,
    });
  } catch (error) {
    logger.warn({ error }, "Failed to send winner email");
  }
}


export async function sendStrikeEmail(
  to: string,
  name: string,
  strikeCount: number,
  reason: string,
) {
  const isBanned = strikeCount >= 3;
  const subject = isBanned
    ? "Account Banned — BidBD"
    : `Strike Issued (${strikeCount}/3) — BidBD`;

  try {
    await transporter.sendMail({
      from: `"BidBD" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color: #ef4444;">${isBanned ? "Account Banned" : "Strike Issued"}</h2>
          <p>Hello <strong>${name}</strong>,</p>
          <p>This is to inform you that a strike has been added to your account.</p>
          
          <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 16px; margin: 16px 0;">
            <p><strong>Reason:</strong> ${reason}</p>
            <p><strong>Current Strike Count:</strong> ${strikeCount}/3</p>
          </div>

          ${
            isBanned
              ? "<p>Since you have reached 3 strikes, your account has been permanently banned from BidBD.</p>"
              : "<p>Please follow our community guidelines to avoid further strikes. Reaching 3 strikes will result in a permanent ban.</p>"
          }
        </div>
      `,
    });
  } catch (error) {
    logger.warn({ error }, `Failed to send strike email to ${to}`);
  }
}

// lib/mailer.ts e add koro (jodi na thake)
export async function sendOutbidEmail(
  to: string,
  name: string,
  title: string,
  amount: number,
  id: string,
) {
  try {
    await transporter.sendMail({
      from: `"BidBD" <${process.env.GMAIL_USER}>`,
      to,
      subject: `Outbid: ${title}`,
      html: `<p>Hello ${name}, someone just bid ৳${amount.toLocaleString()} on ${title}. Bid again to win!</p>`,
    });
  } catch (error) {
    logger.warn({ error }, "Outbid email failed");
  }
}

export async function sendAuctionWonEmail(
  to: string,
  name: string,
  title: string,
  amount: number,
  id: string,
) {
  try {
    await transporter.sendMail({
      from: `"BidBD" <${process.env.GMAIL_USER}>`,
      to,
      subject: `Congratulations! You won ${title}`,
      html: `<h2>You won!</h2><p>Final Price: ৳${amount.toLocaleString()}</p>`,
    });
  } catch (error) {
    logger.warn({ error }, "Winner email failed");
  }
}

// lib/mailer.ts e add koro
export async function sendPaymentReminderEmail(
  to: string,
  name: string,
  title: string,
  auctionId: string,
  hoursLeft: number,
) {
  try {
    await transporter.sendMail({
      from: `"BidBD" <${process.env.GMAIL_USER}>`,
      to,
      subject: `Reminder: Payment pending for ${title}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #F97316;">Action Required!</h2>
          <p>Hello ${name}, you won <strong>${title}</strong> more than ${hoursLeft} hours ago.</p>
          <p>Please complete your payment to avoid a strike on your account.</p>
          <a href="${process.env.WEB_URL}/checkout/${auctionId}" 
             style="background: #F97316; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Pay Now
          </a>
        </div>
      `,
    });
  } catch (error) {
    logger.warn({ error }, "Reminder email failed");
  }
}
