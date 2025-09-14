import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-background">
      <div className="text-center">
        <div className="mb-8">
          <div className="font-bold text-9xl text-primary/20">404</div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-heading text-foreground">
            Página no encontrada
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Lo sentimos, la página que estás buscando no existe.
          </p>
        </div>
        
        <a
          href="/"
          className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
        >
          <Home size={20} />
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;