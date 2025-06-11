import { io } from "socket.io-client";

export const createSocketConnection = () => {
  return io("https://dev-tinder-ggrn.onrender.com");
};
