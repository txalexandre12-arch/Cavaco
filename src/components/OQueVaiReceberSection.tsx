import React from "react";
import { Music, BookOpen, Layers, Calendar, Sparkles, Gift } from "lucide-react";

export default function OQueVaiReceberSection() {
  const deliverables = [
    {
      icon: Music,
      title: "GUIA COMPLETO DE CAVAQUINHO",
      description: "Aprenda do absoluto zero até tocar suas primeiras músicas com postura correta, acordes, ritmos e exercícios práticos.",
      badge: null,
    },
    {
      icon: Music,
      title: "GUIA COMPLETO DE BANJO",
      description: "Domine a mecânica correta do banjo e desenvolva o som clássico e marcante utilizado nas rodas de samba e pagode.",
      badge: null,
    },
    {
      icon: BookOpen,
      title: "+300 CIFRAS DE PAGODE ORGANIZADAS",
      description: "Tenha acesso a um repertório completo com músicas organizadas e simplificadas para facilitar seu aprendizado.",
      badge: "BÔNUS",
    },
    {
      icon: Layers,
      title: "DICIONÁRIO DE ACORDES",
      description: "Consulte rapidamente acordes essenciais para cavaquinho e banjo através de um material visual e fácil de usar.",
      badge: "BÔNUS",
    },
    {
      icon: Calendar,
      title: "CRONOGRAMA DE TREINO PARA INICIANTES",
      description: "Saiba exatamente o que praticar todos os dias para evoluir sem ficar perdido.",
      badge: "BÔNUS",
    },
    {
      icon: Sparkles,
      title: "ATUALIZAÇÕES FUTURAS",
      description: "Receba gratuitamente todas as futuras melhorias e novos materiais adicionados ao treinamento.",
      badge: "BÔNUS",
    },
  ];

  return (
    <section id="receive-section" className="py-20 bg-neutral-50/50 px-4 border-t border-b border-neutral-100 relative overflow-hidden select-none">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        {/* Premium Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-wider">
            <span>🎁 TUDO O QUE VOCÊ LEVA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 tracking-tight leading-tight">
            🎁 Tudo o Que Você Vai Receber
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Um compilado completo e organizado para acelerar sua evolução no cavaquinho e no banjo, mesmo que você esteja começando do zero.
          </p>
        </div>

        {/* Deliverables Grid - 2 columns in desktop, 1 in mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-neutral-200/70 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div className="space-y-4">
                  {/* Header with Icon and Badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300">
                      <IconComponent className="w-5 h-5 transition-colors duration-300" />
                    </div>
                    
                    {item.badge && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-black uppercase tracking-wider select-none leading-none shadow-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-black text-neutral-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighting Box - You still receive 4 exclusive bonuses */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-4.5 sm:p-5 flex items-center gap-4 shadow-sm relative overflow-hidden transition-all duration-300 hover:border-emerald-500/35">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none"></div>
          
          <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center text-white flex-shrink-0 shadow-md">
            <Gift className="w-5 h-5 text-white fill-emerald-100/30" />
          </div>
          
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-black text-neutral-800 leading-snug">
              🎁 Você ainda recebe 4 bônus exclusivos sem custo adicional.
            </p>
            <p className="text-[10px] sm:text-xs text-neutral-500 font-semibold leading-normal">
              O dicionário de acordes, o cronograma de treino, as mais de 300 cifras e as atualizações já estão inclusos no seu desconto promocional!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
