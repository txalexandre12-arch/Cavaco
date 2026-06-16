import React from "react";
import { Check, Shield, Zap, Star, Sparkles, Award } from "lucide-react";

export default function OfferSection() {
  const items = [
    {
      isBonus: false,
      text: "Guia Completo de Cavaquinho",
    },
    {
      isBonus: false,
      text: "Guia Completo de Banjo",
    },
    {
      isBonus: true,
      text: "+300 Cifras de Pagode Organizadas",
      badge: "BÔNUS",
    },
    {
      isBonus: true,
      text: "Dicionário Completo de Acordes",
      badge: "BÔNUS",
    },
    {
      isBonus: true,
      text: "Cronograma de Treino para Iniciantes",
      badge: "BÔNUS",
    },
    {
      isBonus: true,
      text: "Atualizações Futuras Gratuitas",
      badge: "BÔNUS",
    },
  ];

  return (
    <section id="offer-section" className="py-10 bg-[#FAFAFA] px-4 relative overflow-hidden border-t border-neutral-150/60 select-none">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md mx-auto relative z-10 space-y-4">
        
        {/* COMPACT HEADER */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-display font-black text-neutral-900 tracking-tight flex items-center justify-center gap-2">
            <span>🎁</span> VOCÊ RECEBERÁ HOJE:
          </h2>
        </div>

        {/* SINGLE INTEGRATED PREMIUM CHECKOUT CARD */}
        <div className="bg-white rounded-3xl border border-neutral-200/85 shadow-md overflow-hidden p-5 sm:p-6 space-y-4">
          
          {/* COMPACT BUNDLE LIST */}
          <div className="space-y-2.5">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex-shrink-0">
                    {item.isBonus ? (
                      <span className="text-sm select-none">🎁</span>
                    ) : (
                      <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight truncate leading-tight">
                    {item.text}
                  </span>
                </div>
                
                {item.badge && (
                  <span className="flex-shrink-0 inline-block px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-600 text-[8px] sm:text-[9px] font-black uppercase tracking-wider select-none leading-none">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* DISCRETE ACCENTED DIVIDER */}
          <div className="border-t border-neutral-100 my-1"></div>

          {/* PREMIUM AMBER/GOLD SUPPORT BOX */}
          <div className="bg-gradient-to-br from-amber-50/50 via-amber-50/20 to-transparent border border-amber-200/50 rounded-2xl p-3.5 space-y-1 relative overflow-hidden transition-all duration-200 hover:border-amber-300">
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-amber-400/5 rounded-full blur-xl pointer-events-none"></div>
            
            <div className="flex items-center gap-2 text-amber-900">
              <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span className="text-xs sm:text-[13px] font-black uppercase tracking-wider">
                SUPORTE EXCLUSIVO PARA ALUNOS
              </span>
              <span className="ml-auto inline-block text-[8px] font-black bg-amber-500 text-white px-1.5 py-0.5 rounded-full leading-none tracking-widest">
                VIP
              </span>
            </div>
            <p className="text-[10.5px] sm:text-xs text-neutral-600 font-medium leading-relaxed">
              Tire dúvidas e receba orientação durante sua evolução no cavaquinho e banjo.
            </p>
          </div>

          {/* DISCRETE ACCENTED DIVIDER */}
          <div className="border-t border-neutral-100 my-1"></div>

          {/* HIGH CONVERTING PRICE SECTION */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/15 rounded-full text-[9px] font-black text-amber-800 uppercase tracking-widest leading-none">
              🔥 OFERTA PROMOCIONAL
            </div>

            <div className="space-y-0.5">
              <p className="text-xs text-neutral-400 font-bold">
                De <span className="line-through">R$ 97,00</span> por apenas
              </p>
              
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-xl font-extrabold text-emerald-500 self-start mt-1">R$</span>
                <span className="text-5xl font-display font-black text-neutral-950 tracking-tight leading-none drop-shadow-sm">
                  27,00
                </span>
              </div>
            </div>

            {/* THREE PREMIUM CORE TRUST PILL HIGHLIGHTS */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 pt-1 text-[10px] text-neutral-600 font-bold">
              <div className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                <span>Acesso imediato</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-neutral-300 hidden sm:block"></div>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500 fill-emerald-50" />
                <span>Atualizações inclusas</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-neutral-300 hidden sm:block"></div>
              <div className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="pt-2">
            <a
              href="https://pay.wiapy.com/3YueGcEdrf"
              className="w-full py-4 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black rounded-2xl text-center shadow-md shadow-emerald-500/15 hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer text-xs sm:text-sm uppercase tracking-wider block leading-tight border border-emerald-400/20"
            >
              🎸 QUERO COMEÇAR A TOCAR HOJE
            </a>
            
            <p className="text-[9px] text-neutral-400 text-center font-bold tracking-wide mt-3 uppercase">
              🔒 Pagamento seguro • Sem cobranças adicionais
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
