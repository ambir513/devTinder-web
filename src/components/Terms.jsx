const Terms = () => (
  <div className="p-6 max-w-4xl mx-auto w-full flex justify-center  items-center">
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center ">
        Terms & Conditions
      </h1>

      <p className="text-sm mb-4">
        Welcome to <strong>DevTinder</strong> – a platform for developers to
        connect, chat, and collaborate in real-time.
      </p>

      <p className="text-sm mb-4">
        By accessing or using our website (
        <a href="https://thedevtinder.xyz" className="text-blue-600 underline">
          https:thedevtinder.xyz
        </a>
        ), you agree to be bound by these Terms and Conditions. If you do not
        agree with any part of the terms, please do not use our service.
      </p>

      <h2 className="text-lg font-semibold mt-4 mb-2">User Conduct</h2>
      <ul className="list-disc list-inside text-sm mb-4">
        <li>
          Respect other users. Harassment, abuse, or hate speech is strictly
          prohibited.
        </li>
        <li>Do not impersonate other users or provide false information.</li>
        <li>
          Use the platform only for lawful and appropriate purposes related to
          developer networking.
        </li>
        <li>
          Spamming, phishing, or promoting unrelated services is not allowed.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-4 mb-2">Account Suspension</h2>
      <p className="text-sm mb-4">
        We reserve the right to suspend or delete accounts that violate our
        rules, disrupt the community, or engage in malicious activities.
      </p>

      <h2 className="text-lg font-semibold mt-4 mb-2">Privacy</h2>
      <p className="text-sm mb-4">
        Your use of DevTinder is also governed by our{" "}
        <a href="/privacy-policy" className="text-blue-600 underline">
          Privacy Policy
        </a>
        , which explains how we handle your data.
      </p>

      <h2 className="text-lg font-semibold mt-4 mb-2">Changes to Terms</h2>
      <p className="text-sm mb-4">
        DevTinder may update these Terms at any time. Changes will be effective
        upon posting. Continued use of the platform after changes constitutes
        acceptance of the new Terms.
      </p>

      <h2 className="text-lg font-semibold mt-4 mb-2">
        Limitation of Liability
      </h2>
      <p className="text-sm mb-4">
        We are not liable for any damages or losses resulting from your use or
        inability to use the platform, including but not limited to data loss or
        unauthorized access.
      </p>

      <h2 className="text-lg font-semibold mt-4 mb-2">Contact</h2>
      <p className="text-sm mb-2">
        For questions about these Terms, contact us at: <br />
        <strong>Email:</strong>{" "}
        <a
          href="mailto:amarbiradar147@gmail.com"
          className="text-blue-600 underline"
        >
          amarbiradar147@gmail.com
        </a>
      </p>
      <p className="text-sm text-gray-500 mt-6">Last updated: June 18, 2025</p>
    </div>
  </div>
);

export default Terms;
