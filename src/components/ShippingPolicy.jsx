import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Shipping & Delivery Policy
      </h1>

      <p className="mb-4 ">
        This Shipping & Delivery Policy is applicable to all purchases made on{" "}
        <strong>DevTinder</strong>. Please read this policy carefully to
        understand how digital goods and services are delivered through our
        platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">
        1. No Physical Shipping
      </h2>
      <p className=" mb-4">
        DevTinder is a digital-only service. We do not ship any physical goods.
        All services, subscriptions, and features (including Premium profiles,
        Boosts, and other digital offerings) are delivered electronically
        through your user account.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">
        2. Delivery Timeline
      </h2>
      <p className=" mb-4">
        Upon successful payment, digital services are usually activated
        instantly. In some cases, activation may take up to 1 hour due to server
        processing, payment verification, or platform load. If you do not see
        your purchased feature activated, please contact our support team.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">3. Delivery Method</h2>
      <p className=" mb-4">
        All features and services are delivered directly to your DevTinder
        account. You will be notified via in-app alerts or email (if subscribed)
        once the service is active. Please ensure your email and contact
        information are correct in your profile settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">4. Failed Delivery</h2>
      <p className=" mb-4">
        If you do not receive the purchased service or feature within the
        expected timeframe, please reach out to us immediately. We will
        investigate the issue and resolve it within 2-3 business days. In most
        cases, reactivation or crediting the service is possible.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">
        5. International Access
      </h2>
      <p className=" mb-4">
        DevTinder is available globally to developers, and there are no regional
        shipping limitations since all services are digital. However, access and
        delivery may depend on local internet regulations or technical
        restrictions in your country.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">
        6. Contact Information
      </h2>
      <p className=" mb-4">
        If you have any questions or concerns about your purchase or delivery,
        please contact us at:{" "}
        <a
          href="mailto:amarbiradar147@gmail.com"
          className="text-indigo-600 underline"
        >
          amarbiradar147@gmail.com
        </a>
      </p>

      <p className="text-sm text-gray-500 mt-6">Last updated: June 18, 2025</p>
    </div>
  );
};

export default ShippingPolicy;
