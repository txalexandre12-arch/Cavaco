import React from "react";

export default function BonusSection() {
  const bonuses = [
    {
      title: "Bônus 1 — Videoaulas Exclusivas",
      description: "Aprenda com aulas em vídeo que mostram na prática técnicas, acordes e exercícios para cavaquinho e banjo.",
      image: "/bonus1.webp",
    },
    {
      title: "Bônus 2 — +300 Cifras de Samba e Pagode",
      description: "Tenha acesso a mais de 300 cifras organizadas para ampliar seu repertório e praticar suas músicas favoritas.",
      image: "/bonus2.webp",
    },
    {
      title: "Bônus 3 — Destrava Acordes: 50 Desafios de Troca",
      description: "Pratique 50 desafios para desenvolver agilidade, coordenação e mais facilidade nas trocas de acordes.",
      image: "/bonus3.webp",
    },
    {
      title: "Bônus 4 — Acordes e Levadas Essenciais",
      description: "Aprenda acordes fundamentais e levadas práticas para desenvolver ritmo e acompanhar músicas no cavaquinho e no banjo.",
      image: "/bonus4.webp",
    },
    {
      title: "Bônus 5 — Cronograma de Treino de 30 Dias",
      description: "Organize seus estudos com um plano de 30 dias, sabendo exatamente o que praticar para evoluir com consistência.",
      image: "/bonus5.webp",
    },
    {
      title: "Bônus 6 — Atualizações Futuras Gratuitas",
      description: "Receba novos conteúdos, melhorias e atualizações do material sem pagar nada a mais.",
      image: "/bonus6.webp",
    },
  ];

  return (
    <section id="bonus-section" className="py-12 sm:py-18 bg-[#F7F7F3] border-b border-[#E5E7EB] px-4 sm:px-6 select-none">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Limpo e sofisticado */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12 space-y-2.5">
          <span className="inline-block text-[12px] font-bold tracking-widest text-[#D6AE54] uppercase bg-amber-500/10 px-3.5 py-1 rounded-full border border-[#D6AE54]/30">
            Bônus Especiais
          </span>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-display font-black text-[#141816] tracking-tight uppercase leading-tight">
            E TEM MAIS! VEJA OS BÔNUS EXCLUSIVOS <span className="text-[#16A34A]">DO PLANO COMPLETO</span>
          </h2>
          <p className="text-[#525A54] text-[16px] sm:text-[18px] leading-relaxed max-w-xl mx-auto">
            Além dos materiais principais, o Plano Completo inclui conteúdos extras para complementar seus estudos.
          </p>
        </div>

        {/* Grid Estilo Vitrine Premium (Fundo escuro #111814, Imagens Protagonistas em 100% de largura) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-[#111814] rounded-[16px] border border-emerald-950/70 hover:border-[#16A34A]/50 shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col group"
            >
              {/* 1. Imagem Protagonista - Ocupa 100% da largura útil sem container duplo */}
              <div className="w-full bg-[#0c120e] flex items-center justify-center overflow-hidden">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover sm:object-contain max-h-[380px] select-none group-hover:scale-[1.015] transition-transform duration-300"
                />
              </div>

              {/* 2. Área de Texto Integrada e Compacta */}
              <div className="p-4 sm:p-5 text-left space-y-1.5 flex-1 flex flex-col justify-center">
                <h3 className="text-[17px] sm:text-[18px] font-display font-black text-white leading-snug tracking-tight">
                  {bonus.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14.5px] text-[#D1D5DB] leading-relaxed font-normal">
                  {bonus.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
