import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import toast from "react-hot-toast";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const connection = useSelector((store) => store.connection);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [file, setFile] = useState({});
  const [text, setText] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setFile(file);
      console.log(file);
      setTimeout(() => {
        const modal = document.getElementById("my_modal_4");
        modal.showModal();
      }, 0);
    }
  };

  const handleSubmitPost = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      formData.append("caption", text);

      const res = await axios.post(
        "https://thedevtinder.vercel.app/account/post/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data?.data));
      toast.success(res.data?.message);
      setImage("");
    } catch (error) {
      toast.success(res.response?.data);
    }
  };
  const handleClick = () => {
    navigator.clipboard
      .writeText("https://devtinder.web.app/profile/" + user?.userName)
      .then(() => {
        toast.success("Link copied to clipboard!");
      });
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
                {user?.skills.map((skill) => {
                  return (
                    <button className="btn join-item" key={skill}>
                      {skill}
                    </button>
                  );
                })}
              </div>
            </fieldset>
            <div className="flex justify-center gap-2">
              <Link
                to="/profile/edit"
                className="btn btn-primary cursor-pointer w-fit"
              >
                <button>Edit profile</button>
              </Link>
              <button className="btn btn-secondary" onClick={handleClick}>
                Share
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-row flex-wrap justify-center items-center gap-3 ">
          <label className="flex flex-col justify-center items-center gap-1 border-2 rounded-sm p-3 w-[100px] cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <p className="text-5xl">+</p>
            <p>post</p>
          </label>

          {image && (
            <>
              <dialog id="my_modal_4" className="modal pl-2">
                <div className="modal-box h-[390px]">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="font-bold text-lg">
                      <img src={image} alt="logo" className="w-[300px]" />
                    </h3>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <p className="py-4">Caption:</p>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input"
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      <button
                        className="btn mr-2"
                        onClick={() => setImage(" ")}
                      >
                        Close
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmitPost}
                      >
                        Post
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </>
          )}
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

export default Profile;
