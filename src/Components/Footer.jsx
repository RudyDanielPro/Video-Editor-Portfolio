import { Youtube, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Portafolio", href: "#portfolio" },
    { label: "Proceso", href: "#process" },
    { label: "Acerca de", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];

  const services = [
    "Videos Corporativos",
    "Comerciales",
    "Contenido para Redes",
    "Corrección de Color",
    "Motion Graphics",
    "Documentales",
  ];

  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-500" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-background border-border">
      <div className="container px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
                <span className="text-xl font-bold text-white">C</span>
              </div>
              <span className="text-2xl font-bold font-heading gradient-text">
                Marvin Editions
              </span>
            </div>
            
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Elevamos tu contenido visual al nivel profesional con servicios 
              de edición de video premium para creadores y empresas.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>marvincumbrera7@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+53 58986988</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>La Habana, Cuba</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold font-heading text-foreground">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="transition-colors duration-300 text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-bold font-heading text-foreground">
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="transition-colors duration-300 text-muted-foreground hover:text-primary"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-6 text-lg font-bold font-heading text-foreground">
              Síguenos
            </h3>
            
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-surface rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold text-foreground">Horario de Atención</h4>
                <p className="text-sm text-muted-foreground">
                  Lunes - Viernes: 09:00 - 19:00<br />
                  Sábados: 10:00 - 14:00<br />
                  Domingos: Cerrado
                </p>
              </div>
              
              <div>
                <h4 className="mb-2 font-semibold text-foreground">Respuesta</h4>
                <p className="text-sm text-muted-foreground">
                  Email: Máximo 24 horas<br />
                  WhatsApp: En horario comercial
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 border-t border-border">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Marvin Editions. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <button
                onClick={() => scrollToSection("#contact")}
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                Términos de Servicio
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                Cookies
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-xs border rounded-full text-muted-foreground bg-surface border-border">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Sistema operativo - Todos los servicios funcionando correctamente</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;