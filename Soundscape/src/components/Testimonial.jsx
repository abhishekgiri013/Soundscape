import React from 'react';

const testimonials = [
  {
    name: 'Riya Goyal',
    image: './riya.png', // Replace with correct image path
    message: 'App Is So Good That I Want To Listen To Songs Everyday...'
  },
  {
    name: 'Riya Goyal',
    image: './riya.png', // Replace with correct image path
    message: 'App Is So Good That I Want To Listen To Songs Everyday...'
  }
];

const Testimonials = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#11071e] via-[#2b153d] to-[#341a51] text-white py-16 px-4 md:px-20">
    
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">Hear From Our Users</h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#1b102c] shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-all duration-300 rounded-lg p-6 w-full md:w-130 flex items-start gap-4"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-base font-semibold leading-snug">
                {testimonial.message}
              </p>
              <p className="mt-2 text-sm text-white/70">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
