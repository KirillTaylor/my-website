"use server";

import { NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { getWebsiteName } from "utils/utils";

export async function GET() {
    return NextResponse.json({ timestamp: Date.now() });
}

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, phone, message } = body;
    const title = `[Website Contact Form] New message from ${name}`;

    const mailerSend = new MailerSend({
        apiKey: process.env.MAILERSEND_API_TOKEN!,
    });

    const sentFrom = new Sender("info@test-p7kx4xwmyz7g9yjr.mlsender.net", getWebsiteName());

    const recipients = [
        new Recipient(process.env.MAILERSEND_TO_EMAIL!, getWebsiteName())
    ];

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject(title)
        .setHtml(`
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `)
        .setText(`
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ ...body, timestamp: Date.now() });
}