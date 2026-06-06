import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import OQueVaiReceberSection from "./components/OQueVaiReceberSection";
import TestimonialsSection from "./components/TestimonialsSection";
import OfferSection from "./components/OfferSection";
import WarrantyAndFaqSection from "./components/WarrantyAndFaqSection";
import SupportModal from "./components/SupportModal";
import { ShieldCheck, Lock } from "lucide-react";

export default function App() {
  const [supportOpen, setSupportOpen] = useState(false);

  useEffect(() => {
    // Handle global custom event dispatched from checkout simulating modal
    const handleOpenSupport = () => setSupportOpen(true);
    window.addEventListener("open-support", handleOpenSupport);
    return () => {
      window.removeEventListener("open-support", handleOpenSupport);
    };
  }, []);

  const scrollToOffer = () => {
    const offerSec = document.getElementById("offer-section");
    if (offerSec) offerSec.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="sales-page-root" className="min-h-screen bg-white relative flex flex-col font-sans selection:bg-neutral-150 selection:text-neutral-900 scroll-smooth">
      
      {/* Top Urgent Alert Bar - Crisp and Simple */}
      <div className="bg-red-600 text-white text-center py-2.5 px-4 text-xs font-bold leading-tight flex items-center justify-center gap-2 select-none uppercase tracking-widest">
        <span>⚡ Oferta limitada somente hoje!</span>
      </div>

      {/* Main Structural Sales Flow - Strictly limited to requested sections */}
      <main className="flex-1">
        
        {/* 1. HERO FOLD */}
        <HeroSection />

        {/* 2. O QUE VOCÊ RECEBE */}
        <OQueVaiReceberSection />

        {/* 3. DEPOIMENTOS */}
        <TestimonialsSection />

        {/* 4. OFERTA CORE BOX */}
        <OfferSection />

        {/* 5. GARANTIA + FAQ ACCORDION COMPONENT */}
        <WarrantyAndFaqSection />

      </main>

      {/* FOOTER - Professional Compliance Footprint */}
      <footer className="bg-neutral-950 text-neutral-400 py-12 px-4 border-t border-neutral-900 text-xs">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Top Line logo area & Trust markers */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-neutral-900 pb-8">
            <div className="text-center md:text-left">
              <h3 className="text-white font-display font-extrabold text-sm uppercase tracking-wider">
                🎸 CAVAQUINHO NA PRÁTICA
              </h3>
              <p className="text-[11px] text-neutral-550 mt-1 select-none">
                O caminho mais prático e rápido para aprender do absoluto zero.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-5 text-[11px] text-neutral-500 font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Site Seguro SSL</span>
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-600" /> Checkout Criptografado</span>
            </div>
          </div>

          {/* Compliance Links / Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-neutral-400">
              <button
                onClick={() => setSupportOpen(true)}
                className="hover:text-gold transition cursor-pointer"
              >
                Suporte
              </button>
            </div>

            <p className="text-[11px] text-neutral-600 text-center md:text-right">
              &copy; {new Date().getFullYear()} Cavaquinho na Prática. Todos os direitos reservados.
            </p>
          </div>

          {/* Legal disclaimer */}
          <p className="text-[10px] text-neutral-600 leading-relaxed text-center">
            Este site e o produto digital associado não têm qualquer afiliação com o Facebook, Google ou quaisquer redes sociais. Os resultados podem variar de pessoa para pessoa com base na sua dedicação ao cronograma estabelecido.
          </p>

        </div>
      </footer>


      {/* SUPPORT DIALOG MODAL */}
      <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />

    </div>
  );
}
