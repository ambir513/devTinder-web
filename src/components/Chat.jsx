import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";

const Chat = () => {
  const { _id } = useParams();
  const userData = useSelector((store) => store.user);
  const userId = userData?._id;
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);

  const connection = useSelector((store) =>
    store.connection?.filter((user) => user._id === _id)
  );
  const user = connection?.[0];
  const bottomRef = useRef(null);

  // create socket connection
  useEffect(() => {
    const newSocket = createSocketConnection();
    setSocket(newSocket);

    newSocket.emit("joinChat", { firstName: userData?.firstName, userId, _id });

    newSocket.on("messageRecieved", ({ firstName, text }) => {
      setMessage((prev) => [...prev, { firstName, text }]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [_id]);

  // auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || !socket) return;

    // emit message
    socket.emit("sendMessage", {
      firstName: userData?.firstName,
      userId,
      _id,
      text: input,
    });

    // show message instantly
    setMessage((prev) => [
      ...prev,
      { firstName: userData?.firstName, text: input },
    ]);
    setInput("");
  };

  return (
    <div className="w-screen h-screen">
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

        {/* Chat Messages */}
        <div className="flex flex-col gap-4 p-4 h-[500px] border-2 border-base-300 overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
          {message.map((mes, index) => {
            const isYou = mes?.firstName === userData?.firstName;
            return (
              <div
                className={`chat ${isYou ? "chat-end" : "chat-start"}`}
                key={index}
              >
                <div className="chat-header">
                  {isYou ? "You" : mes?.firstName}
                </div>
                <div
                  className={`chat-bubble ${
                    isYou ? "chat-bubble-success" : "chat-bubble-neutral"
                  }`}
                >
                  {mes.text}
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Input Box */}
        <form
          className="flex gap-4 items-center bg-base-300 p-3 pl-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input input-md w-full"
          />
          <button className="btn btn-success" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
