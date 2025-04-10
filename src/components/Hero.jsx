// src/components/Hero.js
import React from 'react';
import { CARDS, GRADIENT_COLORS } from '../constants';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen text-white overflow-hidden bg-black bg-[url('/Heroback.png')] bg-no-repeat bg-cover bg-center"
    >
      {/* Purple Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${GRADIENT_COLORS.background} opacity-75 z-0`}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20">
        <h1 className="text-5xl font-bold">
          Your <span className="italic">Different</span> Needs, Our perfect sounds!
        </h1>

        <p className="mt-4 text-lg mx-auto text-gray-200">
          Life can be overwhelming. Finding the right sounds shouldn’t be. Soundscape offers curated playlists for every mood, live radio, and calming nature sounds. Enhance your life, sleep better, and find peace with Soundscape.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 mt-16 flex flex-wrap justify-center gap-5 px-4 pb-24">
        {CARDS.map((card, index) => (
          <div
            key={index}
            className="w-52 sm:w-64 h-72 bg-black/30 backdrop-blur-lg rounded-lg shadow-lg shadow-black/70 flex flex-col items-center justify-end p-4 pt-12 relative overflow-visible transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={card.image}
              alt={card.label}
              className="absolute w-[320%] max-w-none h-45 object-contain left-1/2 -translate-x-1/2 top-6 z-0"
            />
            <div
              className={`bg-gradient-to-r ${GRADIENT_COLORS.cardBackground} text-white w-full text-center rounded-lg py-2 font-medium z-10`}
            >
              {card.label}
            </div>
          </div>
        ))}
      </div>

      {/* Fade into next section */}
      <div
        className={`absolute bottom-0 w-full h-32 bg-gradient-to-b ${GRADIENT_COLORS.fadeBackground} z-10`}
      ></div>
    </section>
  );
};

export default Hero;
