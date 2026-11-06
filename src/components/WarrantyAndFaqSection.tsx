import React, { useState } from "react";
import { ShieldCheck, ChevronDown, Check, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function WarrantyAndFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Como funciona a entrega e o acesso ao material?",
      answer: "O acesso é liberado de forma imediata assim que o pagamento for confirmado. Você receberá um e-mail com as instruções de acesso e também os arquivos diretamente pelo WhatsApp para estudar onde quiser.",
    },
    {
      question: "O que está incluído no material?",
      answer: "Você recebe a Apostila Cavaquinho e Banjo na Prática com os fundamentos, diagramas visuais de acordes, levadas de samba e pagode, técnicas de repicadas e exercícios práticos. No Plano Completo, inclui videoaulas passo a passo e 4 bônus exclusivos.",
    },
    {
      question: "O material é indicado para quem está começando do zero?",
      answer: "Sim, exatamente para isso! Toda a metodologia foi organizada de forma progressiva e visual, ideal para quem nunca tocou antes ou para quem já toca um pouco e quer destravar de vez.",
    },
    {
      question: "Qual é a diferença entre o Plano Básico e o Plano Completo?",
      answer: "O Plano Básico (R$ 10,00) contém a Apostila Cavaquinho e Banjo na Prática com os acordes e levadas essenciais. O Plano Completo (R$ 27,00) inclui a Apostila, Videoaulas Exclusivas, mais de 300 Cifras de Samba e Pagode, Destrava Acordes (50 Desafios de Troca), Acordes e Levadas Essenciais, Cronograma de Treino de 30 Dias, Atualizações Gratuitas e Suporte VIP.",
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Você tem 7 dias completos para acessar e testar o material. Se por qualquer motivo achar que o método não é para você, basta solicitar o reembolso que devolveremos 100% do seu dinheiro sem burocracia.",
    },
    {
      question: "Terei suporte para tirar dúvidas?",
      answer: "Sim! Os alunos contam com canal de suporte para tirar dúvidas e receber orientações durante toda a sua jornada de estudos no cavaquinho e no banjo.",
    },
    {
      question: "Quais as formas de pagamento disponíveis?",
      answer: "Você pode pagar via Pix (com liberação instantânea) ou Cartão de Crédito em ambiente totalmente seguro e criptografado.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToOffer = () => {
    const offerSec = document.getElementById("offer-section");
    if (offerSec) {
      offerSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="warranty-and-faq-wrapper" className="bg-[#F7F7F3] select-none">
      
      {/* ========================================================= */}
      {/* 10. REFORMULAR GARANTIA E SEGURANÇA (Fundo Off-White)     */}
      {/* ========================================================= */}
      <section id="warranty-section" className="py-14 sm:py-20 px-4 sm:px-6 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E5E7EB] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Selo Visual */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative max-w-[190px]">
                <img
                  src="/Selo.webp"
                  alt="Selo de Garantia Incondicional de 7 Dias"
                  width={190}
                  height={190}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain drop-shadow-md select-none"
                />
              </div>
            </div>

            {/* Texto de Garantia */}
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <span className="inline-block text-[12px] font-bold tracking-widest text-[#15803D] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Garantia Blindada
              </span>
              
              <h2 className="text-[26px] sm:text-[30px] font-display font-black text-[#141816] tracking-tight uppercase leading-tight">
                SUA COMPRA COM <span className="text-[#16A34A]">MAIS TRANQUILIDADE</span>
              </h2>

              <p className="text-[16px] sm:text-[17px] text-[#525A54] leading-relaxed">
                Experimente a <strong>Apostila Cavaquinho e Banjo na Prática</strong> por até <strong>7 dias</strong>. Se dentro desse período você achar que o conteúdo não é o que esperava, devolvemos 100% do seu investimento.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start text-[14px] text-[#141816] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#16A34A]" /> Risco Zero
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#16A34A]" /> Reembolso Fácil
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#16A34A]" /> Suporte Dedicado
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. RECONSTRUIR FAQ (Acordeões Modernos e Claros)         */}
      {/* ========================================================= */}
      <section id="faq-section" className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="inline-block text-[12px] font-bold tracking-widest text-[#D6AE54] uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-[#D6AE54]/30">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-display font-black text-[#141816] tracking-tight uppercase leading-tight">
            AINDA TEM <span className="text-[#16A34A]">ALGUMA DÚVIDA?</span>
          </h2>
          <p className="text-[#525A54] text-[17px] sm:text-[19px] leading-relaxed">
            Confira as respostas para as perguntas mais comuns antes de garantir seu acesso.
          </p>
        </div>

        {/* Lista de Acordeões */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-xs transition-colors hover:border-[#16A34A]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-[16px] sm:text-[18px] font-display font-bold text-[#141816] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#F7F7F3] border border-[#E5E7EB] text-[#525A54] transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-[#16A34A]" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-[15px] sm:text-[16px] text-[#525A54] leading-relaxed border-t border-[#E5E7EB]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Final abaixo do FAQ */}
        <div className="mt-12 sm:mt-16 text-center space-y-3">
          <button
            onClick={scrollToOffer}
            className="w-full sm:w-auto px-8 sm:px-12 py-4.5 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-[16px] sm:text-[18px] uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            QUERO COMEÇAR A TOCAR AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-[13px] text-[#525A54]">
            🔒 Acesso imediato • 7 dias de garantia incondicional
          </p>
        </div>

      </section>

    </div>
  );
}
