
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Community = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      rating: 5,
      text: "O NEXA UGC transformou completamente minha abordagem para criação de conteúdo. Em apenas 3 meses, consegui aumentar minha renda em 300%!",
      avatar: "SC"
    },
    {
      name: "Ana Ferraz",
      rating: 5,
      text: "Incrível como o curso é detalhado e prático. Aprendi estratégias que nunca imaginei e agora trabalho com marcas dos meus sonhos.",
      avatar: "AF"
    },
    {
      name: "Maria Santos",
      rating: 5,
      text: "Melhor investimento que já fiz! O NEXA UGC não é só um curso, é uma transformação completa na forma de encarar o mercado digital.",
      avatar: "MS"
    }
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comunidade de Criadores
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Veja o que os estudantes do NEXA UGC estão falando sobre o método
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic text-sm md:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
