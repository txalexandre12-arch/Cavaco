import React, { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    // Carrega o script base do Wistia se ainda não presente
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const script1 = document.createElement("script");
      script1.src = "https://fast.wistia.com/player.js";
      script1.async = true;
      document.head.appendChild(script1);
    }

    // Carrega o script específico da mídia Wistia
    if (!document.querySelector('script[src="https://fast.wistia.com/embed/z1l5490jxy.js"]')) {
      const script2 = document.createElement("script");
      script2.src = "https://fast.wistia.com/embed/z1l5490jxy.js";
      script2.async = true;
      script2.type = "module";
      document.head.appendChild(script2);
    }
  }, []);

  return (
    <section id="hero-section" className="relative pt-6 pb-8 sm:pt-14 sm:pb-24 bg-[#111111] overflow-hidden px-4 sm:px-6 w-full">
      
      {/* Soft subtle warm accent for depth */}
      <div className="absolute top-1/3 left-1/2 w-[380px] h-[380px] bg-[#D6AA2C]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center select-none">
        
        {/* Core Headline with supreme display typography */}
        <h1 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-[25px] sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.18] sm:leading-[1.15] uppercase mb-4 sm:mb-6 text-center max-w-2xl mx-auto px-2">
          <span className="block text-white">TUDO O QUE VOCÊ PRECISA</span>
          <span className="block text-[#D6AA2C] tracking-normal mt-1 sm:mt-1.5">PARA EVOLUIR NO BANJO!</span>
        </h1>

        {/* VSL Wistia Player 9:16 (Limitado a 300px desktop, até 280px mobile, sem scrollbars) */}
        <div className="flex justify-center w-full max-w-[280px] sm:max-w-[300px] mx-auto mb-5 sm:mb-6">
          <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-neutral-700/60 bg-black relative">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  wistia-player[media-id='z1l5490jxy']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/z1l5490jxy/swatch');
                    display: block;
                    padding-top: 177.78%;
                  }
                  wistia-player[media-id='z1l5490jxy'] {
                    width: 100% !important;
                    height: 100% !important;
                    display: block;
                    overflow: hidden !important;
                  }
                  wistia-player[media-id='z1l5490jxy'] iframe {
                    width: 100% !important;
                    height: 100% !important;
                    border: 0 !important;
                    overflow: hidden !important;
                  }
                `,
              }}
            />
            {React.createElement("wistia-player", {
              "media-id": "z1l5490jxy",
              aspect: "0.5625",
              className: "w-full h-full overflow-hidden block",
            })}
          </div>
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
            className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 bg-[#20C65A] hover:bg-[#1bb351] active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-lg shadow-[#20C65A]/25 hover:shadow-xl hover:shadow-[#20C65A]/35 transition-all duration-200 flex items-center justify-center cursor-pointer text-sm min-[360px]:text-base sm:text-lg leading-tight uppercase tracking-wide text-center"
          >
            QUERO GARANTIR O MATERIAL AGORA
          </button>
        </div>

        {/* Minimal Centered Trust Assurances */}
        <div className="pt-[12px] sm:pt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-semibold tracking-wider uppercase border-t border-neutral-800 max-w-md mx-auto">
          <span className="flex items-center gap-1.5 text-neutral-300">🔒 Compra 100% Segura</span>
          <span className="flex items-center gap-1.5 text-neutral-300">⚡ Acesso Imediato</span>
          <span className="flex items-center gap-1.5 text-neutral-300">🛡️ Garantia de 7 Dias</span>
        </div>

      </div>
    </section>
  );
}

