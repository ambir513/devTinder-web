import { applyMiddleware } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const PremiumCard = () => {
  const [isUserPay, setIsUserPay] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [addCoupon, setAddCoupon] = useState({ gold: 2000, premium: 10000 });
  const user = useSelector((store) => store.user);

  const validatePayment = async () => {
    const res = await axios.get("/api/payment/verify", {
      withCredentials: true,
    });
    setIsUserPay(res.data?.isPremium);
  };
  useEffect(() => {
    validatePayment();
  }, []);
  const handleByClick = async (amount1, membership) => {
    try {
      const res = await axios.post(
        "/api/payment/create",
        {
          amount: amount1,
          membership: membership,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.emailId,
        },
        { withCredentials: true }
      );

      const { amount, currency, keyId, notes, orderId } = res.data;
      const options = {
        key: keyId, // Replace with your Razorpay key_id
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: currency,
        name: "🧑‍💻DevTinder",
        description: "Connect to other developers",
        order_id: orderId, // This is the order_id created in the backend
        prefill: {
          name: notes.firstName + " " + notes.lastName,
          email: notes.email,
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
        handler: validatePayment,
      };
      console.log(res.data);
      const rzp = window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCoupon = () => {
    if (coupon !== "AMBIR513") {
      toast.error("coupon is invalid");
      setCoupon("");
    } else {
      setAddCoupon({ gold: 200, premium: 1000 });
      toast.success("Successfully add coupon 90% OFF");
      setCoupon("");
    }
  };
  return isUserPay ? (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <span className="badge badge-md badge-warning">Your a Gold User</span>
          <p>One Month Valid membership injoy</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="hero bg-base-200 sm:h-screen">
      <div className="flex sm:p-5 sm:gap-10 gap-4 sm:m-5 m-3 sm:flex-row flex-col sm:items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Enter a coupon"
              className="input input-md"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button className="btn btn-secondary" onClick={handleCoupon}>
              Add coupon
            </button>
          </div>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-3">
            <div className="card sm:w-96 w-80 my-4 bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-success">General</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Gold</h2>
                  <span className="text-xl">
                    Rs. {(addCoupon.gold / 100).toFixed(2)}/mo
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>100 connection Requests per day</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Customizable your profile</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Real-time collaboration tools</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Along with Blue tick</span>
                  </li>
                  <li className="opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-base-content/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="line-through">Chat with other people</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => handleByClick(addCoupon.gold, "Gold")}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="card sm:w-96 w-80 my-4 bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">
                  Most Popular
                </span>
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">
                    Rs. {(addCoupon.premium / 100).toFixed(2)}/mo
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>200 connection Requests per day</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Customizable your profile</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Real-time collaboration tools</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Along with Gold Badge</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Chat with other people</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => handleByClick(addCoupon.premium, "Premium")}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;
