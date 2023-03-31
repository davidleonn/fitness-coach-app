import { FastifyInstance } from "fastify";

const getPingSchema = {
  tags: ["Ping"],
  response: {
    200: {
      title: "PingOutputDTO",
      type: "string",
    },
  },
};

export const pingRoutes = (
  fastify: FastifyInstance,
  _: any,
  done: () => void
) => {
  fastify.get("/ping", { schema: getPingSchema }, (_, reply) => {
    return reply.code(200).send("pong");
  });
  done();
};
