/* import express from "express";
import swaggerDocs from "./config/load-open-api";

import diaryRouter from "./routes/diaries"; */
import { setupServer } from "./config/server-setup";

/* const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("Someone pinged");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
  swaggerDocs(app, PORT);
}); */

const start = async () => {
  let server;
  try {
    server = await setupServer();
    await server.listen({ port: 3000 });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
