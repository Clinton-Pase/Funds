"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Transparency() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const breakdown = [
    { label: "Direct Programs", percent: 70 },
    { label: "Logistics & Distribution", percent: 20 },
    { label: "Operations", percent: 10 },
  ];

  const partners = [
    "/aid1.png",
    "/aid2.png",
    "/aid3.png",
    "/aid4.png",
    "/aid5.png",
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-2 px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto px-6 mb-16">
          <h2 className="text-3xl md:text-[3rem] mt-[-30px] font-bold text-gray-50">
            Transparency & Accountability
          </h2>
          <p className="mt-4 text-gray-50 text-[1.6rem]">
            We are committed to responsible fund management. Every donation is
            tracked, reported, and allocated to maximize real-world impact.
          </p>
        </div>

        {/* Circular Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center">
          {breakdown.map((item, index) => {
            const radius = 70;
            const circumference = 2 * Math.PI * radius;
            const offset =
              circumference - (item.percent / 100) * circumference;

            return (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-44 h-44">

                  <svg
                    className="w-full h-full rotate-[-90deg]"
                    viewBox="0 0 200 200"
                  >
                    {/* Background circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r={radius}
                      stroke="#e5e7eb"
                      strokeWidth="15"
                      fill="transparent"
                    />

                    {/* Progress circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r={radius}
                      stroke="#eab308"
                      strokeWidth="15"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={animate ? offset : circumference}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>

                  {/* Percentage Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-50">
                      {item.percent}%
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-gray-50 font-semibold">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Assurance Text */}
        <div className="text-center max-w-4xl mx-auto mb-22">
          <p className="text-gray-50 text-[1.3rem]  leading-relaxed">
            We publish regular financial summaries and impact updates to ensure
            full transparency. Our commitment is to direct the majority of
            funds toward programs that directly serve communities while
            maintaining efficient operational support.
          </p>
        </div>

        {/* Partner Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...partners, ...partners].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-16 relative">
                <Image
                  src={logo}
                  alt="Partner Logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Carousel Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}