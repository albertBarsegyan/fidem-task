import UserTableRow from "../rows/userTableRow";
import { useUser } from "../../context/users.context";

import { getFilteredUsers } from "../../helpers/user.helpers";
import { useSearch } from "../../context/search.context";

export default function UsersTable() {
  const { users, isLoading, errorMessage } = useUser();
  const { searchBy, value } = useSearch();

  const filteredUsers = getFilteredUsers(users, searchBy, value);

  if (errorMessage) {
    return (
      <div>
        <p className="text-center text-2xl text-red-500"> {errorMessage} </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <p className="text-center text-2xl text-purple-600"> Loading... </p>
      </div>
    );
  }

  return (
    <table className="regular-table">
      <thead>
        <tr>
          <th className="px-4 border border-gray-700 py-4">
            Firstname, Lastname
          </th>
          <th className="px-4 border border-gray-700">Email</th>
          <th className="px-4 border border-gray-700">Phone number</th>
          <th className="px-4 border border-gray-700">Address</th>
          <th className="px-4 border border-gray-700">Profile</th>
          <th className="px-4 border border-gray-700">Edit</th>
          <th className="px-4 border border-gray-700">Delete</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers?.map((userDate) => {
          return <UserTableRow key={userDate.id} userData={userDate} />;
        })}
      </tbody>
    </table>
  );
}
