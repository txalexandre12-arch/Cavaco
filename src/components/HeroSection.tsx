import React from "react";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative pt-6 pb-8 sm:pt-16 sm:pb-32 bg-white overflow-hidden px-4 sm:px-6">
      
      {/* Soft elegant golden blur accent */}
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gold-bg/35 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-70"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center select-none">
        
        {/* Core Headline with supreme display typography */}
        <h1 className="text-[25px] min-[360px]:text-[27px] min-[390px]:text-[30px] min-[414px]:text-[32px] sm:text-6xl font-display font-extrabold text-neutral-900 tracking-tight leading-[1.12] sm:leading-[1.1] uppercase mb-3 sm:mb-4 text-center">
          <span className="block">TUDO O QUE VOCÊ PRECISA</span>
          <span className="block text-[#C9A227] tracking-wide mt-0.5">PARA EVOLUIR NO BANJO!</span>
        </h1>

        {/* Elegant clean subheadline */}
        <p className="text-neutral-600 text-sm min-[360px]:text-[15px] sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal px-1 sm:px-0 mb-4 sm:mb-6 text-center">
          Aprenda novos acordes, aperfeiçoe suas levadas e evolua no banjo com exercícios práticos, cifras e um método organizado para estudar no seu ritmo.
        </p>

        {/* Mockup do material */}
        <div className="flex justify-center w-[88%] sm:w-[60%] max-w-[560px] mx-auto py-0 sm:py-1 mb-5 sm:mb-6">
          <img
            src="/mockup.png"
            alt="Mockup do material Banjo na Prática"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Centered CTA - High Contrast Clean Button without side clutter */}
        <div className="flex flex-col items-center justify-center mb-3 sm:mb-6">
          <button
            onClick={() => {
              const offerSec = document.getElementById("offer-section");
              if (offerSec) {
                offerSec.scrollIntoView({ behavior: "smooth" });
              } else {
                window.dispatchEvent(new CustomEvent("load-and-scroll-offer"));
              }
            }}
            className="w-full sm:w-auto px-6 sm:px-12 py-4.5 sm:py-5.5 bg-[#22C55E] hover:bg-[#1db053] active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center cursor-pointer text-sm min-[360px]:text-base sm:text-lg leading-tight uppercase tracking-wide text-center"
          >
            GARANTIR O MATERIAL AGORA
          </button>
        </div>

        {/* Minimal Centered Trust Assurances */}
        <div className="pt-[12px] sm:pt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-semibold tracking-wider uppercase border-t border-neutral-100/60 max-w-md mx-auto">
          <span className="flex items-center gap-1">🔒 Compra 100% Segura</span>
          <span className="flex items-center gap-1">⚡ Acesso Imediato</span>
          <span className="flex items-center gap-1">🛡️ Garantia de 7 Dias</span>
        </div>

      </div>
    </section>
  );
}

