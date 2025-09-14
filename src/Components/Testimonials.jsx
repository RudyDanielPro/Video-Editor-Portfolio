import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      company: "CEO, TechInnovate",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b672?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "CineEdit Pro transformó completamente nuestra comunicación corporativa. Sus videos han elevado significativamente el engagement de nuestra audiencia y han contribuido directamente al crecimiento de nuestro negocio.",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      company: "Director Creativo, Brand Studio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "La calidad cinematográfica de sus trabajos es impresionante. Cada proyecto es tratado con un nivel de detalle y profesionalismo que supera las expectativas. Son nuestro socio creativo de confianza.",
    },
    {
      id: 3,
      name: "Ana Martín",
      company: "Influencer & Content Creator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Mi contenido para redes sociales alcanzó un nuevo nivel gracias a CineEdit Pro. Sus videos me ayudaron a conseguir colaboraciones con marcas importantes y a triplicar mi audiencia en 6 meses.",
    },
    {
      id: 4,
      name: "Roberto Silva",
      company: "Productor Ejecutivo, Film Arts",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Hemos trabajado con muchos editores, pero la visión artística y técnica de CineEdit Pro es excepcional. Su trabajo en nuestro último documental fue fundamental para ganar el premio en el festival internacional.",
    },
    {
      id: 5,
      name: "Laura Fernández",
      company: "Marketing Manager, Global Retail",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Los videos comerciales que produjeron para nuestra campaña navideña generaron un 300% más de conversiones que el año anterior. Su enfoque estratégico y creativo es exactamente lo que necesitábamos.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="p-6 text-4xl font-bold md:text-5xl font-heading gradient-text">
            Lo que dicen nuestros clientes
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            La satisfacción de nuestros clientes es nuestro mayor logro. 
            Estas son sus experiencias trabajando con nosotros
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main testimonial */}
          <div className="relative p-12 border bg-gradient-surface rounded-3xl border-border shadow-medium animate-scale-in">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote size={48} />
            </div>
            
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="text-center lg:w-1/3">
                <div className="relative inline-block">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="object-cover w-32 h-32 border-4 rounded-full border-primary/20"
                  />
                  <div className="absolute flex items-center justify-center w-12 h-12 rounded-full -bottom-2 -right-2 bg-primary">
                    <Quote size={20} className="text-white" />
                  </div>
                </div>
                
                <h3 className="mt-6 mb-2 text-2xl font-bold font-heading text-foreground">
                  {currentTestimonial.name}
                </h3>
                <p className="mb-4 font-medium text-primary">
                  {currentTestimonial.company}
                </p>
                
                <div className="flex justify-center gap-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <blockquote className="text-xl font-medium leading-relaxed lg:text-2xl text-foreground">
                  "{currentTestimonial.text}"
                </blockquote>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 transition-colors rounded-full hover:bg-primary/10"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary scale-125"
                        : "bg-muted hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 transition-colors rounded-full hover:bg-primary/10"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-16 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">4.9/5</div>
              <div className="text-muted-foreground">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Reseñas positivas</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">85%</div>
              <div className="text-muted-foreground">Clientes recurrentes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;