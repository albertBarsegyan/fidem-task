import { createContext, useContext, useEffect, useState } from "react";
import {
  getDataFromStorage,
  saveDataToStorage,
} from "../helpers/storage.helpers";
import { nanoid } from "nanoid";
import { SearchBy } from "../constants/searchVariants.constants";

const UsersContext = createContext(null);

const useProvideUsers = () => {
  const usersFromLocalStorage = getDataFromStorage("users") || [];
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    const newUserData = { id: nanoid(), ...userData };

    setUsers((prev) => {
      prev.push(newUserData);
      return prev;
    });

    saveDataToStorage("users", users);
  };

  const removeUser = (userId) => {
    const filteredUsers = users.filter(({ id }) => id !== userId);
    setUsers(filteredUsers);

    saveDataToStorage("users", filteredUsers);
  };

  const editUser = (userData) => {
    const editedUsers = users.map((user) => {
      if (user.id === userData.id) {
        return {
          ...user,
          ...userData,
        };
      }
      return user;
    });

    setUsers(editedUsers);
    saveDataToStorage("users", editedUsers);
  };

  const getUserById = (id) => {
    return users.find((user) => user.id === id);
  };

  useEffect(() => {
    setUsers(usersFromLocalStorage || []);
  }, []);

  return {
    users,
    addUser,
    removeUser,
    editUser,
    getUserById,
  };
};

export default function UsersProvider({ children }) {
  const usersContent = useProvideUsers();

  return (
    <UsersContext.Provider value={usersContent}>
      {children}
    </UsersContext.Provider>
  );
}

export const useUser = () => useContext(UsersContext);
