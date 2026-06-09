import React from "react";
import { AlertCircle, RefreshCw, Lock, Frown, Compass, Target, Sparkles, ThumbsUp } from "lucide-react";

export default function ProblemsAndSolutionSection() {
  const painPoints = [
    {
      icon: <AlertCircle className="w-5 h-5 text-rose-500" />,
      title: "Comprou um cavaquinho ou banjo e nunca aprendeu a tocar",
      description: "Você começou animado, mas não sabia por onde começar e acabou desistindo.",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-rose-500 animate-spin-slow" />,
      title: "Fica pulando de vídeo em vídeo no YouTube",
      description: "Cada vídeo ensina uma coisa diferente e você continua sem um método claro para evoluir.",
    },
    {
      icon: <Lock className="w-5 h-5 text-rose-500" />,
      title: "Tenta tocar suas músicas favoritas e trava",
      description: "Os acordes parecem difíceis e a troca entre eles parece impossível.",
    },
    {
      icon: <Frown className="w-5 h-5 text-rose-500" />,
      title: "Acha que não tem talento para música",
      description: "Depois de algumas tentativas frustradas, você começa a acreditar que tocar um instrumento não é para você.",
    },
  ];

  const solutionPoints = [
    {
      icon: <Compass className="w-5 h-5 text-emerald-600" />,
      title: "Aprenda seguindo um caminho simples",
      description: "Um passo a passo criado especialmente para iniciantes.",
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-600" />,
      title: "Saiba exatamente o que praticar",
      description: "Sem perder tempo procurando conteúdos espalhados pela internet.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
      title: "Domine os acordes e ritmos essenciais",
      description: "Aprenda os fundamentos presentes nas músicas mais tocadas.",
    },
    {
      icon: <ThumbsUp className="w-5 h-5 text-emerald-600" />,
      title: "Toque suas primeiras músicas com confiança",
      description: "Mesmo que você nunca tenha tocado um instrumento antes.",
    },
  ];

  return (
    <div id="pain-and-solution-wrapper" className="bg-white">
      
      {/* 1. PAIN POINTS SECTION */}
      <section id="pain-section" className="py-16 sm:py-20 bg-white px-4 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-extrabold text-rose-500 bg-rose-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
              Diagnóstico
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-black text-neutral-900 tracking-tight leading-tight">
              Você Se Identifica Com Algum Destes Problemas?
            </h2>
          </div>

          {/* Grid of 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {painPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] p-5 sm:p-6 rounded-2xl border border-neutral-150 flex flex-col justify-between transition-all duration-200 hover:border-rose-200 hover:bg-rose-50/20 group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-rose-50 border border-rose-100/60 rounded-xl text-rose-500 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-red-700 bg-red-100/70 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      ERRO COMUM
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 leading-snug flex items-start gap-1.5">
                    <span className="text-rose-500 select-none">❌</span>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. SOLUTION SECTION */}
      <section id="solution-section" className="py-16 sm:py-20 bg-white px-4 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
              Metodologia Prática
            </span>
            
            <h2 className="text-2xl sm:text-3.5xl font-display font-black text-neutral-900 tracking-tight leading-tight">
              🎵 A Solução Está Aqui
            </h2>
            
            <p className="text-neutral-500 text-xs sm:text-sm max-w-lg mx-auto">
              Um método simples e organizado para quem deseja aprender cavaquinho e banjo do zero.
            </p>
          </div>

          {/* Grid of 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solutionPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] p-5 sm:p-6 rounded-2xl border border-neutral-150 flex flex-col justify-between transition-all duration-200 hover:border-emerald-200 hover:bg-emerald-50/10 group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-emerald-50 border border-emerald-100/60 rounded-xl text-emerald-600 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      COM NOSSO MÉTODO
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 leading-snug flex items-start gap-1.5">
                    <span className="text-emerald-600 select-none">✅</span>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
