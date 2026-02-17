"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = [
    { name: "Causes", items: ["Education", "Health", "Emergency"] },
    { name: "Campaigns", items: ["Ongoing", "Completed", "Start One"] },
    { name: "About", items: ["Mission", "Team", "Impact"] },
    { name: "Contact", items: ["Email", "Phone", "Support"] },
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 py-0 flex items-center justify-between">

        {/* Logo */}
        <div className="ml-[-10px]">
          <Image
            src="/logo (3).png"
            alt="Logo"
            width={160}
            height={100}
          />
        </div>

        {/* Desktop Links */}
        <div ref={navRef} className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((link, index) => (
            <div key={index} className="relative">
              {link.items ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="flex items-center gap-1 font-medium text-gray-700 hover:text-black"
                  >
                    {link.name} <span className="text-[20px]">▾</span>
                  </button>

                  {openDropdown === index && (
                    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 bg-white shadow-lg z-50">
                      <ul className="py-2">
                        {link.items.map((item, i) => (
                          <li
                            key={i}
                            className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-black"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Donate and Sign Up */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="/signup"
            className="font-medium text-gray-700 hover:text-black"
          >
            Sign up
          </a>
          <button className="bg-black text-white px-5 py-2 rounded-sm text-sm font-semibold hover:b">
            Donate
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden mr-6 text-[2.3rem] font-extrabold text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-2">
          {links.map((link, index) => (
            <div key={index}>
              {link.items ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-gray-900 font-semibold text-left mb-1"
                  >
                    {link.name}
                    <span
                      className={`transition-transform duration-300 ${
                        mobileDropdown === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {mobileDropdown === index && (
                    <div className="pl-4 space-y-1">
                      {link.items.map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block text-sm text-gray-900 font-light hover:text-orange-600 active:text-orange-800"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href="#"
                  className="block font-medium text-gray-800 mb-2"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}

          {/* Mobile Donate Button */}
          <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600 active:bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600">
            Donate
          </button>
        </div>
      )}
    </nav>
  );
}