import { Dir } from "../constants/directory.constants";
import * as fs from "fs";

export const getUserById = (userId) => {
  const userData = JSON.parse(fs.readFileSync(Dir.users, "utf8"));
  return userData.users.find(({ id }) => id === userId);
};
