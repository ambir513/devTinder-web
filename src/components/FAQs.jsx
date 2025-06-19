import React from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What is DevTinder?",
      answer:
        "DevTinder is a swipe-based social platform for developers to connect, collaborate, and build meaningful coding partnerships.",
    },
    {
      question: "Is DevTinder free to use?",
      answer:
        "Yes! DevTinder is free to use. We also offer optional premium features like Boosts and Spotlights for enhanced visibility.",
    },
    {
      question: "How do I sign up?",
      answer:
        "You can sign up using your Google account or email directly on our website: https://thedevtinder.xyz It only takes a few seconds!",
    },
    {
      question: "Can I showcase my GitHub and portfolio?",
      answer:
        "Absolutely! We encourage users to add their GitHub, portfolio, and LinkedIn links so others can learn more about your work.",
    },
    {
      question: "How does matching work on DevTinder?",
      answer:
        "Swipe right to connect with someone. If they swipe right too, it’s a match and you can start chatting instantly.",
    },
    {
      question: "What can I use DevTinder for?",
      answer:
        "You can use DevTinder to find collaborators, mentors, project partners, startup teammates, or even just like-minded dev friends.",
    },
    {
      question: "What is a Boost?",
      answer:
        "A Boost pushes your profile to the top for 30 minutes, increasing your chances of getting noticed and matched.",
    },
    {
      question: "How is my data protected?",
      answer:
        "We use secure encryption and follow privacy best practices. We never sell or share your personal data. See our Privacy Policy for details.",
    },
    {
      question: "I found a bug or issue. What should I do?",
      answer:
        "Please report it to us at support@thedevtinder.xyz with steps to reproduce. We’re constantly improving the platform!",
    },
    {
      question: "How can I delete my account?",
      answer:
        "Currently, account deletion is not available from the app interface as it's not recommended. If you still wish to proceed, please contact us at support@thedevtinder.xyz and our team will assist you manually.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 ">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        Still have questions? Email us at{" "}
        <a
          href="mailto:support@thedevtinder.xyz"
          className="text-primary underline"
        >
          support@thedevtinder.xyz
        </a>
      </p>
    </div>
  );
};

export default FAQs;
