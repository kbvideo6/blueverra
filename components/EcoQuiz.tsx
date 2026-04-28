"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, RefreshCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const QUIZ_DATA: Question[] = [
  {
    id: 1,
    question: "What is the primary danger of 'Sea Nurdles'?",
    options: [
      "They cause sea levels to rise.",
      "They absorb toxic chemicals and enter the food chain.",
      "They disrupt ocean currents.",
      "They dissolve into harmful acids immediately."
    ],
    correct: 1,
    explanation: "Sea nurdles act like toxic sponges. They absorb hazardous chemicals from the water and, because they resemble fish eggs, are consumed by marine life, pushing toxins up the food chain to humans."
  },
  {
    id: 2,
    question: "Which of the following is an example of 'responsible consumption'?",
    options: [
      "Buying a new smartphone every year to stay current.",
      "Only throwing electronics in the regular trash once broken.",
      "Choosing reusable packaging and repairing electronics before replacing them.",
      "Increasing reliance on single-use plastics."
    ],
    correct: 2,
    explanation: "Responsible consumption means breaking the cycle of single-use convenience. By repairing devices and prioritizing sustainable goods, you actively reduce the toll on both natural resources and waste management systems."
  },
  {
    id: 3,
    question: "Why should e-waste never be thrown in a standard landfill?",
    options: [
      "Because it's illegal in all countries.",
      "Because it takes up too much physical space.",
      "Because batteries and circuit boards leach heavy metals like lead and mercury into the soil and water.",
      "Because the plastic casings melt too fast."
    ],
    correct: 2,
    explanation: "E-waste contains a cocktail of toxic components. When batteries and circuits break down in standard landfills, lead, cadmium, and mercury leach into groundwater, severely impacting human health and aquatic ecosystems."
  }
];

export function EcoQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleOptionClick = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === QUIZ_DATA[currentQ].correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < QUIZ_DATA.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
    setAnswered(false);
  };

  if (showResult) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-950/10 text-center max-w-2xl mx-auto transform transition-all duration-500 scale-100 opacity-100">
        <div className="w-20 h-20 bg-[#f7f9fb] text-[#3b6934] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-[#3b6934]" />
        </div>
        <h3 className="font-serif text-3xl text-[#001736] mb-4">Quiz Completed!</h3>
        <p className="text-xl text-[#4d5b6a] mb-8">
          You scored <strong className={score === QUIZ_DATA.length ? "text-[#3b6934]" : "text-[#5fa8d3]"}>{score}</strong> out of {QUIZ_DATA.length}
        </p>
        <p className="text-[#4d5b6a] mb-8 text-sm max-w-md mx-auto">
          {score === QUIZ_DATA.length ? "Perfect! You deeply understand the challenges we face and the solutions required. Time to take action." : "Every bit of knowledge helps in the fight against pollution. Review the materials and continue learning!"}
        </p>
        <button 
          onClick={restartQuiz} 
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#001736] text-white font-bold tracking-widest text-sm uppercase shadow-lg hover:-translate-y-0.5 transition-transform"
        >
          <RefreshCcw size={16} /> Retake Knowledge Check
        </button>
      </div>
    );
  }

  const q = QUIZ_DATA[currentQ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-950/10 max-w-3xl mx-auto mt-12 transition-all">
      <div className="flex justify-between items-center mb-8 border-b border-blue-950/10 pb-4">
        <span className="text-[#001736] font-bold uppercase tracking-widest text-sm">
          Knowledge Check
        </span>
        <span className="text-[#4d5b6a] font-bold bg-[#f7f9fb] px-4 py-1 rounded-full text-sm">
          Question {currentQ + 1} of {QUIZ_DATA.length}
        </span>
      </div>

      <h3 className="font-serif text-2xl md:text-3xl text-[#001736] mb-8 leading-snug">
        {q.question}
      </h3>

      <div className="space-y-4">
        {q.options.map((opt, idx) => {
          let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium ";
          if (!answered) {
            btnClass += "border-blue-950/10 hover:border-[#5fa8d3] hover:bg-[#f7f9fb] text-[#4d5b6a]";
          } else {
            if (idx === q.correct) {
              btnClass += "border-[#3b6934] bg-[#b9eeab]/20 text-[#3b6934]";
            } else if (idx === selected) {
              btnClass += "border-red-400 bg-red-50 text-red-700 opacity-70";
            } else {
              btnClass += "border-blue-950/5 text-[#4d5b6a]/50 bg-gray-50";
            }
          }

          return (
            <button
              key={idx}
              disabled={answered}
              onClick={() => handleOptionClick(idx)}
              className={btnClass}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-8 p-6 bg-[#f7f9fb] rounded-xl border border-blue-950/5 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <p className="text-[#001736] text-[0.95rem] leading-relaxed mb-6 font-medium">
            <strong className={selected === q.correct ? "text-[#3b6934]" : "text-red-600"}>
              {selected === q.correct ? "Correct! " : "Not quite. "}
            </strong>
            {q.explanation}
          </p>
          <button 
            onClick={handleNext} 
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#001736] text-white font-bold tracking-widest text-sm uppercase hover:bg-blue-900 transition-colors w-full md:w-auto"
          >
            {currentQ === QUIZ_DATA.length - 1 ? "See Results" : "Next Question"} <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
