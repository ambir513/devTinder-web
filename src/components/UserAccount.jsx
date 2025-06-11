import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const UserAccount = () => {
  const { userName } = useParams();
  const [user, setUser] = useState({});
  const connection = useSelector((store) => store.connection);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(
        "https://dev-tinder-ggrn.onrender.com/account/" + userName
      );
      setUser(res.data?.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="hero bg-base-200 h-screen  overflow-y-scroll overflow-hidden">
      <div className="flex sm:p-5 sm:gap-4 gap-4 sm:m-5 m-3 flex-col sm:items-center">
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          <img
            src={user?.photoUrl}
            className="max-w-sm rounded-lg shadow-2xl sm:w-[300px] w-[200px]"
            alt="profilePhoto"
          />

          <div className="flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <h1 className="text-5xl font-bold">
                {user?.firstName}&nbsp;{user?.lastName}&nbsp;{" "}
              </h1>
              {user?.isPremium ? (
                <svg
                  aria-label="Verified"
                  class="x1lliihq x1n2onr6"
                  fill="rgb(0, 149, 246)"
                  height="28"
                  role="img"
                  viewBox="0 0 40 40"
                  width="28"
                >
                  <title>Verified</title>
                  <path
                    d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              ) : null}
            </div>
            <p className="mb-2 ml-2 ">{user?.description}</p>
            <Link className="link link-hover ml-2">
              Connections: {connection?.length}
            </Link>
            <fieldset className="fieldset w-fit flex bg-base-200 border border-white mb-3 p-4 rounded-box">
              <legend className="fieldset-legend">&nbsp;Skills&nbsp;</legend>
              <div className="join flex flex-wrap justify-center items-center gap-2">
                {user?.skills?.map((skill) => {
                  return (
                    <button className="btn join-item" key={skill}>
                      {skill}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>
        </div>
        <div className=" flex flex-row flex-wrap justify-center items-center gap-3 ">
          {user?.postId?.map((post, index) => {
            return (
              <div
                className="flex w-[200px] flex-col gap-2 card bg-base-100 p-3"
                key={post?._id}
                onClick={() => document.getElementById(post?._id).showModal()}
              >
                <dialog id={post?._id} className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <figure>
                      <img src={post?.photoUrl} alt="post" />
                    </figure>
                    <div className="card-actions justify-end w-fit mt-2 ">
                      <p>{post?.caption}</p>
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                <figure>
                  <img src={post?.photoUrl} alt="post" />
                </figure>
                <div className="card-actions justify-end w-fit">
                  <p>{post?.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
