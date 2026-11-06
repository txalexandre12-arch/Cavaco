import React from "react";
import { Compass, Sparkles, TrendingUp, ArrowRight } from "lucide-react";

export default function ProblemsAndSolutionSection() {
  const painPoints = [
    {
      step: "01",
      title: "NÃO SABE POR ONDE COMEÇAR?",
      description: "Você encontra vários conteúdos diferentes, mas não consegue organizar uma sequência de aprendizado.",
      icon: "🧭",
    },
    {
      step: "02",
      title: "SENTE QUE NÃO ESTÁ EVOLUINDO?",
      description: "Você pratica, mas ainda encontra dificuldades para acompanhar músicas e aplicar o que aprende.",
      icon: "📈",
    },
    {
      step: "03",
      title: "FALTA UM CAMINHO CLARO?",
      description: "Sem um material organizado, fica difícil identificar o próximo passo e manter a constância.",
      icon: "🎯",
    },
  ];

  const methodSteps = [
    {
      number: "1",
      title: "ACESSE SEU MATERIAL",
      description: "Conheça os conteúdos disponíveis e organize sua rotina de estudos.",
      icon: <Compass className="w-6 h-6 text-[#16A34A]" />,
      badge: "PRIMEIRO PASSO",
    },
    {
      number: "2",
      title: "ESTUDE E PRATIQUE",
      description: "Utilize as aulas e materiais para desenvolver suas habilidades no cavaquinho e no banjo.",
      icon: <Sparkles className="w-6 h-6 text-[#16A34A]" />,
      badge: "DESENVOLVIMENTO",
    },
    {
      number: "3",
      title: "EVOLUA NO SEU RITMO",
      description: "Aplique o aprendizado e avance conforme sua prática.",
      icon: <TrendingUp className="w-6 h-6 text-[#16A34A]" />,
      badge: "RESULTADO",
    },
  ];

  return (
    <div id="pain-and-method-wrapper" className="bg-[#F7F7F3]">
      
      {/* ========================================================= */}
      {/* 4. RECONSTRUÇÃO DA SEÇÃO DE DORES                         */}
      {/* ========================================================= */}
      <section id="pain-section" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="inline-block text-[12px] font-bold tracking-widest text-[#D6AE54] uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-[#D6AE54]/30">
            Dificuldades comuns
          </span>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-display font-black text-[#141816] tracking-tight leading-tight uppercase">
            VOCÊ TAMBÉM SENTE QUE ESTÁ ESTUDANDO CAVAQUINHO OU BANJO, MAS <span className="text-[#16A34A]">NÃO EVOLUI COMO GOSTARIA?</span>
          </h2>
          <p className="text-[#525A54] text-[17px] sm:text-[19px] max-w-2xl mx-auto leading-relaxed">
            Sem uma sequência clara de estudos, fica muito mais difícil saber o que praticar e como desenvolver suas habilidades.
          </p>
        </div>

        {/* 3 Cards Profissionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between hover:border-[#16A34A]/40 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-2xl select-none">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#525A54]/60 bg-neutral-100 px-2 py-0.5 rounded">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-[17px] sm:text-[18px] font-display font-black text-[#141816] leading-snug uppercase">
                  {item.title}
                </h3>

                <p className="text-[16px] text-[#525A54] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================= */}
      {/* 5. REFORMULAR A SEÇÃO DO MÉTODO EM 3 ETAPAS               */}
      {/* ========================================================= */}
      <section id="method-section" className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-block text-[12px] font-bold tracking-widest text-[#16A34A] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Caminho de Aprendizado
            </span>
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-display font-black text-[#141816] tracking-tight leading-tight uppercase">
              CHEGA DE ESTUDAR SEM DIREÇÃO. <span className="text-[#D6AE54]">TENHA UM CAMINHO PARA SEGUIR!</span>
            </h2>
            <p className="text-[#525A54] text-[17px] sm:text-[19px] max-w-2xl mx-auto leading-relaxed">
              Três etapas organizadas para transformar o seu estudo em resultados práticos no cavaquinho e no banjo.
            </p>
          </div>

          {/* 3 Etapas Conectadas (desktop: horizontal com linha / mobile: vertical) */}
          <div className="relative">
            
            {/* Linha conectora visual no Desktop */}
            <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-100 -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {methodSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F7F3] rounded-2xl border border-[#E5E7EB] p-7 sm:p-8 flex flex-col justify-between text-center relative group hover:border-[#16A34A]/50 hover:shadow-md transition-all duration-200"
                >
                  {/* Badge numerado superior */}
                  <div className="mx-auto -mt-12 mb-4 w-12 h-12 rounded-full bg-[#16A34A] text-white font-display font-black text-lg flex items-center justify-center shadow-md border-4 border-white">
                    {step.number}
                  </div>

                  <div className="space-y-3">
                    <span className="inline-block text-[11px] font-extrabold tracking-wider text-[#15803D] uppercase bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full">
                      {step.badge}
                    </span>

                    <h3 className="text-[17px] sm:text-[19px] font-display font-black text-[#141816] uppercase leading-tight">
                      ETAPA {step.number} — {step.title}
                    </h3>

                    <p className="text-[16px] text-[#525A54] leading-relaxed">
                      {step.description}
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
