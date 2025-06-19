const Privacy = () => (
  <div className="p-6 max-w-4xl mx-auto w-full flex justify-center items-center ">
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center ">Privacy Policy</h1>
      <p className="text-sm mb-4">
        <strong>Effective Date:</strong> June 17, 2025
      </p>

      <p className="text-sm mb-4">
        At <strong>DevTinder</strong>, your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your personal
        information when you use our platform.
      </p>

      <h2 className="text-lg font-semibold mt-4 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside text-sm mb-4">
        <li>
          <strong>Profile Information:</strong> We collect your name, email
          address, profile photo, gender, and developer skills when you sign in
          via Google.
        </li>
        <li>
          <strong>Chat Data:</strong> Messages exchanged through the app are
          stored securely and are end-to-end encrypted.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect anonymous usage data to
          improve app performance.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-4 mb-2">Data Security</h2>
      <p className="text-sm mb-4">
        All communications are encrypted using SSL. Chat messages are end-to-end
        encrypted. Your data is stored securely with strict access controls.
      </p>

      <h2 className="text-lg font-semibold mt-4 mb-2">Data Sharing</h2>
      <p className="text-sm mb-4">
        We do not share, sell, or rent your personal data with any third
        parties. Your information is not used for ads or third-party analytics.
      </p>

      <h2 className="text-lg font-semibold mt-4 mb-2">How We Use Your Data</h2>
      <ul className="list-disc list-inside text-sm mb-4">
        <li>Create and manage your DevTinder profile</li>
        <li>Match you with other users based on preferences</li>
        <li>Enable real-time chat functionality</li>
        <li>Improve platform security and experience</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4 mb-2">Your Rights</h2>
      <p className="text-sm mb-4">
        You can request to view, update, or delete your data at any time by
        contacting us at{" "}
        <a
          href="mailto:support@thedevtinder.xyz"
          className="text-blue-600 underline"
        >
          support@thedevtinder.xyz
        </a>
        .
      </p>

      <h2 className="text-lg font-semibold mt-4 mb-2">Contact</h2>
      <p className="text-sm mb-2">
        For any privacy-related questions, please contact us at: <br />
        <strong>Email:</strong>{" "}
        <a
          href="mailto:support@thedevtinder.xyz"
          className="text-blue-600 underline"
        >
          support@thedevtinder.xyz
        </a>
      </p>
      <p className="text-sm text-gray-500 mt-6">Last updated: June 18, 2025</p>
    </div>
  </div>
);

export default Privacy;
