import React from 'react';

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-white/10"
      style={{
        backdropFilter: 'blur(8.2px)',
        WebkitBackdropFilter: 'blur(8.2px)', // for Safari support
      }}
    >
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-3">
        <img src="./logo.png" alt="Soundscape Logo" className="h-8 w-8 object-contain" />
        <span className="text-white font-semibold text-xl tracking-wide"><img src="./Soundscape.png"className='h-7 flex item-center' alt="" /></span>
      </div>

      {/* Top Playlist Button */}
      <button className=" text-white px-4 py-2 rounded-lg hover:bg-black font-bold transition duration-300">
        Top Playlist
      </button>
    </header>
  );
};

export default Header;
