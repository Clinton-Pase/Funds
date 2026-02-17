

const steps = [
  {
    
    title: "Start a Campaign",
    description:
      "Create a campaign in minutes and tell your story to people who care.",
       icon: "flag",
  },
  {
    
    title: "Share with the World",
    description:
      "Reach donors through social media and our growing community.",
       icon: "heart",
  },
  {
    
    title: "Create Real Impact",
    description:
      "Funds go directly to causes, helping lives and communities thrive.",
       icon: "wallet",
  },
];


export default function Works() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-gray-900 overflow-hidden">
      
      {/* Background pattern */}

     <div className="absolute inset-0 bg-[url('/Art.png')] bg-cover bg-center" />

     {/* Overlay */}
     <div className="absolute inset-0 bg-white/22" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className=" mt-[-22px] text-[40px] md:text-[50px] font-bold text-gray-50">
            How It Works
          </h2>
          <p className="mt-4 text-gray-50 text-[1.3rem]">
            Fundraising made simple, transparent, and impactful.
          </p>
        </div>

        {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-sm p-8 shadow-xl
                         transition-all duration-500
                         hover:-translate-y-3 hover:shadow-xl"
            >
              {/* Icon Circle */}
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full
                           bg-yellow-100 text-yellow-600 mb-6
                           transition-all duration-500
                           group-hover:bg-yellow-500 group-hover:text-white
                           group-hover:scale-110"
              >
                <div
                  className="transition-transform duration-500
                             group-hover:rotate-12 group-hover:scale-125"
                >
                  <StepIcon type={step.icon} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Hover ring */}
              <div
                className="pointer-events-none absolute inset-0 rounded-sm
                           opacity-0 group-hover:opacity-100
                           transition duration-500
                           ring-1 ring-yellow-400/30"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

/* ----------------------------------
   SVG ICONS (NO LIBRARIES)
----------------------------------- */

function StepIcon({ type }) {
  if (type === "flag") {
    return (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 4v16" />
        <path d="M4 4h14l-2 4 2 4H4" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21s-7-4.35-9.5-8.5C-1 7.5 4.5 3 8.5 6.5L12 10l3.5-3.5C19.5 3 25 7.5 21.5 12.5 19 16.65 12 21 12 21z" />
      </svg>
    );
  }

  if (type === "wallet") {
    return (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M16 12h2" />
      </svg>
    );
  }

  return null;
}
  