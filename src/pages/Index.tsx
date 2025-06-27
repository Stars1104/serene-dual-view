
import { useState } from "react";
import { Moon, Sun, Star, Users, Play, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

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

  const benefits = [
    "Comunicação direta com marcas",
    "Proteção de direitos autorais",
    "Pagamentos seguros com PayPal",
    "Acesso gratuito para influência de todos",
    "Formatos de anúncios",
    "Campanhas exclusivas"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">
            NEXA
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Login</Button>
            <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
              Criar Conta
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme sua paixão por conteúdo em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  renda
                </span>{" "}
                — com o{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                  NEXA UGC
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Aprenda, conecte-se com marcas e monetize sua criatividade como nunca antes.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8">
                  Quero Começar
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Play className="mr-2 h-4 w-4" />
                  Conheça o método
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-96 h-96 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center">
                <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">👩‍💻</div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">💰</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-pulse">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📈</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXA UGC Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-8xl">📱</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Por que criar o NEXA UGC
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O mundo do marketing digital está em constante evolução, e o conteúdo gerado pelo usuário (UGC) se tornou uma das estratégias mais poderosas para marcas conectarem-se autenticamente com seu público.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No NEXA UGC, você não apenas aprende a criar conteúdo de qualidade, mas também descobre como transformar essa habilidade em uma fonte de renda sustentável e escalável.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JE</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Julia Lima Borges</div>
                  <div className="text-sm text-muted-foreground">Fundadora NEXA UGC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Como funciona o NEXA UGC
            </h2>
            <p className="text-lg text-muted-foreground">
              Um processo simples para transformar sua criatividade em renda real
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                    {feature.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8">
              Quero conhecer mais
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comunidade de Criadores
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja o que os estudantes do NEXA UGC estão falando sobre o método
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
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

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Comunidade de Criadores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-background transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Comunidade de Criadores
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Acesso ao curso</h3>
                  <div className="text-3xl font-bold text-foreground mt-2">Gratuito</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">Acesso às aulas básicas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">Materiais de apoio</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">Comunidade no Discord</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">Suporte básico</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Começar Gratuitamente
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-pink-500 relative hover:shadow-lg transition-shadow">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500">
                Popular
              </Badge>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">CRIADORES</h3>
                  <div className="text-3xl font-bold text-foreground mt-2">R$ 49,90</div>
                  <div className="text-sm text-muted-foreground">por mês</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">Masterclass completa de UGC</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">Templates exclusivos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">Lives mensais</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-muted-foreground">Conexão direta com marcas</span>
                  </li>
                </ul>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  Quero ser um Criador
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para transformar seu conteúdo em uma carreira?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de criadores que já estão monetizando seu potencial com o NEXA UGC
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8">
            Começar minha jornada
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">NEXA</div>
              <p className="text-gray-400 text-sm">
                Transformando criadores em profissionais do marketing digital através do poder do UGC.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Básicos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sobre o NEXA</li>
                <li>Como funciona</li>
                <li>Preços</li>
                <li>Depoimentos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Central de ajuda</li>
                <li>Contato</li>
                <li>Status do sistema</li>
                <li>Reportar problema</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Termos de uso</li>
                <li>Política de privacidade</li>
                <li>Cookies</li>
                <li>LGPD</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 NEXA UGC. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
