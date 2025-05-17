
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Mill from "@/components/Mill";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const location = useLocation();

  // Handle scrolling to sections when navigating from other pages
  useEffect(() => {
    if (location.state && location.state.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the page has loaded
      }
    }
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>Oleomontes | Aceite Virgen Extra de Jaén</title>
        <meta name="description" content="Empresa local dedicada a la producción de aceite de oliva virgen extra, con venta directa desde Torre-Cardela, Jaén. Calidad superior garantizada." />
        <meta name="keywords" content="aceite de oliva, virgen extra, Jaén, almazara, aceite premium, Torre-Cardela, fábrica de aceite, aceite, almendras" />
        <link rel="canonical" href="https://oleomontes.com" />
      </Helmet>
      <div className="min-h-screen">
        <header>
          <Navigation />
        </header>
        <main>
          <Hero />
          <About />
          <Products />
          <Services />
          <Mill />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
