import React from "react";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative py-24 sm:py-32 bg-white overflow-hidden px-4 sm:px-6">
      
      {/* Soft elegant golden blur accent */}
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gold-bg/35 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-70"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center space-y-8 select-none">
        
        {/* Core Headline with supreme display typography */}
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-neutral-900 tracking-tight leading-tight sm:leading-[1.1]">
          Toque Cavaquinho e Banjo em <span className="text-gold">Até 15 Dias</span>
        </h1>

        {/* Elegant clean subheadline */}
        <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-light">
          Aprenda os acordes, batidas e músicas essenciais para tocar pagode e samba mesmo começando do absoluto zero.
        </p>

        {/* Mockup do material */}
        <div className="flex justify-center max-w-2xl mx-auto py-2">
          <img
            src="/mockup.png"
            alt="Mockup do material Cavaquinho na Prática"
            className="w-full h-auto drop-shadow-2xl hover:scale-[1.01] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Centered CTA - High Contrast Clean Button without side clutter */}
        <div className="pt-2 flex flex-col items-center justify-center">
          <button
            onClick={() => {
              const offerSec = document.getElementById("offer-section");
              if (offerSec) offerSec.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-12 py-5.5 bg-[#22C55E] hover:bg-[#1db053] active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center cursor-pointer text-base sm:text-lg leading-none uppercase tracking-wider block"
          >
            QUERO APRENDER AGORA
          </button>
        </div>

        {/* Minimal Centered Trust Assurances */}
        <div className="pt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-semibold tracking-wider uppercase border-t border-neutral-100/60 max-w-md mx-auto">
          <span className="flex items-center gap-1">🔒 Compra 100% Segura</span>
          <span className="flex items-center gap-1">⚡ Acesso Imediato</span>
          <span className="flex items-center gap-1">🛡️ Garantia de 7 Dias</span>
        </div>

      </div>
    </section>
  );
}

