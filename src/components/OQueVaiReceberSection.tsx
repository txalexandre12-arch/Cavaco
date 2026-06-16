import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function OQueVaiReceberSection() {
  const images = [
    "/0.png",
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png"
  ];

  return (
    <section id="receive-section" className="py-16 bg-[#FAFAFA] px-4 border-t border-b border-neutral-100 relative overflow-hidden select-none">
      {/* Inject custom inline style to make the Swiper wrapper transition linear */}
      <style>{`
        #receive-section .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
      
      {/* Decorative subtle background glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Simple Crisp Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-display font-black text-neutral-900 tracking-tight sm:text-4xl">
            O Que Você Vai Receber
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Veja uma prévia exclusiva de todo o material didático e conteúdo completo que estará imediatamente disponível para você.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold leading-none">
            <span>🎁</span> Acesso imediato no celular, tablet ou computador.
          </div>
        </div>

        {/* Premium Swiper Carousel Container */}
        <div className="w-full relative px-2 sm:px-4">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={3000}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="w-full !py-4"
          >
            {images.map((imgSrc, idx) => (
              <SwiperSlide key={idx} className="flex items-center justify-center">
                <div className="w-full max-w-[280px] sm:max-w-none bg-white rounded-2xl border border-neutral-200/60 p-2 sm:p-3 shadow-sm hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 group overflow-hidden">
                  <div className="aspect-[3/4] relative bg-neutral-50/50 rounded-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={imgSrc}
                      alt={`Prévia do Material ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
