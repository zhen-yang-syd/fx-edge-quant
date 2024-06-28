import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from "@sendgrid/mail";
import { EMAIL_TOKEN_SECRET_KEY } from '../../utils/index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const values = req.body;
    const { title, email, content, phone } = values;
    if (!EMAIL_TOKEN_SECRET_KEY) return res.status(200).json({ status: 200, message: "Error sending email", data: { sent: "No email token secret key" } });
    sgMail.setApiKey(EMAIL_TOKEN_SECRET_KEY)
    const msg = {
      from: 'info@midasmarkets.group', // Change to your recipient
      to: 'info@edgequant.com.au', // Change to your verified sender
      subject: `EdgeQuant - ${title} - ${email}`,
      text: `${content}`,
      html: `<h3>From - ${email}</h3>
      <h5>Phone - ${phone}</h5>
      <h5>Title - ${title}</h5>
      <p>${content}</p>`,
    }
    const result = await sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ status: 200, message: "Email sent", data: { sent: true } });
        console.log('Email sent')
      })
      .catch((error) => {
        res.status(200).json({ status: 200, message: "Sent fail", data: { sent: false } });
        console.error(error)
      })
  }
}
