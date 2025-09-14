import { Building2, Video, Smartphone, Palette, Sparkles, Film } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Videos Corporativos",
      description: "Contenido profesional para empresas que buscan comunicar su mensaje con impacto y elegancia.",
    },
    {
      icon: Video,
      title: "Producción de Comerciales",
      description: "Anuncios publicitarios que capturan la atención y generan conversiones efectivas.",
    },
    {
      icon: Smartphone,
      title: "Contenido para Redes Sociales",
      description: "Videos optimizados para YouTube, Instagram, TikTok y todas las plataformas digitales.",
    },
    {
      icon: Palette,
      title: "Corrección de Color",
      description: "Gradación profesional que transforma la estética visual de tus proyectos.",
    },
    {
      icon: Sparkles,
      title: "Motion Graphics y VFX",
      description: "Efectos visuales y animaciones que añaden magia a tu contenido audiovisual.",
    },
    {
      icon: Film,
      title: "Documentales y Largometrajes",
      description: "Edición narrativa compleja para proyectos de larga duración y alto impacto.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl font-heading gradient-text">
            Nuestros Servicios
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            Ofrecemos una gama completa de servicios de edición de video profesional, 
            adaptados a las necesidades específicas de cada proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-gradient-surface p-8 rounded-2xl border border-border hover-lift cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-glow rounded-2xl group-hover:opacity-100 -z-10" />
                
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 transition-colors bg-primary/20 rounded-2xl group-hover:bg-primary/30">
                    <Icon size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="mb-4 text-2xl font-bold transition-colors font-heading text-foreground group-hover:text-primary">
                    {service.title}
                  </h3>
                  
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm tracking-wider uppercase">Y mucho más</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <p className="mt-4 text-muted-foreground">
            ¿No encuentras lo que buscas? Consultanos sobre servicios personalizados
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;