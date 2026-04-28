"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Lightbulb, X, ArrowRight } from 'lucide-react';
import { ActionModal } from './ActionModal';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "E-Waste", href: "/e-waste" },
    { name: "Marine", href: "/marine-pollution" },
    { name: "Take Action", href: "/take-action" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/75 border-b border-blue-950/10">
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="flex items-center justify-between min-h-[5rem] gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-[56px] h-[56px] flex-none bg-[#001736]/5 rounded-xl p-1 overflow-hidden transition-transform group-hover:scale-105">
                <Image 
                  src="/logos/Geothermal-removebg-preview.png" 
                  alt="Blueverra Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-serif text-[1.6rem] leading-none tracking-tight text-[#001736] m-0">Blueverra</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="px-4 py-3 rounded-full text-[#4d5b6a] text-[0.82rem] font-extrabold tracking-[0.12em] uppercase transition-all hover:bg-blue-950/5 hover:text-[#001736]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[3rem] px-5 py-3 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-lg transition-transform hover:-translate-y-[1px] cursor-pointer"
              >
                <Lightbulb size={16} className="text-[#5fa8d3]" />
                Submit Your Idea/
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden flex items-center justify-center p-3 text-[#001736] hover:bg-blue-950/5 rounded-full transition-colors relative z-50"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Glass Background */}
          <div className="absolute inset-0 bg-[#001736]/40 backdrop-blur-2xl" onClick={closeMobileMenu}></div>
          
          <nav className={`absolute top-[5rem] left-0 right-0 p-6 flex flex-col items-center gap-2 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-10'}`}>
            <div className="w-full max-w-sm bg-white/90 backdrop-blur-md rounded-[32px] p-8 shadow-2xl border border-white/20">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={closeMobileMenu}
                    className="w-full px-6 py-4 rounded-2xl text-[#4d5b6a] text-lg font-bold tracking-wider uppercase transition-all hover:bg-[#001736] hover:text-white flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight size={20} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-950/10">
                <button 
                  onClick={() => {
                    closeMobileMenu();
                    setIsModalOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[3.5rem] px-8 py-4 rounded-2xl text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-xl"
                >
                  <Lightbulb size={16} className="text-[#5fa8d3]" />
                  Submit Your Idea/
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
