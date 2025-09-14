import { Play, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-video-editing.jpg";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional video editing setup"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated particles/dots effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl font-heading animate-fade-in-up">
            <span className="gradient-text">Elevamos tu contenido</span>
            <br />
            <span className="text-foreground">visual al nivel</span>
            <br />
            <span className="gradient-text-primary">profesional</span>
          </h1>
          
          <p className="max-w-2xl mx-auto mb-12 text-xl md:text-2xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Servicios de edición de video premium para creadores y empresas que buscan destacar con contenido de calidad cinematográfica
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={() => scrollToSection("#portfolio")}
              className="flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
            >
              <Play size={20} className="transition-transform group-hover:scale-110" />
              Ver nuestro trabajo
            </button>
            
            <button
              onClick={() => scrollToSection("#contact")}
              className="flex items-center gap-2 px-8 py-4 text-lg font-medium transition-all duration-300 border-2 rounded-lg border-border text-foreground bg-surface hover:bg-muted/20 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
            >
              Contactar ahora
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-16 text-center md:grid-cols-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Proyectos completados</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">8</div>
              <div className="text-muted-foreground">Años de experiencia</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Clientes satisfechos</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">24h</div>
              <div className="text-muted-foreground">Entrega express</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <div className="flex justify-center w-6 h-10 border-2 rounded-full border-primary">
          <div className="w-1 h-3 mt-2 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;