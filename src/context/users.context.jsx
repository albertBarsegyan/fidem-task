import { createContext, useContext, useEffect, useReducer } from "react";
import { nanoid } from "nanoid";
import { getUsersReq } from "../services/getUsers";
import { addUserReq } from "../services/addUser";
import { removeUserReq } from "../services/removeUser";
import usersReducer, { UsersActions } from "../reducers/users.reducer";
import { editUserReq } from "../services/editUser";

const UsersContext = createContext(null);

const useProvideUsers = () => {
  const [usersState, dispatch] = useReducer(usersReducer, {
    users: [],
    isLoading: false,
    errorMessage: "",
  });

  const addUser = async (userData) => {
    dispatch({ type: UsersActions.setLoading });

    const newUserData = { id: nanoid(), ...userData };

    const users = await addUserReq(newUserData);

    dispatch({ type: UsersActions.setData, input: users });
  };

  const removeUser = async (userId) => {
    dispatch({ type: UsersActions.setLoading });
    const filteredUsers = await removeUserReq(userId);

    dispatch({ type: UsersActions.setData, input: filteredUsers });
  };

  const editUser = async (userData) => {
    dispatch({ type: UsersActions.setLoading });
    const usersRes = await editUserReq(userData);
    dispatch({ type: UsersActions.setData, input: usersRes });
  };

  useEffect(() => {
    dispatch({ type: UsersActions.setLoading });
    const usersData = getUsersReq();
    usersData.then((res) => {
      dispatch({ type: UsersActions.setData, input: res });
    });
  }, []);

  return {
    users: usersState.users,
    isLoading: usersState.isLoading,
    errorMessage: usersState.errorMessage,
    addUser,
    removeUser,
    editUser,
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
