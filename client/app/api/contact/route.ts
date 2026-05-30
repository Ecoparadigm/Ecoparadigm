import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, source, contactInfo, service } = await req.json();

    if (!name) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions;

    if (source === "popup") {
      // Logic for the Homepage Popup
      const isEmail = contactInfo.includes("@");
      
      mailOptions = {
        from: `"${name} (via Ecoparadigm Popup)" <${process.env.EMAIL_USER}>`,
        to: "nikhil.4002.50.82@gmail.com",
        replyTo: isEmail ? contactInfo : process.env.EMAIL_USER,
        subject: `New Lead: Interested in ${service || "General"}`,
        text: `
A new lead submitted the homepage popup form.

Name: ${name}
Contact Info Provided: ${contactInfo}
Interested Service: ${service}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #059669; margin-top: 0;">Homepage Lead Capture</h2>
            <p style="font-size: 16px; color: #333;">A new visitor has requested a free consultation via the popup form.</p>
            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Contact Info:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #059669;">${contactInfo}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Service Interest:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
              </tr>
            </table>
          </div>
        `,
      };
    } else {
      // Standard Contact Form Logic
      if (!email || !message) {
        return NextResponse.json(
          { error: "Email and message are required for contact form." },
          { status: 400 }
        );
      }

      mailOptions = {
        from: `"${name} (via Ecoparadigm)" <${process.env.EMAIL_USER}>`,
        to: "nikhil.4002.50.82@gmail.com",
        replyTo: email,
        subject: `New Contact Request from ${name}`,
        text: `
You have received a new message from the website contact form:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h3 style="color: #0369a1; margin-top: 0;">New Contact Request</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #444;">${message}</p>
          </div>
        `,
      };
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
