import React from "react";
import { MessageSquareQuote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    { id: "depoi-1", src: "/depoi1.webp", alt: "Depoimento real de aluno sobre a evolução no cavaquinho e banjo" },
    { id: "depoi-2", src: "/depoi2.webp", alt: "Depoimento real de aluno sobre o aprendizado no cavaquinho e banjo" },
    { id: "depoi-3", src: "/depoi3.webp", alt: "Depoimento real de aluno sobre o método Cavaquinho e Banjo na Prática" },
  ];

  // Duplicamos o conjunto para garantir o loop contínuo perfeitamente fluido (translate -50%)
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials-section" className="py-12 sm:py-18 bg-[#F7F7F3] border-b border-[#E5E7EB] relative overflow-hidden select-none">
      
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes testimonialCarousel {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }

            .testimonial-carousel-track {
              display: flex;
              width: max-content;
              animation: testimonialCarousel 24s linear infinite;
              will-change: transform;
              backface-visibility: hidden;
              transform: translate3d(0, 0, 0);
            }

            @media (prefers-reduced-motion: reduce) {
              .testimonial-carousel-track {
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
        
        {/* Header - Título e Subtítulo rigorosamente preservados */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#15803D] text-[12px] font-bold uppercase tracking-widest">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Resultados de Alunos</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-display font-black text-[#141816] tracking-tight uppercase leading-tight">
            VEJA O QUE OS ALUNOS <span className="text-[#16A34A]">ESTÃO FALANDO</span>
          </h2>
          <p className="text-[#525A54] text-[16px] sm:text-[18px] max-w-xl mx-auto leading-relaxed">
            Mensagens reais de quem começou do zero e hoje já toca com segurança e ritmo nas rodas de samba.
          </p>
        </div>

      </div>

      {/* CARROSSEL HORIZONTAL AUTOMÁTICO, INFINITO E CONTÍNUO DOS DEPOIMENTOS */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3">
        
        {/* Fades elegantes nas extremidades para sensação de vitrine infinita */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#F7F7F3] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#F7F7F3] to-transparent z-10" />

        {/* Track do carrossel - Interações manuais bloqueadas sem impedir rolagem vertical no mobile */}
        <div
          className="testimonial-carousel-track pointer-events-none select-none"
          style={{ touchAction: "pan-y" }}
        >
          {carouselItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="shrink-0 w-[80vw] max-w-[285px] sm:w-[295px] md:w-[325px] mx-2.5 sm:mx-3.5"
            >
              {/* Card Limpo: Sem estrelas, sem etiquetas, sem cabeçalhos, apenas o print com bordas 14px e sombra elegante */}
              <div className="bg-white rounded-[14px] border border-[#E5E7EB] shadow-md hover:shadow-lg transition-shadow p-1.5 sm:p-2 overflow-hidden flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={340}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-auto max-h-[460px] object-contain rounded-[10px] pointer-events-none select-none"
                />
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
