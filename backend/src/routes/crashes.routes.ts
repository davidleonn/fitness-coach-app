import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import {
  postCrash,
  getCrashes,
  getCrash,
} from "../controllers/crashes.controller";
import { CrashInputDTO, crashInputDTO, crashOutputDTO } from "../dtos/crash";

const postCrashesSchema = {
  tags: ["Crashes"],
  body: crashInputDTO,
  response: {
    200: crashOutputDTO,
  },
};

const getCrashesSchema = {
  tags: ["Crashes"],
  response: {
    200: {
      type: "array",
      items: crashOutputDTO,
    },
  },
};

const getCrashSchema = {
  tags: ["Crashes"],
  params: {
    id: { type: "string" },
  },
  response: {
    200: crashOutputDTO,
  },
};

export const crashesRoutes = (
  fastify: FastifyInstance,
  _: any,
  done: () => void
) => {
  fastify.post(
    "/crashes",
    { schema: postCrashesSchema },
    async (
      request: FastifyRequest<{
        Body: CrashInputDTO;
      }>,
      reply: FastifyReply
    ) => {
      const input = request.body;
      try {
        const myNewCrash = await postCrash(input);
        return reply.code(201).send(myNewCrash);
      } catch (e) {
        console.log(e);
        return reply.code(500).send(e);
      }
    }
  );

  fastify.get(
    "/crashes",
    { schema: getCrashesSchema },
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const listCrashes = await getCrashes();
        return reply.code(200).send(listCrashes);
      } catch (e) {
        console.log(e);
        return reply.code(500).send(e);
      }
    }
  );

  fastify.get(
    "/crashes/:id",
    { schema: getCrashSchema },
    async (
      request: FastifyRequest<{
        Params: { id: string };
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.params;

      const crash = await getCrash(id);
      return reply.code(200).send(crash);
    }
  );

  done();
};
