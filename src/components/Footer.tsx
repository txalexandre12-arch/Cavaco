import React from "react";
import { ShieldCheck, Lock } from "lucide-react";

interface FooterProps {
  onOpenSupport: () => void;
}

export default function Footer({ onOpenSupport }: FooterProps) {
  return (
    <footer className="bg-[#141816] text-[#E5E7EB] py-12 px-4 sm:px-6 border-t border-neutral-800 text-xs sm:text-[13px] select-none">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Topo do Rodapé: Marca e Selos */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-neutral-800 pb-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-display font-black text-[16px] sm:text-[17px] uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
              <span>🪕</span> CAVAQUINHO E BANJO NA PRÁTICA
            </h3>
            <p className="text-[#9CA3AF] text-[13px] sm:text-[14px] mt-1">
              O método organizado para você aprender e tocar cavaquinho e banjo com segurança.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-5 text-[12px] text-[#9CA3AF] font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" /> Site Seguro SSL
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Lock className="w-4 h-4 text-[#16A34A]" /> Checkout Criptografado
            </span>
          </div>
        </div>

        {/* Links e Direitos Autorais */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-neutral-300">
            <button
              onClick={onOpenSupport}
              className="hover:text-[#D6AE54] transition cursor-pointer text-sm"
            >
              Suporte ao Aluno
            </button>
          </div>

          <p className="text-[12px] sm:text-[13px] text-[#9CA3AF] text-center md:text-right">
            &copy; {new Date().getFullYear()} Cavaquinho e Banjo na Prática. Todos os direitos reservados.
          </p>
        </div>

        {/* Disclaimer legal */}
        <p className="text-[11px] sm:text-[12px] text-[#6B7280] leading-relaxed text-center max-w-2xl mx-auto">
          Este site e o produto digital associado não têm qualquer afiliação com o Facebook, Google ou quaisquer redes sociais. Os resultados podem variar de pessoa para pessoa com base na sua dedicação e prática diária.
        </p>

      </div>
    </footer>
  );
}
