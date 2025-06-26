import { io } from "socket.io-client";

export const createSocketConnection = () => {
  return io("https://thedevtinder.xyz", {
    path: "https://thedevtinder.vercel.app/socket.io",
    transports: ["websocket"], // recommended for cleaner connection
    withCredentials: true, // optional if you're sending cookies/auth
  });
};
