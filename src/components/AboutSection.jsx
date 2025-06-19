import React from "react";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-r via-base-200  my-10 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-5">
          <div className="lg:w-[580px] sm:w-[600px] w-[300px] flex flex-col gap-7">
            <h1 className="text-zinc-500 text-lg sm:text-xl lg:text-2xl font-semibold">
              Try <span className="text-white font-bold">🧑‍💻 DevTinder</span> For
              Free Today
            </h1>
            <h1 className="text-zinc-500 text-lg sm:text-xl lg:text-2xl font-semibold">
              Since we both believe in{" "}
              <span className="text-orange-500">tech collaboration,</span> let’s
              build the future through{" "}
              <span className="text-blue-700">developer connections.</span>
            </h1>
            <div className="flex gap-4">
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                <button className="btn btn-primary bg-gradient-to-t from-indigo-700 to-indigo-400 font-bold relative pl-24 hover:pl-[90px] active:pl-[110px] w-[125px]">
                  <span className="absolute left-4">About us</span>
                  <FaArrowRightLong />
                </button>
              </Link>

              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <button className="btn font-bold relative pl-24 hover:pl-[100px] active:pl-[100px] w-[128px]">
                  <span className="absolute left-4">Talk to us</span>
                  <TbMessageCircleQuestion />
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-[320px] sm:w-[300px] w-[300px] flex flex-col gap-4">
            <p className="text-zinc-500 text-sm">
              "Tech isn’t just a career path — it’s a community. Real growth
              comes from building, sharing, and learning together. DevTinder
              helps me stay connected to that purpose every day."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
