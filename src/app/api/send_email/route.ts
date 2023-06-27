import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

type ContactForm = {
  email: string;
  subject: string;
  message: string;
};

export const POST = async (req: Request, res: Response) => {
  const { email, subject, message } = (await req.json()) as ContactForm;
  const sendGridApiKey = process.env.SENDGRID_API_KEY as string;
  const myEmail = process.env.MY_EMAIL as string;

  try {
    sgMail.setApiKey(sendGridApiKey);
    const msg = {
      to: myEmail,
      from: myEmail,
      subject: subject,
      text: message,
      html: message,
      reply_to: email,
    };
    await sgMail.send(msg);
    return NextResponse.json({}, { status: 200 });
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.body);
    }
    return NextResponse.json({}, { status: 500 });
  }
};
