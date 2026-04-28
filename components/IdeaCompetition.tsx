"use client";

import React, { useState } from "react";
import { Lightbulb, Send, Lock, Eye, Trophy, RefreshCcw } from "lucide-react";

type Idea = {
  id: string;
  name: string;
  title: string;
  description: string;
  isPrivate: boolean;
  date: string;
};

export function IdeaCompetition() {
  const [ideas, setIdeas] = useState<Idea[]>([
    {
      id: "1",
      name: "Dilum Bandara",
      title: "Negombo Lagoon Plastic Traps",
      description: "A community-led initiative to install solar-powered trash traps along the Negombo lagoon inlets to prevent microplastics from entering the main fishing grounds.",
      isPrivate: false,
      date: new Date().toLocaleDateString(),
    },
    {
      id: "2",
      name: "Sanduni Perera",
      title: "Colombo E-Waste Network",
      description: "A mobile-app based network connecting households in Colombo with certified recyclers, offering incentives for proper disposal of old mobile phones and laptop batteries.",
      isPrivate: false,
      date: new Date().toLocaleDateString(),
    },
    {
      id: "3",
      name: "Arshad Rahim",
      title: "Galle Face Beach Cleanup Bot",
      description: "An autonomous, solar-recharged robot designed to patrol Galle Face Green and collect small plastic debris and cigarette butts from the sand.",
      isPrivate: false,
      date: new Date().toLocaleDateString(),
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    isPrivate: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      const newIdea: Idea = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        title: formData.title,
        description: formData.description,
        isPrivate: formData.isPrivate,
        date: new Date().toLocaleDateString(),
      };

      setIdeas([newIdea, ...ideas]);
      setFormData({ name: "", title: "", description: "", isPrivate: false });
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="competition" className="py-24 md:py-32 bg-[#001736] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#3b6934]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#5fa8d3]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-[1180px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#5fa8d3] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-6 shadow-sm">
            <Trophy size={14} /> The seaNOVA Innovation Challenge
          </span>
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] leading-[1.05] tracking-[-0.02em] mb-6">
            Share Your Vision. <br className="hidden md:block" /> Save Our Oceans.
          </h2>
          <p className="text-[1.1rem] md:text-[1.3rem] leading-relaxed text-white/80">
            Have a brilliant idea to tackle marine pollution or e-waste? Submit it to our competition. Great ideas can spark global movements. You can choose to share it with the community or keep it strictly visible to admins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Submission Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 text-[#001736] shadow-2xl relative">
            {showSuccess && (
               <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 rounded-3xl flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-[#3b6934]/10 text-[#3b6934] rounded-full flex items-center justify-center mb-4">
                     <Lightbulb size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#001736] mb-2">Idea Submitted!</h3>
                  <p className="text-[#4d5b6a] mb-6">Thank you for contributing to the seaNOVA challenge. We are reviewing your concept.</p>
                  <button onClick={() => setShowSuccess(false)} className="text-[0.8rem] font-extrabold tracking-wider uppercase text-[#5fa8d3] hover:text-[#001736] transition-colors flex items-center gap-2">
                     <RefreshCcw size={14}/> Submit Another
                  </button>
               </div>
            )}

            <div className="mb-6 border-b border-[#001736]/10 pb-6">
               <h3 className="text-2xl font-bold font-serif mb-2">Submit Your Idea</h3>
               <p className="text-sm text-[#4d5b6a]">Fill out the form below to enter the competition.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[0.85rem] font-bold text-[#001736] mb-2">Creator Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Jane Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-blue-950/20 bg-[#f7f9fb] focus:outline-none focus:ring-2 focus:ring-[#5fa8d3] focus:bg-white transition-all" 
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-[0.85rem] font-bold text-[#001736] mb-2">Idea Title</label>
                <input 
                  type="text" 
                  id="title" 
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g. Solar-powered Beach Cleaners" 
                  className="w-full px-4 py-3 rounded-xl border border-blue-950/20 bg-[#f7f9fb] focus:outline-none focus:ring-2 focus:ring-[#5fa8d3] focus:bg-white transition-all" 
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-[0.85rem] font-bold text-[#001736] mb-2">Detailed Description</label>
                <textarea 
                  id="description" 
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe how your idea works and its impact..." 
                  className="w-full px-4 py-3 rounded-xl border border-blue-950/20 bg-[#f7f9fb] focus:outline-none focus:ring-2 focus:ring-[#5fa8d3] focus:bg-white transition-all resize-none" 
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#f7f9fb] rounded-xl border border-blue-950/5">
                 <input 
                   type="checkbox" 
                   id="isPrivate" 
                   checked={formData.isPrivate}
                   onChange={(e) => setFormData({...formData, isPrivate: e.target.checked})}
                   className="mt-1 w-4 h-4 text-[#5fa8d3] bg-white border-gray-300 rounded focus:ring-[#5fa8d3]"
                 />
                 <label htmlFor="isPrivate" className="text-sm text-[#4d5b6a] cursor-pointer cursor-select">
                   <strong className="block text-[#001736] mb-0.5">Keep this idea private</strong>
                   Check this to hide your idea from the public wall. It will only be visible to seaNOVA admins judging the competition.
                 </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center gap-2 min-h-[3.5rem] px-8 py-3 rounded-xl text-[0.82rem] font-black tracking-[0.12em] uppercase bg-[#001736] text-white shadow-lg transition-transform hover:-translate-y-[1px] disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Idea'} <Send size={16} />
              </button>
            </form>
          </div>

          {/* Public Wall */}
          <div className="lg:col-span-3">
             <div className="flex items-center justify-between mb-8 pl-2">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">Community Wall</h3>
                <span className="text-white/60 text-sm bg-white/10 px-3 py-1 rounded-full">{ideas.filter(i => !i.isPrivate).length} Ideas Visible</span>
             </div>
             
             <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {ideas.filter(idea => (!idea.isPrivate)).length === 0 ? (
                  <div className="text-center py-12 bg-white/5 rounded-3xl border border-white/10">
                     <p className="text-white/60">No public ideas submitted yet. Be the first!</p>
                  </div>
                ) : (
                  ideas.map((idea) => {
                     if (idea.isPrivate) return null; // Safety check
                     return (
                      <div key={idea.id} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                           <h4 className="text-xl font-bold text-white">{idea.title}</h4>
                           <span className="text-xs font-bold uppercase tracking-wider text-[#5fa8d3] bg-[#5fa8d3]/10 px-3 py-1 rounded-full">
                              {idea.date}
                           </span>
                        </div>
                        <p className="text-white/70 leading-relaxed mb-6">{idea.description}</p>
                        <div className="flex items-center gap-2 text-sm text-white/50 border-t border-white/10 pt-4 mt-4">
                           <div className="w-6 h-6 rounded-full bg-[#3b6934] flex items-center justify-center text-white font-bold text-xs">
                             {idea.name.charAt(0)}
                           </div>
                           Submitted by <strong className="text-white/80">{idea.name}</strong>
                           {!idea.isPrivate && <span className="ml-auto inline-flex items-center gap-1 text-xs"><Eye size={14}/> Public</span>}
                        </div>
                      </div>
                     );
                  })
                )}

                {/* Admin Simulation Section - In a real app this is hidden entirely */}
                <div className="mt-8 border-t border-white/20 pt-8 border-dashed">
                  <div className="flex items-center gap-2 mb-4 text-[#5fa8d3]">
                    <Lock size={16} /> 
                    <span className="text-sm font-bold uppercase tracking-wider">Admin View Simulation (Private Ideas)</span>
                  </div>
                  {ideas.filter(idea => idea.isPrivate).length === 0 ? (
                    <p className="text-white/40 text-sm">No private ideas submitted currently.</p>
                  ) : (
                     ideas.filter(idea => idea.isPrivate).map(idea => (
                        <div key={idea.id} className="bg-[#000d20]/50 border border-[#5fa8d3]/30 rounded-2xl p-5 mb-4 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-16 h-16 bg-[#5fa8d3]/10 rounded-bl-full flex items-start justify-end p-3"><Lock size={14} className="text-[#5fa8d3]"/></div>
                           <h4 className="text-lg font-bold text-white mb-2">{idea.title}</h4>
                           <p className="text-white/60 text-sm mb-4">{idea.description}</p>
                           <p className="text-xs text-[#5fa8d3]">By {idea.name}</p>
                        </div>
                     ))
                  )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
