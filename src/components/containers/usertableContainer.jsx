import RegularButton from "../button/regular.button";
import UsersTable from "../tables/usersTable";

import { useModal } from "../../context/modal.context";
import UserSearchBar from "./userSearchBar";

export default function UserTableContainer() {
  const { toggleVisible } = useModal();

  const openModal = () => {
    toggleVisible();
  };

  return (
    <div className=" w-full md:w-11/12 mx-auto mt-10">
      <div className="flex flex-row justify-between items-center mb-4">
        <p className="text-2xl text-gray-800">Admin panel</p>
        <RegularButton text="Add user" handleClick={openModal} type="button" />
      </div>
      <div>
        <UserSearchBar />
      </div>
      <UsersTable />
    </div>
  );
}
