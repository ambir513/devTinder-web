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
      const res = axios.post(
        "http://localhost:7777/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      dispatch(removeConnection());
      dispatch(removeRequest());
      Navigate("/login");
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <div className="navbar bg-base-300 shadow-sm sm:px-10">
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
                <img alt="Tailwind CSS Navbar component" src={user?.photoUrl} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 shadow"
            >
              <li className="px-2 py-1.5">
                <Link to="/">
                  <a className="">Explore</a>
                </Link>
              </li>

              <Link to="/connection">
                <li className="px-2 py-1.5 sm:hidden">
                  <a className="px-2 py-1.5">Your Connection</a>
                </li>
              </Link>
              <li className="px-2 py-1.5">
                <Link
                  to="/user/request/received"
                  className="justify-between px-2 py-1.5"
                >
                  Connection Request
                  {connectionRequest?.length !== 0 ? (
                    <span className="badge">New</span>
                  ) : null}
                </Link>
              </li>
              <li className="px-2 py-1.5">
                <Link to={`/profile`} className="justify-between px-2 py-1.5">
                  Profile
                </Link>
              </li>
              <li className="px-2 py-1.5">
                <Link to={`/feedback`} className="justify-between px-2 py-1.5">
                  Feedback
                </Link>
              </li>
              <li className="px-2 py-1.5">
                <Link to={`/premium`} className="justify-between px-2 py-1.5">
                  Premium
                </Link>
              </li>
              <li className="px-2 py-1.5" onClick={handleLogout}>
                <a className="px-2 py-1.5">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <ul className="flex gap-4">
          <Link to="/login">
            <li>
              <button className="btn btn-soft">Login</button>
            </li>
          </Link>
          <Link to="/signup">
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
