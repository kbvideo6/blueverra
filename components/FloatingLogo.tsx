"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function FloatingLogo() {
  const logos = [
    { src: "/logos/leo-logo-v2.png", alt: "Leos of Sri Lanka & Maldives v2" },
    { src: "/logos/leo-logo.png", alt: "Leos of Sri Lanka & Maldives v1" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % logos.length);
        setIsExiting(false);
      }, 500); // Wait for fade out
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [logos.length]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center justify-center pointer-events-none group">
      <div className="bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,23,54,0.1)] rounded-[20px] p-1.5 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-1000 pointer-events-auto hover:bg-white/60 hover:shadow-[0_12px_40px_0_rgba(0,23,54,0.15)] transition-all cursor-default overflow-hidden">
        <div className="bg-white/80 rounded-[14px] px-4 py-2 flex flex-col items-center gap-0.5 border border-white/20 min-w-[180px]">
          <span className="text-[8px] uppercase tracking-[0.2em] font-black text-[#001736]/30 leading-none">Supported by</span>
          <div className="relative w-[140px] h-[32px] overflow-hidden">
            <div className={`relative w-full h-full transition-all duration-500 transform ${isExiting ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <Image 
                src={logos[currentIndex].src} 
                alt={logos[currentIndex].alt} 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
