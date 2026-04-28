"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

interface VisualGalleryProps {
  images: string[];
}

export function VisualGallery({ images }: VisualGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  if (!images.length) return null;

  const initialCount = 6;
  const displayedImages = showAll ? images : images.slice(0, initialCount);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-[1180px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7f9fb] border border-blue-950/10 text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-6 shadow-sm">
            Visual Library
          </span>
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] leading-[1.05] tracking-[-0.02em] text-[#001736]">
            Documenting the Unseen
          </h2>
          <p className="text-[1.1rem] md:text-[1.3rem] leading-relaxed text-[#4d5b6a] mt-6">
            Explore our collection of high-definition visual assets documenting the beauty of our oceans and the impact of systemic waste.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayedImages.map((src, index) => {
            // Clean up filename for alt text
            const altText = src
              .split("/")
              .pop()
              ?.replace(/\.jpg$|\.png$/i, "")
              .replace(/-/g, " ") || "Environmental Image";

            return (
              <div 
                key={index} 
                className="relative break-inside-avoid rounded-3xl overflow-hidden group cursor-pointer border border-blue-950/5 shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={altText}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001736]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-center">
                    <p className="text-white text-sm font-bold tracking-wide uppercase truncate pr-4">
                      {altText}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && images.length > initialCount && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center gap-3 min-h-[3.5rem] px-10 py-4 rounded-full text-[0.82rem] font-black tracking-[0.15em] uppercase border-2 border-[#001736] text-[#001736] hover:bg-[#001736] hover:text-white transition-all shadow-lg hover:shadow-xl"
            >
              See More Images
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#001736]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 transition-all duration-500 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>
          
          <div className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center">
             <Image
                src={selectedImage}
                alt="Selected Image"
                fill
                className="object-contain"
                sizes="90vw"
             />
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <p className="text-white/60 text-sm font-black tracking-[0.2em] uppercase">
              {selectedImage.split("/").pop()?.replace(/\.jpg$|\.png$/i, "").replace(/-/g, " ")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
