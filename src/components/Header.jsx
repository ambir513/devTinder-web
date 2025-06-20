import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { removeConnection } from "../utils/connectionSlice";
import { removeRequest } from "../utils/connectionRequestSlice";
import { Toaster } from "react-hot-toast";

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const connection = useSelector((store) => store.connection);
  const connectionRequest = useSelector((store) => store.request);

  const handleLogout = async () => {
    try {
      const res = axios.post("/api/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      dispatch(removeConnection());
      dispatch(removeRequest());
      Navigate("/login");
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <div className="navbar bg-base-300 shadow-sm sm:px-10 fixed top-0 z-50">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost md:text-xl sm:text-md text-lg lg:text-xl"
        >
          👨‍💻DevTinder
        </Link>
      </div>
      {user ? (
        <div className="flex gap-4 sm:pr-10 pr-5 items-center">
          <p>Welcome, {user.firstName}</p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoUrl}
                  alt="Google Profile"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300  flex flex-col justify-center gap-2 rounded-box z-10 mt-4 w-52 shadow"
            >
              <li className="active:border-l-5 sm:hover:border-l-5">
                <Link
                  to="/"
                  className="px-2 py-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">Explore</p>
                    <p className="text-[10px] text-gray-500">Discover Devs</p>
                  </div>
                </Link>
              </li>

              <li className="sm:hidden active:border-l-5 sm:hover:border-l-5">
                <Link
                  to="/connection"
                  className="px-2 py-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">Your Connection</p>
                    <p className="text-[10px] text-gray-500">
                      Chat with friends
                    </p>
                  </div>
                </Link>
              </li>

              <li className="active:border-l-5 sm:hover:border-l-5">
                <Link
                  to="/user/request/received"
                  className="px-2 py-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="flex flex-col">
                    <p className="font-medium text-sm flex items-center gap-1">
                      Requests
                      {connectionRequest?.length !== 0 && (
                        <span className="badge badge-xs badge-accent text-[9px] ml-1">
                          New
                        </span>
                      )}
                    </p>
                    <p className="text-[10px] text-gray-500">Pending Invites</p>
                  </div>
                </Link>
              </li>

              <li className="active:border-l-5 sm:hover:border-l-5">
                <Link
                  to="/profile"
                  className="px-2 py-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">Profile</p>
                    <p className="text-[10px] text-gray-500">Your Info</p>
                  </div>
                </Link>
              </li>

              <li className="active:border-l-5 sm:hover:border-l-5">
                <Link
                  to="/premium"
                  className="px-2 py-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between gap-2">
                      <p className="font-medium text-sm">Premium</p>
                      <span className="badge badge-xs badge-accent text-[9px]">
                        New
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500">
                      Get Extra Features
                    </p>
                  </div>
                </Link>
              </li>

              <li
                onClick={handleLogout}
                className="active:border-l-5 sm:hover:border-l-5"
              >
                <button className="px-2 py-2 w-full text-left">
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">Logout</p>
                    <p className="text-[10px] text-gray-500">Sign out</p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <ul className="flex gap-4">
          <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
            <li>
              <button className="btn btn-soft">Login</button>
            </li>
          </Link>
          <Link to="/signup" onClick={() => window.scrollTo(0, 0)}>
            <li>
              <button className="btn btn-soft btn-primary">Signup</button>
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
