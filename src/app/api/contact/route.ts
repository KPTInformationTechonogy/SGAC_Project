import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Fail-safe payload validation checks
    if (!name || !email || !message) {
    return NextResponse.json(
        { error: "Required structural information fields are missing." },
        { status: 400 }
    );
    }

    // Initialize the Nodemailer secure transport network layer
    const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    });

    // Structure the institutional email payload matrix
    const mailOptions = {
    from: `"SGAC Secure Gateway" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_RECEIVER,
    replyTo: email, // Direct reply capabilities to the inquirer
    subject: `💼 Institutional Partnership Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not Provided"}\nMessage: ${message}`,
    html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 30px; border: 1px solid #e2e8f0; border-radius: 16px; max-width: 600px; margin: 20px auto; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        
        <div style="padding-bottom: 20px; border-bottom: 3px solid #F9A825; margin-bottom: 24px;">
            <span style="font-size: 24px; font-weight: 900; letter-spacing: -0.025em; color: #0B5D1E;">
            SG<span style="color: #F9A825;">AC</span>
            </span>
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #718096; font-weight: bold; margin-top: 4px;">
            Enterprise Lead Communications Network
            </div>
        </div>
        
        <p style="font-size: 14px; color: #4a5568; line-height: 1.6; margin-bottom: 24px;">
            A fresh institutional procurement or agro-partnership communication query has crossed the web perimeter gateway. See validation metadata details below:
        </p>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 28px;">
            <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; font-weight: 700; color: #2d3748; width: 140px;">Full Legal Name:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;">${name}</td>
            </tr>
            <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; font-weight: 700; color: #2d3748;">Electronic Mail:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; color: #0B5D1E; font-weight: 600;">
                <a href="mailto:${email}" style="color: #0B5D1E; text-decoration: none;">${email}</a>
            </td>
            </tr>
            <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; font-weight: 700; color: #2d3748;">Communication Line:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;">${phone || `<span style="color: #a0aec0; font-style: italic;">Not specified</span>`}</td>
            </tr>
        </table>
        
        <div style="background-color: #f7fafc; border-left: 4px solid #0B5D1E; padding: 20px; border-radius: 4px 8px 8px 4px;">
            <h4 style="margin: 0 0 10px 0; color: #0B5D1E; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: bold;">
            Procurement & Intent Specifications:
            </h4>
            <p style="margin: 0; color: #2d3748; font-size: 14px; white-space: pre-line; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 35px; border-top: 1px solid #edf2f7; padding-top: 20px; text-align: center;">
            <p style="font-size: 11px; color: #a0aec0; margin: 0; line-height: 1.5;">
            Automated system transmission. Reply to this mail directly to initiate continuous workflow correspondence with the lead applicant.
            </p>
        </div>
        
        </div>
    `,
    };

    // Fire the email packet array over SMTP
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
    { success: true, message: "Communication package safely transmitted across network lines." },
    { status: 200 }
    );
    
} catch (error: unknown) {
    // Type narrowing protection to appease strict ESLint rules
    if (error instanceof Error) {
    console.error("Backplane Core Pipeline Email Dispatch Fault Trace:", error.message);
    } else {
    console.error("Backplane Core Pipeline Email Dispatch Fault Trace: An unknown parsing anomaly occurred.");
    }

    return NextResponse.json(
    { error: "Internal processing error occurred while managing communications delivery." },
    { status: 500 }
    );
}
}