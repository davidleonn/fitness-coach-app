import { FastifyInstance } from "fastify";

import { setupServer } from "./config/server-setup";

const start = async () => {
  let server: FastifyInstance;
  try {
    server = await setupServer();
    await server.listen({
      port: 7000,
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
