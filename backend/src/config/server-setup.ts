import fastify from "fastify";
import { loadOpenApi } from "./load-open-api";
import { loadErrorHandler } from "./load-error-handler";
import { loadSecurity } from "./load-security";
import { loadI18n } from "../i18n";
import { crashesRoutes, pingRoutes, userRoutes } from "../routes";

const server = fastify({ logger: true });

export async function setupServer() {
  loadSecurity(server);
  loadI18n(server);
  loadErrorHandler(server);
  await loadOpenApi(server);

  server.register(pingRoutes);
  server.register(crashesRoutes);
  server.register(userRoutes);

  return server;
}
