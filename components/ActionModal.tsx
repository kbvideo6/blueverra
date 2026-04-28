"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Lightbulb, Trophy } from "lucide-react";

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ActionModal({ isOpen, onClose }: ActionModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const newIdea = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      title: formData.title,
      description: formData.description,
      isPrivate: false, // Default for simple modal
      date: new Date().toLocaleDateString(),
    };

    try {
      // 1. Try to save to API
      await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIdea),
      });

      // 2. Save to LocalStorage for immediate feedback on the wall
      const saved = localStorage.getItem("blueverra_ideas");
      const currentIdeas = saved ? JSON.parse(saved) : [];
      localStorage.setItem("blueverra_ideas", JSON.stringify([newIdea, ...currentIdeas]));

      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: "", title: "", description: "" });
        // Refresh the page or trigger a re-fetch if possible
        window.location.reload(); // Simple way to refresh the wall
      }, 2000);
    } catch (error) {
      console.error("Failed to save idea:", error);
      // Fallback to local only
      const saved = localStorage.getItem("blueverra_ideas");
      const currentIdeas = saved ? JSON.parse(saved) : [];
      localStorage.setItem("blueverra_ideas", JSON.stringify([newIdea, ...currentIdeas]));

      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: "", title: "", description: "" });
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#001736]/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-xl rounded-[32px] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#001736] p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#5fa8d3] text-[0.7rem] font-extrabold tracking-widest uppercase mb-4">
            <Trophy size={12} /> Innovation Challenge
          </span>
          <h2 className="text-3xl font-serif font-bold">Submit Your Idea</h2>
          <p className="text-white/60 text-sm mt-2">Help us build a more sustainable Sri Lanka.</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {isSuccess ? (
            <div className="py-12 text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-[#3b6934]/10 text-[#3b6934] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#001736] mb-2">Thank You, Sri Lanka!</h3>
              <p className="text-[#4d5b6a]">Your idea has been received and will be reviewed by our team.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-bold text-[#001736] mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="modal-name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Dilum Bandara"
                  className="w-full px-5 py-3 rounded-2xl border border-blue-950/10 bg-[#f7f9fb] focus:outline-none focus:ring-2 focus:ring-[#5fa8d3] transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="modal-title" className="block text-sm font-bold text-[#001736] mb-2">Idea Title</label>
                <input 
                  type="text" 
                  id="modal-title" 
                  required 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g. Colombo Canal Cleaners"
                  className="w-full px-5 py-3 rounded-2xl border border-blue-950/10 bg-[#f7f9fb] focus:outline-none focus:ring-2 focus:ring-[#5fa8d3] transition-all"
                />
              </div>

              <div>
                <label htmlFor="modal-desc" className="block text-sm font-bold text-[#001736] mb-2">Short Description</label>
                <textarea 
                  id="modal-desc" 
                  required 
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Tell us about your solution..."
                  className="w-full px-5 py-3 rounded-2xl border border-blue-950/10 bg-[#f7f9fb] focus:outline-none focus:ring-2 focus:ring-[#5fa8d3] transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 min-h-[3.5rem] px-8 py-4 rounded-2xl text-[0.82rem] font-black tracking-[0.15em] uppercase bg-[#001736] text-white shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Processing..." : "Submit Your Idea"} <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
