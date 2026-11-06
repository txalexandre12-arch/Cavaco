import React, { useState, Suspense, lazy } from "react";
import { Check, Sparkles } from "lucide-react";

const SpecialOfferModal = lazy(() => import("./SpecialOfferModal"));

export default function OfferSection() {
  const [isSpecialOfferOpen, setIsSpecialOfferOpen] = useState(false);

  const basicFeatures = [
    "Apostila Cavaquinho e Banjo na Prática",
    "Acordes e levadas essenciais",
    "Exercícios práticos",
    "Acesso digital imediato",
    "Garantia de 7 dias",
  ];

  const bonusFeatures = [
    "Videoaulas Exclusivas",
    "+300 Cifras de Samba e Pagode",
    "Destrava Acordes — 50 Desafios de Troca",
    "Acordes e Levadas Essenciais",
    "Cronograma de Treino de 30 Dias",
    "Atualizações Futuras Gratuitas",
  ];

  const otherFeatures = [
    "Suporte VIP prioritário",
    "Acesso vitalício e garantia de 7 dias",
  ];

  return (
    <section
      id="offer-section"
      className="py-12 sm:py-18 bg-white border-b border-[#E5E7EB] px-4 sm:px-6 relative select-none"
    >
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-display font-black text-[#141816] tracking-tight uppercase leading-tight">
            ESCOLHA O PLANO IDEAL PARA VOCÊ
          </h2>
          <p className="text-[#525A54] text-[15.5px] sm:text-[17.5px] leading-relaxed">
            Comece com o essencial ou leve a experiência completa com todos os bônus exclusivos.
          </p>
        </div>

        {/* GRADE COMPARATIVA DOS DOIS PLANOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch max-w-3xl md:max-w-4xl mx-auto">
          
          {/* ========================================================= */}
          {/* PLANO 1 — BÁSICO (R$ 10,00) — MOCKUP SOLTO SEM CAIXA      */}
          {/* ========================================================= */}
          <div className="bg-white rounded-[16px] border border-[#E5E7EB] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-[#16A34A]/40 transition-all">
            
            <div className="space-y-4">
              
              {/* Topo do Plano Básico */}
              <div className="border-b border-[#E5E7EB] pb-3.5">
                <h3 className="text-[21px] sm:text-[23px] font-display font-black text-[#141816] tracking-tight uppercase">
                  PLANO BÁSICO
                </h3>
                <p className="text-[14px] text-[#525A54] mt-0.5">
                  O essencial para começar no cavaquinho e no banjo.
                </p>
              </div>

              {/* Mockup Solto sobre o fundo branco, sem container cinza ou borda */}
              <div className="w-full flex items-center justify-center py-1 sm:py-2">
                <img
                  src="/mockup3.webp"
                  alt="Apostila Cavaquinho e Banjo na Prática - Plano Básico"
                  width={320}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[175px] sm:max-h-[190px] object-contain drop-shadow-sm select-none"
                />
              </div>

              {/* Benefícios Resumidos */}
              <div className="space-y-2.5 text-left pt-1">
                <p className="text-[12px] font-black uppercase tracking-wider text-[#525A54]">
                  O que está incluso:
                </p>
                <div className="space-y-2">
                  {basicFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-[14px] sm:text-[14.5px] text-[#141816] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Preço e Botão Discreto */}
            <div className="pt-5 border-t border-[#E5E7EB] space-y-3.5 mt-4">
              <div className="text-center space-y-0.5">
                <p className="text-[12px] text-[#525A54] font-medium">
                  Pagamento único de apenas
                </p>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-base font-extrabold text-[#525A54] self-start mt-1">R$</span>
                  <span className="text-[38px] sm:text-[42px] font-display font-black text-[#141816] tracking-tight leading-none">
                    10,00
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsSpecialOfferOpen(true)}
                  className="w-full py-3.5 px-4 bg-white hover:bg-[#F7F7F3] border-2 border-[#16A34A] text-[#15803D] active:scale-[0.98] font-extrabold rounded-[12px] text-center shadow-xs text-[15px] uppercase tracking-wider block transition-all cursor-pointer leading-tight"
                >
                  QUERO O PLANO BÁSICO
                </button>
                <p className="text-[11px] text-[#525A54] text-center font-medium mt-2">
                  Pagamento seguro • Acesso imediato • Garantia de 7 dias
                </p>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* PLANO 2 — COMPLETO (R$ 27,00) — MOCKUP INTEGRADO E BÔNUS   */}
          {/* ========================================================= */}
          <div className="bg-[#10251B] rounded-[18px] border-2 border-[#D6AE54]/70 shadow-xl p-5 sm:p-6 flex flex-col justify-between relative hover:border-[#D6AE54] transition-all">
            
            {/* Etiqueta Superior MAIS COMPLETO */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#16A34A] text-white text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1 whitespace-nowrap">
                <Sparkles className="w-3 h-3 fill-white" />
                MAIS COMPLETO
              </span>
            </div>

            <div className="space-y-4 pt-1">
              
              {/* Topo do Plano Completo */}
              <div className="border-b border-white/10 pb-3">
                <h3 className="text-[21px] sm:text-[23px] font-display font-black text-white tracking-tight uppercase">
                  PLANO COMPLETO
                </h3>
                <p className="text-[13.5px] text-[#D1D5DB] mt-0.5 leading-snug">
                  Tudo que você precisa para estudar, praticar e evoluir no cavaquinho e no banjo.
                </p>
              </div>

              {/* BLOCO DESTAQUE ÚNICO: VANTAGEM DOS R$17 ADICIONAIS */}
              <div className="bg-[#D6AE54]/20 border border-[#D6AE54]/60 rounded-xl px-3 py-2 text-center">
                <p className="text-[12.5px] sm:text-[13px] font-black text-[#D6AE54] tracking-wide leading-tight">
                  ⚡ POR APENAS R$17 A MAIS, VOCÊ LEVA TODOS OS BÔNUS!
                </p>
              </div>

              {/* Mockup Solto sobre o fundo verde-escuro, sem container ou borda */}
              <div className="w-full flex items-center justify-center py-1 sm:py-2">
                <img
                  src="/mockup2.webp"
                  alt="Plano Completo Cavaquinho e Banjo na Prática com Todos os Bônus"
                  width={340}
                  height={220}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[185px] sm:max-h-[200px] object-contain drop-shadow-md select-none"
                />
              </div>

              {/* Lista Organizada com Selos de Bônus Dourados */}
              <div className="space-y-3 text-left pt-1">
                
                {/* 1. Tudo do Plano Básico */}
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-[#22C55E] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-[13.5px] sm:text-[14px] font-bold text-[#D6AE54] leading-snug">
                    Tudo do Plano Básico
                  </span>
                </div>

                {/* 2. Subseção BÔNUS EXCLUSIVOS */}
                <div className="space-y-2 pt-1 border-t border-white/10">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#D6AE54]/90">
                    BÔNUS EXCLUSIVOS:
                  </p>
                  <div className="space-y-1.5">
                    {bonusFeatures.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-[#22C55E] shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 leading-snug">
                          <span className="text-[13.5px] sm:text-[14px] text-white font-medium">
                            {item}
                          </span>
                          <span className="inline-block bg-[#E5BD62] text-[#10251B] text-[9.5px] sm:text-[10px] font-black px-1.5 py-0.5 rounded leading-none uppercase tracking-wide shrink-0">
                            BÔNUS
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Subseção OUTROS BENEFÍCIOS */}
                <div className="space-y-2 pt-1 border-t border-white/10">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                    OUTROS BENEFÍCIOS:
                  </p>
                  <div className="space-y-1.5">
                    {otherFeatures.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-[#22C55E] shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-[13px] sm:text-[13.5px] text-[#D1D5DB] font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Preço Limpo e Botão de Alta Conversão */}
            <div className="pt-5 border-t border-white/10 space-y-3 mt-4">
              
              <div className="text-center space-y-0.5">
                <p className="text-[12px] text-[#9CA3AF] font-medium">
                  Pagamento único
                </p>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-base font-extrabold text-[#22C55E] self-start mt-1">R$</span>
                  <span className="text-[44px] sm:text-[48px] font-display font-black text-white tracking-tight leading-none">
                    27,00
                  </span>
                </div>
              </div>

              <div>
                <a
                  href="https://pay.wiapy.com/1xoFipJuWI1G"
                  className="w-full py-4 px-4 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-extrabold rounded-[12px] text-center shadow-lg hover:shadow-emerald-900/50 transition-all duration-200 cursor-pointer text-[15.5px] sm:text-[16.5px] uppercase tracking-wider block leading-tight"
                >
                  QUERO GARANTIR O PLANO COMPLETO
                </a>
                <p className="text-[11px] text-[#9CA3AF] text-center font-medium mt-2">
                  Pagamento seguro • Acesso imediato • Garantia de 7 dias
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL DE OFERTA ESPECIAL (PRESERVADO INTACTO AO CLICAR NO PLANO BÁSICO) */}
      {isSpecialOfferOpen && (
        <Suspense fallback={null}>
          <SpecialOfferModal
            isOpen={isSpecialOfferOpen}
            onClose={() => setIsSpecialOfferOpen(false)}
          />
        </Suspense>
      )}
    </section>
  );
}
