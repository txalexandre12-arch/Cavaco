import React, { useState, Suspense, lazy } from "react";
import { Check, Star } from "lucide-react";

const SpecialOfferModal = lazy(() => import("./SpecialOfferModal"));

export default function OfferSection() {
  const [isSpecialOfferOpen, setIsSpecialOfferOpen] = useState(false);

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
    <section
      id="offer-section"
      className="py-12 sm:py-16 bg-[#FAFAFA] px-4 relative border-t border-neutral-150/60 select-none"
    >
      {/* Luz ambiente suave de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1020px] mx-auto relative z-10 space-y-8 sm:space-y-10">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-neutral-900 tracking-tight flex items-center justify-center gap-2">
            <span>🎁</span> VOCÊ RECEBERÁ HOJE:
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium">
            Escolha o plano ideal para a sua jornada no banjo
          </p>
        </div>

        {/* GRADE DOS DOIS PLANOS (LADO A LADO NO DESKTOP, COMPACTO E ELEGANTE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 items-start">
          
          {/* ========================================================= */}
          {/* PLANO 1 — BÁSICO (R$10)                                   */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-sm p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-6 transition-all">
            
            {/* Topo do Plano Básico */}
            <div className="space-y-4">
              <div className="text-left space-y-1">
                <h3 className="text-lg sm:text-xl font-display font-black text-neutral-900 tracking-tight flex items-center gap-2">
                  <span>🎸</span> PLANO BÁSICO
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-500 font-medium">
                  Para quem quer começar do zero.
                </p>
              </div>

              {/* Mockup do Plano Básico */}
              <div className="py-2 flex items-center justify-center min-h-[220px] sm:min-h-[260px]">
                <img
                  src="/mockup3.webp"
                  alt="Mockup do Plano Básico"
                  width={280}
                  height={287}
                  loading="lazy"
                  decoding="async"
                  className="w-auto h-[220px] sm:h-[260px] md:h-[280px] max-w-full object-contain filter drop-shadow-md select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lista de conteúdos do Plano Básico */}
              <div className="border-t border-neutral-100/90 pt-3.5 space-y-3">
                <p className="text-[11px] font-black uppercase tracking-wider text-neutral-400 text-left">
                  Você recebe:
                </p>

                <div className="space-y-2.5 text-left">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-neutral-900 tracking-tight">
                        Método Banjo na Roda
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 font-medium pl-6 leading-tight">
                      Acordes, levadas, repicadas e exercícios para começar a tocar.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight">
                      Acesso imediato
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight">
                      Garantia de 7 dias
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Preço e Botão de Ação do Plano Básico */}
            <div className="space-y-3.5 pt-4 border-t border-neutral-100">
              <div className="text-center space-y-0.5">
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

              <div>
                <button
                  type="button"
                  onClick={() => setIsSpecialOfferOpen(true)}
                  className="w-full py-4 px-4 bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98] text-white font-black rounded-2xl text-center shadow-sm text-xs sm:text-sm uppercase tracking-wider block leading-tight transition-all cursor-pointer"
                >
                  🎸 QUERO O PLANO BÁSICO
                </button>
                <p className="text-[9px] text-neutral-400 text-center font-bold tracking-wide mt-2.5 uppercase">
                  🔒 Pagamento seguro • Sem cobranças adicionais
                </p>
              </div>
            </div>

          </div>


          {/* ========================================================= */}
          {/* PLANO 2 — COMPLETO (R$27) — DESTAQUE PRINCIPAL          */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-6 relative transition-all">
            
            {/* Destaque Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] sm:text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 whitespace-nowrap">
                🔥 MAIS VANTAJOSO
              </span>
            </div>

            {/* Topo do Plano Completo */}
            <div className="space-y-4 pt-1">
              <div className="text-left space-y-1">
                <h3 className="text-lg sm:text-xl font-display font-black text-neutral-950 tracking-tight flex items-center gap-2">
                  <span>👑</span> PLANO COMPLETO
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 font-medium">
                  Tenha o método completo + todos os bônus.
                </p>
              </div>

              {/* Mockup Completo Recheado de Materiais */}
              <div className="py-2 flex items-center justify-center min-h-[220px] sm:min-h-[260px]">
                <img
                  src="/mockup2.webp"
                  alt="Mockup do Plano Completo com todos os materiais e bônus"
                  width={310}
                  height={258}
                  loading="lazy"
                  decoding="async"
                  className="w-auto h-[240px] sm:h-[280px] md:h-[310px] max-w-full object-contain filter drop-shadow-xl select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lista de Conteúdos e Bônus */}
              <div className="border-t border-neutral-100/90 pt-3.5 space-y-2.5">
                <p className="text-[11px] font-black uppercase tracking-wider text-emerald-700 text-left">
                  Você recebe tudo do Plano Básico +
                </p>

                <div className="space-y-2 text-left">
                  {/* Método Principal */}
                  <div className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-neutral-900 tracking-tight leading-snug">
                      Método Banjo na Roda
                    </span>
                  </div>

                  {/* Videoaulas Exclusivas */}
                  <div className="flex items-center justify-between gap-2 text-left">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-sm select-none shrink-0">🎬</span>
                      <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight leading-snug">
                        Videoaulas de Banjo Passo a Passo
                      </span>
                    </div>
                    <span className="shrink-0 inline-block px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 text-[8px] sm:text-[9px] font-black uppercase tracking-wider select-none leading-none">
                      EXCLUSIVO
                    </span>
                  </div>

                  {/* Bônus */}
                  {completeBonusItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2 text-left">
                      <div className="flex items-center gap-2 min-w-0">
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

                  {/* SUPORTE EXCLUSIVO PARA ALUNOS (VIP) */}
                  <div className="bg-gradient-to-br from-amber-50/80 via-amber-50/40 to-transparent border border-amber-200/80 rounded-2xl p-3 space-y-0.5 relative overflow-hidden text-left mt-2">
                    <div className="flex items-center gap-1.5 text-amber-900">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400 shrink-0" />
                      <span className="text-xs font-black uppercase tracking-wider">
                        SUPORTE EXCLUSIVO PARA ALUNOS
                      </span>
                      <span className="ml-auto inline-block text-[8px] font-black bg-amber-500 text-white px-1.5 py-0.5 rounded-full leading-none tracking-widest shrink-0">
                        VIP
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-600 font-medium leading-tight">
                      Tire suas dúvidas e receba orientações durante sua evolução no banjo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Destaque da Diferença de Preço, Preço e Botão */}
            <div className="space-y-3 pt-4 border-t border-neutral-100">
              
              {/* FAIXA: POR APENAS +R$17, LEVE O PACOTE COMPLETO */}
              <div className="bg-amber-50 border border-amber-300/80 rounded-xl px-3 py-2 text-center shadow-xs">
                <p className="text-xs sm:text-[13px] font-black text-amber-900 leading-snug">
                  🔥 POR APENAS +R$17, LEVE O PACOTE COMPLETO
                </p>
              </div>

              {/* Preço com riscado R$97 */}
              <div className="text-center space-y-0.5">
                <p className="text-xs text-neutral-400 font-bold">
                  De <span className="line-through">R$ 97,00</span> por apenas
                </p>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-xl font-extrabold text-emerald-500 self-start mt-1">R$</span>
                  <span className="text-5xl font-display font-black text-neutral-950 tracking-tight leading-none drop-shadow-xs">
                    27,00
                  </span>
                </div>
              </div>

              {/* Botão de Compra com link de checkout intacto */}
              <div>
                <a
                  href="https://app.zuptos.com.br/checkout/535b80d2dbb7c148"
                  className="w-full py-4 px-4 bg-[#22C55E] hover:bg-[#1db053] active:scale-[0.98] text-white font-extrabold rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-xs sm:text-sm uppercase tracking-wider block leading-tight glow-btn"
                >
                  🔥 QUERO O PLANO COMPLETO
                </a>
                <p className="text-[9px] text-neutral-400 text-center font-bold tracking-wide mt-2.5 uppercase">
                  🔒 Pagamento seguro • Sem cobranças adicionais
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL DE OFERTA ESPECIAL (DISPARADO AO CLICAR NO PLANO DE R$10) */}
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
