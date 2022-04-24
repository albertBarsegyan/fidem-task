import { createContext, useContext } from "react";
import { SearchBy } from "../constants/searchVariants.constants";
import searchReducer, { SearchActions } from "../reducers/userSearchReducer";
import { useReducer } from "react";

const SearchContext = createContext(null);

function useSearchProvider() {
  const initialState = {
    searchBy: SearchBy[0].value,
    value: "",
  };

  const [{ searchBy, value }, dispatch] = useReducer(
    searchReducer,
    initialState
  );
  const { changeSearchVariant, changeValue } = SearchActions;

  const handleSearchVariant = (searchVariant) => {
    dispatch({ type: changeSearchVariant, input: searchVariant });
  };
  const handleValue = (value) => {
    dispatch({ type: changeValue, input: value });
  };

  return {
    handleSearchVariant,
    handleValue,
    value,
    searchBy,
  };
}

export default function SearchProvider({ children }) {
  const searchData = useSearchProvider();

  return (
    <SearchContext.Provider value={searchData}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
