import { useState } from "react";
import { Play, ExternalLink, X } from "lucide-react";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";
import portfolio5 from "../assets/portfolio-5.jpg";
import portfolio6 from "../assets/portfolio-6.jpg";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Campaña Comercial Premium",
      category: "commercial",
      image: portfolio1,
      description: "Producción publicitaria de alta gama para marca de lujo, con efectos visuales cinematográficos y corrección de color profesional.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Luxury Brand Co.",
      duration: "60 segundos",
      year: "2024"
    },
    {
      id: 2,
      title: "Video Corporativo Ejecutivo",
      category: "corporate",
      image: portfolio2,
      description: "Presentación corporativa para empresa multinacional, integrando motion graphics y testimonios ejecutivos.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Global Corp Inc.",
      duration: "3 minutos",
      year: "2024"
    },
    {
      id: 3,
      title: "Contenido Viral para Redes",
      category: "social",
      image: portfolio3,
      description: "Serie de videos para campaña en redes sociales que alcanzó más de 2M de reproducciones en TikTok e Instagram.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Influencer Marketing",
      duration: "30 segundos",
      year: "2024"
    },
    {
      id: 4,
      title: "Documental Independiente",
      category: "documentary",
      image: portfolio4,
      description: "Edición completa de documental sobre emprendimiento sostenible, ganador de festival de cine internacional.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Independent Films",
      duration: "90 minutos",
      year: "2023"
    },
    {
      id: 5,
      title: "Spot Publicitario TV",
      category: "commercial",
      image: portfolio5,
      description: "Comercial para televisión nacional con producción completa en estudio, iluminación profesional y post-producción avanzada.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "TV Network",
      duration: "30 segundos",
      year: "2024"
    },
    {
      id: 6,
      title: "Motion Graphics Showcase",
      category: "motion",
      image: portfolio6,
      description: "Proyecto de motion graphics y efectos visuales para presentación corporativa con animaciones 3D complejas.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      client: "Tech Innovation",
      duration: "2 minutos",
      year: "2024"
    },
  ];

  const filters = [
    { id: "all", label: "Todos los proyectos" },
    { id: "commercial", label: "Comerciales" },
    { id: "corporate", label: "Corporativo" },
    { id: "social", label: "Redes Sociales" },
    { id: "documentary", label: "Documentales" },
    { id: "motion", label: "Motion Graphics" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl font-heading gradient-text">
            Nuestro Portafolio
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-xl text-muted-foreground">
            Una selección de nuestros trabajos más destacados que demuestran 
            nuestra experiencia y calidad en edición de video profesional
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-white shadow-glow"
                    : "bg-surface text-muted-foreground hover:text-foreground hover:bg-surface-light"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-surface border border-border hover-lift cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/90 shadow-glow">
                    <Play size={32} className="ml-1 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold transition-colors font-heading text-foreground group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-sm font-medium rounded-full text-primary bg-primary/10">
                    {filters.find(f => f.id === project.category)?.label || project.category}
                  </span>
                  <ExternalLink size={20} className="transition-colors text-muted-foreground group-hover:text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-lg">
            <div className="relative w-full max-w-4xl border bg-surface rounded-2xl border-border shadow-strong animate-scale-in">
              <button
                onClick={closeModal}
                className="absolute z-10 flex items-center justify-center w-10 h-10 transition-colors rounded-full top-4 right-4 bg-background/80 text-foreground hover:bg-background"
              >
                <X size={20} />
              </button>

              <div className="overflow-hidden aspect-video rounded-t-2xl">
                <iframe
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-8">
                <h3 className="mb-4 text-3xl font-bold font-heading gradient-text">
                  {selectedProject.title}
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                  {selectedProject.description}
                </p>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Cliente</h4>
                    <p className="text-muted-foreground">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Duración</h4>
                    <p className="text-muted-foreground">{selectedProject.duration}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Año</h4>
                    <p className="text-muted-foreground">{selectedProject.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;