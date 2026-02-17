"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "This platform helped us raise funds for urgent surgery within days. The support from donors was overwhelming and life-changing.",
    name: "A. Darren",
    role: "Beneficiary",
    image: "/IMAGE 12.png",
  },
  {
    id: 2,
    quote:
      "I’ve donated to many causes, but this is the first time I truly felt connected to the impact. The transparency builds real trust.",
    name: "Daniel K.",
    role: "Donor",
    image: "/IMAGE 22.png",
  },
  {
    id: 3,
    quote:
      "Starting a campaign was simple and effective. The tools provided made it easy to share our story and reach supporters.",
    name: "Grace O.",
    role: "Campaign Organizer",
    image: "/IMAGE 32.png",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-18 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-[2.6rem] font-bold text-gray-900">
          What People Are Saying
        </h2>

        <p className="mt-4 text-gray-900 text-[20px]">
          Real stories from donors, beneficiaries, and campaign organizers.
        </p>

        {/* Carousel */}
        <div className="relative mt-12  overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="min-w-full px-6">
                <div className="text-2xl md:text-[2rem] font-medium text-gray-800 leading-relaxed">
                  “{item.quote}”
                </div>

                {/* Avatar */}
                <div className="mt-10 flex justify-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name + Role */}
                <div className="mb-[30px]">
                  <p className="font-semibold text-gray-900 text-[1.4rem]">
                    {item.name}
                  </p>
                  <p className="text-sm text-black">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}