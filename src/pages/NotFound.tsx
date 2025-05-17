
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página no encontrada - Error 404 | Oleomontes</title>
        <meta name="description" content="Lo sentimos, la página que estás buscando no existe o ha sido movida." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <header>
          <Navigation />
        </header>
        <main className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="text-center max-w-md px-4">
            <h1 className="text-4xl font-bold mb-4 text-olive-800">404</h1>
            <p className="text-xl text-gray-600 mb-6">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
            <Button asChild className="bg-olive-700 hover:bg-olive-600">
              <a href="/">Volver al inicio</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
