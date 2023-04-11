import { FastifyInstance } from "fastify";
import { userInputDTO, userOutputDTO, userUpdateDTO } from "../dtos/user";

const postUsersSchema = {
  tags: ["Users"],
  body: userInputDTO,
  response: {
    200: userOutputDTO,
  },
};

const getUsersSchema = {
  tags: ["users"],
  response: {
    200: {
      type: "array",
      items: userOutputDTO,
    },
  },
};

const getUserSchema = {
  tags: ["users"],
  params: {
    id: { type: "string" },
  },
  response: {
    200: userOutputDTO,
  },
};

const patchUsersSchema = {
  tags: ["users"],
  body: userUpdateDTO,
  params: {
    id: { type: "string" },
  },
  response: {
    200: userOutputDTO,
  },
};

const deleteUserSchema = {
  tags: ["users"],
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
  done();
};
