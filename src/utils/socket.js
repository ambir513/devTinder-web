import { io } from "socket.io-client";

export const createSocketConnection = () => {
  return io("http://thedevtinder.xyz", {
    path: "/api/socket.io",
  });
};
