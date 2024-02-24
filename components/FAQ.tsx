"use client";

import { useState } from "react";
import Head from "next/head";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes to rapidly build custom designs without having to leave your HTML.",
    },
    {
      question: "How do I get started with Next.js and Tailwind CSS?",
      answer:
        "To get started with Next.js and Tailwind CSS, you can follow the official documentation and tutorials available on their respective websites.",
    },
    {
      question:
        "Is Next.js and Tailwind CSS a good combination for building web applications?",
      answer:
        "Yes, Next.js and Tailwind CSS complement each other well and are commonly used together by developers to build modern and responsive web applications efficiently.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>FAQ - Your Website</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Next.js and Tailwind CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full py-4 px-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transition-transform transform ${
                      activeIndex === index ? "rotate-0" : "rotate-180"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 9l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
