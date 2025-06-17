import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCart from "./UserCart";
import { addFeed } from "../utils/feedSlice";
import { Link } from "react-router-dom";

const Feed = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  useEffect(() => {
    if (feed.length === 0) {
      getFeed();
    }
  }, []);

  const getFeed = async () => {
    try {
      const res = await axios.get("/api/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  //  <UserCart user={feed[0]} />;
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">DevTinder</h1>
            <nav>
              <Link
                to="/privacy-policy"
                className="text-sm text-blue-600 hover:underline mr-4"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-condition"
                className="text-sm text-blue-600 hover:underline"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center text-center p-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Connect. Collaborate. Code.
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              DevTinder helps developers meet like-minded peers for chatting,
              networking, and building projects together. A real-time chat
              platform designed for coders.
            </p>
            <Link
              to="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white p-4 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} DevTinder. All rights reserved. |
          <Link
            to="/privacy-policy"
            className="ml-2 text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>
          <span className="mx-1">|</span>
          <Link to="/terms-condition" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Feed;
