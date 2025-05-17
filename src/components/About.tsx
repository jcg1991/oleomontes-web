
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">Nuestra Cooperativa</h2>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
          <p className="text-lg text-olive-700">
            Desde 2015, nuestra cooperativa ha sido el corazón de la producción de aceite en Torre Cardela
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-olive-800">Tradición y Compromiso</h3>
            <p className="mb-4 text-olive-700">
              Fundada por un grupo de familias olivareras comprometidas con la tierra y la calidad, 
              Oleomontes ha crecido manteniendo los valores tradicionales mientras adoptamos técnicas modernas 
              de producción sostenible.
            </p>
            <p className="mb-4 text-olive-700">
              Trabajamos con productores locales de Torre Cardela, Granada, que cultivan sus olivos con métodos respetuosos 
              con el medio ambiente, asegurando un aceite de la más alta calidad.
            </p>
            <p className="mb-6 text-olive-700">
              Nuestro compromiso es ofrecer un aceite de oliva virgen extra que conserve todas sus 
              propiedades organolépticas y nutricionales, del campo a tu mesa.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              alt="Paisaje de olivares en Torre Cardela, Granada" 
              className="rounded-lg shadow-lg w-full h-auto max-h-[500px] object-cover" 
              src="https://i.ytimg.com/vi/PTMX38eOh2U/sddefault.jpg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
