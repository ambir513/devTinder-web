import React from "react";

const HomeCard = ({ title, description, images }) => {
  return (
    <div className="card w-[320px] h-[171px] bg-neutral-content shadow-lg hover:shadow-xl duration-300 ease-in-out hover:-translate-y-1 cursor-pointer rounded-2xl">
      <div className="card-body items-center text-center gap-6 p-4">
        <div className="flex items-center gap-3">
          <div className="text-5xl">
            <p>{images}</p>
          </div>
          <h2 className="w-[201px] card-title text-md text-base-300 font-semibold">
            {title}
          </h2>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
