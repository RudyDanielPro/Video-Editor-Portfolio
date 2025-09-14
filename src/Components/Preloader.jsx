import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png" 

const Preloader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeout(() => {
            onLoadComplete();
          }, 500);
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8 space-x-2">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl animate-glow-pulse">
            <img src={Icon} alt="Icono de marvin editions"/>
          </div>
          <span className="text-4xl font-bold font-heading gradient-text">
            Marvin Editions
          </span>
        </div>

        {/* Loading bar */}
        <div className="max-w-xs mx-auto w-80">
          <div className="flex justify-between mb-2 text-sm text-muted-foreground">
            <span>Cargando experiencia premium</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 mb-4 rounded-full bg-surface">
            <div
              className="h-2 transition-all duration-300 rounded-full bg-gradient-primary shadow-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">
            {progress < 30 && "Preparando herramientas profesionales..."}
            {progress >= 30 && progress < 70 && "Cargando proyectos destacados..."}
            {progress >= 70 && progress < 100 && "Finalizando configuración..."}
            {progress >= 100 && "¡Listo para crear!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;