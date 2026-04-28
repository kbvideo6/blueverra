"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Lightbulb } from 'lucide-react';
import { ActionModal } from './ActionModal';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/75 border-b border-blue-950/10">
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="flex items-center justify-between min-h-[5rem] gap-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image 
                src="/logos/Sea_Nova_Project_Logo-removebg-preview.png" 
                alt="seaNOVA Logo" 
                width={46} 
                height={46} 
                className="object-contain flex-none"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-[1.4rem] leading-none tracking-tight text-[#001736] m-0">Blueverra</span>
                <span className="text-[0.76rem] tracking-[0.2em] uppercase text-[#4d5b6a] mt-1 space-x-1 whitespace-nowrap"><span>by</span> <span>seaNOVA</span></span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-4 py-3 rounded-full text-[#4d5b6a] text-[0.82rem] font-extrabold tracking-[0.12em] uppercase transition-all hover:bg-blue-950/5 hover:text-[#001736]">Home</Link>
              <Link href="/e-waste" className="px-4 py-3 rounded-full text-[#4d5b6a] text-[0.82rem] font-extrabold tracking-[0.12em] uppercase transition-all hover:bg-blue-950/5 hover:text-[#001736]">E-Waste</Link>
              <Link href="/marine-pollution" className="px-4 py-3 rounded-full text-[#4d5b6a] text-[0.82rem] font-extrabold tracking-[0.12em] uppercase transition-all hover:bg-blue-950/5 hover:text-[#001736]">Marine</Link>
              <Link href="/take-action" className="px-4 py-3 rounded-full text-[#4d5b6a] text-[0.82rem] font-extrabold tracking-[0.12em] uppercase transition-all hover:bg-blue-950/5 hover:text-[#001736]">Take Action</Link>
            </nav>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[3rem] px-5 py-3 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-lg transition-transform hover:-translate-y-[1px] cursor-pointer"
              >
                <Lightbulb size={16} className="text-[#5fa8d3]" />
                Submit Your Idea/
              </button>
              <button className="md:hidden flex items-center justify-center p-3 text-[#001736] hover:bg-blue-950/5 rounded-full transition-colors">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
