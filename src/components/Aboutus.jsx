// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 text-white ">
      <div className="q">
        <h1 className="text-4xl font-bold mb-6 text-center">About us</h1>
        <p className="mb-4">
          <strong>DevTinder</strong> is a social networking platform built
          exclusively for developers to connect, collaborate, and create.
          Whether you're looking to find a coding buddy, brainstorm side
          projects, or simply meet like-minded devs — DevTinder is your space.
        </p>

        <p className="mb-4">
          Our goal is to break the ice in the developer community by offering a
          modern, swipe-based interface where developers can match based on
          shared interests, skills, and goals. We've also integrated features
          like real-time chat, project posting, and more to help you build
          meaningful developer relationships.
        </p>

        <p className="mb-4">
          We believe in the power of tech communities. DevTinder helps eliminate
          the isolation that many developers face by providing a platform where
          networking, collaboration, and communication are seamless and fun.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Built for Developers, by Developers
        </h2>
        <p className="mb-4">
          This app was created by <strong>Amar Biradar</strong>, a developer
          passionate about building social tech products that solve real-world
          problems. DevTinder is still growing, and we’re excited to bring more
          features soon — including live events, open-source matchmaking, and
          much more.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p>
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
    </div>
  );
};

export default About;
