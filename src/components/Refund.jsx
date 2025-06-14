// src/pages/Refund.jsx
import React from "react";

const Refund = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-white sm:h-screen h-fit">
      <h1 className="text-3xl font-bold mb-4">Refund & Cancellation Policy</h1>
      <p className="mb-4">
        At <strong>DevTinder</strong>, we aim to provide valuable networking and
        collaboration tools for developers. Our platform does not currently
        offer any physical or digital product deliveries that require
        traditional refund processing.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        Subscription/Payment Policy
      </h2>
      <p className="mb-4">
        Any premium services or subscriptions, if introduced in the future, will
        be clearly listed with their terms. Payments made for such services will
        be considered final and non-refundable, unless explicitly mentioned
        otherwise.
      </p>

      <h2 className="text-xl font-semibold mb-2">Cancellation Policy</h2>
      <p className="mb-4">
        Users may cancel their account or stop using the platform at any time.
        However, any payments made for services already rendered or
        subscriptions already consumed will not be refunded.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any concerns or questions regarding payments or this refund
        policy, please feel free to contact us at:
        <br />
        📧{" "}
        <a
          href="mailto:amarbiradar147@gmail.com"
          className="text-blue-600 underline"
        >
          amarbiradar147@gmail.com
        </a>
        <br />
        📞{" "}
        <a href="tel:+918956817729" className="text-blue-600 underline">
          +91 89568 17729
        </a>
      </p>
    </div>
  );
};

export default Refund;
