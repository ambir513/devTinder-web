import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-base-300 ">
      <div className="px-10 sm:px-10 md:px-16 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="w-[171px] btn bg-ghost py-2 md:text-xl sm:text-md text-lg lg:text-xl"
            >
              👨‍💻DevTinder
            </Link>
            <Link to="http://amarbiradar.ct.ws/" target="_blank">
              <p>Crafted by Amar Biradar</p>
            </Link>
          </div>

          <div className="flex flex-wrap justify-start gap-10 md:gap-16 text-sm md:text-base sm:pl-0 pl-4">
            <div className="flex flex-col gap-3 text-zinc-500 min-w-[120px]">
              <p className="font-bold text-gray-700">Social</p>
              <Link to="https://x.com/ambir513" target="_blank">
                <p>X</p>
              </Link>
              <Link to="https://linkedin.com/in/ambir513" target="_blank">
                <p>LinkedIn</p>
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-zinc-500 min-w-[120px]">
              <p className="font-bold text-gray-700">Support</p>
              <Link to="/faq">
                <p>FAQs</p>
              </Link>
              <Link to="/contact">
                <p>Contact Us</p>
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-zinc-500 sm:min-w-[130px] max-w-[130px]">
              <p className="font-bold text-gray-700">Legal</p>
              <Link to="/privacy-policy">
                <p>Privacy Policy</p>
              </Link>
              <Link to="/terms-condition">
                <p>Terms & Conditions</p>
              </Link>
              <Link to="/refund-policy">
                <p>Refund Policy</p>
              </Link>
              <Link to="/shipping-policy">
                <p>Shipping & Delivery Policy</p>
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-zinc-500 min-w-[120px]">
              <p className="font-bold text-gray-700">Company</p>
              <Link to="/about">
                <p>About Us</p>
              </Link>
              <Link to="/blog/why-devtinder">
                <p>Blog</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} DevTinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
