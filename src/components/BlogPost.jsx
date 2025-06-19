import React from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Why DevTinder is the Social App Every Developer Needs
      </h1>

      <p className="text-sm text-gray-500 text-center mb-10">
        June 18, 2025 • by Team DevTinder
      </p>

      <p className=" mb-6">
        In the fast-paced world of tech, developers often find themselves lost
        in code — isolated, over-caffeinated, and working late into the night.
        While platforms like GitHub and Stack Overflow help with code, what
        about community? Collaboration? Real connection? That’s where{" "}
        <strong>DevTinder</strong> comes in.
      </p>

      <h2 className="text-2xl font-semibold  mt-8 mb-2">What is DevTinder?</h2>
      <p className=" mb-4">
        DevTinder is not your typical dating app — it's a swipe-based networking
        platform made exclusively for developers. Whether you're looking for a
        co-founder, project buddy, open-source collaborator, or even just a
        friend who understands the struggle of semicolons, DevTinder is built
        for you.
      </p>

      <h2 className="text-2xl font-semibold  mt-8 mb-2">Why We Built It</h2>
      <p className=" mb-4">
        We noticed a gap in the developer world. There are plenty of job boards
        and chat forums, but no focused platform to discover like-minded
        developers instantly. Swiping through developers by skill, interest, and
        goals just made sense — it's fast, visual, and intuitive.
      </p>

      <h2 className="text-2xl font-semibold  mt-8 mb-2">
        Features That Set Us Apart
      </h2>
      <ul className="list-disc list-inside  mb-6">
        <li>🎯 Skill-based matching (React, Node.js, AI, Web3, etc.)</li>
        <li>💬 Instant messaging after a match</li>
        <li>🚀 Showcase your GitHub & portfolio right in your profile</li>
        <li>🔥 Boost feature to increase visibility</li>
        <li>
          🛠️ Collaborator search by project type (startup, freelance, hackathon)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold  mt-8 mb-2">
        Real People, Real Projects
      </h2>
      <p className=" mb-4">
        From indie hackers looking for product feedback, to students seeking
        teammates for final-year projects — DevTinder has become the go-to place
        for developers to meet beyond code comments and pull requests.
      </p>

      <h2 className="text-2xl font-semibold  mt-8 mb-2">
        Ready to Match with a Developer?
      </h2>
      <p className=" mb-6">
        Whether you want to learn, build, or just chill with someone who
        understands recursion, DevTinder makes it easier than ever.
        <strong>
          Sign up, swipe, and start building the future — together.
        </strong>
      </p>
      <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
        <button className="btn btn-primary text-center">
          Join DevTinder Now
        </button>
      </Link>
    </div>
  );
};

export default BlogPost;
