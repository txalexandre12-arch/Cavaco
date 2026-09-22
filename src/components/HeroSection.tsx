import React from "react";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative pt-6 pb-8 sm:pt-16 sm:pb-32 bg-white overflow-hidden px-4 sm:px-6">
      
      {/* Soft elegant golden blur accent */}
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gold-bg/35 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-70"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center select-none">
        
        {/* Core Headline with supreme display typography */}
        <h1 className="text-[26px] min-[360px]:text-[29px] min-[400px]:text-[33px] sm:text-6xl font-display font-extrabold text-neutral-900 tracking-tight leading-[1.08] sm:leading-[1.1] uppercase mb-3 sm:mb-4 text-center">
          <span className="block sm:inline">DO ZERO ÀS PRIMEIRAS </span>
          <span className="block sm:inline">
            LEVADAS <span className="text-gold">NO BANJO</span>
          </span>
        </h1>

        {/* Elegant clean subheadline */}
        <p className="text-neutral-600 text-base sm:text-xl leading-snug sm:leading-relaxed max-w-2xl mx-auto font-light mb-5 sm:mb-6">
          Um método passo a passo para aprender acordes, palhetadas, levadas e repicadas — mesmo que você nunca tenha tocado antes.
        </p>

        {/* Vídeo de demonstração (YouTube Shorts) */}
        <div className="flex justify-center w-full max-w-[340px] sm:max-w-[360px] mx-auto py-1 sm:py-2 mb-[30px] sm:mb-8">
          <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-black relative">
            <iframe
              src="https://www.youtube-nocookie.com/embed/WGbAORJrXUg?rel=0&modestbranding=1&playsinline=1"
              title="Vídeo de demonstração - Banjo na Prática"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Centered CTA - High Contrast Clean Button without side clutter */}
        <div className="flex flex-col items-center justify-center mb-[14px] sm:mb-8">
          <button
            onClick={() => {
              const offerSec = document.getElementById("offer-section");
              if (offerSec) {
                offerSec.scrollIntoView({ behavior: "smooth" });
              } else {
                window.dispatchEvent(new CustomEvent("load-and-scroll-offer"));
              }
            }}
            className="w-full sm:w-auto px-12 py-5.5 bg-[#22C55E] hover:bg-[#1db053] active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-200 flex items-center justify-center cursor-pointer text-base sm:text-lg leading-none uppercase tracking-wider block"
          >
            QUERO APRENDER AGORA
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

