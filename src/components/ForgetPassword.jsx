import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [emailId, setEmailId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPasswordd] = useState("");
  const [popOtp, setPopOtp] = useState(false);
  const [popOtp2, setPopOtp2] = useState(false);
  const [popOtp1, setPopOtp1] = useState(false);
  const [isDisplayEye, setIsDisplayEye] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (otp.trim().length !== 0 && typeof +otp !== "number") {
      setMessage("Invalid OTP format");
    }
    console.log(otp);
    try {
      const res1 = await axios.post(
        "https://dev-tinder-ggrn.onrender.com/verify",
        {
          emailId,
          otp,
        }
      );
      if (res1.data?.status === "SUCCESS") {
        console.log(res1.data);
        setPopOtp1((prev) => !prev);
        setPopOtp((prev) => !prev);
        toast.success(res1.data?.message);
      } else {
        setMessage(res1.data?.message);
      }
    } catch (error) {
      if (error?.response?.data) {
        setIsLoading(false);
      }
      console.log(error?.response?.data);
      toast.error(error?.response?.data);
    }
  };

  const handleVerifyPassword = async (e) => {
    e.preventDefault();
    try {
      setIsLoading((prev) => !prev);
      const res1 = await axios.post(
        "https://dev-tinder-ggrn.onrender.com/account/verifyPassword",
        {
          emailId,
        }
      );
      console.log(res1.data);
      if (res1.data?.status === "SUCCESS") {
        setPopOtp((prev) => !prev);
        setPopOtp2((prev) => !prev);
        const res = await axios.post(
          "https://dev-tinder-ggrn.onrender.com/forgetotp",
          {
            emailId,
          }
        );
        if (res.data?.message) {
          setIsLoading((prev) => !prev);
          toast.success(res.data?.message);
        }
      }
    } catch (error) {
      setMessage(error?.response?.data?.message);
      setIsLoading((prev) => !prev);
    }
  };

  const handleNewPassword = async (e) => {
    e.preventDefault();
    setIsLoading((prev) => !prev);
    try {
      if (newPassword === confirmPassword) {
        const res1 = await axios.post(
          "https://dev-tinder-ggrn.onrender.com/account/newPassword",
          {
            emailId,
            newPassword,
            confirmPassword,
          }
        );
        console.log(res1.data?.message);
        if (res1.data?.message) {
          toast.success(res1.data?.message);
          Navigate("/login");
        }
      } else {
        setMessage("Password doesn't Match");
        setIsLoading((prev) => !prev);
        return;
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
      setIsLoading((prev) => !prev);
    }
  };

  const resentotp = async () => {
    try {
      const res = await axios.post(
        "https://dev-tinder-ggrn.onrender.com/resentotp",
        {
          emailId,
        }
      );
      if (res.data?.message) {
        toast.success(res.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full flex justify-center h-dvh items-center">
      <div className="card bg-base-300 w-96 shadow-sm h-fit mx-4 ">
        <div className={` ${popOtp ? "flex" : "hidden"}`}>
          <div className="card flex flex-col py-10 items-center bg-base-300 px-10 w-fit h-fit shadow-sm animate-pop z-50">
            <div className="flex flex-col justify-center items-center ">
              <h2 className="text-2xl font-bold mb-4 text-center">Enter OTP</h2>
              <p className="text-gray-600 text-center mb-4">
                We've sent a 6-digit verification code to your email.
              </p>
            </div>
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <input
                type="text"
                value={otp.trim()}
                onChange={(e) =>
                  setOtp(() => {
                    return otp.length > 7 ? " " : e.target.value;
                  })
                }
                maxLength="6"
                className="input input-lg text-center"
                placeholder="●●●●●●"
              />
              <p className="text-sm text-red-500">{message}</p>
              <div className="flex justify-center items-center gap-3 my-5">
                <button className="btn btn-primary" type="submit">
                  Verify OTP
                </button>
                <div type="submit" className="btn" onClick={resentotp}>
                  Resent OTP
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`${popOtp2 ? "hidden" : "flex"}`}>
          <div className="card-body">
            <h2 className="text-2xl text-center font-semibold">
              Forgot Password
            </h2>
            <form onSubmit={handleVerifyPassword}>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <label className="input validator">
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
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    placeholder="yourmail@gmail.com"
                    required
                    value={emailId.trim()}
                    onChange={(e) => {
                      setEmailId(e.target.value);
                      setMessage("");
                    }}
                  />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </fieldset>
              <p className="text-sm text-red-500 mt-2">{message}</p>
              <div className="card-actions justify-center mt-5">
                <button className="btn btn-primary" type="submit">
                  {isLoading ? (
                    <p className="flex justify-center items-center gap-3">
                      <span className="loading loading-spinner"></span>
                      <span>Get OTP</span>
                    </p>
                  ) : (
                    "Get OTP"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={`${popOtp1 ? "flex" : "hidden"}`}>
          <div className="card-body animate-pop">
            <h2 className="text-2xl text-center font-semibold">
              Set the New Password
            </h2>
            <form onSubmit={handleNewPassword}>
              <fieldset className="fieldset ">
                <legend className="fieldset-legend">New Password</legend>
                <label className="input validator">
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
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type="text"
                    required
                    placeholder="New Password"
                    minLength="8"
                    value={newPassword.trim()}
                    onChange={(e) => {
                      setMessage("");
                      setNewPassword(e.target.value);
                    }}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                </label>

                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number
                  <br />
                  At least one lowercase letter
                  <br />
                  At least one uppercase letter
                </p>
              </fieldset>
              <fieldset className="fieldset mb-4">
                <legend className="fieldset-legend">Confirm Password</legend>
                <label className="input validator">
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
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type="text"
                    required
                    placeholder="Confirm Password"
                    minLength="8"
                    value={confirmPassword.trim()}
                    onChange={(e) => {
                      setMessage("");
                      setConfirmPasswordd(e.target.value);
                    }}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                </label>

                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number
                  <br />
                  At least one lowercase letter
                  <br />
                  At least one uppercase letter
                </p>
              </fieldset>
              <p className="text-sm text-red-500">{message}</p>
              <div className="card-actions justify-center mt-5">
                <button className="btn btn-primary" type="submit">
                  {isLoading ? (
                    <p className="flex justify-center items-center gap-3">
                      <span className="loading loading-spinner"></span>
                      <span>Change Password</span>
                    </p>
                  ) : (
                    "Change Password"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
