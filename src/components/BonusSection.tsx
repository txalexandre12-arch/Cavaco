import React from "react";

export default function BonusSection() {
  const bonuses = [
    {
      title: "Bônus 1 — +300 Cifras de Samba e Pagode",
      description: "Tenha suas músicas favoritas organizadas e prontas para tocar.",
      image: "/bonus1.webp",
    },
    {
      title: "Bônus 2 — Dicionário de +1.000 Acordes",
      description: "Consulte mais de 1.000 posições de acordes de forma rápida e prática.",
      image: "/bonus2.webp",
    },
    {
      title: "Bônus 3 — Cronograma de Treino de 30 Dias",
      description: "Saiba exatamente o que praticar a cada dia para evoluir no banjo.",
      image: "/bonus3.webp",
    },
    {
      title: "Bônus 4 — Atualizações Futuras Gratuitas",
      description: "Receba novos conteúdos e melhorias sem pagar nada a mais.",
      image: "/bonus4.webp",
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
