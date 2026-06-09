import React from "react";
import { Music, CheckCircle, Disc, BookOpen, Layers, Star } from "lucide-react";

export default function OQueVaiReceberSection() {
  const items = [
    {
      title: "Guia Completo de Cavaquinho",
      description: "Do absoluto zero às primeiras soltas de samba, com posturas corretas e trocas práticas.",
      icon: <Music className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
    },
    {
      title: "Guia Completo de Banjo",
      description: "Aprenda a mecânica correta para obter o som metálico e marcante clássico do pagode.",
      icon: <Disc className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
    },
    {
      title: "+300 Cifras de Pagode Organizadas",
      description: "As músicas mais amadas tocadas nas rodas, com acordes simplificados para iniciantes.",
      icon: <Layers className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
      isBonus: true,
    },
    {
      title: "Dicionário de Acordes",
      description: "Consulte rapidamente todas as posições essenciais em um design limpo e ilustrado.",
      icon: <BookOpen className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
      isBonus: true,
    },
    {
      title: "Cronograma de Treino para Iniciantes",
      description: "Um passo a passo diário detalhado para você saber exatamente o que treinar a cada dia.",
      icon: <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
      isBonus: true,
    },
    {
      title: "Atualizações Futuras",
      description: "Tenha acesso vitalício a toda e qualquer melhoria ou material complementar futuro.",
      icon: <Star className="w-5 h-5 text-gold shrink-0 mt-0.5" />,
      isBonus: true,
    },
  ];

  return (
    <section id="receive-section" className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Simple Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
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

        {/* Minimal list layout, 2 columns on desktop - extremely elegant */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 select-none">
          {items.map((item, idx) => (
            <div key={idx} className="relative flex gap-4 items-start pb-6 border-b border-neutral-100/60 last:border-0 md:border-b group">
              {item.icon}
              <div className="space-y-1 pr-16">
                <h3 className="text-base font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {item.isBonus && (
                <span className="absolute top-0 right-0 inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-black uppercase tracking-wider shadow-sm transition-transform duration-200 ease-out group-hover:scale-110 group-hover:bg-emerald-100/70">
                  🎁 BÔNUS
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
