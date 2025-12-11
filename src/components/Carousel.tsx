'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const IMAGES = [
  '/images/galeria-01.jpg',
  '/images/galeria-02.jpg',
  '/images/galeria-03.jpg',
  '/images/galeria-04.jpg',
  '/images/galeria-05.jpg',
  '/images/galeria-06.jpg',
  '/images/galeria-07.jpg',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-mundial-base">
      {IMAGES.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Churrasqueira Mundial Modelo ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Gradiente sutil na base para integrar com o card */}
          <div className="absolute inset-0 bg-gradient-to-t from-mundial-base/50 via-transparent to-transparent" />
        </div>
      ))}
      
      {/* Indicadores */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {IMAGES.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-mundial-orange' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}