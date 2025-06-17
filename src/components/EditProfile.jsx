import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { addUser } from "../utils/userSlice";

const EditProfile = () => {
  const user = useSelector((store) => store.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [skill, setSkill] = useState("");
  const [selectFile, setSelectFile] = useState(null);
  const Gender = useRef(null);
  const dispatch = useDispatch();
  const descriptions = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const gender = Gender.current.value;
    const description = descriptions.current.value;
    const skills = skill.split(", ");

    editProfile(gender, description, skills);
  };
  const editProfile = async (gender, description, skills) => {
    const formData = new FormData();

    if (firstName) formData.append("firstName", firstName);
    if (lastName) formData.append("lastName", lastName);
    if (description) formData.append("description", description);
    if (gender) formData.append("gender", gender);
    if (age) formData.append("age", age);
    if (skills.length !== 1) {
      skills.forEach((skill) => {
        formData.append("skills[]", skill);
      });
    }

    if (selectFile) {
      formData.append("avatar", selectFile);
    }

    try {
      const res = await axios.patch("/api/account/edit", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(addUser(res.data?.data));
      if (res.data?.message) {
        toast.success("Profile updated successfully!");
      }
      Navigate("/profile");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "An error occurred. Please try again later.";
      setMessage(errorMessage);
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div
      className="w-full 
    bg-base-200 h-dvh pt-20 p-5 pb-14"
    >
      <div className="flex flex-col">
        <img
          src={user?.photoUrl}
          className="w-[100px] sm:ml-64 mb-5 rounded-lg shadow-2xl"
          alt="photourl"
        />
        <div className="flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="flex  sm:flex-row flex-col justify-center w-fit">
              <div className="">
                <div className="flex justify-center w-fit font-bold m-2.5">
                  Firstname:
                  <label className="input ml-4 ">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <input
                      type="input"
                      placeholder="firstname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      minlength="3"
                      maxlength="30"
                    />
                  </label>
                </div>
                <div className="flex justify-center w-fit font-bold m-3 ">
                  <p>Lastname:</p>
                  <label className="input ml-4 ">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <input
                      type="input"
                      placeholder="lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      minlength="3"
                      maxlength="30"
                    />
                  </label>
                </div>
                <div className=" flex justify-center w-fit gap-2 font-bold m-3 ">
                  <p>Description:</p>
                  <textarea
                    className="textarea"
                    placeholder="Bio"
                    ref={descriptions}
                  ></textarea>
                </div>
              </div>
              <div className="">
                <div className="flex justify-center items-center w-fit font-bold ">
                  Avatar:{" "}
                  <input
                    type="file"
                    className="file-input  sm:ml-11 ml-14"
                    onChange={(e) => setSelectFile(e.target.files[0])}
                  />
                </div>
                <div className="flex justify-center w-fit font-bold m-3 ">
                  <p>Age:</p>
                  <label className="input ml-16 ">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <input
                      type="input"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="age"
                      title="Only letters, numbers or dash"
                    />
                  </label>
                </div>
                <div className="flex gap-[35px] font-bold m-3">
                  <p>Gender:</p>
                  <select
                    defaultValue="Pick a color "
                    className="select"
                    ref={Gender}
                  >
                    <option disabled={true}>select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="custom">custom</option>
                  </select>
                </div>
                <div className="flex justify-center w-fit font-bold m-2.5">
                  <p>skills:</p>
                  <label className="input ml-14 ">
                    <input
                      type="input"
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                      placeholder="Ex. React, Javascript, C/C++"
                      title="Only letters, numbers or dash"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="py-6 text-sm text-rose-500">{message}</p>
              <button className="btn btn-primary" type="submit">
                Update profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
