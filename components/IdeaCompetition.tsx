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
  const [isLoading, setIsLoading] = useState(true);

  // Fetch ideas from API or LocalStorage
  React.useEffect(() => {
    const fetchIdeas = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/ideas');
        if (response.ok) {
          const data = await response.json();
          // Map database fields to component fields if necessary
          const formattedData = data.map((item: any) => ({
            id: item.id,
            name: item.name,
            title: item.title,
            description: item.description,
            isPrivate: item.is_private,
            date: new Date(item.created_at).toLocaleDateString(),
          }));
          setIdeas(formattedData);
        } else {
          // Fallback to local storage if API fails/not configured
          const saved = localStorage.getItem("blueverra_ideas");
          if (saved) setIdeas(JSON.parse(saved));
        }
      } catch (error) {
        console.error("Failed to fetch ideas:", error);
        const saved = localStorage.getItem("blueverra_ideas");
        if (saved) setIdeas(JSON.parse(saved));
      } finally {
        setIsLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newIdea: Idea = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      title: formData.title,
      description: formData.description,
      isPrivate: formData.isPrivate,
      date: new Date().toLocaleDateString(),
    };

    try {
      // 1. Try to save to API
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIdea),
      });

      // 2. Always update local state and localStorage for immediate feedback
      const updatedIdeas = [newIdea, ...ideas];
      setIdeas(updatedIdeas);
      localStorage.setItem("blueverra_ideas", JSON.stringify(updatedIdeas));

      setFormData({ name: "", title: "", description: "", isPrivate: false });
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to save idea:", error);
      // Still show success if it saved to localStorage
      const updatedIdeas = [newIdea, ...ideas];
      setIdeas(updatedIdeas);
      localStorage.setItem("blueverra_ideas", JSON.stringify(updatedIdeas));
      
      setFormData({ name: "", title: "", description: "", isPrivate: false });
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  const [showAdminView, setShowAdminView] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authError, setAuthError] = useState(false);
  const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  return (
    <section id="competition" className="py-24 md:py-32 bg-[#001736] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#3b6934]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#5fa8d3]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-[1180px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#5fa8d3] text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-6 shadow-sm">
            <Trophy size={14} /> The Blueverra Innovation Challenge
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
                  <p className="text-[#4d5b6a] mb-6">Thank you for contributing to the Blueverra challenge. We are reviewing your concept.</p>
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
                   Check this to hide your idea from the public wall. It will only be visible to Blueverra admins judging the competition.
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

          {/* Wall Section */}
          <div className="lg:col-span-3">
             <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pl-2 gap-4">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">Community Wall</h3>
                
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 self-start sm:self-center">
                  <button 
                    onClick={() => setShowAdminView(false)}
                    className={`px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-wider transition-all ${!showAdminView ? 'bg-[#5fa8d3] text-[#001736]' : 'text-white/60 hover:text-white'}`}
                  >
                    Public
                  </button>
                  <button 
                    onClick={() => setShowAdminView(true)}
                    className={`px-4 py-1.5 rounded-full text-[0.7rem] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${showAdminView ? 'bg-[#5fa8d3] text-[#001736]' : 'text-white/60 hover:text-white'}`}
                  >
                    <Lock size={12} /> Admin
                  </button>
                </div>
             </div>
             
             <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {isLoading ? (
                  <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-4">
                    <RefreshCcw className="animate-spin text-[#5fa8d3]" size={32} />
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Loading Wall...</p>
                  </div>
                ) : !showAdminView ? (
                  // Public View
                  ideas.filter(idea => !idea.isPrivate).length === 0 ? (
                    <div className="text-center py-12 bg-white/5 rounded-3xl border border-white/10">
                       <p className="text-white/60">No public ideas submitted yet. Be the first!</p>
                    </div>
                  ) : (
                    ideas.filter(idea => !idea.isPrivate).map((idea) => (
                      <div key={idea.id} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors animate-in fade-in slide-in-from-bottom-2 duration-500">
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
                           <span className="ml-auto inline-flex items-center gap-1 text-xs"><Eye size={14}/> Public</span>
                        </div>
                      </div>
                    ))
                  )
                ) : !isUnlocked ? (
                  // Password Protection Screen
                  <div className="bg-[#000d20]/50 border border-white/10 rounded-3xl p-10 text-center animate-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 bg-[#5fa8d3]/10 text-[#5fa8d3] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lock size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Restricted Access</h4>
                    <p className="text-white/60 text-sm mb-8">Please enter the administrator password to view private submissions.</p>
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (adminPassword === correctPassword) {
                          setIsUnlocked(true);
                          setAuthError(false);
                        } else {
                          setAuthError(true);
                        }
                      }}
                      className="max-w-xs mx-auto space-y-4"
                    >
                      <input 
                        type="password" 
                        placeholder="Enter Password"
                        value={adminPassword}
                        onChange={(e) => {
                          setAdminPassword(e.target.value);
                          if (authError) setAuthError(false);
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${authError ? 'border-red-500/50' : 'border-white/10'} text-white focus:outline-none focus:ring-2 focus:ring-[#5fa8d3] text-center transition-colors`}
                      />
                      <button type="submit" className="w-full py-3 rounded-xl bg-[#5fa8d3] text-[#001736] font-bold text-[0.7rem] uppercase tracking-[0.15em] hover:bg-[#5fa8d3]/90 transition-all">
                        Unlock Wall
                      </button>

                      {authError && (
                        <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[0.8rem] animate-in fade-in zoom-in-95">
                          <p className="font-bold mb-1">Access Denied: Incorrect Password</p>
                          <p className="opacity-80">Please contact the developer for access: <a href="https://artstudio-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 decoration-[#5fa8d3]/30 hover:text-[#5fa8d3] transition-all">chathu.</a></p>
                        </div>
                      )}
                    </form>
                  </div>
                ) : (
                  // Admin View (Private Ideas)
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4 px-2">
                      <div className="flex items-center gap-2 text-[#5fa8d3]">
                        <Lock size={16} /> 
                        <span className="text-xs font-black uppercase tracking-widest">Admin Access: Private Concept Submissions</span>
                      </div>
                      <button 
                        onClick={() => {setIsUnlocked(false); setAdminPassword("");}}
                        className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 hover:text-white/80 transition-colors"
                      >
                        Lock Wall
                      </button>
                    </div>
                    {ideas.filter(idea => idea.isPrivate).length === 0 ? (
                      <div className="text-center py-12 bg-[#000d20]/50 rounded-3xl border border-[#5fa8d3]/20 border-dashed">
                        <p className="text-white/40 text-sm">No private ideas submitted currently.</p>
                      </div>
                    ) : (
                       ideas.filter(idea => idea.isPrivate).map(idea => (
                          <div key={idea.id} className="bg-[#000d20]/50 border border-[#5fa8d3]/30 rounded-3xl p-6 md:p-8 relative overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                             <div className="absolute top-0 right-0 w-20 h-20 bg-[#5fa8d3]/10 rounded-bl-full flex items-start justify-end p-4">
                               <Lock size={18} className="text-[#5fa8d3]"/>
                             </div>
                             <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                               <h4 className="text-xl font-bold text-white pr-10">{idea.title}</h4>
                               <span className="text-xs font-bold uppercase tracking-wider text-[#5fa8d3] border border-[#5fa8d3]/30 px-3 py-1 rounded-full">
                                  {idea.date}
                               </span>
                             </div>
                             <p className="text-white/60 leading-relaxed mb-6">{idea.description}</p>
                             <div className="flex items-center gap-2 text-sm text-[#5fa8d3]/60 border-t border-white/5 pt-4 mt-4">
                               <div className="w-6 h-6 rounded-full bg-[#5fa8d3] flex items-center justify-center text-[#001736] font-bold text-xs">
                                 {idea.name.charAt(0)}
                               </div>
                               Confidential Submission by <strong className="text-[#5fa8d3]">{idea.name}</strong>
                             </div>
                          </div>
                       ))
                    )}
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
