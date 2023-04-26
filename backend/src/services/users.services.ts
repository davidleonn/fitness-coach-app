import { User } from "@prisma/client";
import { prisma } from "../config/prisma-instance";
import { UserUpdateDTO } from "../dtos/user";

export const newUser = async (user: Omit<User, "id">) => {
  const newUser = await prisma.user.create({
    data: user,
  });
  return newUser;
};

export const usersList = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      surname: true,
      password: true,
    },
  });
};

export const listUser = async (id: string) => {
  try {
    return prisma.user.findUnique({
      where: { id },
    });
  } catch (err: any) {
    if (err.code === "P2025") {
      return null;
    }
    throw err;
  }
};

export const updateUser = async (user: UserUpdateDTO, id: string) => {
  try {
    const updateClient = await prisma.user.update({
      where: { id },
      data: user,
    });
    return updateClient;
  } catch (err: any) {
    if (err.code === "P2025") {
      return null;
    }
    throw err;
  }
};

export const removeUser = async (id: string) => {
  try {
    return await prisma.user.delete({
      where: { id },
    });
  } catch (err: any) {
    if (err.code === "P2025") {
      return null;
    }
    throw err;
  }
};
