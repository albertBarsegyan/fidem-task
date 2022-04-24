import RegularDropdown from "../dropdown/regularDropdown";
import { SearchBy } from "../../constants/searchVariants.constants";
import { useSearch } from "../../context/search.context";

export default function UserSearchBar() {
  const { handleSearchVariant, searchBy, handleValue, value } = useSearch();

  const onChange = (e) => {
    handleValue(e.target.value);
  };

  const onChangeSearchVariant = (e) => {
    const value = e.target.value;
    handleSearchVariant(value);
  };

  return (
    <div className="w-full my-4">
      <div className="w-full relative flex flex-row justify-center items-center w-1/2 mx-auto">
        <input
          className="w-full px-4 py-2 outline-0 border border-gray-700 text-gray-700"
          placeholder="Type word, then press Enter"
          type="text"
          value={value}
          onChange={onChange}
        />
        <div className="absolute right-2">
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
