"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


//intersection observer hook for reveal animations
function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // lower threshold = triggers earlier
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return { ref, isVisible };
}


const campaigns = [
  {
    id: 1,
    title: "Clean Water for Rural Communities",
    excerpt:
      "Providing access to safe and clean drinking water for underserved villages.",
    raised: 820000,
    goal: 1200000,
    slug: "clean-water-rural-communities",
      image:"/help1.jpg",
      tall: true,
  },
  {
    id: 2,
    title: "Education for Every Child",
    excerpt:
      "Helping children return to school with books, uniforms, and tuition support.",
    raised: 540000,
    goal: 900000,
    slug: "education-for-every-child",
    image:"/help2.jpg",
  },
  {
    id: 3,
    title: "Emergency Medical Support",
    excerpt:
      "Rapid medical assistance for families facing life-threatening situations.",
    raised: 300000,
    goal: 600000,
    slug: "emergency-medical-support",
    image: "/help3.jpg",
    tall: true,
  },
  {
    id: 4,
    title: "Food Relief Program",
    excerpt:
      "Delivering food supplies to families affected by economic hardship.",
    raised: 410000,
    goal: 700000,
    slug: "food-relief-program",
    image:"/help4.jpg",
  },
  {
    id: 5,
    title: "Support for Displaced Families",
    excerpt:
      "Providing shelter and basic needs for displaced families.",
    raised: 250000,
    goal: 500000,
    slug: "support-displaced-families",
    image: "/help2.jpg",
  },
];



export default function Featured() {

  
const [isVisible, setIsVisible] = useState(true);

console.log(isVisible);
  
  return (
    <section className="bg-gray-700 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16 overflow-hidden mx-auto text-center lg:text-left">
          <h2
  className={`transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
    text-[2.8rem] font-bold text-gray-50
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
  `}
>
            Featured Campaigns
          </h2>
          <p  className={`mt-4 text-gray-50 text-[1.4rem] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-20 translate-y-10"}
    `}>
            Explore active campaigns and see where your support can make an
            immediate difference.
          </p>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => {
            const progress = Math.min(
              (campaign.raised / campaign.goal) * 100,
              100
            );

            return (
              <Link
                key={campaign.id}
                href={`/campaigns/${campaign.slug}`}
                className={`
                  group block rounded-sm bg-white p-6 shadow-sm transition-all duration-500
                  hover:-translate-y-2 hover:shadow-lg
                `}
              >
                {/* Placeholder Image */}
            <div
  className={`relative w-full mb-5 overflow-hidden rounded-sm ${
    campaign.tall ? "h-56" : "h-40"
  }`}
>
  <Image
    src={campaign.image}
    alt={campaign.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>

                {/* Content */}
                <h3 className="text-[1.4rem] font-semibold text-gray-900 mb-2">
                  {campaign.title}
                </h3>

                <p className="text-gray-900 mb-5 leading-relaxed">
                  {campaign.excerpt}
                </p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-[16px] text-gray-900 font-bold mb-1">
                    <span>Raised</span>
                    <span>
                      ₦{campaign.raised.toLocaleString()} / ₦
                      {campaign.goal.toLocaleString()}
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-600"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
