"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BoxSelect, Droplets, Link as LinkIcon, Thermometer, Waves } from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ActionModal } from "@/components/ActionModal";

export default function MarinePollution() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="relative pt-[22vh] px-4 pb-20 min-h-[90dvh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/img/Sea nurdles plastic pellets on shore.jpg" 
            alt="Sea nurdles plastic pellets on shore" 
            fill 
            className="object-cover opacity-80"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] via-[#f7f9fb]/20 to-transparent z-0 pointer-events-none"></div>

        <div className="container mx-auto max-w-[1180px] relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-950/10 backdrop-blur-md text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-8 shadow-sm">
            <Droplets size={14} /> Marine Ecosystems
          </span>

          <h1 className="font-serif text-[3.2rem] md:text-[5rem] lg:text-[7rem] leading-[0.95] tracking-[-0.03em] max-w-5xl text-[#001736] mb-6">
            The Plastic Continent <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001736] via-[#3b6934] to-[#5fa8d3]">
              in Our Wake
            </span>
          </h1>
          
          <p className="text-[1.1rem] md:text-[1.3rem] leading-relaxed text-[#4d5b6a] max-w-2xl mb-12">
            Millions of sea nurdles and invisible microplastics are fundamentally altering marine life. The ocean is resilient, but the current volume of waste outpaces nature's ability to recover.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 min-h-[3.5rem] px-8 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-[2px] cursor-pointer"
             >
              Submit Your Idea/ <ArrowRight size={18} />
             </button>
          </div>
        </div>
      </section>

      {/* Interactive Before & After visual */}
      <section className="pt-10 pb-20 md:pb-32 px-4">
          <div className="container mx-auto max-w-[1180px]">
             <div className="mb-8 text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl text-[#001736] mb-4">Visualize the Invasion</h2>
                <p className="text-[#4d5b6a] text-lg">Use the slider below to see how rapidly our pristine environments are transformed into plastic-ridden wastelands.</p>
             </div>
             <BeforeAfter 
               beforeImage="/img/before-after/garbage beach.jpg"
               beforeAlt="Polluted beach with plastic debris"
               afterImage="/img/before-after/garbage beach after.jpg"
               afterAlt="A pristine beautiful coastline"
             />
          </div>
      </section>

      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6 lg:pr-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7f9fb] border border-blue-950/10 text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase shadow-sm">
                 <Waves size={14} /> The Scale of Microplastics
              </span>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#001736]">
                It's not just floating bottles. <br/> Enter the <strong className="text-[#3b6934] font-serif font-black underline decoration-[#5fa8d3]/40 underline-offset-4">Sea Nurdle</strong>.
              </h2>
              <p className="text-[1.1rem] md:text-[1.2rem] leading-relaxed text-[#4d5b6a] bg-[#f7f9fb]/80 p-6 rounded-2xl border-l-4 border-[#3b6934] shadow-sm">
               Sea nurdles are tiny plastic pellets used to manufacture nearly every plastic product. Millions slip into global oceans annually. They are highly dangerous because:
               <br/><br/>
               <span className="font-bold flex items-center gap-2 text-[#001736]"><ArrowRight size={14} className="text-[#5fa8d3]"/> They absorb toxic chemicals like a sponge.</span>
               <span className="font-bold flex items-center gap-2 text-[#001736] pt-1"><ArrowRight size={14} className="text-[#5fa8d3]"/> Marine animals mistake them for food.</span>
               <span className="font-bold flex items-center gap-2 text-[#001736] pt-1"><ArrowRight size={14} className="text-[#5fa8d3]"/> They enter human food chains through seafood.</span>
              </p>
              
              <div className="grid grid-cols-1 gap-6 pt-6">
                <div className="flex gap-4 items-start p-4 hover:bg-[#f7f9fb] rounded-xl transition-colors">
                   <div className="p-3 rounded-full bg-white text-[#3b6934] border border-blue-950/5 self-start shadow-sm">
                     <BoxSelect size={20} />
                   </div>
                   <div>
                    <h3 className="font-bold text-[#001736] text-lg mb-1">Microscopic Menace</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a]">Fragments smaller than 5mm easily enter the food chain, absorbing ambient toxins along the way.</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start p-4 hover:bg-[#f7f9fb] rounded-xl transition-colors">
                   <div className="p-3 rounded-full bg-white text-[#3b6934] border border-blue-950/5 self-start shadow-sm">
                     <LinkIcon size={20} />
                   </div>
                   <div>
                    <h3 className="font-bold text-[#001736] text-lg mb-1">Entanglement</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a]">Larger debris like discarded fishing nets (ghost gear) passively trap and harm marine mammals and fish.</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start p-4 hover:bg-[#f7f9fb] rounded-xl transition-colors">
                   <div className="p-3 rounded-full bg-white text-[#3b6934] border border-blue-950/5 self-start shadow-sm">
                     <Thermometer size={20} />
                   </div>
                   <div>
                    <h3 className="font-bold text-[#001736] text-lg mb-1">Chemical Leach</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a]">Plastics break down into harmful compounds like BPA, affecting the reproductive systems of marine life.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-square md:aspect-[4/5] rounded-[24px] overflow-hidden border border-blue-950/10 shadow-2xl bg-[#f7f9fb] p-2">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                   <Image 
                    src="/img/Sea nurdles plastic pellets on shore.jpg" 
                    alt="Sea Nurdles scattered across the shore" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#eef3f7] rounded-[40px] md:rounded-[80px] mx-2 md:mx-6">
        <div className="container mx-auto px-4 max-w-[1180px] text-center">
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#001736] mb-12 max-w-3xl mx-auto">
               Systemic disruption requires systemic solutions.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <article className="p-8 rounded-3xl bg-white border border-blue-950/5 shadow-sm text-left">
                  <h3 className="font-bold text-[#001736] text-xl mb-3">Reduce Output</h3>
                  <p className="text-[0.95rem] text-[#4d5b6a]">Policy changes to limit single-use production are the most effective long-term strategy.</p>
               </article>
               <article className="p-8 rounded-3xl bg-white border border-blue-950/5 shadow-sm text-left">
                  <h3 className="font-bold text-[#001736] text-xl mb-3">Improve Capture</h3>
                  <p className="text-[0.95rem] text-[#4d5b6a]">Better waste management infrastructure in coastal regions prevents leakage into waterways.</p>
               </article>
               <article className="p-8 rounded-3xl bg-white border border-blue-950/5 shadow-sm text-left">
                  <h3 className="font-bold text-[#001736] text-xl mb-3">Support Removal</h3>
                  <p className="text-[0.95rem] text-[#4d5b6a]">Active cleanup operations are necessary to clear existing legacy debris from ocean gyres.</p>
               </article>
            </div>
        </div>
      </section>
      
      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
