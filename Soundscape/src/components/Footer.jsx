import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white py-6 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left: Logo + Links */}
      <div className="flex items-center md:items-start gap-4">
        <div className="w-15">
          <img src="./logo.png" alt="Logo" />
        </div>

        <ul className="text-xs text-gray-300 space-y-1 text-center md:text-left cursor-pointer">
          <li>About Us</li>
          <li>Blogs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Center: Heading */}
      <div className="text-center mt-6 md:mt-0">
        <p className="text-gray-400 text-xs">To Access All Our Content Download Our App</p>
        <h1 className="text-3xl md:text-4xl font-semibold font-serif">Soundscape</h1>
      </div>

      {/* Right: QR + Store Badges */}
      <div className="flex flex-col items-center md:items-end gap-4 mt-6 md:mt-0">
        <div className="flex items-center gap-2">
          <img src="./Googleplay.png" alt="Google Play" className="w-32" />
        </div>
        <div className="flex items-center gap-2">
          <img src="./Applestore.png" alt="App Store" className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
