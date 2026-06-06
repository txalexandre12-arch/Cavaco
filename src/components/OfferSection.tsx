import React, { useState } from "react";
import { Check, ShieldCheck, Lock, CreditCard, Star, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function OfferSection() {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleCheckoutMock = () => {
    setCheckoutSuccess(true);
  };

  return (
    <section id="offer-section" className="py-12 bg-neutral-50/50 px-4 relative overflow-hidden border-t border-neutral-100">
      
      {/* Subtle decorative background spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md sm:max-w-lg mx-auto relative z-10 space-y-6">
        
        {/* 1. TÍTULO */}
        <div className="text-center space-y-2 select-none">
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight">
            Comece Hoje Sua Jornada Musical
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
            Aprenda cavaquinho do zero com um método simples, prático e direto ao ponto.
          </p>
        </div>

        {/* CONTAINER GERAL DO CHECKOUT COMPACTO */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden p-5 sm:p-7 space-y-5">
          
          {/* 2. PACOTE INCLUSO */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-base">📦</span>
              <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 uppercase tracking-wider">
                Conteúdo Incluso:
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-2 border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm text-neutral-800 font-bold">Guia Completo de Cavaquinho</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm text-neutral-800 font-bold">Guia Completo de Banjo</span>
              </div>
            </div>
          </div>

          {/* 3. BÔNUS (COMPACT ITEMS LISTED) */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-base text-emerald-600">🎁</span>
              <h4 className="text-xs sm:text-sm font-extrabold text-emerald-600 uppercase tracking-wider">
                Bônus Inclusos Hoje:
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center justify-between bg-neutral-50 border border-neutral-100 px-3 py-2 rounded-lg text-xs font-bold text-neutral-800">
                <span>Dicionário de acordes</span>
                <span className="text-[9px] bg-amber-100 text-amber-850 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">GRÁTIS</span>
              </div>

              <div className="flex items-center justify-between bg-neutral-50 border border-neutral-100 px-3 py-2 rounded-lg text-xs font-bold text-neutral-800">
                <span>Mais de 300 cifras de pagode organizadas</span>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">BÔNUS</span>
              </div>

              <div className="flex items-center justify-between bg-neutral-50 border border-neutral-100 px-3 py-2 rounded-lg text-xs font-bold text-neutral-800">
                <span>Cronograma de treino para iniciantes</span>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">BÔNUS</span>
              </div>

              <div className="flex items-center justify-between bg-neutral-50 border border-neutral-100 px-3 py-2 rounded-lg text-xs font-bold text-neutral-800">
                <span>Atualizações futuras</span>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">GRÁTIS</span>
              </div>
            </div>
          </div>

          {/* 4. PREÇO (PREMIUM WHITE CARD WITH EMERALD ACCENTS) */}
          <div className="p-5 bg-emerald-50/20 border-2 border-emerald-500/20 rounded-2xl text-center space-y-1.5 relative overflow-hidden select-none">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
            
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider">
              🔥 Oferta Especial
            </span>

            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="text-xs text-neutral-400 line-through">De R$ 97,00</span>
              <span className="text-neutral-300 text-xs">•</span>
              <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Por Apenas:</span>
            </div>

            <div className="flex items-baseline justify-center gap-1">
              <span className="text-lg font-extrabold text-[#22C55E]">R$</span>
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-[#22C55E] tracking-tight">19,90</span>
            </div>

            <div className="text-[11px] font-bold text-neutral-600 pt-1 text-center">
              <span className="text-[#22C55E]">💰 Economize R$ 77,10</span>
            </div>
          </div>

          {/* 5. BOTÃO DE COMPRA PRINCIPAL */}
          <a
            href="https://pay.wiapy.com/3YueGcEdrf"
            className="w-full py-4 px-4 bg-[#22C55E] hover:bg-[#1db053] text-white font-extrabold rounded-xl text-center shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer text-xs sm:text-sm uppercase tracking-wider block"
          >
            🎵 QUERO APRENDER CAVAQUINHO AGORA
          </a>

          {/* 6. GARANTIA */}
          <div className="flex items-center justify-center gap-2.5 py-1 border-t border-neutral-100">
            <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
            <div className="text-left leading-none">
              <span className="text-xs font-bold text-neutral-900 block">🛡️ Garantia de 7 Dias</span>
              <span className="text-[10px] text-neutral-500">Sua compra é totalmente sem riscos.</span>
            </div>
          </div>

          {/* 7. PROVA SOCIAL (HIGH-TRUST & HIGH-CONVERSION) */}
          <div className="py-4 px-5 bg-[#22C55E]/5 rounded-2xl border border-emerald-500/10 flex flex-col items-center text-center space-y-2.5 select-none">
            <div className="flex items-center gap-0.5 text-amber-400">
              <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
              <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
              <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
              <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
              <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
            </div>
            
            <div className="space-y-0.5">
              <p className="text-2xl sm:text-3xl font-display font-black text-neutral-950 tracking-tight leading-none">
                +500 ALUNOS
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 font-semibold tracking-wide">
                já começaram a tocar cavaquinho
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-200/50 w-full max-w-[180px] flex justify-center">
              <p className="text-[11px] text-neutral-500 font-extrabold tracking-wide flex items-center gap-1">
                <span>🎵 Método simples para iniciantes</span>
              </p>
            </div>
          </div>

          {/* 8. ÍCONES DE SEGURANÇA */}
          <div className="pt-2 border-t border-neutral-100 flex justify-around items-center text-[9px] sm:text-[10px] text-neutral-450 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-neutral-400" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#22C55E] fill-[#22C55E]" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-neutral-400" />
              <span>Pix e Cartão</span>
            </div>
          </div>

        </div>

      </div>

      {/* Checkout Simulado Modal */}
      {checkoutSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 text-neutral-900">
          <div className="absolute inset-0" onClick={() => setCheckoutSuccess(false)} />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-sm w-full border border-neutral-200 shadow-2xl relative z-10"
          >
            <div className="text-center">
              <span className="text-3xl inline-block mb-2">🎉</span>
              <h3 className="text-lg font-bold text-neutral-950 mb-1">Checkout Simulado Seguro</h3>
              <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                Parabéns pelo interesse em evoluir na música! Em uma situação real, você seria enviado diretamente para um gateway seguro para pagar <strong>R$ 19,90</strong> em parcela única.
              </p>
              
              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3 mb-4 text-left space-y-1">
                <p className="text-[10px] text-neutral-800 font-bold uppercase tracking-wider">🎁 O que será liberado para você:</p>
                <p className="text-xs text-neutral-650 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Método Cavaquinho e Banjo na Prática
                </p>
                <p className="text-xs text-neutral-650 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Todo o pacote de bônus exclusivos cadastrados
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setCheckoutSuccess(false)}
                  className="w-full py-2.5 bg-neutral-950 hover:bg-neutral-850 text-white font-bold rounded-lg text-xs transition uppercase tracking-wider cursor-pointer"
                >
                  Voltar para a Página
                </button>
                <button
                  onClick={() => {
                    setCheckoutSuccess(false);
                    window.dispatchEvent(new CustomEvent("open-support"));
                  }}
                  className="text-xs text-emerald-600 hover:underline font-bold mt-1 cursor-pointer block mx-auto"
                >
                  Dúvidas? Suporte no WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}
