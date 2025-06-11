import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeedbackForm = () => {
  const [msg, setMes] = useState({ name: "", message: "" });

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 w-full">
      <div className="card w-full max-w-md shadow-xl bg-base-100 mx-4">
        <div className="card-body">
          <h2 className="card-title text-2xl">Send Feedback</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="from_name"
              value={msg.name}
              onChange={(e) => setMes({ ...msg, name: e.target.value })}
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Some improvement in UI/UX..."
              value={msg.message}
              onChange={(e) => setMes({ ...msg, message: e.target.value })}
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
            <div className="card-actions justify-end">
              {msg.name !== "" && msg.message !== "" ? (
                <a
                  href={`https://wa.me/918956817729?text=Hi, I'm ${encodeURIComponent(
                    msg.name
                  )}. ${encodeURIComponent(msg.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Send
                </a>
              ) : (
                <Link to="/feedback" className="btn btn-primary">
                  Send
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
