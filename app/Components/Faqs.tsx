"use client";

import { useState } from "react";

export default function Faq() {
  const faqData = [
    {
      question: "Is my donation secure?",
      answer: "Yes. We use trusted payment gateways with full encryption to ensure your donation is safe.",
    },
    {
      question: "Where does my money go?",
      answer: "Every donation is tracked and allocated to programs directly benefiting children, including education, health, and emergency support.",
    },
    {
      question: "Can I donate monthly?",
      answer: "Absolutely. You can set up recurring donations to provide consistent support to our programs.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes. Donations are eligible for tax deductions according to your country's regulations.",
    },
    {
      question: "Do you provide updates on impact?",
      answer: "Yes. Donors receive regular updates highlighting the tangible impact their contributions have made.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-700 px-6">
      <div className="max-w-4xl mx-auto">

        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-50 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-50 text-[1.5rem]">
            Answers to common questions about our fundraiser and how your donation makes a difference.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
                onClick={() => toggleIndex(index)}
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <span className="text-gray-900">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-900 bg-white border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <h3 className="text-[1.8rem] font-semibold text-gray-50 mb-4">Get in Touch</h3>
          <p className="text-gray-50 text-[1.4rem] mb-4">
            Have more questions? Contact our support team and we’ll be happy to assist you.
          </p>
          <p className="text-gray-50 text-[1.3rem] font-medium">Email: support@fundraiser.org</p>
          <p className="text-gray-50 text-[1.3rem] font-medium">Phone: +234 800 123 4567</p>

          {/* Optional Mini CTA */}
          <div className="mt-6">
            <a
              href="#donate" // this should link to your existing Donate button anchor
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-sm  font-semibold hover:bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600 transition"
            >
              Donate Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}