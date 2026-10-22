import React from "react";
import { Check, ArrowRight } from "lucide-react";

export default function OQueVaiReceberSection() {
  const mainMaterials = [
    {
      id: "mat-1",
      name: "Apostila Banjo na Roda",
      image: "/previa1.webp",
    },
    {
      id: "mat-2",
      name: "Acordes Essenciais e Levadas de Samba",
      image: "/previa2.webp",
    },
    {
      id: "mat-3",
      name: "Repicadas, Variações e Progressões",
      image: "/previa3.webp",
    },
  ];

  // Duplicamos o conjunto para criar o loop contínuo perfeitamente fluido (translate -50%)
  const carouselItems = [...mainMaterials, ...mainMaterials];

  const coreList = [
    "Apostila Banjo na Roda em PDF de alta qualidade.",
    "Diagramas visuais de acordes e posicionamento dos dedos.",
    "Levadas e repicadas essenciais do samba e pagode.",
    "Exercícios para agilidade e troca de acordes.",
    "Técnicas de postura e dinâmica para rodas de samba.",
    "Acesso imediato pelo celular, tablet ou computador.",
  ];

  const scrollToOffer = () => {
    const offerSec = document.getElementById("offer-section");
    if (offerSec) {
      offerSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="receive-section"
      className="py-12 sm:py-18 bg-[#F7F7F3] border-b border-[#E5E7EB] relative overflow-hidden select-none"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes receiveCarousel {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }

            .receive-carousel-track {
              display: flex;
              width: max-content;
              animation: receiveCarousel 22s linear infinite;
              will-change: transform;
              backface-visibility: hidden;
              transform: translate3d(0, 0, 0);
            }

            @media (prefers-reduced-motion: reduce) {
              .receive-carousel-track {
                animation: none !important;
                transform: none !important;
                flex-wrap: wrap;
                justify-content: center;
              }
            }
          `,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Título principal preservado */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 space-y-2.5">
          <span className="inline-block text-[12px] font-bold tracking-widest text-[#16A34A] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Conteúdo Incluso
          </span>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-display font-black text-[#141816] tracking-tight uppercase leading-tight">
            VEJA TUDO O QUE VOCÊ VAI RECEBER <span className="text-[#16A34A]">AO GARANTIR SEU ACESSO</span>
          </h2>
          <p className="text-[#525A54] text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Um conjunto de materiais organizados para ajudar você a estudar e praticar banjo com mais clareza.
          </p>
        </div>

        {/* 1. MOCKUP PRINCIPAL SOLTO E DESTACADO (95% da largura no mobile, sem caixa branca) */}
        <div className="w-[95%] sm:w-full max-w-3xl mx-auto mb-6 sm:mb-10 text-center flex justify-center">
          <img
            src="/mockup.png"
            alt="Mockup Principal da Apostila Banjo na Roda"
            width={720}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-h-[380px] sm:max-h-[460px] object-contain mx-auto filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] select-none"
          />
        </div>

      </div>

      {/* 2. VITRINE PREMIUM DE MATERIAIS DIGITAIS (Fundo escuro sofisticado #101C16, borda dourada/verde, traço dourado decorativo) */}
      <div className="relative w-full overflow-hidden py-3 sm:py-4 mb-10 sm:mb-14">
        
        {/* Fades elegantes nas bordas para sensação de vitrine infinita */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#F7F7F3] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#F7F7F3] to-transparent z-10" />

        {/* Track do carrossel automático contínuo */}
        <div 
          className="receive-carousel-track pointer-events-none select-none"
          style={{ touchAction: "pan-y" }}
        >
          {carouselItems.map((mat, idx) => (
            <div
              key={`${mat.id}-${idx}`}
              className="shrink-0 w-[78vw] max-w-[275px] sm:w-[285px] md:w-[315px] mx-2.5 sm:mx-3.5"
            >
              {/* Card Vitrine Premium: Fundo #101C16, borda sutil verde/dourada, sombra profunda */}
              <div className="bg-[#101C16] rounded-[16px] border border-[#D6AE54]/25 shadow-lg shadow-black/20 p-2.5 sm:p-3 flex flex-col overflow-hidden">
                
                {/* Imagem grande em destaque proporcional */}
                <div className="w-full aspect-[3/4] bg-[#0A130F] rounded-[12px] overflow-hidden flex items-center justify-center border border-white/5">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    width={500}
                    height={667}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-contain rounded-[10px] pointer-events-none select-none"
                  />
                </div>

                {/* Título centralizado abaixo da imagem com traço dourado decorativo */}
                <div className="pt-3 pb-1.5 px-1 text-center flex flex-col items-center">
                  <h3 className="text-[15px] sm:text-[16px] font-display font-black text-white leading-snug line-clamp-2">
                    {mat.name}
                  </h3>
                  {/* Pequeno traço dourado decorativo */}
                  <div className="w-8 h-[2px] bg-[#D6AE54] rounded-full mt-2" />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 3. BLOCO DE BENEFÍCIOS PREMIUM (#10251B) COM ALTO CONTRASTE E CONVERSÃO */}
        <div className="bg-[#10251B] rounded-[18px] border border-[#D6AE54]/30 shadow-xl p-5 sm:p-8 max-w-3xl mx-auto text-left space-y-6">
          
          {/* TÍTULO E DETALHE DOURADO */}
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-[20px] sm:text-[24px] font-display font-black text-white uppercase tracking-tight leading-snug">
              TUDO ISSO ESTÁ <span className="text-[#D6AE54]">INCLUSO</span> NO SEU ACESSO
            </h3>
            {/* Traço dourado decorativo */}
            <div className="w-10 h-[2.5px] bg-[#D6AE54] rounded-full mx-auto sm:mx-0" />
          </div>

          {/* LISTA DE BENEFÍCIOS MAIS CURTOS E DIRETOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
            {coreList.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-2.5 pb-2.5 border-b border-white/10 sm:border-b-0"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-[#22C55E] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[14.5px] sm:text-[15.5px] text-[#E5E7EB] font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* BOTÃO DE COMPRA DE ALTA CONVERSÃO */}
          <div className="pt-2">
            <button
              onClick={scrollToOffer}
              className="w-full py-4.5 px-6 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-extrabold rounded-[12px] shadow-lg hover:shadow-emerald-900/40 transition-all duration-200 cursor-pointer text-[16px] sm:text-[17px] uppercase tracking-wider flex items-center justify-center gap-2 leading-none"
            >
              <span>QUERO RECEBER MEU ACESSO AGORA</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
