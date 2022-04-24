import UserTableRow from "../rows/userTableRow";
import { useUser } from "../../context/users.context";

import { getFilteredUsers } from "../../helpers/user.helpers";
import { useSearch } from "../../context/search.context";

export default function UsersTable() {
  const { users } = useUser();
  const { searchBy, value } = useSearch();

  return (
    <table className="table table-auto w-full text-gray-700 border-collapse border border-slate-500 rounded">
      <thead>
        <tr>
          <th className="border border-gray-700 py-4">Firstname, Lastname</th>
          <th className="border border-gray-700">Email</th>
          <th className="border border-gray-700">Phone number</th>
          <th className="border border-gray-700">Address</th>
          <th className="border border-gray-700">Profile</th>
          <th className="border border-gray-700">Edit</th>
          <th className="border border-gray-700">Delete</th>
        </tr>
      </thead>
      <tbody>
        {getFilteredUsers(users, searchBy, value)?.map((userDate) => {
          return <UserTableRow key={userDate.id} userData={userDate} />;
        })}
      </tbody>
    </table>
  );
}
