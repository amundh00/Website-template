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

      {/* Subtle blue-white gradient overlay - premium look */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/60 to-blue-100/70" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Hero Text and Buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-7xl font-bold text-gray-900 text-center mb-0 md:mb-6">
          Velkommen til Engengruppen!
        </h1>
        <p className="text-1xl md:text-2xl lg:text-2xl font-light text-gray-900 text-center mb-12 md:mb-16">
          Velg din destinasjon hos oss!
        </p>
        
        {/* Place Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl w-full">
          {places.map((place) => (
            <a
              key={place.name}
              href={place.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-all duration-300 hover:scale-110 overflow-hidden aspect-square flex items-center justify-center w-28 h-28 md:w-32 md:h-32 mx-auto"
            >
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/80 hover:bg-white text-gray-800 rounded-full backdrop-blur-md transition-all duration-500 ease-out hover:scale-110 hover:shadow-xl flex items-center justify-center group"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 transition-transform duration-500 group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/80 hover:bg-white text-gray-800 rounded-full backdrop-blur-md transition-all duration-500 ease-out hover:scale-110 hover:shadow-xl flex items-center justify-center group"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 bg-white/80 backdrop-blur-md px-4 py-3 rounded-full shadow-lg">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-500 ease-out ${
              index === currentIndex
                ? 'bg-gray-800 w-10 h-2.5'
                : 'bg-gray-400/60 hover:bg-gray-600 w-2.5 h-2.5 hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

