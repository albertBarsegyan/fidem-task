export const SearchActions = {
  changeSearchVariant: "changeSearchVariant",
  changeValue: "changeValue",
};

export default function searchReducer(state, { type, input }) {
  switch (type) {
    case SearchActions.changeSearchVariant:
      return { ...state, searchBy: input };
    case SearchActions.changeValue:
      return { ...state, value: input };
    default:
      throw new Error();
  }
}
