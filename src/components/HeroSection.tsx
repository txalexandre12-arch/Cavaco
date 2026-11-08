import React, { useState, useEffect, useCallback, useRef } from "react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLElement | null>(null);

  // Carrega os scripts do Wistia de forma assíncrona e segura
  const loadWistiaScripts = useCallback(() => {
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const script1 = document.createElement("script");
      script1.src = "https://fast.wistia.com/player.js";
      script1.async = true;
      document.head.appendChild(script1);
    }

    if (!document.querySelector('script[src="https://fast.wistia.com/embed/jwjc0p0hjs.js"]')) {
      const script2 = document.createElement("script");
      script2.src = "https://fast.wistia.com/embed/jwjc0p0hjs.js";
      script2.async = true;
      script2.type = "module";
      document.head.appendChild(script2);
    }
  }, []);

  // Pré-aquece os scripts do player apenas quando a main thread estiver livre (após o LCP)
  useEffect(() => {
    const handleUserIntent = () => {
      loadWistiaScripts();
      cleanup();
    };

    const events = ["pointerdown", "touchstart", "scroll", "keydown"];
    const cleanup = () => {
      events.forEach((ev) => window.removeEventListener(ev, handleUserIntent));
    };

    events.forEach((ev) => window.addEventListener(ev, handleUserIntent, { passive: true, once: true }));

    let timerId: any;
    if ("requestIdleCallback" in window) {
      timerId = (window as any).requestIdleCallback(handleUserIntent, { timeout: 3500 });
    } else {
      timerId = setTimeout(handleUserIntent, 2500);
    }

    return () => {
      cleanup();
      if ("cancelIdleCallback" in window && typeof timerId === "number") {
        (window as any).cancelIdleCallback(timerId);
      } else {
        clearTimeout(timerId);
      }
    };
  }, [loadWistiaScripts]);

  const handleStartPlay = () => {
    loadWistiaScripts();
    setIsPlaying(true);
  };

  return (
    <section id="hero-section" className="relative pt-[22px] pb-10 sm:pt-14 sm:pb-16 bg-[#F7F7F3] border-b border-[#E5E7EB] overflow-hidden px-4 sm:px-6 w-full select-none">
      
      {/* Luz ambiente dourada sutilíssima de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D6AE54]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Título Principal com Hierarquia Específica e tamanho otimizado (27px a 30px no celular) */}
        <h1 className="text-[27px] min-[360px]:text-[28px] min-[400px]:text-[30px] sm:text-[38px] md:text-[42px] font-display font-black tracking-tight leading-[1.14] sm:leading-[1.15] uppercase mb-5 sm:mb-7 max-w-3xl mx-auto text-[#141816]">
          APRENDA CAVAQUINHO E BANJO COM UM <span className="text-[#16A34A]">MÉTODO ORGANIZADO</span> E TOQUE SUAS <span className="text-[#D6AE54]">MÚSICAS FAVORITAS!</span>
        </h1>

        {/* Vídeo VSL / Player Principal — Proporção vertical 9:16 intacta, 350–380px no desktop e responsivo no celular */}
        <div className="flex justify-center w-full max-w-[310px] min-[400px]:max-w-[330px] sm:max-w-[360px] md:max-w-[380px] mx-auto mb-5 sm:mb-7">
          <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-[#E5E7EB] bg-black relative">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  wistia-player[media-id='jwjc0p0hjs']:not(:defined) {
                    background: center / contain no-repeat url('/vsl-thumb.webp');
                    display: block;
                    filter: blur(5px);
                    padding-top: 177.78%;
                  }
                  wistia-player[media-id='jwjc0p0hjs'] {
                    width: 100% !important;
                    height: 100% !important;
                    display: block;
                    overflow: hidden !important;
                  }
                  wistia-player[media-id='jwjc0p0hjs'] iframe {
                    width: 100% !important;
                    height: 100% !important;
                    border: 0 !important;
                    overflow: hidden !important;
                  }
                `,
              }}
            />

            {!isPlaying ? (
              <button
                type="button"
                onClick={handleStartPlay}
                aria-label="Assistir ao vídeo de apresentação"
                className="w-full h-full relative block cursor-pointer group text-left focus:outline-none"
              >
                <img
                  src="/vsl-thumb.webp"
                  alt="Apresentação do material Cavaquinho e Banjo na Prática"
                  width={480}
                  height={854}
                  fetchPriority="high"
                  decoding="sync"
                  className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-[1.015] transition-transform duration-300"
                />

                {/* Botão de Play Estilizado */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 min-[380px]:w-18 min-[380px]:h-18 sm:w-20 sm:h-20 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-2xl shadow-green-950/60 group-hover:scale-105 active:scale-95 transition-transform duration-200">
                    <svg
                      className="w-7 h-7 min-[380px]:w-8 min-[380px]:h-8 sm:w-9 sm:h-9 translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="mt-3.5 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-sm text-white text-[11px] min-[380px]:text-[12px] font-bold uppercase tracking-wider shadow-lg border border-white/10">
                    Toque para assistir
                  </span>
                </div>
              </button>
            ) : (
              React.createElement("wistia-player", {
                ref: playerRef,
                "media-id": "jwjc0p0hjs",
                aspect: "0.5625",
                "auto-play": "true",
                className: "w-full h-full overflow-hidden block",
              })
            )}
          </div>
        </div>

        {/* Botão CTA Centralizado e Destacado */}
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
          <button
            onClick={() => {
              const offerSec = document.getElementById("offer-section");
              if (offerSec) {
                offerSec.scrollIntoView({ behavior: "smooth" });
              } else {
                window.dispatchEvent(new CustomEvent("load-and-scroll-offer"));
              }
            }}
            className="w-full sm:w-auto px-7 sm:px-12 py-4 sm:py-4.5 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer text-[15px] sm:text-[17px] leading-tight uppercase tracking-wider text-center"
          >
            QUERO APRENDER CAVAQUINHO E BANJO
          </button>
        </div>

        {/* Linha Discreta de Confiança */}
        <div className="pt-3.5 sm:pt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-[#525A54] font-medium tracking-wide border-t border-[#E5E7EB] max-w-md mx-auto">
          <span className="flex items-center gap-1.5">🔒 Compra 100% Segura</span>
          <span className="flex items-center gap-1.5">⚡ Acesso Imediato</span>
          <span className="flex items-center gap-1.5">🛡️ Garantia de 7 Dias</span>
        </div>

      </div>
    </section>
  );
}
