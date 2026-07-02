import express from "express";

import cors from "cors";
import { prismaClient } from "../lib/prisma";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const response = await prismaClient.user.create({
    data: {
      name: "John Doe",
      phone: "1234567890",
    },
  });
  res.json({ message: "Hello, World!", response: response });
});


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); 