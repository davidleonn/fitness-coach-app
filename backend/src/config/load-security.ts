import cors from "@fastify/cors";
import { FastifyInstance } from "fastify";

export const loadSecurity = (server: FastifyInstance) => {
  server.register(cors),
    {
      origin: "*",
      preflight: false,
    };
};
