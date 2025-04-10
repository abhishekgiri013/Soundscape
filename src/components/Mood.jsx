import React from 'react';

const moods = [
  './Distracted.png',
  './Romantic.png',
  './Tired.png',
  './Sad.png',
  './Anxious.png',
  './Angry.png',
  '/Distracted.png',
  './Romantic.png',
  './Tired.png',
  '/Sad.png',
];

const Mood = () => {
  return (
    <div className="p-10 bg-gradient-to-t from-[#191232] via-[#231a40] to-[#130c36] h-[120vh]">
      {/* Centered Heading */}
      <h1 className="text-3xl font-bold text-white mb-6 text-center mt-40">
        Sound solutions for your every Mood
      </h1>

      {/* Horizontal Scrollable Circular Cards */}
      <div className="flex overflow-x-auto space-x-20 py-4 scrollbar-hide">
        {moods.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-52 h-52 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={image}
              alt="mood"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Centered Button Below Cards */}
      <div className="flex justify-center mt-8">
        <button className="rounded-3xl bg-white text-black w-72 h-12 font-bold hover:scale-105 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Mood;
