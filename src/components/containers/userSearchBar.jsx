import RegularDropdown from "../dropdown/regularDropdown";
import { SearchBy } from "../../constants/searchVariants.constants";
import { useSearch } from "../../context/search.context";

export default function UserSearchBar() {
  const { handleSearchVariant, searchBy, handleValue, value } = useSearch();

  const onChange = (e) => {
    handleValue(e.target.value);
  };

  const onChangeSearchVariant = (e) => {
    handleSearchVariant(e.target.value);
  };

  return (
    <div className="w-full my-4">
      <div className="searchbar-wrapper">
        <input
          className="searchbar-input"
          placeholder="Type word"
          type="text"
          value={value}
          onChange={onChange}
        />
        <div className="absolute right-2 ">
          <RegularDropdown
            value={searchBy}
            onChange={onChangeSearchVariant}
            labelText="Search by"
            items={SearchBy}
          />
        </div>
      </div>
    </div>
  );
}
