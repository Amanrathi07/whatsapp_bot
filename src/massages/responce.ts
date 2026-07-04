import twilio from "twilio";



const client = twilio(
  
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