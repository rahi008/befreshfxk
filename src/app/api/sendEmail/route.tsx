import { render } from "@react-email/render";
import WelcomeTemplate from "@/app/email/welcomeMail";
import { sendEmail } from "@/utils/email";
import { NextResponse } from "next/server";
import { emailReq } from "@/models/semex";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log(data);
    await sendEmail({
      to: data.emailTo,
      subject: data.emailSub,
      html: data.body,
    });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}