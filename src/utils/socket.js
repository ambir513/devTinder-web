import { io } from "socket.io-client";

export const createSocketConnection = () => {
  return io("https://thedevtinder.xyz", {
    path: "/api/socket.io",
  });
};
