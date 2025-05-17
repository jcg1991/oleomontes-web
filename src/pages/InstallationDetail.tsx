
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Use the same data structure as in Mill.tsx
const millImages = [
  {
    category: "almazara",
    title: "Almazara",
    seoTitle: "Almazara Oleomontes - Instalaciones de producción de aceite",
    seoDescription: "Visita nuestra almazara en Torre-Cardela, Jaén. Modernas instalaciones de producción de aceite de oliva virgen extra.",
    thumbnail: "/uploads/d18b3667-9988-4c20-9a98-c124f99ac286.png",
    images: [
      {
        url: "/uploads/5edaea22-bb42-4540-acb3-196d44236286.png",
        caption: "Molinos modernos de acero inoxidable",
        alt: "Molinos modernos de acero inoxidable en la almazara Oleomontes"
      },
      {
        url: "/uploads/5c759243-6907-495e-b0b0-2f63dc12aeca.png",
        caption: "Zona de recepción de aceitunas",
        alt: "Zona de recepción y procesamiento de aceitunas en Oleomontes"
      },
      {
        url: "/uploads/a67cf3fb-835f-46a5-aecd-25be23d17ee5.png",
        caption: "Línea de embotellado",
        alt: "Línea de embotellado automatizada para aceite de oliva virgen extra"
      },
      {
        url: "/uploads/945bdda3-12b7-41a8-8c30-81fd989d0d44.png",
        caption: "Depósitos de almacenamiento",
        alt: "Depósitos de acero inoxidable para almacenamiento de aceite de oliva"
      },
    ]
  },
  {
    category: "olivar",
    title: "Olivar",
    seoTitle: "Olivares Oleomontes - Campos de olivos en Torre-Cardela",
    seoDescription: "Descubre nuestros olivares en Torre-Cardela, Jaén. Cultivo tradicional y respetuoso con el medio ambiente.",
    thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Olivares centenarios",
        alt: "Olivares centenarios de Oleomontes en Torre-Cardela"
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Paisaje de olivares al atardecer",
        alt: "Hermoso paisaje de olivares de Torre-Cardela al atardecer"
      },
      {
        url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Vista panorámica de nuestros campos",
        alt: "Vista panorámica de los campos de olivos de Oleomontes"
      },
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Recogida tradicional de aceitunas",
        alt: "Proceso tradicional de recogida de aceitunas en Oleomontes"
      },
    ]
  },
  {
    category: "proceso",
    title: "Proceso",
    seoTitle: "Proceso de producción - Aceite de oliva virgen extra",
    seoDescription: "Conoce nuestro proceso de elaboración de aceite de oliva virgen extra. Desde la aceituna hasta la botella, calidad garantizada.",
    thumbnail: "/uploads/45f24a7d-405b-4d64-a0a9-5c8234d42089.png",
    images: [
      {
        url: "/uploads/f2d8f68f-996a-4f82-851a-79adfbaf60da.png",
        caption: "Separación del aceite",
        alt: "Proceso de separación del aceite en la almazara Oleomontes"
      },
      {
        url: "/uploads/eb4c4fe8-7981-44aa-ba46-c0416965a380.png",
        caption: "Control de calidad",
        alt: "Control de calidad del aceite de oliva virgen extra Oleomontes"
      },
      {
        url: "/uploads/f43e4bf9-8caf-45c8-b7d5-aa08494b4bfe.png",
        caption: "Filtrado del aceite",
        alt: "Proceso de filtrado del aceite de oliva en Oleomontes"
      },
      {
        url: "/uploads/c386f1c8-b693-4745-8893-949314fc86b7.png",
        caption: "Embotellado",
        alt: "Línea de embotellado de aceite de oliva virgen extra Oleomontes"
      },
    ]
  }
];

const InstallationDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const categoryData = millImages.find(item => item.category === categoryId);
  const navigate = useNavigate();
  
  // Scroll to the top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate('/', { state: { scrollToId: 'mill' } });
  };

  if (!categoryData) {
    return (
      <>
        <Helmet>
          <title>Instalación no encontrada - Oleomontes</title>
          <meta name="description" content="Lo sentimos, la instalación que buscas no está disponible." />
          <meta name="robots" content="noindex" />
        </Helmet>
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold">Categoría no encontrada</h2>
          <Link to="/" className="mt-4 inline-block text-terracotta-500 hover:text-terracotta-600">
            Volver a la página principal
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{categoryData.seoTitle || `${categoryData.title} - Instalaciones de Oleomontes`}</title>
        <meta name="description" content={categoryData.seoDescription || `Conoce nuestras instalaciones de ${categoryData.title.toLowerCase()} en Torre-Cardela, Jaén.`} />
        <meta name="keywords" content={`almazara, instalaciones, ${categoryData.title.toLowerCase()}, aceite de oliva, Torre-Cardela, Jaén, proceso de producción`} />
        <link rel="canonical" href={`https://oleomontes.com/instalaciones/${categoryId}`} />
      </Helmet>
      <Navigation />
      <main>
        <section className="py-20 bg-cream-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <a 
                href="/#mill" 
                className="inline-flex items-center text-terracotta-500 hover:text-terracotta-600 mb-8"
                onClick={handleBackClick}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a instalaciones
              </a>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">{categoryData.title}</h1>
              <div className="w-24 h-1 bg-terracotta-500 mb-12"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryData.images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md">
                    <div className="aspect-video relative">
                      <img 
                        src={image.url} 
                        alt={image.alt || image.caption} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                        <p className="font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InstallationDetail;
