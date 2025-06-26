import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { removeFeed } from "../utils/feedSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserCart = ({ user }) => {
  const MyUser = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleRequest = async (status, id) => {
    try {
      const res = await axios.post(
        `https://thedevtinder.vercel.app/request/send/${status}/${id}`,
        {
          emailId: user?.emailId,
          senderName: MyUser?.firstName + " " + MyUser?.lastName,
          receiverName: user?.firstName + " " + user?.lastName,
          senderBio: MyUser?.description,
        },
        { withCredentials: true }
      );
      toast.success(res.data?.message);
      dispatch(removeFeed(id));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen pb-28">
      <div className="card bg-base-100 sm:w-[400px] w-[300px] shadow-sm mt-5 ">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoUrl}
            alt="Shoes"
            className="rounded-xl"
            referrerPolicy="no-referrer"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex justify-center items-center">
            <h2 className="card-title">
              {user?.firstName}&nbsp;{user?.lastName}&nbsp;
            </h2>
            {user?.isPremium ? (
              <svg
                aria-label="Verified"
                class="x1lliihq x1n2onr6"
                fill="rgb(0, 149, 246)"
                height="20"
                role="img"
                viewBox="0 0 40 40"
                width="20"
              >
                <title>Verified</title>
                <path
                  d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            ) : null}
          </div>
          <p>{user?.description}</p>
          <div className="flex justify-center items-center gap-3">
            <p>{user?.age ? "age: " + user?.age : null}</p>
            <Link to={`/` + user?.userName}>
              <button className="btn btn-info btn-xs">view</button>
            </Link>
          </div>
          <div className="card-actions">
            <button
              className="btn btn-soft btn-primary"
              onClick={() => handleRequest("interested", user?._id)}
            >
              Interested
            </button>
            <button
              className="btn btn-soft btn-secondary"
              onClick={() => handleRequest("ignored", user?._id)}
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
