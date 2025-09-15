import { Monitor, Cpu, Camera, Headphones } from "lucide-react";
import Davinci from '../assets/DaVinci.jfif'

const Technologies = () => {
  const software = [
    {
      name: "Adobe Premiere Pro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
      description: "Edición profesional de video",
    },
    {
      name: "After Effects",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg", 
      description: "Motion graphics y VFX",
    },
    {
      name: "DaVinci Resolve",
      logo: Davinci,
      description: "Corrección de color avanzada",
    },
  ];

  const equipment = [
    {
      icon: Monitor,
      title: "Monitores Profesionales",
      description: "Pantallas 4K calibradas para color accuracy perfecto",
      specs: ["LG UltraFine 4K", "Calibración HDR", "100% sRGB"]
    },
    {
      icon: Cpu,
      title: "Workstations de Alta Gama",
      description: "Equipos optimizados para renderizado y edición compleja",
      specs: ["Intel i9 / AMD Ryzen 9", "64GB RAM", "RTX 4080/4090"]
    },
    {
      icon: Camera,
      title: "Equipment de Captura",
      description: "Dispositivos profesionales para input de máxima calidad",
      specs: ["Blackmagic Design", "AJA Video Systems", "Atomos Recorders"]
    },
    {
      icon: Headphones,
      title: "Audio Profesional",
      description: "Monitoreo y processing de audio de nivel broadcast",
      specs: ["Monitores de estudio", "Audio interfaces", "Processing plugins"]
    }
  ];

  return (
    <section id="technologies" className="py-24 bg-surface">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="p-6 text-4xl font-bold md:text-5xl font-heading gradient-text">
            Tecnología de Vanguardia
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            Utilizamos las herramientas más avanzadas de la industria para garantizar 
            resultados de la más alta calidad profesional
          </p>
        </div>

        {/* Software Section */}
        <div className="justify-center mb-20">
          <h3 className="mb-12 text-3xl font-bold text-center font-heading text-foreground">
            Software Profesional
          </h3>
          
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-3">
            {software.map((tool, index) => (
              <div
                key={tool.name}
                className={`group text-center p-8 bg-gradient-surface rounded-2xl border border-border hover-lift animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 p-4 mx-auto mb-6 transition-colors bg-background/50 rounded-2xl group-hover:bg-primary/10">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h4 className="mb-2 text-lg font-bold transition-colors font-heading text-foreground group-hover:text-primary">
                  {tool.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Section */}
        <div>
          <h3 className="mb-12 text-3xl font-bold text-center font-heading text-foreground">
            Equipamiento Profesional
          </h3>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group p-8 bg-gradient-surface rounded-2xl border border-border hover-lift animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors bg-primary/20 rounded-2xl group-hover:bg-primary/30">
                      <Icon size={32} className="text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="mb-3 text-2xl font-bold transition-colors font-heading text-foreground group-hover:text-primary">
                        {item.title}
                      </h4>
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.specs.map((spec, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="p-6 border bg-gradient-surface rounded-2xl border-border">
              <div className="mb-2 text-3xl font-bold text-primary">100TB+</div>
              <div className="text-muted-foreground">Capacidad de almacenamiento</div>
            </div>
            <div className="p-6 border bg-gradient-surface rounded-2xl border-border">
              <div className="mb-2 text-3xl font-bold text-primary">8K</div>
              <div className="text-muted-foreground">Resolución máxima</div>
            </div>
            <div className="p-6 border bg-gradient-surface rounded-2xl border-border">
              <div className="mb-2 text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Disponibilidad</div>
            </div>
            <div className="p-6 border bg-gradient-surface rounded-2xl border-border">
              <div className="mb-2 text-3xl font-bold text-primary">99.9%</div>
              <div className="text-muted-foreground">Uptime garantizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;