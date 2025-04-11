import React from 'react';


const SleepStoriesSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Image Overlay (Optional Blur or Dim) */}
      <div className="absolute inset-0 bg-[url('./Sleepback.png')] bg-cover bg-center opacity-80 h-80 mt-60">
             <img className='flex justify-center mt-5 ml-20 w-300 h-70' src="./EmoBelowRec.png" alt="" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl w-full">
        {/* Text Box */}
        <div className=" rounded-2xl p-10 mb-20 text-white text-center lg:text-left shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have A Sound Sleep With Our Sleep Stories
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-6">
            Feeling restless before sleep? No worries — our sleep stories got your back.
            Our sleep stories provide the perfect blend of stress relief and focus sleep,
            helping you unwind and sleep soundly.
          </p>
          
          <button className="flex justify-center items-center ml-80 bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Explore Now
          </button>
        </div>

        {/* Mobile Mockup */}
        <div className="w-full max-w-sm">
          <img src="./mobilebig.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SleepStoriesSection;
