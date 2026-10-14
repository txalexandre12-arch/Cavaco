import React from "react";
import { 
  AlertCircle, 
  RefreshCw, 
  Music, 
  BookOpen, 
  Layers, 
  PlayCircle 
} from "lucide-react";

export default function ProblemsAndSolutionSection() {
  const painPoints = [
    {
      icon: <AlertCircle className="w-5 h-5 text-[#E5484D]" />,
      title: "Tem dificuldade para trocar os acordes sem travar?",
      description: "Você até conhece alguns acordes, mas na hora de tocar uma música acaba se perdendo.",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#E5484D]" />,
      title: "Aprende pelo YouTube, mas sente que não evolui?",
      description: "Assiste a vários vídeos, aprende algumas coisas, mas não consegue organizar seus estudos.",
    },
    {
      icon: <Music className="w-5 h-5 text-[#E5484D]" />,
      title: "Quer tocar suas músicas favoritas, mas não sabe como avançar?",
      description: "Faltam exercícios, cifras e um caminho claro para ganhar mais confiança no banjo.",
    },
  ];

  const solutionBenefits = [
    {
      icon: <BookOpen className="w-5 h-5 text-[#16A34A]" />,
      title: "Aprenda com um estudo organizado",
      description: "Saiba o que praticar e desenvolva suas habilidades com exercícios progressivos.",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#16A34A]" />,
      title: "Amplie seu conhecimento de acordes",
      description: "No Plano Completo, tenha acesso ao Dicionário de Acordes com +1.000 Shapes para ampliar seu repertório.",
    },
    {
      icon: <PlayCircle className="w-5 h-5 text-[#16A34A]" />,
      title: "Coloque seu aprendizado em prática",
      description: "Use exercícios e cifras para aplicar os acordes em músicas de verdade.",
    },
  ];

  return (
    <div id="pain-and-solution-wrapper" className="bg-white">
      
      {/* ========================================================= */}
      {/* 1. SEÇÃO DE DOR — VOCÊ TAMBÉM PASSA POR ISSO?             */}
      {/* ========================================================= */}
      <section id="pain-section" className="py-12 sm:py-16 bg-white px-4 sm:px-6 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-[#111111] tracking-tight leading-tight uppercase">
              VOCÊ TAMBÉM PASSA POR ISSO NA HORA DE TOCAR BANJO?
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Seja você iniciante ou alguém que já toca, algumas dificuldades podem estar impedindo sua evolução.
            </p>
          </div>

          {/* Grid de 3 Cards de Dor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
            {painPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] p-5 sm:p-6 rounded-[16px] border border-[#E5E5E5] flex flex-col justify-between transition-all hover:border-neutral-300 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50/80 border border-red-100/60 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  <h3 className="text-sm sm:text-[15px] font-bold text-[#111111] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SEÇÃO DE SOLUÇÃO — CHEGA DE ESTUDAR SEM DIREÇÃO!       */}
      {/* ========================================================= */}
      <section id="solution-section" className="py-12 sm:py-16 bg-[#FAFAFA] px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-[#111111] tracking-tight leading-tight uppercase">
              CHEGA DE ESTUDAR <span className="text-[#D6AA2C]">SEM DIREÇÃO!</span>
            </h2>
            
            <p className="text-[#666666] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Tenha um material organizado para praticar, desenvolver suas habilidades e evoluir no banjo no seu ritmo.
            </p>
          </div>

          {/* Bloco Compacto e Elegante de 3 Benefícios com divisórias suaves */}
          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden p-5 sm:p-7 max-w-3xl mx-auto">
            <div className="divide-y divide-neutral-150">
              {solutionBenefits.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-3.5 sm:gap-4 ${idx === 0 ? "pb-5 sm:pb-6" : idx === solutionBenefits.length - 1 ? "pt-5 sm:pt-6" : "py-5 sm:py-6"}`}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="space-y-1 text-left flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-[#111111] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
