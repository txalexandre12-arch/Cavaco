import React from "react";

export default function TestimonialsSection() {
  const testimonialImages = [
    { src: "/depoi1.png", alt: "Depoimento de Aluno 1" },
    { src: "/depoi2.png", alt: "Depoimento de Aluno 2" },
    { src: "/depoi3.png", alt: "Depoimento de Aluno 3" },
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Simple crisp header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-extrabold text-neutral-900 tracking-tight sm:text-4xl">
            Veja o Que os Alunos Estão Dizendo
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Resultados de quem realmente colocou o método em prática e aprendeu a jogar ou tocar em poucos dias.
          </p>
        </div>

        {/* Testimonials Grid using provided images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialImages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-neutral-100 overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-350 select-none flex items-center justify-center"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
