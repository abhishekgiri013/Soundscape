import React, { useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const blogData = [
  {
    image: '/loveblog.png',
    category: 'Mental Health',
    title: 'How Brainwaves Are Effective?',
    description: 'Experience Stress Release And Anxiety Relief With Binaural Beats And Brain Frequency Therapy.',
    tags: ['#Brainwaves', '#Focusbetter', '#Concentration'],
  },
  {
    image: '/peaceblog.png',
    category: 'Mental Health',
    title: 'Understanding Brainwave Patterns',
    description: 'Dive deeper into Alpha, Beta, and Delta waves and their significance.',
    tags: ['#Brainwaves', '#Neuroscience'],
  },
  {
    image: '/peaceblog.png',
    category: 'Mindfulness',
    title: 'Meditation in Daily Life',
    description: 'Learn how short meditative breaks can enhance clarity and emotional well-being.',
    tags: ['#Mindfulness', '#Meditation', '#Wellbeing'],
  },
  {
    image: '/loveblog.png',
    category: 'Productivity',
    title: 'Focus Hacks for Creators',
    description: 'Tips and tools to maintain deep focus in a world full of distractions.',
    tags: ['#Focus', '#Creators', '#Productivity'],
  },
  {
    image: '/loveblog.png',
    category: 'Self Care',
    title: 'Reset Your Brain Naturally',
    description: 'Explore how nature and rest can help rejuvenate your mind.',
    tags: ['#Selfcare', '#Nature', '#Reset'],
  },
];

const BlogsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= blogData.length ? 0 : prev + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? blogData.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const visibleCards = blogData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="relative bg-gradient-to-b from-[#1A1532] to-[#0E0B1D] text-white py-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Blogs</h2>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 justify-items-center ml-60 mr-60">
          {visibleCards.map((blog, idx) => (
            <div
              key={idx}
              className="w-full max-w-md bg-[#1E1A36] rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={blog.image}
                alt="Blog Visual"
                className="rounded-lg mb-4 w-full object-cover h-48"
              />
              <p className="text-sm text-gray-400 mb-1">{blog.category}</p>
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{blog.description}</p>
              <div className="text-sm text-blue-400 space-x-2">
                {blog.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <MdNavigateBefore size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <MdNavigateNext size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default BlogsSection;
