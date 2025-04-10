import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Mood from './components/Mood';
import Testimonials from './components/Testimonial';
import BlogsSection from './components/BlogsSection';
import SleepStoriesSection from './components/SleepStoriesSection';
import Stress from './components/Stress';
import Sound from './components/Sound';
import Meditation from './components/Meditation';

const App = () => {
  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-b from-[#13033a] via-[#1A1532] to-[#1c0f36]">
      <Header />
      <Hero />
      <Explore />
      <Mood />
      <SleepStoriesSection />
      <Meditation />
      <Stress />
      <Sound />
      <BlogsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
