import { Client } from "@prisma/client";
import { prisma } from "../config/prisma-instance";
import { ClientUpdateDTO } from "../dtos/client";

export const newClient = async (client: Omit<Client, "id" | "createdAt">) => {
  const newClient = await prisma.client.create({
    data: client,
  });
  return newClient;
};

export const clientsList = async () => {
  return prisma.client.findMany({
    select: {
      id: true,
      name: true,
      surname: true,
      age: true,
      email: true,
      objective: true,
      routine: true,
      description: true,
    },
  });
};

export const listClient = async (id: string) => {
  try {
    return prisma.client.findUnique({
      where: { id },
    });
  } catch (err: any) {
    if (err.code === "P2025") {
      return null;
    }
    throw err;
  }
};

export const updateClient = async (client: ClientUpdateDTO, id: string) => {
  try {
    const updateClient = await prisma.client.update({
      where: { id },
      data: client,
    });
    return updateClient;
  } catch (err: any) {
    if (err.code === "P2025") {
      return null;
    }
    throw err;
  }
};

export const removeClient = async (id: string) => {
  try {
    return await prisma.client.delete({
      where: { id },
    });
  } catch (err: any) {
    if (err.code === "P2025") {
      return null;
    }
    throw err;
  }
};
