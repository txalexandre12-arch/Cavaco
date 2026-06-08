import React from "react";
import { Gift, BookOpen, Layers, CalendarRange, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function BonusSection() {
  const bonuses = [
    {
      badge: "Bônus #1",
      title: "Dicionário Digital de Acordes",
      originalPrice: "R$ 37,00",
      description: "Todas as posições essenciais e acordes fáceis do samba para você consultar rapidamente enquanto pratica.",
      icon: <BookOpen className="w-5 h-5 text-gold" />,
    },
    {
      badge: "Bônus #2",
      title: "Mais de 300 Cifras Simplificadas",
      originalPrice: "R$ 47,00",
      description: "Clássicos das rodas de samba com acordes simples adaptados especialmente para quem está começando.",
      icon: <Layers className="w-5 h-5 text-gold" />,
    },
    {
      badge: "Bônus #3",
      title: "Cronograma de Treino Passo a Passo",
      originalPrice: "R$ 29,00",
      description: "Guia diário detalhado de apenas 15 minutos que maximiza seu aprendizado nos 15 dias de treino.",
      icon: <CalendarRange className="w-5 h-5 text-gold" />,
    },
    {
      badge: "Bônus #4",
      title: "Acesso Vitalício & Atualizações",
      originalPrice: "R$ 19,00",
      description: "Receba gratuitamente no seu e-mail todos os novos materiais e melhorias adicionadas no futuro.",
      icon: <Clock className="w-5 h-5 text-gold" />,
    },
  ];

  const handleScrollToOffer = () => {
    const offerSec = document.getElementById("offer-section");
    if (offerSec) {
      offerSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="bonus-section" className="py-14 bg-white text-neutral-900 border-t border-b border-neutral-100 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F9F6F0] border border-[#D4AF37]/30 text-gold text-[10px] font-extrabold uppercase tracking-widest">
            <Gift className="w-3.5 h-3.5" /> Presentes Inclusos
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-display font-black text-neutral-900 tracking-tight">
            Você Também Recebe <span className="text-emerald-600">Totalmente Grátis</span>:
          </h2>
          
          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
            Fazendo sua inscrição hoje, você garante o método completo mais <span className="text-emerald-600 font-semibold">4 bônus exclusivos</span> sem nenhum acréscimo no valor.
          </p>
        </div>

        {/* Compact grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 p-5 rounded-xl border border-neutral-200/60 transition-all duration-200 flex flex-col justify-between hover:border-amber-300"
            >
              <div className="space-y-3">
                {/* Header Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {bonus.badge}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-neutral-400 line-through">
                      De {bonus.originalPrice}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                      GRÁTIS
                    </span>
                  </div>
                </div>

                {/* Title and Icon */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white border border-neutral-200 rounded-lg shrink-0 text-gold">
                    {bonus.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                      {bonus.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-1">
                      {bonus.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Action Call for Checkout */}
        <div className="mt-8 text-center space-y-3">
          <button
            onClick={handleScrollToOffer}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-md transition-all duration-200 uppercase tracking-wider text-xs sm:text-sm cursor-pointer hover:scale-[1.01] active:scale-100"
          >
            Aproveitar Método + Bônus por R$ 19,90 <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
          <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Compra Segura • Acesso Imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
}
