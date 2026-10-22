import React from "react";
import { Music, Zap, Smile, BookOpen, CheckCircle2 } from "lucide-react";

export default function PracticalBenefitsSection() {
  const benefits = [
    {
      icon: <Music className="w-6 h-6 text-[#16A34A]" />,
      title: "Tocar em rodas de samba e encontros",
      description: "Ganhe autonomia para acompanhar as músicas com o tempo certo, sem ficar perdido nas trocas de acordes.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#16A34A]" />,
      title: "Desenvolver agilidade e coordenação",
      description: "Exercícios objetivos com digitação e palhetada direcionadas para destravar a velocidade das mãos.",
    },
    {
      icon: <Smile className="w-6 h-6 text-[#16A34A]" />,
      title: "Praticar com segurança no seu ritmo",
      description: "Sem cobranças ou comparações: estude com calma nos seus horários livres através de um guia claro.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#16A34A]" />,
      title: "Montar seu próprio repertório",
      description: "Aprenda os acordes fundamentais e as progressões presentes nos sambas e pagodes mais tocados do Brasil.",
    },
  ];

  return (
    <section id="practical-benefits-section" className="py-14 sm:py-20 bg-white border-b border-[#E5E7EB] px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="inline-block text-[12px] font-bold tracking-widest text-[#16A34A] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Aplicação Real
          </span>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-display font-black text-[#141816] tracking-tight uppercase leading-tight">
            BENEFÍCIOS PRÁTICOS <span className="text-[#D6AE54]">DO SEU APRENDIZADO</span>
          </h2>
          <p className="text-[#525A54] text-[17px] sm:text-[19px] leading-relaxed max-w-2xl mx-auto">
            O que muda na sua rotina musical quando você aprende com uma metodologia organizada.
          </p>
        </div>

        {/* Grid de 4 Benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#F7F7F3] border border-[#E5E7EB] flex items-start gap-4 hover:border-[#16A34A]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 shadow-xs">
                {item.icon}
              </div>
              <div className="space-y-1.5 text-left">
                <h3 className="text-[17px] sm:text-[18px] font-display font-black text-[#141816] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#525A54] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
