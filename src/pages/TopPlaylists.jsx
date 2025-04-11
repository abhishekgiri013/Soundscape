import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { PauseCircle } from 'lucide-react';
import { IoPlayCircle } from 'react-icons/io5';
import { FaRegPauseCircle } from "react-icons/fa";
import { MdOutlinePause } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const TopPlaylists = () => {
  const [groupedSounds, setGroupedSounds] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRefs = useRef({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/sounds')
      .then((res) => {
        const grouped = {};
        res.data.forEach(sound => {
          const categoryName = sound.category.name;
          if (!grouped[categoryName]) {
            grouped[categoryName] = {
              image: sound.category.image,
              sounds: []
            };
          }
          grouped[categoryName].sounds.push(sound.audioUrl);
        });
        setGroupedSounds(grouped);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching sounds:', err);
        setError('Failed to load playlists.');
        setLoading(false);
      });
  }, []);

  const togglePlay = (url) => {
    const audio = audioRefs.current[url];
    if (!audio) return;

    if (currentPlaying && currentPlaying !== url) {
      const currentAudio = audioRefs.current[currentPlaying];
      currentAudio?.pause();
    }

    if (audio.paused) {
      audio.play();
      setCurrentPlaying(url);
      setDuration(audio.duration || 0);
    } else {
      audio.pause();
      setCurrentPlaying(null);
    }
  };

  const handleTimeUpdate = (url) => {
    const audio = audioRefs.current[url];
    if (audio && currentPlaying === url) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    }
  };

  const handleSeek = (url, e) => {
    const audio = audioRefs.current[url];
    const percent = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
    const seekTime = percent * duration;
    if (audio) {
      audio.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#13033a] text-white">
        <p className="text-lg animate-pulse">Loading playlists...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#13033a] text-white">
        <p className="text-lg text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div
      className="pt-24 px-6 pb-12 min-h-screen text-white"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
          linear-gradient(to bottom, rgba(19, 3, 58, 0.1), rgba(26, 21, 50, 0.95), rgba(28, 15, 54, 1)),
          linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(82, 34, 88, 0.5)),
          url('/Topback.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {Object.entries(groupedSounds).map(([categoryName, { image, sounds }]) => (
        <div key={categoryName} className="mb-20 p-4 rounded-xl flex flex-col sm:flex-row gap-30 mt-5 ml-8">
          <img
            src={image || '/fallback.png'}
            alt={categoryName}
            className="w-48 h-32 sm:w-64 sm:h-47 object-cover rounded-lg shadow-lg"
          />

          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{categoryName}</h2>
            <div className="flex gap-10 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent pr-2 h-25">
              {sounds.map((url, idx) => {
                const isPlaying = currentPlaying === url;
                return (
                  <div
                    key={idx}
                    className={`transition-all duration-300 ease-in-out bg-gradient-to-tr from-[#302e30] via-white/30 to-[#493c48] backdrop-blur- p-4 rounded-xl shadow-md text-white hover:shadow-xl flex items-center justify-center ${
                      isPlaying ? 'min-w-[300px] w-[300px] flex-col h-[80px] mt-3' : 'min-w-[180px] w-[190px]'
                    }`}
                  >
                    <audio
                      ref={(el) => (audioRefs.current[url] = el)}
                      src={url}
                      onEnded={() => {
                        setCurrentPlaying(null);
                        setCurrentTime(0);
                      }}
                      onTimeUpdate={() => handleTimeUpdate(url)}
                      className="hidden"
                    />

                    {!isPlaying ? (
                      <div className="flex  items-center justify-center text-center gap-2">
                        <button onClick={() => togglePlay(url)}>
                          
                          <div className='bg-[#888484] w-10 h-10 rounded-full flex items-center justify-center text-lg'><FaPlay className='ml-0.5'/></div>
                            
                        </button>
                        <span className="text-lg font-semibold">Track {idx + 1}</span>
                      </div>
                    ) : (
                      <>
                        <span className="text-xs font-bold mt-2 mr-28 block">
                          Track {idx + 1}
                        </span>

                        <div className="flex items-center gap-3 w-full mb-5">
                          <button onClick={() => togglePlay(url)} className="text-[#fffcfc] ">
                          <div className='bg-[#888484] w-10 h-10 rounded-full flex items-center justify-center text-2xl'><MdOutlinePause/></div>
                          </button>

                          <span className="text-xs w-10 text-right">{formatTime(currentTime)}</span>

                          <div
                            className="flex-1 h-[4px] bg-gray-600 rounded-full relative cursor-pointer"
                            onClick={(e) => handleSeek(url, e)}
                          >
                            <div
                              className="absolute top- left-0 h-full bg-white rounded-full"
                              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                            ></div>
                            <div
                              className="absolute top-[-4px] w-3 h-3 bg-white rounded-full"
                              style={{
                                left: `${(currentTime / duration) * 100 || 0}%`,
                                transform: 'translateX(-50%)',
                              }}
                            ></div>
                          </div>

                          <span className="text-xs w-10 text-left">{formatTime(duration)}</span>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopPlaylists;
