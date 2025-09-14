import { Award, Users, Clock, Trophy } from "lucide-react";
import editorPortrait from "../assets/editor-portrait.jpg";

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "8+",
      label: "Años de experiencia",
      description: "Perfeccionando el arte de la edición"
    },
    {
      icon: Trophy,
      number: "500+",
      label: "Proyectos completados",
      description: "Con resultados excepcionales"
    },
    {
      icon: Users,
      number: "200+",
      label: "Clientes satisfechos",
      description: "Confiaron en nuestra visión"
    },
    {
      icon: Award,
      number: "15+",
      label: "Premios ganados",
      description: "Reconocimiento internacional"
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl font-heading gradient-text">
              Acerca de Marvin Editions
            </h2>
            
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              Somos un estudio boutique especializado en edición de video profesional, 
              donde la creatividad se encuentra con la excelencia técnica.
            </p>
            
            <div className="mb-8 space-y-6">
              <div>
                <h3 className="mb-3 text-2xl font-bold font-heading text-foreground">
                  Nuestra Filosofía
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Creemos que cada proyecto tiene una historia única que contar. Nuestro enfoque 
                  combina técnica cinematográfica avanzada con una comprensión profunda de la 
                  narrativa visual, creando contenido que not solo se ve increíble, sino que 
                  también conecta emocionalmente con la audiencia.
                </p>
              </div>
              
              <div>
                <h3 className="mb-3 text-2xl font-bold font-heading text-foreground">
                  Nuestro Compromiso
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Nos comprometemos a entregar resultados que superen las expectativas, 
                  utilizando las últimas tecnologías y manteniéndonos a la vanguardia de 
                  las tendencias en edición de video. Cada proyecto recibe la misma atención 
                  meticulosa, sin importar su tamaño.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection("#portfolio")}
                className="px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Ver nuestro trabajo
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 text-lg font-medium transition-all duration-300 border-2 rounded-lg border-border text-foreground bg-surface hover:bg-muted/20 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Iniciar proyecto
              </button>
            </div>
          </div>

          {/* Image and Editor Info */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="overflow-hidden border-4 aspect-square rounded-3xl border-primary/20 shadow-glow">
                <img
                  src={editorPortrait}
                  alt="Editor principal de Marvin Editions"
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute p-6 border -bottom-6 -right-6 bg-nav-vorder rounded-2xl border-border shadow-strong">
                <h4 className="mb-2 text-xl font-bold font-heading text-foreground">
                  Marvin Cumbrera Orámas
                </h4>
                <p className="mb-2 font-medium text-primary text-text-per">
                  Editor Principal & Fundador
                </p>
                <p className="text-sm text-muted-foreground">
                  Master en Cinematografía Digital<br />
                  Certificado Adobe & Blackmagic
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold font-heading text-foreground">
              Números que hablan por sí solos
            </h3>
            <p className="text-muted-foreground">
              Años de dedicación reflejados en resultados tangibles
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`group text-center p-8 bg-gradient-surface rounded-2xl border border-border hover-lift animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 transition-colors bg-primary/20 rounded-2xl group-hover:bg-primary/30">
                    <Icon size={32} className="text-primary" />
                  </div>
                  
                  <div className="mb-2 text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="mb-2 text-lg font-semibold font-heading text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl p-12 mx-auto border bg-gradient-surface rounded-3xl border-border shadow-medium">
            <h3 className="mb-6 text-3xl font-bold font-heading gradient-text">
              Nuestra Misión
            </h3>
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              "Transformar ideas en experiencias visuales extraordinarias que inspiren, 
              emocionen y generen impacto real en las audiencias de nuestros clientes."
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-1 rounded-full bg-gradient-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;