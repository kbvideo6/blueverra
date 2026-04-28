"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryWarning, Cpu, Smartphone, ShieldAlert, Wrench, RefreshCcw } from "lucide-react";
import { ActionModal } from "@/components/ActionModal";

export default function EWaste() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="relative pt-[22vh] px-4 pb-20 min-h-[90dvh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/img/Inside of computer hardware textures.jpg" 
            alt="Inside of computer hardware textures" 
            fill 
            className="object-cover opacity-80"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] via-[#f7f9fb]/20 to-transparent z-0 pointer-events-none"></div>

        <div className="container mx-auto max-w-[1180px] relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-950/10 backdrop-blur-md text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-8 shadow-sm">
            <ShieldAlert size={14} /> Technology Lifecycle
          </span>

          <h1 className="font-serif text-[3.2rem] md:text-[5rem] lg:text-[7rem] leading-[0.95] tracking-[-0.03em] max-w-5xl text-[#001736] mb-6">
            The Silent Cost of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001736] via-[#3b6934] to-[#5fa8d3]">
              E-Waste
            </span>
          </h1>
          
          <p className="text-[1.1rem] md:text-[1.3rem] leading-relaxed text-[#4d5b6a] max-w-2xl mb-12">
            Phones, batteries, laptops, and circuit boards are useful for years, then dangerous when discarded carelessly. The goal here is simple: reduce unnecessary buying, repair first, and recycle correctly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#what-it-is" className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-8 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-lg transition-transform hover:-translate-y-[1px]">
              What it is
            </a>
            <a href="#repair-ladder" className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-8 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-white border border-[#001736]/10 text-[#001736] shadow-sm transition-transform hover:-translate-y-[1px]">
              Repair Ladder
            </a>
          </div>
        </div>
      </section>

      <section id="what-it-is" className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-blue-950/10 backdrop-blur-md text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase">
                Definition
              </span>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#001736]">
                Electronic waste includes any discarded device with a plug, battery, or circuit.
              </h2>
              <p className="text-[1.1rem] md:text-[1.2rem] leading-relaxed text-[#4d5b6a]">
                Once devices are thrown away, they can release heavy metals and toxic compounds.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-white border border-blue-950/5 shadow-sm">
                  <Smartphone className="text-[#3b6934] mb-3" size={28} />
                  <h3 className="font-bold text-[#001736] text-lg mb-2">Phones</h3>
                  <p className="text-[0.95rem] text-[#4d5b6a]">Small devices are replaced quickly and often forgotten in drawers.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-blue-950/5 shadow-sm">
                  <BatteryWarning className="text-[#3b6934] mb-3" size={28} />
                  <h3 className="font-bold text-[#001736] text-lg mb-2">Batteries</h3>
                  <p className="text-[0.95rem] text-[#4d5b6a]">Damaged cells need safe collection and specialist recycling.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-blue-950/5 shadow-sm">
                  <Cpu className="text-[#3b6934] mb-3" size={28} />
                  <h3 className="font-bold text-[#001736] text-lg mb-2">Boards</h3>
                  <p className="text-[0.95rem] text-[#4d5b6a]">Micro-components carry valuable metals and harmful residue.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-blue-950/5 shadow-sm">
                   <div className="flex items-center space-x-2 text-[#3b6934] mb-3">
                     <RefreshCcw size={28} />
                   </div>
                   <h3 className="font-bold text-[#001736] text-lg mb-2">Laptops</h3>
                   <p className="text-[0.95rem] text-[#4d5b6a]">Data, parts, and materials all deserve proper handling.</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-blue-950/10 shadow-2xl bg-white p-2">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden group">
                   <Image 
                    src="/img/Electronic waste circuit board macro.jpg" 
                    alt="Electronic waste circuit board macro" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="repair-ladder" className="py-20 md:py-32 bg-[#eef3f7] rounded-[40px] md:rounded-[80px] mx-2 md:mx-6">
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-950/10 backdrop-blur-md text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase shadow-sm">
                <Wrench size={14} /> Action Ladder
              </span>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#001736]">
                Reduce, reuse, repair, then recycle.
              </h2>
              <p className="text-[1.1rem] md:text-[1.2rem] leading-relaxed text-[#4d5b6a]">
                Repairing a device is often easier than replacing it. When reuse is no longer possible, certified recycling is the correct final step.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex-none w-10 h-10 rounded-full bg-white text-[#3b6934] border border-blue-950/10 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-[#001736] text-lg mb-1">Reduce unnecessary upgrades</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a]">Keep devices longer by maintaining batteries, storage, and software.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-none w-10 h-10 rounded-full bg-white text-[#3b6934] border border-blue-950/10 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-[#001736] text-lg mb-1">Reuse devices in better hands</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a]">Pass on working electronics to family, schools, or repair networks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-none w-10 h-10 rounded-full bg-white text-[#3b6934] border border-blue-950/10 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-[#001736] text-lg mb-1">Repair before replacing</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a]">Support local repair shops and keep parts in circulation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-none w-10 h-10 rounded-full bg-white text-[#3b6934] border border-blue-950/10 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-[#001736] text-lg mb-1">Recycle through trusted channels</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a]">Use formal collection points instead of general trash bins.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden border border-blue-950/10 shadow-2xl bg-white p-2">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden group">
                   <Image 
                    src="/img/Repairing old electronics close-up.jpg" 
                    alt="Repairing old electronics close-up" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-center">
            <div className="flex-1 text-center md:text-left">
              <div className="font-serif text-[2rem] leading-tight text-[#001736] mb-8 relative before:absolute before:-left-6 before:-top-4 before:text-6xl before:text-[#5fa8d3]/30 before:content-['&quot;'] pl-6">
                The cleanest device is the one used longer, repaired sooner, and disposed of properly.
              </div>
            </div>
            <div className="flex-1 w-full p-8 rounded-3xl bg-white border border-blue-950/10 shadow-lg">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7f9fb] border border-blue-950/5 text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-6">
                Quick Checklist
              </span>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#4d5b6a]">
                  <div className="w-2 h-2 rounded-full bg-[#3b6934] flex-none"></div>
                  <span>Check if the item can be repaired.</span>
                </li>
                <li className="flex items-center gap-3 text-[#4d5b6a]">
                  <div className="w-2 h-2 rounded-full bg-[#3b6934] flex-none"></div>
                  <span>Wipe personal data before donation or recycling.</span>
                </li>
                <li className="flex items-center gap-3 text-[#4d5b6a]">
                  <div className="w-2 h-2 rounded-full bg-[#3b6934] flex-none"></div>
                  <span>Drop batteries at designated collection points.</span>
                </li>
                <li className="flex items-center gap-3 text-[#4d5b6a]">
                  <div className="w-2 h-2 rounded-full bg-[#3b6934] flex-none"></div>
                  <span>Never mix electronics with household waste.</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-blue-950/5">
                 <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-8 py-3 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-lg transition-transform hover:-translate-y-[1px] w-full text-center cursor-pointer"
                 >
                  Submit Your Idea/ <ArrowRight size={18} />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
