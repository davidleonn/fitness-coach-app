import { Not_Found_Error } from "../errors";
import { UserInputDTO, UserUpdateDTO } from "../dtos/user";
import {
  listUser,
  newUser,
  removeUser,
  updateUser,
  usersList,
} from "../services";

export const postUser = async (payload: UserInputDTO) => {
  return await newUser({
    ...payload,
  });
};

export const getUsers = async () => {
  return await usersList();
};

export const getUser = async (id: string) => {
  const user = await listUser(id);
  if (!user) {
    throw new Not_Found_Error();
  }
  return user;
};

export const patchUser = async (payload: UserUpdateDTO, id: string) => {
  const user = await updateUser(payload, id);
  if (!user) {
    throw new Not_Found_Error();
  }
  return user;
};

export const deleteUser = async (id: string) => {
  const user = await removeUser(id);
  if (!user) {
    throw new Not_Found_Error();
  }
  return user;
};
