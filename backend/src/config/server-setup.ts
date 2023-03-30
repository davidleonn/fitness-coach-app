import express from "express";

import diaryRouter from "../routes/diaries.routes";

const server = express();
server.use(express.json());

export async function setupServer() {
  server.get("/ping", (_req, res) => {
    console.log("Someone pinged");
    res.send("pong");
  });
  server.use("/diaries", diaryRouter);

  return server;
}
