import express from "express";

import { postCrash, getCrashes, getCrash } from "../controllers";
import { crashInputDTO, crashOutputDTO } from "src/dtos/crash";

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
  express: express.Router,
  _: any,
  done: () => void
) => {
  express.post("/crashes");
};
