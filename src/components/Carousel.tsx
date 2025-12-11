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
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden bg-black rounded-xl shadow-2xl">
      {IMAGES.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Nota: As imagens precisam existir em public/images para aparecerem */}
          <Image
            src={src}
            alt="Mundial Churrasqueiras Juiz de Fora"
            fill
            className="object-contain"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0 text-center z-10 px-4">
        <h3 className="text-white text-xl md:text-3xl font-bold drop-shadow-md">
          QUALIDADE RÚSTICA E RAIZ
        </h3>
        <p className="text-mundial-orange font-medium">Fabricação Própria em Juiz de Fora</p>
      </div>
    </div>
  );
}