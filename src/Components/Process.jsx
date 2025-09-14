import { MessageSquare, FileText, Video, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Consulta y Planificación",
      description: "Analizamos tus necesidades, objetivos y visión creativa. Definimos el alcance del proyecto y establecemos un cronograma detallado.",
      details: ["Reunión inicial", "Análisis de requerimientos", "Propuesta personalizada", "Timeline del proyecto"]
    },
    {
      icon: FileText,
      number: "02",
      title: "Preproducción y Guión",
      description: "Desarrollamos el concepto creativo, storyboard y guión técnico. Preparamos todos los elementos necesarios para la producción.",
      details: ["Desarrollo conceptual", "Storyboard visual", "Guión técnico", "Preparación de assets"]
    },
    {
      icon: Video,
      number: "03",
      title: "Producción y Edición",
      description: "Ejecutamos la edición profesional utilizando las mejores herramientas y técnicas. Aplicamos efectos, corrección de color y audio.",
      details: ["Edición principal", "Efectos visuales", "Corrección de color", "Masterización de audio"]
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Revisión y Entrega",
      description: "Presentamos el resultado final, incorporamos feedback y entregamos en todos los formatos necesarios para tu proyecto.",
      details: ["Preview del proyecto", "Rondas de revisión", "Ajustes finales", "Entrega multi-formato"]
    }
  ];

  return (
    <section id="process" className="py-24 bg-surface">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="p-6 text-4xl font-bold md:text-5xl font-heading gradient-text">
            Nuestro Proceso
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            Un enfoque estructurado y profesional que garantiza resultados excepcionales 
            en cada proyecto de edición de video
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 hidden w-1 transform -translate-x-1/2 lg:block left-1/2 bg-gradient-to-b from-primary via-primary/50 to-primary" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="p-8 border bg-gradient-surface rounded-2xl border-border hover-lift group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-16 h-16 transition-colors bg-primary/20 rounded-2xl group-hover:bg-primary/30">
                          <Icon size={32} className="text-primary" />
                        </div>
                        <div className="text-6xl font-bold font-heading text-primary/20">
                          {step.number}
                        </div>
                      </div>
                      
                      <h3 className="mb-4 text-2xl font-bold font-heading text-foreground">
                        {step.title}
                      </h3>
                      
                      <p className="mb-6 leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute hidden w-6 h-6 transform -translate-x-1/2 border-4 rounded-full lg:block left-1/2 bg-primary border-background shadow-glow animate-glow-pulse" />

                  {/* Visual element */}
                  <div className={`lg:w-1/2 ${isEven ? "lg:pl-12" : "lg:pr-12"} mt-8 lg:mt-0`}>
                    <div className="relative">
                      <div className="w-full h-64 overflow-hidden border bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-border">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="text-4xl font-bold opacity-50 font-heading text-primary">
                            {step.number}
                          </div>
                          <div className="font-medium text-foreground">
                            {step.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 border bg-gradient-surface rounded-2xl border-border">
            <CheckCircle size={24} className="text-primary" />
            <span className="font-medium text-foreground">
              Proceso probado en más de 500 proyectos exitosos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;