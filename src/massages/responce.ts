import twilio from "twilio";



const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function sendResponse(to: string, body: string) {
  try {
    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      to:"whatsapp:+918307940360",
      body,
    });

    console.log("Message sent:", message.sid);
  } catch (err) {
    console.error("Failed to send message:", err);
  }
}