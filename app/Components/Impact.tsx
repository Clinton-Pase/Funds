"use client";

import { useEffect, useRef, useState } from "react";

export default function Impact() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    {
      id: 1,
      label: "Funds Raised",
      value: 1250000,
      suffix: "₦",
      bg: "bg-gray-700",
      icon: "money",
    },
    {
      id: 2,
      label: "Donations",
      value: 320,
      suffix: "",
      bg: "bg-gray-700",
      icon: "users",
    },
    {
      id: 3,
      label: "Volunteers",
      value: 48,
      suffix: "",
      bg: "bg-gray-700",
      icon: "campaign",
    },
    {
      id: 4,
      label: "Communities Reached",
      value: 12,
      suffix: "",
      bg: "bg-gray-700",
      icon: "life",
    },
  ];

  // Intersection Observer (trigger animation once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[2.8rem] mt-[-6px] font-bold text-gray-900">
            Our Impact So Far
          </h2>

          <p className="mt-4 text-gray-900 text-[1.2rem]">
            Every donation creates measurable change. From healthcare access
            to education and emergency support, your contributions are helping
            communities thrive.
          </p>
        </div>

        {/* Stats (2×2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              animate={hasAnimated}
              index={index}
            />
          ))}
        </div>

        {/* WHO Explanation */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-900 text-[1.4rem] leading-relaxed">
            According to global health and development reports from the
            World Health Organization (WHO), access to timely funding can
            improve health outcomes by over <strong>60%</strong>, increase
            educational retention by nearly <strong>45%</strong>, and
            significantly reduce the long-term impact of emergencies.
          </p>

          <p className="mt-4 text-gray-900 text-[1.4rem] leading-relaxed">
            Your donations directly contribute to these outcomes by enabling
            rapid response, sustained care, and long-term community support.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------
   Stat Card (COUNTING LOGIC LIVES HERE)
----------------------------------- */

function StatCard({ stat, animate, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const end = stat.value;
    const duration = 1800;
    const increment = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [animate, stat.value]);

  return (
  <div
  className={`
    group relative overflow-hidden text-center p-8 rounded-sm shadow-sm
    transition-all duration-500 hover:-translate-y-3 hover:shadow-xl
    ${stat.bg}
  `}
>

  {/* Pattern Background */}
  <div className="absolute inset-0 bg-[url('/Art.png')] bg-cover bg-center opacity-160 pointer-events-none" />

  {/* Soft Overlay (optional but improves readability) */}
  <div className="absolute inset-0 bg-gray-900/20 pointer-events-none" />

  {/* Content Wrapper */}
  <div className="relative z-10">

    {/* Icon */}
    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 group-hover:scale-110 transition-transform">
      <ImpactIcon type={stat.icon} />
    </div>

    {/* Number */}
    <div className="text-3xl font-bold text-gray-50 text-center">
      {stat.suffix === "₦" && "₦"}
      {count.toLocaleString()}
    </div>

    {/* Label */}
    <p className="mt-2 text-gray-50 text-center">
      {stat.label}
    </p>

  </div>
</div>
  );
}

/* ----------------------------------
   SVG Icons (NO LIBRARIES)
----------------------------------- */

function ImpactIcon({ type }) {
  if (type === "money") {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M12 12h.01" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    );
  }

  if (type === "campaign") {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 3v18" />
        <path d="M3 3h15l-2 4 2 4H3" />
      </svg>
    );
  }

  if (type === "life") {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 21s-7-4.35-9.5-8.5C-1 7.5 4.5 3 8.5 6.5L12 10l3.5-3.5C19.5 3 25 7.5 21.5 12.5 19 16.65 12 21 12 21z" />
      </svg>
    );
  }

  return null;
}