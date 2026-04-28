"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb, MapPin, Users, HeartHandshake } from "lucide-react";
import { EcoQuiz } from "@/components/EcoQuiz";
import { ActionModal } from "@/components/ActionModal";

export default function TakeAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="relative pt-[22vh] px-4 pb-20 min-h-[90dvh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/img/Hands holding tiny plastic pellets.jpg" 
            alt="Hands holding tiny plastic pellets" 
            fill 
            className="object-cover opacity-80"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] via-[#f7f9fb]/20 to-transparent z-0 pointer-events-none"></div>

        <div className="container mx-auto max-w-[1180px] relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-950/10 backdrop-blur-md text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-8 shadow-sm">
            <Lightbulb size={14} /> Meaningful impact
          </span>

          <h1 className="font-serif text-[3.2rem] md:text-[5rem] lg:text-[7rem] leading-[0.95] tracking-[-0.03em] max-w-5xl text-[#001736] mb-6">
            Small Actions, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001736] via-[#3b6934] to-[#5fa8d3]">
              Collective Gain
            </span>
          </h1>
          
          <p className="text-[1.1rem] md:text-[1.3rem] leading-relaxed text-[#4d5b6a] max-w-2xl mb-12">
            Awareness is only the first step. True preservation requires consistent, measurable action. Learn the facts, make practical changes at home, and advocate for sustainable policies with our community.
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 min-h-[3.5rem] px-8 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-xl hover:-translate-y-[2px] transition-all cursor-pointer"
          >
             Submit Your Idea/ <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* QUIZ SECTION (Interactive Element) */}
      <section id="quiz" className="py-20 md:py-32 px-4 shadow-[inset_0_20px_50px_rgba(0,0,0,0.02)] bg-[#f7f9fb]/50">
        <div className="container mx-auto max-w-[1180px]">
           <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7f9fb] border border-blue-950/10 text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase shadow-sm">
                Knowledge into Action
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#001736] mt-6 mb-4">Test your understanding.</h2>
              <p className="text-[#4d5b6a] text-lg">Before taking community action, it's crucial to understand what drives the core of our environmental degradation.</p>
           </div>
           
           <EcoQuiz />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-[1180px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-[2.5rem] md:text-[4rem] leading-[1.05] tracking-[-0.02em] text-[#001736]">
               Community Infrastructure
            </h2>
            <p className="text-[1.1rem] md:text-[1.3rem] leading-relaxed text-[#4d5b6a] mt-6">
                Be responsible. Be aware. Be the change. Show gratitude towards the environment by engaging in waste management routines, from household separation tools to advanced composting circuits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
             <div className="p-8 bg-[#f7f9fb] rounded-[32px] border border-blue-950/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-white text-[#3b6934] shadow-sm flex items-center justify-center mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-[#001736] text-xl mb-3">Local Cleanups</h3>
                <p className="text-[1rem] text-[#4d5b6a]">Participate in or organize shoreline and terrestrial cleanups. Removing debris before it breaks down prevents long-term ecosystem damage.</p>
             </div>
             
             <div className="p-8 bg-[#f7f9fb] rounded-[32px] border border-blue-950/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-white text-[#5fa8d3] shadow-sm flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-[#001736] text-xl mb-3">Systemic Advocacy</h3>
                <p className="text-[1rem] text-[#4d5b6a]">Support legislation that mandates extended producer responsibility (EPR) for electronics and aggressive caps on single-use plastics.</p>
             </div>

             <div className="p-8 bg-[#001736] text-white rounded-[32px] shadow-xl md:col-span-2 lg:col-span-1 hover:shadow-2xl transition-shadow relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#5fa8d3]/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-14 h-14 rounded-full bg-white/10 shadow-sm flex items-center justify-center mb-6 border border-white/20">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">Waste Management Hubs</h3>
                <p className="text-[1rem] text-white/70">Master household separation. Sort organic compost from recyclables and seek out specialized e-waste depots in your district.</p>
             </div>
          </div>
          
          <div className="border-t border-blue-950/10 pt-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
             <div className="flex-1 w-full max-w-xl lg:max-w-none">
               <div className="relative aspect-square md:aspect-[4/3] rounded-[24px] overflow-hidden border border-blue-950/10 shadow-2xl bg-[#f7f9fb] p-2">
                 <div className="relative w-full h-full rounded-[16px] overflow-hidden group">
                    <Image 
                     src="/img/Group of students discussing environment.jpg" 
                     alt="Group of young volunteers picking up trash by the sea" 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
                     sizes="(max-width: 768px) 100vw, 50vw"
                    />
                 </div>
               </div>
             </div>
             <div className="flex-1 space-y-6 lg:pl-10">
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7f9fb] border border-blue-950/5 text-[#002b5b] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-4 shadow-sm">
                 Youth & Action
               </span>
               <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#001736]">
                 Join a local seaNOVA team today.
               </h2>
               <p className="text-[1.1rem] md:text-[1.2rem] leading-relaxed text-[#4d5b6a] mb-6">
                 Meaningful progress happens locally. By joining forces with volunteers in your area, you amplify your impact and build resilient communities capable of sustained environmental stewardship. <br/><br/>
                 <strong className="text-[#3b6934]">Start small. Create big impact.</strong>
               </p>
               <form className="flex flex-col sm:flex-row gap-4 w-full" aria-label="Volunteer signup form text-left">
                  <div className="flex flex-col gap-2 flex-grow">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input type="email" id="email" required placeholder="Enter your email address" className="px-6 py-4 rounded-full border border-blue-950/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#5fa8d3] focus:border-transparent transition-all shadow-sm w-full" />
                  </div>
                  <button type="submit" className="inline-flex flex-none items-center justify-center gap-2 min-h-[3.5rem] px-8 py-4 rounded-full text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-xl hover:-translate-y-[2px] transition-transform w-full sm:w-auto">
                    Register
                  </button>
               </form>
               <p className="text-xs text-[#4d5b6a]/70 font-semibold px-2">By registering, you agree to our privacy policy and event wavers. Support at 30secondsfortheplanet@gmail.com</p>
             </div>
          </div>
        </div>
      </section>
      
      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
