import React from 'react';

const Sound = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Top Background */}
      <div className="w-full h-[20vh] bg-[url('/1.png')] bg-cover bg-center" />

      {/* Mobile Image - Absolute Positioned */}
      <img
        src="/twomobile.png"
        alt="Mobile UI"
        className="absolute z-20 h-[500px] md:h-[600px] lg:h-[650px] top-[50%] -translate-y-1/2 left-10 object-contain"
      />

      {/* Central Transparent Content */}
      <div className="relative z-10 w-[90%] max-w-[1433px] h-[360px] bg-white/10 backdrop-blur-md rounded-2xl flex flex-row items-center justify-end px-12 text-white shadow-lg -mt-16 -mb-16">
        <div className="w-full lg:w-2/3 text-left px-6 ml-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Unlock Mental Well-Being with Brainwaves
          </h2>
          <p className="text-base sm:text-lg text-gray-200">
            Experience stress release and anxiety relief with binaural beats and brain frequency therapy.
            Find different waves for best mental well-being, body stress release, and better physical wellbeing.
          </p>
        </div>
      </div>

      {/* Bottom Gradient Background to Blend with Blog Section */}
      <div className="w-full h-[20vh] bg-gradient-to-b from-transparent to-[#1A1532]" />
    </section>
  );
};

export default Sound;
