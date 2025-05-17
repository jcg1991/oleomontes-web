
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const millImages = [
  {
    category: "almazara",
    title: "Almazara",
    thumbnail: "/uploads/d18b3667-9988-4c20-9a98-c124f99ac286.png",
    images: [
      {
        url: "/uploads/5edaea22-bb42-4540-acb3-196d44236286.png",
        caption: "Molinos modernos de acero inoxidable"
      },
      {
        url: "/uploads/5c759243-6907-495e-b0b0-2f63dc12aeca.png",
        caption: "Zona de recepción de aceitunas"
      },
      {
        url: "/uploads/a67cf3fb-835f-46a5-aecd-25be23d17ee5.png",
        caption: "Línea de embotellado"
      },
      {
        url: "/uploads/945bdda3-12b7-41a8-8c30-81fd989d0d44.png",
        caption: "Depósitos de almacenamiento"
      },
    ]
  },
  {
    category: "olivar",
    title: "Olivar",
    thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Olivares centenarios"
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Paisaje de olivares al atardecer"
      },
      {
        url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Vista panorámica de nuestros campos"
      },
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Recogida tradicional de aceitunas"
      },
    ]
  },
  {
    category: "proceso",
    title: "Proceso",
    thumbnail: "/uploads/45f24a7d-405b-4d64-a0a9-5c8234d42089.png",
    images: [
      {
        url: "/uploads/f2d8f68f-996a-4f82-851a-79adfbaf60da.png",
        caption: "Separación del aceite"
      },
      {
        url: "/uploads/eb4c4fe8-7981-44aa-ba46-c0416965a380.png",
        caption: "Control de calidad"
      },
      {
        url: "/uploads/f43e4bf9-8caf-45c8-b7d5-aa08494b4bfe.png",
        caption: "Filtrado del aceite"
      },
      {
        url: "/uploads/c386f1c8-b693-4745-8893-949314fc86b7.png",
        caption: "Embotellado"
      },
    ]
  }
];

const Mill = () => {
  return (
    <section id="mill" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">Nuestra Almazara</h2>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
          <p className="text-lg text-olive-700">
            Descubre nuestras instalaciones donde combinamos tradición y tecnología para producir aceite de la máxima calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {millImages.map((category) => (
            <Link 
              to={`/instalaciones/${category.category}`} 
              key={category.category}
              className="block group"
            >
              <div className="overflow-hidden rounded-lg shadow-md aspect-video">
                <div className="relative h-full">
                  <img 
                    src={category.thumbnail} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mill;
