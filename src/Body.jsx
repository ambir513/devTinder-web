import React, { useEffect } from "react";
import Header from "./components/Header";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "./utils/userSlice";
import { addConnection } from "./utils/connectionSlice";
import Connection from "./components/Connection";
import { addRequest } from "./utils/connectionRequestSlice";

const Body = () => {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const connection = useSelector((store) => store.connection);
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const [user, connection, connectionRequest] = await axios.all([
        axios.get("/api/account/view", {
          withCredentials: true,
        }),
        axios.get("/api/user/connection", {
          withCredentials: true,
        }),
        axios.get("/api/user/request/received", {
          withCredentials: true,
        }),
      ]);
      const userData = user.data;
      const connectionData = connection.data?.data;
      const connectionRequestData = connectionRequest.data?.data;
      console.log(userData);
      console.log(connectionData);
      dispatch(addUser(userData));
      dispatch(addConnection(connectionData));
      dispatch(addRequest(connectionRequestData));
    } catch (error) {
      if (error?.status == 401) {
        if (!userName) {
          navigate("/login");
        }
      }
    }
  };

  useEffect(() => {
    if (!userData) {
      getUserData();
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        {connection && <Connection />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
