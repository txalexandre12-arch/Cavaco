import React from "react";
import { Check, Zap, Gift } from "lucide-react";

export default function OQueVaiReceberSection() {
  const coreFeatures = [
    "Método Banjo na Roda completo",
    "Acordes essenciais explicados de forma visual",
    "Levadas de samba e pagode passo a passo",
    "Repicadas e variações para deixar seu som mais completo",
    "Exercícios práticos para desenvolver coordenação e agilidade",
    "Progressões harmônicas para entender melhor as músicas",
    "Como tocar e se comportar em uma roda de samba",
    "Conteúdo pensado para quem está começando do zero",
  ];

  const bonuses = [
    {
      number: "1",
      title: "+300 Cifras de Pagode Organizadas",
      description: "Tenha um repertório completo para praticar e tocar suas músicas favoritas.",
    },
    {
      number: "2",
      title: "Dicionário de Acordes",
      description: "Consulte rapidamente os principais acordes sempre que precisar.",
    },
    {
      number: "3",
      title: "Cronograma de Treino para Iniciantes",
      description: "Saiba exatamente o que praticar para evoluir sem ficar perdido.",
    },
    {
      number: "4",
      title: "Atualizações Futuras",
      description: "Receba gratuitamente novos conteúdos e melhorias adicionadas ao método.",
    },
  ];

  const scrollToOffer = () => {
    const offerSec = document.getElementById("offer-section");
    if (offerSec) {
      offerSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="receive-section"
      className="py-[55px] bg-[#F8F7F4] border-t border-b border-neutral-200/80 relative overflow-hidden select-none"
    >
      {/* Luzes decorativas sutis de fundo */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        
        {/* 1. HEADLINE PRINCIPAL REDUZIDA (DUAS LINHAS NO DESKTOP, COMPACTA) */}
        <div className="max-w-[900px] mx-auto text-center px-4 mb-[35px]">
          <h2 className="text-[30px] sm:text-[42px] leading-[1.08] sm:leading-[1.05] font-display font-extrabold text-neutral-900 tracking-tight uppercase">
            <span className="sm:block">TUDO O QUE VOCÊ VAI RECEBER AO ACESSAR O</span>{" "}
            <span className="text-gold sm:block">MÉTODO BANJO NA RODA</span>
          </h2>
        </div>

        {/* 2. GRANDE CARD CENTRAL MAIS COMPACTO (MAX 760PX) */}
        <div className="w-[calc(100%-24px)] sm:w-[calc(100%-32px)] max-w-[760px] mx-auto bg-white rounded-3xl sm:rounded-[32px] border border-neutral-200/90 shadow-xl shadow-neutral-950/[0.04] px-[18px] py-[28px] sm:px-[35px] sm:py-[40px] space-y-6 sm:space-y-7">
          
          {/* TOPO DO CARD: BADGE E HEADLINES COMPACTAS */}
          <div className="text-center space-y-2 sm:space-y-2.5 max-w-[620px] mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-black uppercase tracking-wider shadow-xs">
              <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>⚡ ACESSO IMEDIATO</span>
            </div>

            <h3 className="text-[21px] sm:text-[27px] leading-[1.18] sm:leading-[1.15] font-display font-black text-neutral-950 tracking-tight">
              Tudo foi organizado para você sair do zero e começar a tocar de verdade.
            </h3>
          </div>

          {/* MOCKUP PROPORCIONAL E CENTRALIZADO (MAX 580PX, 85% NO DESKTOP) */}
          <div className="relative mx-auto py-1 sm:py-2 flex justify-center">
            <div className="w-full sm:w-[85%] max-w-[580px] flex items-center justify-center">
              <img
                src="/mockup2.png"
                alt="Mockup do Método Banjo na Roda e todos os materiais bônus inclusos"
                loading="lazy"
                className="w-full h-auto object-contain filter drop-shadow-2xl select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* LISTA VERTICAL DE CONTEÚDOS INCLUSOS COM DIVISÓRIAS DISCRETAS */}
          <div className="space-y-1 pt-5 border-t border-neutral-150/70">
            <div className="pb-2 flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-neutral-400">
                O QUE ESTÁ INCLUSO NO MÉTODO:
              </span>
            </div>

            <div className="divide-y divide-neutral-150/70">
              {coreFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="py-2.5 sm:py-3 flex items-center gap-3 sm:gap-3.5"
                >
                  <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[13px] sm:text-[15px] font-semibold text-neutral-800 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DESTAQUE DOS 4 BÔNUS ESPECIAIS */}
          <div className="pt-5 sm:pt-6 space-y-3.5 border-t border-neutral-150/70">
            <div className="flex items-center gap-2 pb-0.5">
              <Gift className="w-4 h-4 text-gold" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-neutral-900">
                VOCÊ TAMBÉM RECEBE ESSES 4 BÔNUS EXCLUSIVOS:
              </span>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {bonuses.map((bonus, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#FBF9F4] border border-amber-200/70 shadow-xs transition-colors hover:border-amber-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 text-lg sm:text-xl mt-0.5">🎁</div>
                    <div className="space-y-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-900 border border-amber-500/25">
                          BÔNUS #{bonus.number}
                        </span>
                        <h4 className="text-[13px] sm:text-sm font-black text-neutral-900">
                          {bonus.title}
                        </h4>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-neutral-600 font-normal leading-relaxed">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTÃO CTA DE CONVERSÃO NO FINAL DO BLOCO */}
          <div className="pt-5 sm:pt-6 text-center space-y-2.5 border-t border-neutral-150/70">
            <div className="flex justify-center">
              <button
                onClick={scrollToOffer}
                className="w-full sm:w-auto px-7 sm:px-12 py-4 bg-[#22C55E] hover:bg-[#1db053] active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-sm sm:text-base leading-none uppercase tracking-wider inline-flex items-center justify-center glow-btn"
              >
                QUERO RECEBER TUDO ISSO AGORA
              </button>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-500 font-medium">
              ⚡ Acesso imediato no seu e-mail logo após a confirmação do pagamento
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
