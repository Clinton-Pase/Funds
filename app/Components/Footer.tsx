"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Logo + Mission */}
        <div className="md:flex md:justify-between md:items-start space-y-10 md:space-y-0">
          
          {/* Logo + Mission */}
          <div className="md:w-1/3">
          <Image
            src="/logo (3).png"
            alt="Logo"
            width={180}
            height={120}
            className="mb-4"
          />
            <p className="text-gray-900 ">
              Empowering the next generation through education, healthcare, and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><a href="#hero" className="hover:text-orange-500 transition">Home</a></li>
                <li><a href="#campaigns" className="hover:text-orange-500 transition">Campaigns</a></li>
                <li><a href="#impact" className="hover:text-orange-500 transition">Impact</a></li>
                <li><a href="#transparency" className="hover:text-orange-500 transition">Transparency</a></li>
                <li><a href="#faq" className="hover:text-orange-500 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1">
                <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
                <li><a href="#donate" className="hover:text-orange-500 transition">Donate</a></li>
                <li><a href="#campaigns" className="hover:text-orange-500 transition">Start a Campaign</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/3">
            <h3 className="font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">Get updates on our campaigns and see how your donations are making a difference.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

    

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-900 text-sm">
            &copy; {new Date().getFullYear()} Fundraiser for Children. All rights reserved.
          </div>
        </div> 
    </footer>
  );
}