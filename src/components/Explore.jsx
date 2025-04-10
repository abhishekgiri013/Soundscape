// Explore.tsx
import React from 'react';

const Explore = () => {
  return (
    <div
      className="w-full h-[111vh] bg-cover bg-center relative text-white flex items-center justify-center px-4 text-center mt-20"
      style={{
        backgroundImage: "url('./mobile.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Top Gradient to blend with Hero */}
      

      <div className="relative z-10 max-w-3xl lg:ml-80">
        <h2 className="text-4xl font-bold mb-4">
          Perfect Playlists for Every Need
        </h2>

        <p className="text-lg mb-6 text-gray-200">
          Discover mind relaxing music, meditation tunes, and workout tracks. From motivational songs to focus music, our playlists enhance concentration and meet your every need.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-3xl font-semibold hover:bg-gray-200 transition duration-300 w-1/4">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Explore;
