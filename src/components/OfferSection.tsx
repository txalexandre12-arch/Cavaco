import React from "react";
import { Check, ShieldCheck, Lock, Zap } from "lucide-react";

// Import premium bundle mockup automatically compiled by Vite
// @ts-ignore
import bundleMockup from "../assets/images/bundle_mockup_1781461284286.jpg";

export default function OfferSection() {
  const items = [
    { isBonus: false, text: "Guia Completo de Cavaquinho" },
    { isBonus: false, text: "Guia Completo de Banjo" },
    { isBonus: true, text: "+300 Cifras de Pagode Organizadas" },
    { isBonus: true, text: "Dicionário Completo de Acordes" },
    { isBonus: true, text: "Cronograma de Treino para Iniciantes" },
    { isBonus: true, text: "Atualizações Futuras Gratuitas" },
  ];

  return (
    <section id="offer-section" className="py-12 bg-[#FAFAFA] px-4 relative overflow-hidden border-t border-neutral-150/60 select-none">
      
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md mx-auto relative z-10">
        
        {/* SINGLE INTEGRATED CONTAINER */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden p-5 sm:p-6 space-y-4">
          
          {/* TITLE HEADER */}
          <div className="text-center pb-1">
            <h2 className="text-lg sm:text-xl font-display font-black text-neutral-900 tracking-tight flex items-center justify-center gap-2">
              <span>🎁</span> VOCÊ RECEBERÁ HOJE:
            </h2>
          </div>

          {/* LARGE MAIN PREMIUM BUNDLE SHOWCASE */}
          <div className="relative group/offerMockup w-full flex items-center justify-center py-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 rounded-2xl blur opacity-75 group-hover/offerMockup:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-white border border-neutral-100 shadow-sm rounded-2xl overflow-hidden p-1.5 transition-all duration-350 max-w-[240px]">
              <img
                src={bundleMockup}
                alt="Pacote Completo Cavaquinho e Banjo"
                className="w-full object-contain mix-blend-multiply rounded-xl transition-transform hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* COMPACT UNIFIED CHECKLIST */}
          <div className="bg-[#FAFAFA] border border-neutral-150 rounded-2xl p-3.5 space-y-3">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="flex-shrink-0 mt-0.5">
                  {item.isBonus ? (
                    <span className="text-sm select-none">🎁</span>
                  ) : (
                    <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 flex items-center justify-center text-[#22C55E]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-neutral-800 font-extrabold leading-tight">
                  <span className="tracking-tight">{item.text}</span>
                  {item.isBonus && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[8px] font-black uppercase tracking-wider select-none">
                      BÔNUS
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CAIXA DE VALOR DESTACADA COMPACTA */}
          <div className="p-4 bg-gradient-to-br from-[#FAFAFA] to-white border border-emerald-500/20 rounded-2xl text-center space-y-1.5 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none"></div>
            
            <p className="text-xs font-extrabold text-neutral-500 flex items-center justify-center gap-1">
              💰 Valor Total: <span className="line-through text-neutral-400">R$ 97,00</span>
            </p>

            <div className="space-y-0.5">
              <p className="text-[10px] text-emerald-700 font-black uppercase tracking-widest leading-none">por apenas</p>
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-lg font-extrabold text-[#22C55E] self-start mt-0.5">R$</span>
                <span className="text-4xl font-display font-black text-neutral-900 tracking-tight">27,00</span>
              </div>
            </div>

            <div className="text-[10px] font-black text-emerald-750 bg-emerald-50 border border-emerald-100 inline-block px-2.5 py-1 rounded-md uppercase tracking-wider">
              🔥 Economize R$ 70,00 Hoje
            </div>
          </div>

          {/* BOTÃO CTA PRINCIPAL */}
          <div className="space-y-3 pt-1">
            <a
              href="https://pay.wiapy.com/3YueGcEdrf"
              className="w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl text-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.985] transition-all duration-200 cursor-pointer text-xs sm:text-sm uppercase tracking-wider block leading-tight border border-emerald-400"
            >
              🚀 QUERO APRENDER CAVAQUINHO E BANJO AGORA
            </a>

            {/* ELEMENTOS DE CONFIANÇA INTEGRADOS DIRETAMENTE (COMPACT) */}
            <div className="grid grid-cols-3 gap-1 pt-1.5 text-center text-[9px] font-extrabold text-neutral-500 uppercase tracking-wider border-t border-b border-neutral-100 py-2.5">
              <div className="flex flex-col items-center gap-1 justify-center">
                <Lock className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="leading-tight">Compra 100% Segura</span>
              </div>
              <div className="flex flex-col items-center gap-1 justify-center border-l border-r border-neutral-150">
                <Zap className="w-3.5 h-3.5 text-[#22C55E] fill-current" />
                <span className="leading-tight">Acesso Imediato</span>
              </div>
              <div className="flex flex-col items-center gap-1 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="leading-tight">Garantia de 7 Dias</span>
              </div>
            </div>
            
            <p className="text-[9px] text-neutral-400 text-center font-bold tracking-wide">
              Pagamento único • Sem mensalidades ou taxas ocultas • Segurança criptografada
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
