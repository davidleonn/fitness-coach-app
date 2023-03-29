import express from "express";
import loadOpenApi from "./load-open-api";
import { pingRoutes } from "../routes/ping.routes";
import router from "../routes/diaries";

const server = express();

export async function setupServer() {
  await loadOpenApi(server, 3000);

  server.use(pingRoutes);
  server.use(router);

  return server;
}
