export const UsersActions = {
  setData: "setData",
  setLoading: "setLoading",
};

export default function usersReducer(state, { type, input }) {
  switch (type) {
    case UsersActions.setData:
      if (input?.message) {
        return {
          isLoading: false,
          users: [],
          errorMessage: input.message,
        };
      }
      return { ...state, isLoading: false, users: input };
    case UsersActions.setLoading:
      return { ...state, isLoading: true };
    default:
      throw new Error();
  }
}
