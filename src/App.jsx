import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./Components/Preloader";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Process from "./Components/Process";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Technologies from "./Components/Technologies";
import NotFound from "./Pages/NotFound";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      {isLoading ? (
        <Preloader onLoadComplete={handleLoadComplete} />
      ) : (
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-background text-foreground">
              <Header />
              <main>
                <Hero />
                <Services />
                <Portfolio />
                <Process />
                <Testimonials />
                <Technologies />
                <About />
                <Contact />
              </main>
              <Footer />
            </div>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;