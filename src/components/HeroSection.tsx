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
    <section id="hero-section" className="relative pt-[22px] pb-10 sm:pt-14 sm:pb-16 bg-[#F7F7F3] border-b border-[#E5E7EB] overflow-hidden px-4 sm:px-6 w-full select-none">
      
      {/* Luz ambiente dourada sutilíssima de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D6AE54]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Título Principal com Hierarquia Específica e tamanho otimizado (27px a 30px no celular) */}
        <h1 className="text-[27px] min-[360px]:text-[28px] min-[400px]:text-[30px] sm:text-[38px] md:text-[42px] font-display font-black tracking-tight leading-[1.14] sm:leading-[1.15] uppercase mb-5 sm:mb-7 max-w-3xl mx-auto text-[#141816]">
          APRENDA CAVAQUINHO E BANJO COM UM <span className="text-[#16A34A]">MÉTODO ORGANIZADO</span> E TOQUE SUAS <span className="text-[#D6AE54]">MÚSICAS FAVORITAS!</span>
        </h1>

        {/* Vídeo VSL / Player Principal — Mais largura no celular (até 310px) e proporção 9:16 intacta */}
        <div className="flex justify-center w-full max-w-[305px] sm:max-w-[325px] mx-auto mb-5 sm:mb-7">
          <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-[#E5E7EB] bg-black relative">
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
