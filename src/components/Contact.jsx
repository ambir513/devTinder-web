import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      <p className="text-center  mb-8">
        Got a question, feedback, or issue? We’d love to hear from you. Fill out
        the form below or connect with us directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="card bg-base-100 shadow-md p-6">
          <form
            method="POST"
            action="https://formsubmit.co/support@thedevtinder.xyz"
            className="space-y-4"
          >
            <div>
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Message</span>
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Direct Contact Options */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Quick Contact
          </h2>
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/918956817729"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success w-full"
            >
              📱 WhatsApp Chat
            </a>
            <a href="tel:+918956817729" className="btn btn-info w-full">
              📞 Call Us
            </a>
            <a
              href="mailto:support@thedevtinder.xyz"
              className="btn btn-neutral w-full"
            >
              ✉️ Email Us
            </a>
            <Link to="/privacy" className="btn btn-secondary w-full">
              🔒 Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Prefer direct email? Write us at{" "}
        <a
          href="mailto:support@thedevtinder.xyz"
          className="text-primary underline"
        >
          support@thedevtinder.xyz
        </a>
      </p>
    </div>
  );
};

export default Contact;
