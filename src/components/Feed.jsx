import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCart from "./UserCart";
import { addFeed } from "../utils/feedSlice";
import Landing from "./Landing";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const Myuser = useSelector((store) => store.user);

  useEffect(() => {
    if (feed.length === 0) {
      getFeed();
    }
  }, []);

  const getFeed = async () => {
    try {
      const res = await axios.get("/api/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  return Myuser ? <UserCart user={feed[0]} /> : <Landing />;
};

export default Feed;
