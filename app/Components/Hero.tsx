"use client";
import Image from "next/image";
import proj1 from "@/public/proj1.png";

import { useEffect, useState, useRef } from "react";

const images = [
  "/proj1.png",
  "/proj2.jpg",
  "/proj3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

     // Duplicate first image at the end for smooth infinite loop
  const extendedImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // When we reach the duplicated slide, reset without animation
    if (current === extendedImages.length - 1) {
      setTimeout(() => {
        if (carousel) {
          carousel.style.transition = "none";
          setCurrent(0);
          carousel.style.transform = `translateX(0%)`;
        }
      }, 700); // match transition duration
    } else {
      if (carousel) {
        carousel.style.transition = "transform 0.7s ease-in-out";
        carousel.style.transform = `translateX(-${current * 100}%)`;
      }
    }
  }, [current, extendedImages.length]);

  //smooth slide-in 
  const [mounted, setMounted] = useState(false); 
  
  useEffect(() => {
  setMounted(true);
}, []);

  return (
    <section className="bg-gray-50 grid min-h-[85vh] mb-[4px] grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-16">
      
      {/* LEFT */}
      <div className="animate-fadeIn text-center md:text-left">
        <h1 className="text-5xl mt-10 md:text-[3.3rem] font-bold text-black leading-18">
          Start a Campaign. <br /> Change a Life.
        </h1>
        <p className="mt-6 text-[1.5rem] max-w-md text-gray-800">
        Start a fundraising campaign and help transform lives through
            kindness, generosity, and collective action.
        </p>

        <button className="mt-6 mb-2 rounded-[5px] bg-yellow-600 px-8 py-3 font-medium text-white hover:bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600 hover:text-white active:bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600">
          Start A Campaign
        </button>

         <div className="flex items-center justify-center md:justify-start gap-6 pt-6">
                    <Image src="/trust.png" alt="Trusted" width={40} height={40} />
                    <Image src="/lock.png" alt="Secure" width={40} height={40} />
                    <Image src="/envelope.png" alt="Verified" width={40} height={40} />
                  </div>

      </div>

      {/* RIGHT */}
  <div
  className={`
     relative w-full h-[400px] sm:h-[450px] md:w-[640px] md:h-[570px] mt-6 md:mt-1.5 overflow-hidden
   rounded-sm  transition-all duration-700 ease-out
    ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
  `}
>
         <div
          ref={carouselRef}
          className="flex h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedImages.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full relative">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0} // load first image immediately
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}