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
            🎸 ESCOLHA O PLANO IDEAL PARA VOCÊ
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
                        Apostila Banjo na Roda
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
                    <div className="p-0.5 rounded-full bg-emerald-100/70 text-emerald-600 shrink-0">
                      <svg
                        className="w-3.5 h-3.5 text-emerald-600 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-emerald-700 tracking-tight flex items-center gap-1">
                      📲 Receba no seu WhatsApp
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
                      Apostila Banjo na Roda
                    </span>
                  </div>

                  {/* Receba no seu WhatsApp */}
                  <div className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-emerald-100/70 text-emerald-600 shrink-0">
                      <svg
                        className="w-3.5 h-3.5 text-emerald-600 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-emerald-700 tracking-tight flex items-center gap-1">
                      📲 Receba no seu WhatsApp
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
