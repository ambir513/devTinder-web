import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Connection = () => {
  const connection = useSelector((store) => store.connection);
  const users = useSelector((store) => store.user);

  return (
    <ul className="w-[330px] list bg-base-100 rounded-box shadow-md sm:flex sm:flex-col hidden">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Your Connections
      </li>

      {connection?.map((user) => {
        return (
          <Link
            to={
              users?.membershipType === "Premium"
                ? `/chat/${user?._id}`
                : "/premium"
            }
            key={user?._id}
          >
            <li className="list-row hover:bg-gray-700  hover:cursor-pointer mx-3">
              <div>
                <img className="size-10 rounded-box" src={user?.photoUrl} />
              </div>
              <div>
                <div>
                  {user?.firstName}&nbsp;{user?.lastName}
                </div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {user?.description}
                </div>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Connection;
