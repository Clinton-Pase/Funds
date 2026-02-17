"use client";

export default function Vision() {
  return (
    <section className="relative bg-white py-28 px-8 text-center overflow-hidden">
      
      {/* Soft warm glow accents */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-200 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gray-200 opacity-40 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          A Brighter Future Begins With Us
        </h2>

        <p className="text-lg md:text-xl text-gray-900 mb-10 max-w-2xl mx-auto">
          Every child deserves safety, education, nourishment, and love.  
          Through compassion and collective action, we are building a world 
          where no child is left behind.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          
          <button className="bg-black text-white font-semibold px-8 py-4 rounded-sm hover:bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600 transition">
            Make a Difference
          </button>

          <button className="border border-gray-900 font-semibold text-black px-8 py-4 rounded-sm hover:bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600 transition">
            Become a Partner
          </button>

        </div>

      </div>
    </section>
  );
}