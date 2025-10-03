import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";

const Chat = () => {
  const { _id } = useParams();
  const userData = useSelector((store) => store.user);
  const userId = userData?._id;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);

  const connection = useSelector((store) =>
    store.connection?.filter((user) => user._id === _id)
  );
  const user = connection?.[0];
  const bottomRef = useRef(null);

  // Create socket connection
  useEffect(() => {
    const newSocket = createSocketConnection();
    setSocket(newSocket);

    // Join chat room
    newSocket.emit("joinChat", { firstName: userData?.firstName, userId, _id });

    // Listen for incoming messages
    newSocket.on("messageRecieved", ({ firstName, text }) => {
      setMessages((prev) => [...prev, { firstName, text }]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [_id, userData?.firstName, userId]);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || !socket) return;

    // Emit message to server
    socket.emit("sendMessage", {
      firstName: userData?.firstName,
      userId,
      _id,
      text: input,
    });

    // Show message instantly in UI
    setMessages((prev) => [
      ...prev,
      { firstName: userData?.firstName, text: input },
    ]);
    setInput("");
  };

  return (
    <div className="w-screen h-screen">
      <div className="p-5">
        {/* Chat Header */}
        <Link to={"/" + user?.userName}>
          <div className="flex gap-4 items-center bg-base-300 p-3 pl-10 rounded-md">
            <img
              src={user?.photoUrl}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <span className="font-medium">
              {user?.firstName + " " + user?.lastName}
            </span>
          </div>
        </Link>

        {/* Messages */}
        <div className="flex flex-col gap-4 p-4 h-[500px] border-2 border-base-300 overflow-y-scroll overflow-x-hidden">
          {messages.map((mes, index) => (
            <div
              className={`chat ${
                mes?.firstName !== userData?.firstName
                  ? "chat-start"
                  : "chat-end"
              }`}
              key={index}
            >
              <div className="chat-header">
                {mes?.firstName !== userData?.firstName
                  ? mes?.firstName
                  : "You"}
              </div>
              <div
                className={`chat-bubble ${
                  mes?.firstName !== userData?.firstName
                    ? "chat-bubble-neutral"
                    : "chat-bubble-success"
                }`}
              >
                {mes.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Box */}
        <form
          className="flex gap-4 items-center bg-base-300 p-3 pl-10 mt-2 rounded-md"
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
