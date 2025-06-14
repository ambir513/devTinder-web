import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center justify-center">Contact Us</h2>

          <div className="flex flex-col gap-4 mt-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918956817729"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success w-full"
            >
              WhatsApp Chat
            </a>

            {/* Call */}
            <a href="tel:+918956817729" className="btn btn-primary w-full">
              Call Us
            </a>

            {/* Email */}
            <a
              href="mailto:amarbiradar147@gmail.com"
              className="btn btn-neutral w-full"
            >
              Email Us
            </a>

            {/* Internal Link */}
            <Link to="/privacy" className="btn btn-secondary w-full">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
