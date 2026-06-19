import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, division, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the email transporter (Using Gmail as an example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Construct the email for Areeb & Areel Corporation
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL, // Send it to your own corporate email
      replyTo: email,
      subject: `New Corporate Inquiry: ${division} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 40px; border-top: 4px solid #D4AF37;">
          <h2 style="color: #D4AF37; text-transform: uppercase; letter-spacing: 2px;">Areeb & Areel Corporation</h2>
          <p style="color: #cccccc;">A new high-level inquiry has been submitted via the corporate portal.</p>
          <hr style="border-color: #333333; margin: 20px 0;" />
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Contact Email:</strong> ${email}</p>
          <p><strong>Target Division:</strong> ${division}</p>
          <div style="background-color: #1a1a1a; padding: 20px; border-left: 3px solid #D4AF37; margin-top: 20px;">
            <p style="margin: 0; color: #eeeeee; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Inquiry transmitted successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json({ error: 'Failed to transmit inquiry.' }, { status: 500 });
  }
}