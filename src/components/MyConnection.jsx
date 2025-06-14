import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyConnection = () => {
  const connection = useSelector((store) => store.connection);
  const users = useSelector((store) => store.user);

  return (
    <ul className="list bg-base-200 w-full rounded-box shadow-lg h-dvh">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Your Connections
      </li>

      {connection?.map((user) => {
        return (
          <li className="list-row" key={user?._id}>
            <div>
              <img className="size-10 rounded-box" src={user?.photoUrl} />
            </div>
            <div>
              <div>{user?.firstName + " " + user?.lastName}</div>
              <div className="text-xs font-semibold opacity-60">
                {user?.description}
              </div>
            </div>
            <Link to={users?.isPremium ? `/chat/${user?._id}` : "/premium"}>
              <button className="btn btn-primary">Chat</button>
            </Link>
            <Link to={`/profile/${user?.emailId?.split("@")[0]}`}>
              <button className="btn btn-secondary">View</button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MyConnection;
