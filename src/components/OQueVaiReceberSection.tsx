import React from "react";
import { Music, CheckCircle, Disc, BookOpen, Layers, Star } from "lucide-react";

export default function OQueVaiReceberSection() {
  const items = [
    {
      title: "Guia Completo de Cavaquinho",
      description: "Do absoluto zero às primeiras soltas de samba, com posturas corretas e trocas práticas.",
      icon: <Music className="w-5 h-5 text-emerald-600 shrink-0" />,
    },
    {
      title: "Guia Completo de Banjo",
      description: "Aprenda a mecânica correta para obter o som metálico e marcante clássico do pagode.",
      icon: <Disc className="w-5 h-5 text-emerald-600 shrink-0" />,
    },
    {
      title: "+300 Cifras de Pagode Organizadas",
      description: "As músicas mais amadas tocadas nas rodas, com acordes simplificados para iniciantes.",
      icon: <Layers className="w-5 h-5 text-emerald-600 shrink-0" />,
      isBonus: true,
    },
    {
      title: "Dicionário de Acordes",
      description: "Consulte rapidamente todas as posições essenciais em um design limpo e ilustrado.",
      icon: <BookOpen className="w-5 h-5 text-emerald-600 shrink-0" />,
      isBonus: true,
    },
    {
      title: "Cronograma de Treino para Iniciantes",
      description: "Um passo a passo diário detalhado para você saber exatamente o que treinar a cada dia.",
      icon: <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />,
      isBonus: true,
    },
    {
      title: "Atualizações Futuras",
      description: "Tenha acesso vitalício a toda e qualquer melhoria ou material complementar futuro.",
      icon: <Star className="w-5 h-5 text-emerald-600 shrink-0" />,
      isBonus: true,
    },
  ];

  return (
    <section id="receive-section" className="py-16 bg-neutral-50/40 px-4 border-t border-b border-neutral-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Simple Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
            O Que Você Vai Receber
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Um compilado definitivo em formato digital, direto ao ponto, planejado milimetricamente para acelerar seu aprendizado sem perda de tempo.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold leading-none">
            <span>🎁</span> Você ainda recebe 4 bônus exclusivos sem custo adicional.
          </div>
        </div>

        {/* List of items styled as a clean/compact 2-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 select-none">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-neutral-200/50 rounded-2xl p-5 sm:p-6 flex gap-4 items-start shadow-sm hover:shadow-md hover:border-emerald-250 transition-all duration-200 group"
            >
              <div className="p-2.5 bg-neutral-50 border border-neutral-100 rounded-xl text-emerald-800 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1 text-left w-full pr-16 animate-none">
                <h3 className="text-base font-bold text-neutral-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Absolute Bonus Badge inside the card */}
              {item.isBonus && (
                <span className="absolute top-5 right-5 inline-flex items-center gap-0.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-250 text-emerald-700 text-[9px] font-black uppercase tracking-wider shadow-sm select-none transition-transform duration-200 group-hover:scale-105">
                  BÔNUS
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
