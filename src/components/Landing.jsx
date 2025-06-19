import React from "react";
import Category from "./Category";
import AboutSection from "./AboutSection";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="w-full h-fit flex flex-col justify-center items-center pt-40 pb-10">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-8 my-5">
          <div className="w-fit flex flex-col justify-center items-center ">
            <div className="text-[20px] sm:text-[36px] md:text-[50px] lg:text-[60px] font-bold text-white w-fit">
              Match with Developers,
            </div>
            <div className="text-[20px] sm:text-[36px] md:text-[50px] lg:text-[60px] font-bold text-white w-fit  sm:leading-none">
              Build Real Projects with Real People.
            </div>
          </div>

          <div className="text-[#4B5563] hidden sm:flex flex-col justify-center items-center">
            <p>
              It lets you explore developers based on skills and interests to
              discover
            </p>
            <p>
              profiles, projects, and connections that truly match your vibe.
            </p>
          </div>

          <div className="text-sm text-[#4B5563] flex sm:hidden flex-col justify-center items-center px-4 mt-4">
            <p>It lets you explore developers based on</p>
            <p>skills and interests to discover profiles, projects,</p>
            <p>and connections that truly match your vibe.</p>
          </div>

          <div className="hidden md:flex justify-center items-center gap-4 ">
            <div>
              <Link to="/signup">
                <button className="btn btn-primary w-[160px] shadow-md transition duration-400 ease-in hover:-translate-y-1">
                  Create Account
                </button>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <button className="btn w-[160px] border bg-white text-black shadow-md transition duration-400 ease-in hover:-translate-y-1">
                  Explore Devs
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#e6e6e6] my-20 mx-5 sm:mx-10 rounded-2xl flex">
          <img
            src="/wallpaper.png"
            alt="wallpaper"
            width="1220"
            height="692"
            className="border-2 border-black/10 rounded-2xl p-2 sm:my-5 sm:mx-5"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-4 sm:px-5 lg:px-10 py-10 sm:py-10 lg:py-20">
        <div>
          <div className="text-[18px] sm:text-[26px] md:text-[40px] lg:text-[68px] font-bold text-white sm:bg-gradient-to-r from-white/10 via-white to-white/10 sm:bg-clip-text sm:text-transparent transition-opacity duration-500 w-fit">
            Finally, the Complete Platform to Power
          </div>
        </div>
        <div>
          <div className="text-[18px] sm:text-[26px] md:text-[40px] lg:text-[68px] font-bold text-white m:leading-none w-fit">
            Your Network with the Right Developers
          </div>
        </div>
      </div>
      <Category />
      <AboutSection />
    </div>
  );
}

export default Landing;
