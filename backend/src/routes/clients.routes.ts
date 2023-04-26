import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  ClientInputDTO,
  clientInputDTO,
  clientOutputDTO,
  ClientOutputDTO,
  clientUpdateDTO,
  ClientUpdateDTO,
} from "../dtos/client";
import {
  postClient,
  getClients,
  getClient,
  patchClient,
  deleteClient,
} from "../controllers";

const postClientsSchema = {
  tags: ["Clients"],
  body: clientInputDTO,
  response: {
    200: clientOutputDTO,
  },
};

const getClientsSchema = {
  tags: ["Clients"],
  response: {
    200: {
      type: "array",
      items: clientOutputDTO,
    },
  },
};

const getClientschema = {
  tags: ["Clients"],
  params: {
    id: { type: "string" },
  },
  response: {
    200: clientOutputDTO,
  },
};

const patchClientsSchema = {
  tags: ["Clients"],
  body: clientUpdateDTO,
  params: {
    id: { type: "string" },
  },
  response: {
    200: clientOutputDTO,
  },
};

const deleteClientsSchema = {
  tags: ["Clients"],
  params: {
    id: { type: "string" },
  },
  response: {
    200: clientOutputDTO,
  },
};

export const clientRoutes = (
  fastify: FastifyInstance,
  _: any,
  done: () => void
) => {
  fastify.post(
    "/clients",
    { schema: postClientsSchema },
    async (
      request: FastifyRequest<{
        Body: ClientInputDTO;
      }>,
      reply: FastifyReply
    ) => {
      const input = request.body;
      try {
        const myNewClient = await postClient(input);
        return reply.code(201).send(myNewClient);
      } catch (err) {
        console.log(err);
        return reply.code(500).send(err);
      }
    }
  );
  fastify.get(
    "/clients",
    { schema: getClientsSchema },
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const listClients = await getClients();
        return reply.code(200).send(listClients);
      } catch (err) {
        console.log(err);
        return reply.code(500).send(err);
      }
    }
  );

  fastify.get(
    "/clients/:id",
    { schema: getClientsSchema },
    async (
      request: FastifyRequest<{
        Params: { id: string };
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.params;

      const client = await getClient(id);
      return reply.code(200).send(client);
    }
  );

  fastify.patch(
    "/clients/:id",
    { schema: patchClientsSchema },
    async (
      request: FastifyRequest<{
        Body: ClientUpdateDTO;
        Params: { id: string };
      }>,
      reply: FastifyReply
    ) => {
      const update = request.body;
      const { id } = request.params;

      const myUpdatedClient = await patchClient(update, id);
      return reply.code(201).send(myUpdatedClient);
    }
  );

  fastify.delete(
    "/clients/:id",
    { schema: deleteClientsSchema },
    async (
      request: FastifyRequest<{
        Params: { id: string };
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.params;

      const client = await deleteClient(id);
      return reply.code(200).send(client);
    }
  );

  done();
};
