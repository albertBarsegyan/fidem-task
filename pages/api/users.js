import * as fs from "fs";
import { Dir } from "../../src/constants/directory.constants";

export default function handler(req, res) {
  try {
    const usersData = JSON.parse(fs.readFileSync(Dir.users, "utf8"));
    const reqBody = req.body;
    const idFromQuery = req.query.id;

    /**
     * get user by id
     */
    if (req.method === "GET" && idFromQuery) {
      const userById = usersData.users.find(({ id }) => {
        return id === idFromQuery;
      });

      return res.status(200).json(userById);
    }

    /**
     * get all users
     */
    if (req.method === "GET") {
      return res.status(200).json(usersData.users);
    }

    /**
     * add user
     */
    if (req.method === "POST") {
      usersData.users.push(reqBody);

      fs.writeFile(Dir.users, JSON.stringify(usersData, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(usersData.users);
      });
    }

    /**
     * remove user
     */
    if (req.method === "DELETE") {
      usersData.users = usersData.users.filter(({ id }) => id !== reqBody.id);

      fs.writeFile(Dir.users, JSON.stringify(usersData, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(usersData.users);
      });
    }

    /**
     * update user
     */
    if (req.method === "PUT") {
      usersData.users = usersData.users.map((userData) => {
        if (userData.id === reqBody.id) {
          return {
            ...userData,
            ...reqBody,
          };
        }
        return userData;
      });

      fs.writeFile(Dir.users, JSON.stringify(usersData, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(usersData.users);
      });
    }
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
