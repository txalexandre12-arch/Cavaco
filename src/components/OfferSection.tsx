import React from "react";
import { Check, ShieldCheck, Lock, Zap } from "lucide-react";

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
    <section id="offer-section" className="py-16 bg-[#FAFAFA] px-4 relative overflow-hidden border-t border-neutral-150/60">
      
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-lg mx-auto relative z-10">
        
        {/* SINGLE INTEGRATED CONTAINER */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden p-6 sm:p-8 space-y-6">
          
          {/* TITLE HEADER */}
          <div className="text-center pb-1 border-b border-neutral-100 select-none">
            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
              Acesso Vitalício
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-black text-neutral-900 tracking-tight flex items-center justify-center gap-2">
              <span>🎁</span> VOCÊ RECEBERÁ HOJE:
            </h2>
          </div>

          {/* COMPACT UNIFIED CHECKLIST */}
          <div className="bg-[#FAFAFA] border border-neutral-150 rounded-2xl p-4 sm:p-5 space-y-3.5">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  {item.isBonus ? (
                    <span className="text-sm select-none">🎁</span>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#22C55E]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-neutral-800 font-extrabold leading-tight">
                  <span className="tracking-tight">{item.text}</span>
                  {item.isBonus && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-black uppercase tracking-wider select-none">
                      BÔNUS
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CAIXA DE VALOR DESTACADA */}
          <div className="p-5 bg-emerald-50/30 border-2 border-emerald-500/25 rounded-2xl text-center space-y-2 relative overflow-hidden select-none">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
            
            <p className="text-xs sm:text-sm font-extrabold text-emerald-800 flex items-center justify-center gap-1.5 uppercase tracking-wider">
              <span>💰</span> Valor Total do Pacote
            </p>

            <div className="text-sm text-neutral-400 font-semibold">
              De: <span className="line-through">R$ 97,00</span>
            </div>

            <div className="space-y-0.5">
              <p className="text-[10px] text-neutral-500 font-black uppercase tracking-wider">Por apenas:</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-xl font-extrabold text-[#22C55E]">R$</span>
                <span className="text-4xl sm:text-5.5xl font-display font-black text-[#22C55E] tracking-tight">19,90</span>
              </div>
            </div>

            <div className="text-[11px] font-black text-emerald-700 bg-emerald-100/60 inline-block px-3 py-1 rounded-full uppercase tracking-wider">
              🔥 Você economiza R$ 77,10 hoje
            </div>
          </div>

          {/* ELEMENTOS DE CONFIANÇA */}
          <div className="grid grid-cols-3 gap-1 pt-1.5 text-center text-[10px] font-extrabold text-neutral-600 uppercase tracking-widest border-t border-b border-neutral-100 py-3.5">
            <div className="flex flex-col items-center gap-1 justify-center">
              <Lock className="w-4 h-4 text-[#22C55E]" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center border-l border-r border-neutral-150">
              <Zap className="w-4 h-4 text-[#22C55E] fill-current" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              <span>Garantia de 7 Dias</span>
            </div>
          </div>

          {/* BOTÃO CTA PRINCIPAL */}
          <div className="space-y-3">
            <a
              href="https://pay.wiapy.com/3YueGcEdrf"
              className="w-full py-5 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl text-center shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.025] active:scale-[0.985] transition-all duration-250 cursor-pointer text-sm sm:text-base uppercase tracking-wider block"
            >
              🚀 GARANTIR MEU ACESSO AGORA
            </a>
            
            <p className="text-[10px] text-neutral-400 text-center font-bold tracking-wide">
              Pagamento único • Sem mensalidades ou taxas ocultas • Segurança criptografada
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
