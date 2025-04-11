import React from 'react';

const Meditation = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Top Background */}
      <div className="w-full h-[20vh] bg-[url('/Med1.png')] bg-cover bg-center" />

      {/* Mobile Image - Absolute Positioned */}
      <img
        src="/Medmobile.png"
        alt="Mobile UI"
        className="absolute z-20 h-[500px] md:h-[600px] lg:h-[650px] top-[50%] -translate-y-1/2 left-10 object-contain"
      />

      {/* Central Transparent Content with overlay */}
      <div className="relative z-10 w-[90%] max-w-[1433px] h-[360px] bg-white/10 backdrop-blur-md rounded-2xl flex flex-row items-center justify-end px-12 text-white shadow-lg -mt-16 -mb-16">
        {/* Right Side - Text */}
        <div className="w-full lg:w-2/3 text-left px-6 ml-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Find Your Focus with Guided Meditations          </h2>
          <p className="text-base sm:text-sm text-gray-200 ml-5 mr-20">
          Experience stress relief and enhance your focus with our expertly crafted guided meditations. Unlock a peaceful mind and a balanced life through the power of meditation.
          </p>
          <button className="flex justify-center items-center ml-80 bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition mt-5">
            Explore Now
          </button>
        </div>
      </div>

      {/* Bottom Background */}
      <div className="w-full h-[20vh] bg-[url('./Med1.png')] bg-cover bg-center" />
    </section>
  );
};

export default Meditation;
