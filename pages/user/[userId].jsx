import Link from "next/link";

import { getUserById } from "../../src/services/getUserById";

export default function UserPage({ user }) {
  const { firstName, lastName, email, phoneNumber, address } = user;

  return (
    <div className="w-full mt-20">
      <div className="w-8/12 row mx-auto d-flex justify-start items-start border border-purple-700 rounded-sm">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center mt-3">
              <h5 className="mt-2 mb-0 text-purple-600 text-2xl">
                {firstName} {lastName}
              </h5>
              <span className="text-purple-500">
                Email -
                <span className="text-purple-600 font-bold text-xl">
                  {email}
                </span>
              </span>
              <div className="px-4 mt-1">
                <p className="text-purple-600">
                  Address - <span className="font-bold"> {address} </span>
                </p>
                <p className="text-purple-600">
                  Phone number -
                  <span className="font-bold"> {phoneNumber}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-5">
        <Link href="/">
          <a className="px-4 py-2 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            Home
          </a>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { userId } = context.params;
  const user = await getUserById(userId);

  return {
    props: { user },
  };
}
