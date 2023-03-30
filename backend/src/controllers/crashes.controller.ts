import { listCrash, listCrashes, newCrash } from "../services";
import { Not_Found_Error } from "../errors";
import * as CrashInputDTO from "../dtos/crash/crash-input.dto.json";

export const postCrash = async (payload: CrashInputDTO) => {
  return await newCrash(payload);
};

export const getCrashes = async () => {
  return await listCrashes();
};

export const getCrash = async (id: string) => {
  const crash = await listCrash(id);
  if (!crash) {
    throw new Not_Found_Error();
  }
  return crash;
};
