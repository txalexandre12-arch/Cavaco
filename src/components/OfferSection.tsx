import React from "react";
import { Check, Star } from "lucide-react";

export default function OfferSection() {
  const completeBonusItems = [
    {
      icon: "🎁",
      text: "+300 Cifras de Samba e Pagode",
      badge: "BÔNUS",
    },
    {
      icon: "🎁",
      text: "Dicionário Visual de Acordes",
      badge: "BÔNUS",
    },
    {
      icon: "🎁",
      text: "Cronograma de Treino — 30 Dias",
      badge: "BÔNUS",
    },
    {
      icon: "🎁",
      text: "Atualizações Futuras Gratuitas",
      badge: "BÔNUS",
    },
  ];

  return (
    <section id="offer-section" className="py-12 sm:py-16 bg-[#FAFAFA] px-4 relative border-t border-neutral-150/60 select-none">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-display font-black text-neutral-900 tracking-tight flex items-center justify-center gap-2">
            <span>🎁</span> VOCÊ RECEBERÁ HOJE:
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium">
            Escolha o plano ideal para a sua jornada no banjo
          </p>
        </div>

        {/* TWO PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* ======================================== */}
          {/* PLANO 1 — SIMPLES                        */}
          {/* ======================================== */}
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm p-5 sm:p-6 flex flex-col justify-between space-y-6">
            
            {/* Top Info */}
            <div className="space-y-4">
              <div className="space-y-1 text-left">
                <h3 className="text-lg sm:text-xl font-display font-black text-neutral-900 tracking-tight flex items-center gap-2">
                  <span>🪕</span> PLANO SIMPLES
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-500 font-medium">
                  Para quem quer começar do zero.
                </p>
              </div>

              <div className="border-t border-neutral-100"></div>

              {/* Items List (SOMENTE os 3 itens) */}
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-left">
                  <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight leading-snug">
                    Método Banjo na Roda
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-left">
                  <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight leading-snug">
                    Acesso imediato
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-left">
                  <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight leading-snug">
                    Garantia de 7 dias
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom: Price & Button */}
            <div className="space-y-4 pt-4 border-t border-neutral-100">
              
              <div className="text-center space-y-1">
                <p className="text-xs text-neutral-400 font-medium">
                  Pagamento único por apenas
                </p>
                
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-lg font-extrabold text-neutral-700 self-start mt-1">R$</span>
                  <span className="text-4xl sm:text-5xl font-display font-black text-neutral-900 tracking-tight leading-none">
                    10,00
                  </span>
                </div>
              </div>

              {/* Button */}
              <div>
                <a
                  href="https://app.zuptos.com.br/checkout/c2bc66213299a0e0"
                  className="w-full py-3.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-black rounded-2xl text-center shadow-sm text-xs sm:text-sm uppercase tracking-wider block leading-tight transition-colors cursor-pointer"
                >
                  🪕 QUERO O PLANO SIMPLES
                </a>
                
                <p className="text-[9px] text-neutral-400 text-center font-bold tracking-wide mt-3 uppercase">
                  🔒 Pagamento seguro • Sem cobranças adicionais
                </p>
              </div>

            </div>

          </div>


          {/* ======================================== */}
          {/* PLANO 2 — COMPLETO                      */}
          {/* ======================================== */}
          <div className="bg-white rounded-3xl border-2 border-emerald-500 shadow-md shadow-emerald-500/10 p-5 sm:p-6 flex flex-col justify-between space-y-6 relative">
            
            {/* Destaque Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] sm:text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 whitespace-nowrap">
                🔥 MAIS VANTAJOSO
              </span>
            </div>

            {/* Top Info */}
            <div className="space-y-4 pt-1">
              <div className="space-y-1 text-left">
                <h3 className="text-lg sm:text-xl font-display font-black text-neutral-950 tracking-tight flex items-center gap-2">
                  <span>👑</span> PLANO COMPLETO
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 font-medium">
                  Tenha o método completo + todos os bônus.
                </p>
              </div>

              <div className="border-t border-neutral-100"></div>

              {/* Items List */}
              <div className="space-y-2.5">
                
                {/* Método Principal */}
                <div className="flex items-center justify-between gap-3 text-left">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-neutral-900 tracking-tight leading-snug">
                      Método Banjo na Roda
                    </span>
                  </div>
                </div>

                {/* Bônus */}
                {completeBonusItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 text-left">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-sm select-none shrink-0">{item.icon}</span>
                      <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight leading-snug">
                        {item.text}
                      </span>
                    </div>
                    
                    <span className="shrink-0 inline-block px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 text-[8px] sm:text-[9px] font-black uppercase tracking-wider select-none leading-none">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* VIP SUPPORT BOX */}
              <div className="bg-gradient-to-br from-amber-50/70 via-amber-50/30 to-transparent border border-amber-200/70 rounded-2xl p-3.5 space-y-1 relative overflow-hidden text-left">
                <div className="flex items-center gap-2 text-amber-900">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-black uppercase tracking-wider">
                    SUPORTE EXCLUSIVO PARA ALUNOS
                  </span>
                  <span className="ml-auto inline-block text-[8px] font-black bg-amber-500 text-white px-1.5 py-0.5 rounded-full leading-none tracking-widest shrink-0">
                    VIP
                  </span>
                </div>
                <p className="text-[10.5px] sm:text-xs text-neutral-600 font-medium leading-relaxed">
                  Tire suas dúvidas e receba orientações durante sua evolução no banjo.
                </p>
              </div>

            </div>

            {/* Bottom: Price & Button */}
            <div className="space-y-4 pt-4 border-t border-neutral-100">
              
              <div className="text-center space-y-2">
                <div className="space-y-0.5">
                  <p className="text-xs text-neutral-400 font-bold">
                    De <span className="line-through">R$ 97,00</span> por apenas
                  </p>
                  
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-xl font-extrabold text-emerald-500 self-start mt-1">R$</span>
                    <span className="text-5xl font-display font-black text-neutral-950 tracking-tight leading-none drop-shadow-sm">
                      19,00
                    </span>
                  </div>
                </div>

                {/* COMPARISON PHRASE */}
                <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl px-3 py-1.5 text-center">
                  <p className="text-[11px] sm:text-xs font-bold text-emerald-800 leading-snug">
                    Por apenas R$9 a mais, leve o treinamento completo + todos os bônus.
                  </p>
                </div>

                {/* THREE CORE TRUST PILL HIGHLIGHTS */}
                <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 pt-1 text-[10.5px] text-neutral-600 font-bold">
                  <span>⚡ Acesso imediato</span>
                  <span className="text-neutral-300 hidden sm:inline">•</span>
                  <span>♻️ Atualizações inclusas</span>
                  <span className="text-neutral-300 hidden sm:inline">•</span>
                  <span>🛡 Garantia de 7 dias</span>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="https://app.zuptos.com.br/checkout/535b80d2dbb7c148"
                  className="w-full py-4 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black rounded-2xl text-center shadow-md shadow-emerald-500/15 hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer text-xs sm:text-sm uppercase tracking-wider block leading-tight border border-emerald-400/20"
                >
                  🔥 QUERO O PLANO COMPLETO
                </a>
                
                <p className="text-[9px] text-neutral-400 text-center font-bold tracking-wide mt-3 uppercase">
                  🔒 Pagamento seguro • Sem cobranças adicionais
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

