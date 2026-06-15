import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, email, phone, company, message, date, timeSlot } = body;

    // Validate required fields
    if (!type || !name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Gmail SMTP transport config using app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'headsandtailsorg@gmail.com',
        pass: 'ngckztkqrxtpjpfq', // gmail app password
      },
    });

    const isConsultation = type === 'consultation';
    const emailSubject = isConsultation
      ? `💬 New Free Consultation Request: ${name}`
      : `📅 New Live Demo Booking: ${name}`;

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 16px; background-color: #ffffff; color: #0f172a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <h2 style="color: #0f172a; border-bottom: 2px solid #f4f4f5; padding-bottom: 12px; margin-top: 0; font-size: 20px; font-weight: 700;">
          ${isConsultation ? '💬 Free Consultation Details' : '📅 Live Demo Details'}
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tbody>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #71717a; width: 140px; border-bottom: 1px solid #fafafa; font-size: 14px;">Name:</td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #fafafa; font-size: 14px; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #71717a; border-bottom: 1px solid #fafafa; font-size: 14px;">Email:</td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #fafafa; font-size: 14px; font-weight: 500;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #71717a; border-bottom: 1px solid #fafafa; font-size: 14px;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #fafafa; font-size: 14px; font-weight: 500;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #71717a; border-bottom: 1px solid #fafafa; font-size: 14px;">Company:</td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #fafafa; font-size: 14px; font-weight: 500;">${company || 'Not specified'}</td>
            </tr>
            ${isConsultation ? `
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #71717a; vertical-align: top; font-size: 14px;">Message Details:</td>
              <td style="padding: 10px 0; color: #3f3f46; font-size: 14px; line-height: 1.6; white-space: pre-wrap; font-weight: 400;">${message || 'No additional details provided.'}</td>
            </tr>
            ` : `
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #71717a; border-bottom: 1px solid #fafafa; font-size: 14px;">Date:</td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #fafafa; font-size: 14px; font-weight: 500;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #71717a; font-size: 14px;">Time Slot:</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 500;">${timeSlot}</td>
            </tr>
            `}
          </tbody>
        </table>
      </div>
    `;

    // Send the email to headsandtailsorg@gmail.com
    await transporter.sendMail({
      from: '"Head & Tail Tech Notification" <headsandtailsorg@gmail.com>',
      to: 'headsandtailsorg@gmail.com',
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Nodemailer error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
