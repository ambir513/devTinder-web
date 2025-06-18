import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRequest } from "../utils/connectionRequestSlice";
import { addConnection } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const ConnectionRequest = () => {
  const dispatch = useDispatch();
  const connectionRequest = useSelector((store) => store.request);

  const handleConnectionRequest = async (status, id) => {
    try {
      const res = await axios.post(
        `/api/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      console.log(res.data?.message);
      dispatch(removeRequest(id));
      if (res.data?.message) {
        const res2 = await axios.get("/api/user/connection", {
          withCredentials: true,
        });
        dispatch(addConnection(res2.data?.data));
      }
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  return (
    <div className=" h-screen w-full flex justify-center">
      <ul className="list bg-base-100 rounded-box border-2 mt-10 h-fit border-base-300  sm:w-[500px] w-[300px]">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Connection Request recently
        </li>
        {connectionRequest.map((req) => {
          return (
            <li
              className="list-row flex sm:flex-row flex-col justify-between items-center sm:mb-0 mb-1"
              key={req?._id}
            >
              <Link to={`/${req?.userName}`}>
                <div className="flex justify-center gap-4 items-center">
                  <div>
                    <img className="size-10 rounded-box" src={req?.photoUrl} />
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <p>
                      {req?.firstName}&nbsp;{req?.lastName}
                    </p>
                    <p className="text-xs uppercase font-semibold opacity-60">
                      {req?.description}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex justify-center items-center gap-5">
                <button
                  className="btn btn-success sm:btn-md btn-sm w-fit"
                  onClick={() => handleConnectionRequest("accepted", req?._id)}
                >
                  accept
                </button>
                <button
                  className="btn sm:btn-md btn-sm btn-error w-fit"
                  onClick={() => handleConnectionRequest("rejected", req?._id)}
                >
                  reject
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ConnectionRequest;
