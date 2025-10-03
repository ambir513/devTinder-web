import { io } from "socket.io-client";

export const createSocketConnection = () => {
  return io("https://dev-tinder-ggrn.onrender.com", {
    path: "/api/socket.io",
    transports: ["websocket"], // recommended for cleaner connection
    withCredentials: true, // optional if you're sending cookies/auth
  });
};
