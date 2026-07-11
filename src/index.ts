import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendResponse } from "./massages/responce";
import { prismaClient } from "../lib/prisma";

dotenv.config();

const app = express();

app.use(cors());

// Twilio sends form data
app.use(express.urlencoded({ extended: false }));

// Optional if you also test with JSON
app.use(express.json());

app.post("/webhook", async (req, res) => {
  console.log(req.body);

  const body = req.body.Body;
  const from = req.body.From;
  await prismaClient.user.findFirst({
    where:{
      phone:from
    }
  })

  
  try {
    if (body === "Hello") {
      await sendResponse(from, "Hello 👋");
    } else if (body === "Hi") {
      await sendResponse(from, "Hi! How are you?");
    } else {
      await sendResponse(from, `You said: ${body}`);
    }

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});