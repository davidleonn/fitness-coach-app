import { Crash } from "@prisma/client";

import { prisma } from "../config/prisma-instance";

export const newCrash = async (crash: Omit<Crash, "id" | "createdAt">) => {
  const newCrash = await prisma.crash.create({
    data: crash,
  });
  return newCrash;
};

export const listCrashes = async () => {
  return prisma.crash.findMany({
    select: {
      id: true,
      type: true,
      createdAt: true,
      message: true,
    },
  });
};

export const listCrash = async (id: string) => {
  return prisma.crash.findUnique({
    where: { id },
  });
};
