"use client";

import { useState } from "react";
import Image from "next/image";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export function BeforeAfter({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-[24px] overflow-hidden select-none bg-blue-950/5 group shadow-xl">
      {/* After Image / Base (Clean) */}
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, 80vw"
      />
      
      {/* Label for After Content */}
       <div className="absolute right-4 top-4 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full text-[0.75rem] font-bold uppercase tracking-widest text-[#3b6934] z-10 pointer-events-none">
        After Impact
      </div>

      {/* Before Image Area (Polluted) */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 80vw"
        />

        {/* Label for Before Content */}
        <div className="absolute left-4 top-4 bg-[#0d1b2a]/70 backdrop-blur-md px-3 py-1.5 rounded-full text-[0.75rem] font-bold uppercase tracking-widest text-white z-10 pointer-events-none">
          Before Intervention
        </div>
      </div>

      {/* Slider Thumb & Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none z-20 shadow-[-2px_0_10px_rgba(0,0,0,0.1),2px_0_10px_rgba(0,0,0,0.1)] transition-transform duration-75"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] pointer-events-auto border-2 border-[#5fa8d3] group-hover:scale-110 transition-transform duration-300">
          <CircleArrowLeft className="w-4 h-4 text-[#001736] absolute -left-1" />
          <CircleArrowRight className="w-4 h-4 text-[#001736] absolute -right-1" />
        </div>
      </div>

      {/* Invisible Range Input for accessibility and pure touch handling */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}
