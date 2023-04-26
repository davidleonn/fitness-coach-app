import { Not_Found_Error } from "../errors";
import { ClientInputDTO, ClientUpdateDTO } from "../dtos/client";
import {
  listClient,
  newClient,
  removeClient,
  updateClient,
  clientsList,
} from "../services";

export const postClient = async (payload: ClientInputDTO) => {
  return await newClient({
    ...payload,
    objective: payload.objective || null,
    description: payload.description || null,
  });
};

export const getClients = async () => {
  return await clientsList();
};

export const getClient = async (id: string) => {
  const client = await listClient(id);
  if (!client) {
    throw new Not_Found_Error();
  }
  return client;
};

export const patchClient = async (payload: ClientUpdateDTO, id: string) => {
  const client = await updateClient(payload, id);
  if (!client) {
    throw new Not_Found_Error();
  }
  return client;
};

export const deleteClient = async (id: string) => {
  const client = await removeClient(id);
  if (!client) {
    throw new Not_Found_Error();
  }
  return client;
};
