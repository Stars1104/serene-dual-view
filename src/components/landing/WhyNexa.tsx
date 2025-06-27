
import WhyNexa from "@/assets/landing/why-nexa.png";

export const WhyNexaSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-last lg:order-first">
            <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden">
              <img src={WhyNexa} alt="Why NEXA UGC" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Por que criar o NEXA UGC
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O mundo do marketing digital está em constante evolução, e o conteúdo gerado pelo usuário (UGC) se tornou uma das estratégias mais poderosas para marcas conectarem-se autenticamente com seu público.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              No NEXA UGC, você não apenas aprende a criar conteúdo de qualidade, mas também descobre como transformar essa habilidade em uma fonte de renda sustentável e escalável.
            </p>
            <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">JE</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Julia Lima Borges</div>
                <div className="text-sm text-muted-foreground">Fundadora NEXA UGC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
