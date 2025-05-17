
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      <div className="absolute inset-0 hero-mask">
        <img 
          src="/uploads/641b74c9-3c0f-4f0d-908d-df62f6fe7741.png" 
          alt="Almazara Oleomontes - Aceite de oliva virgen extra en Torre-Cardela" 
          className="w-full h-full object-cover transform scale-[1.01]" 
          style={{
            imageRendering: "auto",
            backfaceVisibility: "hidden"
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-cream-50 py-0 text-left my-[170px]">
            Aceite de oliva directo del productor
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream-50">Oleomontes: Tradición y calidad desde Torre-Cardela</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-olive-600 hover:bg-olive-700 text-white font-medium" 
              onClick={() => {
                const element = document.getElementById('products');
                if (element) element.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              aria-label="Ver nuestros productos"
            >
              Nuestros Productos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 border-cream-50" 
              onClick={() => {
                const element = document.getElementById('mill');
                if (element) element.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              aria-label="Conoce nuestra almazara"
            >
              Conócenos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
