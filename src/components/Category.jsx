import React from "react";
import HomeCard from "./HomeCard";

const Category = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 px-5 sm:px-10 md:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <HomeCard
            title="Smart Developer Matching"
            description="Get personalized dev profiles based on skills, stack, and goals — built for collaboration."
            images="🤖"
          />
          <HomeCard
            title="Skill-Based Filters"
            description="Refine your feed by language, role, or passion — from frontend to AI to startups."
            images="🎯"
          />
          <HomeCard
            title="Dynamic Profile Updates"
            description="Keep your profile synced as your skills grow — always show your best dev self."
            images="🔄"
          />
          <HomeCard
            title="End-to-End Dev Ecosystem"
            description="From matching to shipping — build your dev journey with full support and tools."
            images="🧩"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <HomeCard
            title="24/7 Chat Support"
            description="Got a question about a meal or move? Our team is here, anytime."
            images="💬"
          />
          <HomeCard
            title="All-In-One Mobile Access"
            description="Everything in one app: profiles, projects, messages, and developer matches."
            images="📱"
          />
          <HomeCard
            title="Premium Member Access"
            description="Unlock exclusive features with monthly membership — connect deeper, match smarter."
            images="🚀"
          />
          <HomeCard
            title="1-on-1 Developer Chat"
            description="Start meaningful conversations with matched devs — real-time, private, and productive."
            images="👥"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
