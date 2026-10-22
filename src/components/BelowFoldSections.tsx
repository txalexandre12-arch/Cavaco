import React from "react";
import ProblemsAndSolutionSection from "./ProblemsAndSolutionSection";
import OQueVaiReceberSection from "./OQueVaiReceberSection";
import PracticalBenefitsSection from "./PracticalBenefitsSection";
import TestimonialsSection from "./TestimonialsSection";
import BonusSection from "./BonusSection";
import OfferSection from "./OfferSection";
import WarrantyAndFaqSection from "./WarrantyAndFaqSection";
import Footer from "./Footer";

interface BelowFoldSectionsProps {
  onOpenSupport: () => void;
}

export default function BelowFoldSections({ onOpenSupport }: BelowFoldSectionsProps) {
  return (
    <>
      {/* 2. IDENTIFICAÇÃO COM AS DORES & 3. APRESENTAÇÃO DO MÉTODO EM TRÊS ETAPAS */}
      <ProblemsAndSolutionSection />

      {/* 4. APRESENTAÇÃO VISUAL DOS MATERIAIS PRINCIPAIS */}
      <OQueVaiReceberSection />

      {/* 5. BENEFÍCIOS PRÁTICOS DO APRENDIZADO */}
      <PracticalBenefitsSection />

      {/* 6. PROVA SOCIAL COM DEPOIMENTOS AUTÊNTICOS */}
      <TestimonialsSection />

      {/* 7. SEÇÃO EXCLUSIVA DE BÔNUS DO PLANO COMPLETO */}
      <BonusSection />

      {/* 8. COMPARAÇÃO ENTRE PLANO BÁSICO E PLANO COMPLETO (OFERTA) */}
      <OfferSection />

      {/* 9. GARANTIA E SEGURANÇA + 10. PERGUNTAS FREQUENTES (FAQ) + CTA FINAL */}
      <WarrantyAndFaqSection />

      {/* 11. RODAPÉ */}
      <Footer onOpenSupport={onOpenSupport} />
    </>
  );
}
