
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Molienda personalizada",
    description: "Llevamos tus aceitunas, las molemos y envasamos tu propio aceite con nuestra tecnología de última generación.",
    icon: "🫒",
  },
  {
    id: 2,
    title: "Visitas guiadas",
    description: "Conoce el proceso de elaboración del aceite de oliva desde la recogida hasta el envasado con nuestros expertos.",
    icon: "🚶‍♂️",
  },
  {
    id: 3,
    title: "Catas de aceite",
    description: "Aprende a distinguir los diferentes tipos de aceite, sus aromas y sabores en nuestras sesiones de cata.",
    icon: "🍽️",
  },
  {
    id: 4,
    title: "Asesoramiento agrícola",
    description: "Ofrecemos a nuestros socios orientación técnica para mejorar la producción y calidad de sus olivares.",
    icon: "🌱",
  },
  {
    id: 5,
    title: "Tienda online",
    description: "Compra nuestros productos directamente desde nuestra web y recíbelos en tu domicilio con envío gratuito.",
    icon: "🛒",
  },
  {
    id: 6,
    title: "Eventos y workshops",
    description: "Organizamos talleres y eventos relacionados con la cultura del aceite de oliva y la gastronomía.",
    icon: "📅",
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <Card className="h-full hover:shadow-md transition-shadow">
    <CardHeader className="pb-2">
      <span className="text-4xl mb-2">{service.icon}</span>
      <CardTitle className="text-xl text-olive-800">{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-olive-700">{service.description}</p>
    </CardContent>
  </Card>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
          <p className="text-lg text-olive-700">
            Ofrecemos una amplia gama de servicios para nuestros socios, clientes y visitantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
