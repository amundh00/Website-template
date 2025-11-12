'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const places = [
  { name: 'Cafe Opera', image: '/places/cafe-opera.webp', url: 'https://cafeopera.org/' },
  { name: 'Amalies hage', image: '/places/amaliesHage-logo.png', url: 'https://www.bergensentrum.no/bedrift/amalies-hage/' },
  { name: 'Kennel', image: '/places/kennel-logo.png', url: '#' },
  { name: 'Argus Service', image: '/places/argus-service.png', url: 'https://argustesthosting.vercel.app/' },
  { name: 'Pingvinen', image: '/places/pingvinen-logo.jpg', url: 'https://portal.gastroplanner.no/p/nFYlVe' },
  { name: 'Frk Schmidt', image: '/places/frk-schmidt.jpg', url: 'https://www.frkschmidt.no/' },
  { name: 'Skiftet bar', image: '/places/skifte-logo.png', url: 'https://www.detvestnorsketeateret.no/skifte' },
];

export function ImageSlider() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch images from the API
  useEffect(() => {
    fetch('/api/slider-images')
      .then(res => res.json())
      .then(data => {
        if (data.images && data.images.length > 0) {
          setImages(data.images);
        }
      })
      .catch(error => console.error('Error loading slider images:', error));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Show loading state if no images yet
  if (images.length === 0) {
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Luxury gradient overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/85 via-blue-50/75 to-indigo-100/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      {/* Hero Text and Buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 py-8">
        {/* Title Section - premium typography */}
        <div className="mb-10 md:mb-14 text-center space-y-3 md:space-y-4">
          <div className="inline-block">
            <p className="text-xs md:text-sm font-light tracking-[0.3em] text-slate-600 uppercase mb-3 md:mb-4">
              Velkommen til
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
                Engengruppen
              </span>
            </h1>
            <div className="h-[2px] w-32 md:w-48 mx-auto mt-4 md:mt-6 bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
          </div>
          <p className="text-sm md:text-base lg:text-lg font-light text-slate-700 tracking-[0.2em] uppercase">
            Velg din destinasjon
          </p>
        </div>
        
        {/* Place Buttons - luxury frosted glass cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-9 max-w-5xl w-full">
          {places.map((place, index) => (
            <a
              key={place.name}
              href={place.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-all duration-500 ease-out flex items-center justify-center"
              style={{
                animation: `fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s both`
              }}
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-300/0 to-indigo-300/0 group-hover:from-blue-300/8 group-hover:to-indigo-300/8 blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Premium glass container */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white/25 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] group-hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.2)] group-hover:bg-white/30 group-hover:scale-[1.02] group-hover:-translate-y-0.5 transition-all duration-500 p-4 flex items-center justify-center border border-white/50 group-hover:border-white/60">
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-contain p-3 transition-all duration-500 group-hover:scale-105 filter drop-shadow-lg"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

