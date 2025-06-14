import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Branding & Copyright */}
        <aside className="flex items-center gap-2 text-center sm:text-left">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432... (your path here)" />
          </svg>
          <p className="text-sm">
            © {new Date().getFullYear()} DevTinder – Made by Amar Biradar. All
            rights reserved.
          </p>
        </aside>

        {/* Links */}
        <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-sm">
          <Link to="/terms" className="hover:underline">
            Terms
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/refund" className="hover:underline">
            Refund
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          {/* Social icons */}
          <Link
            to="https://x.com/ambir0513"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-..." />
            </svg>
          </Link>
          <Link
            to="https://www.linkedin.com/in/ambir0513/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 ..." />
            </svg>
          </Link>
          <Link
            to="https://wa.me/+918956817729"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A..." />
            </svg>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
