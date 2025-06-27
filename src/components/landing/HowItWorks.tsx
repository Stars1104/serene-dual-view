
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const features = [
    {
      step: "1",
      title: "Cadastre-se",
      description: "Acesse nossa plataforma e comece sua jornada de transformação digital hoje mesmo."
    },
    {
      step: "2",
      title: "Encontre campanhas",
      description: "Descubra oportunidades incríveis com marcas que se alinham com seu perfil e valores."
    },
    {
      step: "3",
      title: "Crie conteúdo autêntico",
      description: "Desenvolva conteúdos únicos e envolventes que geram resultados reais para as marcas."
    },
    {
      step: "4",
      title: "Receba pagamentos",
      description: "Monetize sua criatividade e transforme sua paixão em uma fonte de renda consistente."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como funciona o NEXA UGC
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Um processo simples para transformar sua criatividade em renda real
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                  {feature.step}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 w-full sm:w-auto">
            Quero conhecer mais
          </Button>
        </div>
      </div>
    </section>
  );
};
