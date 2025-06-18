import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center ">Refund Policy</h1>

      <p className="mb-4 ">
        Thank you for choosing <strong>DevTinder</strong>. Our mission is to
        connect and empower developers through meaningful interactions. As part
        of our commitment to transparency, this refund policy outlines the terms
        and conditions related to all payments and subscriptions on our
        platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">1. General Policy</h2>
      <p className=" mb-4">
        All purchases, including subscriptions and in-app features (such as
        Boosts, Premium Access, or Developer Spotlight), are final and
        non-refundable. This policy applies whether the service was used
        partially, fully, or not at all.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">
        2. No Refunds After Activation
      </h2>
      <p className=" mb-4">
        Once a service has been activated — including but not limited to
        unlocking premium profiles, using boosts, or participating in featured
        listings — the transaction is considered final and cannot be refunded,
        regardless of the outcome of the interaction.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">3. Billing Errors</h2>
      <p className=" mb-4">
        If you believe you were incorrectly charged or experienced a billing
        error, please contact us within <strong>3 days</strong> of the charge.
        We will investigate the issue and respond within 5-7 business days.
        Please include screenshots or transaction IDs to speed up verification.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">
        4. Duplicate Transactions
      </h2>
      <p className=" mb-4">
        In the event of duplicate transactions caused by payment gateway errors
        or accidental clicks, we will issue a refund for the duplicate payment
        after validation. You must notify us at{" "}
        <strong>amarbiradar147@gmail.com</strong> within 48 hours of the
        transaction.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">
        5. Subscription Cancellations
      </h2>
      <p className=" mb-4">
        You may cancel your subscription at any time. Cancellation will stop
        future billing, but the current active period will remain
        non-refundable. You will retain access to paid features until the end of
        your billing cycle.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">6. Fraud or Abuse</h2>
      <p className=" mb-4">
        If we detect fraudulent behavior, abuse of the platform, or violation of
        our Terms of Service, we reserve the right to terminate your account
        without notice or refund. In such cases, you will forfeit any remaining
        subscription time or paid features.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">
        7. How to Request a Refund
      </h2>
      <p className=" mb-4">
        If you believe your case is eligible for a refund, please contact our
        support team with the following details:
      </p>
      <ul className="list-disc list-inside  mb-4">
        <li>Your full name and email address used on DevTinder</li>
        <li>Transaction ID or invoice</li>
        <li>Date and time of the transaction</li>
        <li>Detailed explanation of your concern</li>
      </ul>
      <p className=" mb-4">
        Email your request to:{" "}
        <a
          href="mailto:amarbiradar147@gmail.com"
          className="text-indigo-600 underline"
        >
          amarbiradar147@gmail.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 ">
        8. Changes to This Policy
      </h2>
      <p className=" mb-4">
        We may revise this refund policy from time to time to reflect changes in
        law, best practices, or platform features. Continued use of DevTinder
        after any changes constitutes acceptance of the updated policy.
      </p>

      <p className="text-sm text-gray-500 mt-6">Last updated: June 18, 2025</p>
    </div>
  );
};

export default RefundPolicy;
