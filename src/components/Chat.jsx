import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";

const Chat = () => {
  const { _id } = useParams();
  const userData = useSelector((store) => store.user);
  const userId = userData?._id;
  const [message, setMessage] = useState([]);
  const [youMessage, setYouMessage] = useState([]);
  const [input, setInput] = useState("");
  const connection = useSelector((store) =>
    store.connection?.filter((user) => user._id === _id)
  );

  useEffect(() => {
    const socket = createSocketConnection();
    console.log(userData?.firstName);
    socket.emit("joinChat", { firstName: userData?.firstName, userId, _id });
    socket.on(
      "messageRecieved",
      ({ firstName, text }) => {
        setMessage((prev) => [...prev, { firstName, text }]);
        console.log(text);
      },
      []
    );

    return () => {
      socket.disconnect();
    };
  }, [_id]);

  const user = connection?.[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    setYouMessage(input);
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: userData?.firstName,
      userId,
      _id,
      text: input,
    });
    setInput("");
  };

  return (
    <div className="w-screen h-screen ">
      <div className="p-5">
        <Link to={"/" + user?.userName}>
          <div className="flex gap-4 items-center bg-base-300 p-3 pl-10">
            <img
              src={user?.photoUrl}
              alt=""
              className="w-[40px] rounded-full"
            />
            <span>{user?.firstName + " " + user?.lastName}</span>
          </div>
        </Link>
        <div className="flex flex-col gap-4 p-4  h-[500px] border-2  border-base-300 overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
          {message.map((mes, index) => {
            return (
              <div
                className={`chat ${
                  mes?.firstName !== userData?.firstName
                    ? "chat-start"
                    : "chat-end"
                } `}
                key={index}
              >
                <div className="chat-header">
                  {mes?.firstName !== userData?.firstName
                    ? mes?.firstName
                    : "You"}
                </div>
                <div
                  className={`chat-bubble  ${
                    mes?.firstName !== userData?.firstName
                      ? "chat-bubble-neutral"
                      : "chat-bubble-success"
                  }`}
                >
                  {mes.text}
                </div>
              </div>
            );
          })}
        </div>
        <form
          className="flex gap-4 items-center bg-base-300 p-3 pl-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input input-md w-2/2"
          />
          <button
            className="btn btn-success"
            type="submit"
            onChange={handleSubmit}
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
