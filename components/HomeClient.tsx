"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Waves, Droplet, Users, ShieldAlert, BookOpen, Anchor, Leaf, Compass } from "lucide-react";
import { IdeaCompetition } from "./IdeaCompetition";
import { VisualGallery } from "./VisualGallery";
import { ActionModal } from "./ActionModal";
import Image from "next/image";

interface HomeClientProps {
  unusedImages: string[];
}

export default function HomeClient({ unusedImages }: HomeClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="relative pt-[12vh] px-4 pb-20 min-h-[100dvh] flex flex-col items-center justify-center text-center">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 mix-blend-multiply"
        >
          <source src="/vid/home-page-video-landcape.webm" type="video/webm" />
          <source src="/vid/home-page-video-landcape.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] via-[#f7f9fb]/40 to-transparent z-0 pointer-events-none"></div>

        <div className="container mx-auto max-w-[1180px] relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-blue-950/10 backdrop-blur-md text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-8 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5fa8d3] flex-none animate-pulse"></span>
            Protect What Protects Us
          </span>

          <h1 className="font-serif text-[3.2rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-[-0.03em] max-w-5xl text-[#001736] mb-6 drop-shadow-sm md:drop-shadow-none">
            The Ocean is Silent. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001736] via-[#3b6934] to-[#5fa8d3]">
              Her Data Speak Volumes.
            </span>
          </h1>
          
          <p className="text-[1.05rem] md:text-[1.3rem] leading-relaxed text-[#001736] md:text-[#4d5b6a] max-w-2xl mb-10 px-6 py-5 rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/20 shadow-sm md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:px-0 md:py-0 transition-all">
            Your platform is dedicated to raising awareness about environmental protection, responsible consumption, and waste management. It focuses on educating people about critical yet often ignored issues like electronic waste and sea nurdles, while encouraging individuals to adopt sustainable habits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 min-h-[3.5rem] px-10 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-[2px] cursor-pointer"
            >
             Submit Your Idea/ <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* About / Initiative Purpose */}
      <section className="py-20 md:py-32 relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/Sunlight through forest canopy.jpg" 
            alt="Sunlight through forest canopy" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#001736]/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-[1180px] relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#b9eeab] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-8 shadow-sm">
                <Compass size={14} /> The Goal
            </span>
            <h2 className="font-serif text-[2.5rem] md:text-[4rem] leading-[1.05] tracking-[-0.02em] text-white max-w-4xl mx-auto mb-10">
                Beyond Awareness: Inspiring Measurable Action.
            </h2>
            <p className="text-[1.1rem] md:text-[1.3rem] leading-relaxed text-white/80 max-w-3xl mx-auto mb-16">
                This initiative is not just about spreading the word—it is about creating <strong>real behavioral change</strong>. From tracing electronic waste routes (Eco Trace) to showing proactive gratitude toward nature (Blueverra), our community is building a cleaner, safer, and remarkably more sustainable world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="p-8 rounded-3xl bg-[#f7f9fb]/50 border border-blue-950/5 backdrop-blur-sm transition-transform hover:-translate-y-1">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#3b6934] border border-blue-950/5">
                        <Waves size={24} />
                    </div>
                    <h3 className="font-bold text-[#001736] text-xl mb-3">Sea Nurdles</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a] leading-relaxed">
                        Invisible but devastating. Millions of these tiny plastic pellets choke the water column, absorbing toxins and infiltrating the food chain unnoticed.
                    </p>
                </div>
                <div className="p-8 rounded-3xl bg-[#f7f9fb]/50 border border-blue-950/5 backdrop-blur-sm transition-transform hover:-translate-y-1">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#5fa8d3] border border-blue-950/5">
                        <ShieldAlert size={24} />
                    </div>
                    <h3 className="font-bold text-[#001736] text-xl mb-3">E-Waste Routes</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a] leading-relaxed">
                        Rapid consumption triggers rapid disposal. Our toxic digital footprints are leaking heavy metals straight into global aquatic loops.
                    </p>
                </div>
                <div className="p-8 rounded-3xl bg-[#f7f9fb]/50 border border-blue-950/5 backdrop-blur-sm transition-transform hover:-translate-y-1">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#001736] border border-blue-950/5">
                        <Leaf size={24} />
                    </div>
                    <h3 className="font-bold text-[#001736] text-xl mb-3">Youth Integration</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a] leading-relaxed">
                        Education breeds ownership. We focus heavily on youth awareness to cultivate a future demographic that builds sustainable systems.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Responsible Consumption */}
      <section className="py-20 md:py-32 bg-[#001736] text-white">
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 w-full max-w-xl">
              <div className="relative aspect-square md:aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl bg-black p-2">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                   <Image 
                    src="/img/Sustainable lifestyle products minimal.jpg" 
                    alt="Sustainable lifestyle minimal" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                   />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#b9eeab] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase shadow-sm">
                <Leaf size={14} /> Responsible Consumption
              </span>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-white">
                Simple, practical, relatable.
              </h2>
              <p className="text-[1.1rem] md:text-[1.2rem] leading-relaxed text-white/70">
                Overconsumption is the root of our waste crisis. Being grateful for nature starts with minimizing exactly what we pull from it.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-4">
                  <div className="flex-none p-3 rounded-full bg-white/5 text-[#5fa8d3] border border-white/10">
                    <Droplet size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">Buy Only What is Needed</h3>
                    <p className="text-[0.95rem] text-white/60">Reduce impulsive purchases and demand quality over quantity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-none p-3 rounded-full bg-white/5 text-[#5fa8d3] border border-white/10">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">Choose Sustainable Alternatives</h3>
                    <p className="text-[0.95rem] text-white/60">Swap single-use plastics and packaging for reusable items in every room of your house.</p>
                  </div>
                </li>
              </ul>
              <div className="pt-6">
                 <button 
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 min-h-[3.5rem] px-8 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#b9eeab] text-[#001736] shadow-lg transition-transform hover:-translate-y-[2px]"
                 >
                 Submit Your Idea/ <ArrowRight size={18} />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Waste */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-blue-950/10 backdrop-blur-md text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase">
                <ShieldAlert size={14} /> The E-Waste Crisis
              </span>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#001736]">
                Technological Advancements, <br className="hidden lg:block"/> Environmental Setbacks
              </h2>
              <p className="text-[1.1rem] md:text-[1.2rem] leading-relaxed text-[#4d5b6a]">
                When we discard old devices, the damage echoes across the ocean. Heavy metals and toxic components leach into marine ecosystems, poisoning the foundation of the aquatic food chain. Innovation shouldn't mean devastation.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-4">
                  <div className="flex-none p-3 rounded-full bg-[#f7f9fb] text-[#3b6934] border border-blue-950/5">
                    <Waves size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001736] text-lg mb-1">Leaching Toxins</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a]">Lead and mercury from electronics inevitably find their way into oceanic cycles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-none p-3 rounded-full bg-[#f7f9fb] text-[#3b6934] border border-blue-950/5">
                    <Droplet size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001736] text-lg mb-1">Water Quality</h3>
                    <p className="text-[0.95rem] text-[#4d5b6a]">Improper disposal degrades coastal water quality and harms local communities.</p>
                  </div>
                </li>
              </ul>
              <div className="pt-6">
                 <Link href="/e-waste" className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-8 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-white border border-[#001736]/10 text-[#001736] shadow-sm transition-transform hover:-translate-y-[1px]">
                  Explore E-Waste Data <ArrowRight size={18} />
                 </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-blue-950/10 shadow-2xl bg-white p-2 transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                   <Image 
                    src="/img/Group of students discussing environment.jpg" 
                    alt="Massive pile of discarded electronic components" 
                    fill 
                    className="object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#eef3f7] rounded-[40px] md:rounded-[80px] mx-2 md:mx-6 overflow-hidden relative">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5fa8d3]/20 rounded-full blur-[140px] mix-blend-multiply pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 max-w-[1180px] relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-950/5 backdrop-blur-md text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase shadow-sm">
                <Anchor size={14} /> Marine Pollution
              </span>
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#001736]">
                A Sea of Discarded Dreams
              </h2>
              <p className="text-[1.1rem] md:text-[1.2rem] leading-relaxed text-[#4d5b6a]">
                From single-use plastics to microplastics shed from synthetic clothing, our waste is suffocating the ocean. Sea nurdles are silently invading global coastlines. The scale of the problem requires immediate, systemic change.
              </p>
              
              <div className="pt-6">
                 <Link href="/marine-pollution" className="inline-flex items-center justify-center gap-2 min-h-[3.5rem] px-8 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase border-[1.5px] border-[#001736] text-[#001736] bg-white/80 hover:bg-white shadow-sm transition-transform hover:-translate-y-[2px]">
                  Read the Report <BookOpen size={18} />
                 </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-square md:aspect-[4/3] rounded-[24px] overflow-hidden border border-blue-950/10 shadow-2xl bg-white p-2">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden group">
                   <Image 
                    src="/img/Ocean water surface with plastic debris.jpg" 
                    alt="Turtle swimming in plastic polluted ocean" 
                    fill 
                    className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 text-center relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/Cinematic ocean waves aerial view.jpg" 
            alt="Cinematic ocean waves" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001736]/80 via-[#001736]/40 to-[#001736]/90 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-[1180px] relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#5fa8d3] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-6 shadow-sm">
            <Users size={14} /> The Blueverra Community
          </span>
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] leading-[1.05] tracking-[-0.02em] text-white mb-8 max-w-3xl mx-auto">
            Change Begins With Awareness
          </h2>
          <p className="text-[1.2rem] text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of individuals and organizations committed to understanding and reversing marine degradation. Access our resources and take measurable action today.
          </p>
          <button 
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-8 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-lg transition-transform hover:-translate-y-[1px] hover:shadow-xl mb-16 cursor-pointer"
          >
             Submit Your Idea/ <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <VisualGallery images={unusedImages} />
      <IdeaCompetition />
      
      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
