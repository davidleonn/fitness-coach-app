import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  UserInputDTO,
  userInputDTO,
  userOutputDTO,
  UserOutputDTO,
  userUpdateDTO,
  UserUpdateDTO,
} from "../dtos/user";
import {
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser,
} from "../controllers";

const postUsersSchema = {
  tags: ["Users"],
  body: userInputDTO,
  response: {
    200: userOutputDTO,
  },
};

const getUsersSchema = {
  tags: ["Users"],
  response: {
    200: {
      type: "array",
      items: userOutputDTO,
    },
  },
};

const getUserSchema = {
  tags: ["Users"],
  params: {
    id: { type: "string" },
  },
  response: {
    200: userOutputDTO,
  },
};

const patchUsersSchema = {
  tags: ["Users"],
  body: userUpdateDTO,
  params: {
    id: { type: "string" },
  },
  response: {
    200: userOutputDTO,
  },
};

const deleteUserSchema = {
  tags: ["Users"],
  params: {
    id: { type: "string" },
  },
  response: {
    200: userOutputDTO,
  },
};

export const userRoutes = (
  fastify: FastifyInstance,
  _: any,
  done: () => void
) => {
  fastify.post(
    "/users",
    { schema: postUsersSchema },
    async (
      request: FastifyRequest<{
        Body: UserInputDTO;
      }>,
      reply: FastifyReply
    ) => {
      const input = request.body;
      try {
        const myNewUser = await postUser(input);
        return reply.code(201).send(myNewUser);
      } catch (err) {
        console.log(err);
        return reply.code(500).send(err);
      }
    }
  );
  fastify.get(
    "/users",
    { schema: getUsersSchema },
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const listUsers = await getUsers();
        return reply.code(200).send(listUsers);
      } catch (err) {
        console.log(err);
        return reply.code(500).send(err);
      }
    }
  );

  fastify.get(
    "/users/:id",
    { schema: getUserSchema },
    async (
      request: FastifyRequest<{
        Params: { id: string };
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.params;

      const user = await getUser(id);
      return reply.code(200).send(user);
    }
  );

  fastify.patch(
    "/users/:id",
    { schema: patchUsersSchema },
    async (
      request: FastifyRequest<{
        Body: UserUpdateDTO;
        Params: { id: string };
      }>,
      reply: FastifyReply
    ) => {
      const update = request.body;
      const { id } = request.params;

      const myUpdatedUser = await patchUser(update, id);
      return reply.code(201).send(myUpdatedUser);
    }
  );

  fastify.delete(
    "/users/:id",
    { schema: deleteUserSchema },
    async (
      request: FastifyRequest<{
        Params: { id: string };
      }>,
      reply: FastifyReply
    ) => {
      const { id } = request.params;

      const user = await deleteUser(id);
      return reply.code(200).send(user);
    }
  );

  done();
};
