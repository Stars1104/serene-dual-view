
import { Check } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    "Comunicação direta com marcas",
    "Proteção de direitos autorais",
    "Pagamentos seguros com PayPal",
    "Acesso gratuito para influência de todos",
    "Formatos de anúncios",
    "Campanhas exclusivas"
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12 md:mb-16">
          Benefícios da Plataforma
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-background transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-foreground font-medium text-sm md:text-base">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
