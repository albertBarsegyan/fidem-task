import { useUser } from "../../context/users.context";
import RegularColumn from "../columns/regularColumn";
import { useModal } from "../../context/modal.context";
import Link from "next/link";

export default function UserTableRow({ userData }) {
  const { id, firstName, lastName, email, phoneNumber, address } = userData;
  const { provideInitialValues } = useModal();
  const { removeUser } = useUser();

  const handleDelete = () => {
    removeUser(id);
  };

  const handleEdit = () => {
    provideInitialValues(userData);
  };

  return (
    <tr>
      <RegularColumn>
        {firstName} {lastName}
      </RegularColumn>
      <RegularColumn>{email}</RegularColumn>
      <RegularColumn>{phoneNumber}</RegularColumn>
      <RegularColumn>{address}</RegularColumn>
      <td className="border border-gray-700 text-center relative">
        <Link
          passHref
          href={{
            pathname: "/user/[userId]",
            query: { userId: id },
          }}
        >
          <a className="profile-link">Profile</a>
        </Link>
      </td>
      <td className="border border-gray-700 text-center relative">
        <button className="table-edit-button" onClick={handleEdit}>
          Edit
        </button>
      </td>
      <td className="border border-gray-700 text-center relative">
        <button className="table-remove-button" onClick={handleDelete}>
          X
        </button>
      </td>
    </tr>
  );
}
