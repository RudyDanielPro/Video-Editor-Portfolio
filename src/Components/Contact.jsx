import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Mostrar notificación personalizada
      const toast = document.createElement('div');
      toast.className = 'fixed z-50 px-6 py-3 text-white bg-green-500 rounded-lg shadow-lg top-4 right-4 animate-fade-in-up';
      toast.innerHTML = `
        <div class="flex items-center gap-2">
          <CheckCircle size={20} />
          <div>
            <p class="font-bold">¡Mensaje enviado!</p>
            <p class="text-sm">Nos pondremos en contacto contigo en las próximas 24 horas.</p>
          </div>
        </div>
      `;
      document.body.appendChild(toast);
      
      // Remover la notificación después de 5 segundos
      setTimeout(() => {
        toast.remove();
      }, 5000);
      
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "marvincumbrera7@gmail.com",
      description: "Respuesta en 24 horas"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+53 58986988",
      description: "Lun - Vie: 9:00 - 19:00"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "La Habana, Cuba",
      description: "También trabajamos remotamente"
    },
    {
      icon: Clock,
      title: "Horario",
      value: "09:00 - 19:00",
      description: "Zona horaria CET/CEST"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="p-6 text-4xl font-bold md:text-5xl font-heading gradient-text">
            Hablemos de tu proyecto
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            ¿Tienes una idea que quieres convertir en realidad? Cuéntanos sobre tu proyecto 
            y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="p-8 border bg-gradient-surface rounded-3xl border-border shadow-medium">
              <h3 className="mb-6 text-2xl font-bold font-heading text-foreground">
                Solicitar Presupuesto
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-foreground">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="w-full px-4 py-3 transition-colors duration-300 border rounded-lg bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Ej. María González"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="w-full px-4 py-3 transition-colors duration-300 border rounded-lg bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="maria@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-foreground">
                      Tipo de proyecto *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => handleInputChange("projectType", e.target.value)}
                      className="w-full px-4 py-3 transition-colors duration-300 border rounded-lg bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    >
                      <option value="">Selecciona el tipo</option>
                      <option value="corporativo">Video Corporativo</option>
                      <option value="comercial">Comercial/Publicitario</option>
                      <option value="redes">Contenido para Redes</option>
                      <option value="documental">Documental</option>
                      <option value="evento">Video de Evento</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-foreground">
                      Presupuesto estimado
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange("budget", e.target.value)}
                      className="w-full px-4 py-3 transition-colors duration-300 border rounded-lg bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Rango de presupuesto</option>
                      <option value="500-1000">€500 - €1.000</option>
                      <option value="1000-2500">€1.000 - €2.500</option>
                      <option value="2500-5000">€2.500 - €5.000</option>
                      <option value="5000-10000">€5.000 - €10.000</option>
                      <option value="10000+">€10.000+</option>
                      <option value="consultar">A consultar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-foreground">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 min-h-[120px]"
                    placeholder="Describe tu proyecto, objetivos, público objetivo, fechas importantes, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full gap-2 px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar solicitud
                    </>
                  )}
                </button>
              </form>

              <div className="p-4 mt-6 border rounded-lg bg-primary/10 border-primary/20">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle size={16} />
                  <span className="font-medium">Respuesta garantizada en 24 horas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className={`flex items-start gap-6 p-6 bg-gradient-surface rounded-2xl border border-border hover-lift animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 bg-primary/20 rounded-2xl">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-bold font-heading text-foreground">
                        {info.title}
                      </h4>
                      <p className="mb-1 text-lg font-medium text-primary">
                        {info.value}
                      </p>
                      <p className="text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="relative h-64 mt-8 overflow-hidden border bg-gradient-surface rounded-2xl border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="mb-2 text-xl font-bold font-heading text-foreground">
                    Estamos en La Habana, Cuba
                  </h4>
                  <p className="text-muted-foreground">
                    También trabajamos con clientes de toda España y Europa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h3 className="mb-12 text-3xl font-bold text-center font-heading text-foreground">
            Preguntas Frecuentes
          </h3>
          
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            <div className="p-6 border bg-gradient-surface rounded-2xl border-border">
              <h4 className="mb-3 text-lg font-bold font-heading text-foreground">
                ¿Cuánto tiempo toma un proyecto?
              </h4>
              <p className="text-muted-foreground">
                Depende de la complejidad, pero típicamente entre 1-3 semanas. 
                Ofrecemos entregas express en 24-48 horas para proyectos urgentes.
              </p>
            </div>
            
            <div className="p-6 border bg-gradient-surface rounded-2xl border-border">
              <h4 className="mb-3 text-lg font-bold font-heading text-foreground">
                ¿Trabajáis con material grabado por el cliente?
              </h4>
              <p className="text-muted-foreground">
                Sí, aceptamos material en cualquier formato. También ofrecemos 
                servicios de grabación profesional si lo necesitas.
              </p>
            </div>
            
            <div className="p-6 border bg-gradient-surface rounded-2xl border-border">
              <h4 className="mb-3 text-lg font-bold font-heading text-foreground">
                ¿Qué incluye el servicio de edición?
              </h4>
              <p className="text-muted-foreground">
                Edición completa, corrección de color, audio profesional, 
                efectos visuales básicos, y hasta 3 rondas de revisiones.
              </p>
            </div>
            
            <div className="p-6 border bg-gradient-surface rounded-2xl border-border">
              <h4 className="mb-3 text-lg font-bold font-heading text-foreground">
                ¿En qué formatos entregáis?
              </h4>
              <p className="text-muted-foreground">
                Entregamos en cualquier formato que necesites: MP4, MOV, 
                diferentes resoluciones y optimizaciones para cada plataforma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;