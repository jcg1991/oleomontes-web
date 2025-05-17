
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 bg-olive-800 text-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cream-50">Contacto</h2>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
          <p className="text-lg text-cream-100">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </div>

        {/* Banner de información de contacto horizontal */}
        <div className="bg-olive-700 rounded-lg p-6 mb-12">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="px-4 text-center">
              <h4 className="font-bold text-lg text-cream-100">Dirección</h4>
              <p className="text-cream-200">Carretera Úbeda - Moreda Km71</p>
              <p className="text-cream-200">18563 Torre Cardela, Granada, España</p>
            </div>
            <div className="px-4 text-center">
              <h4 className="font-bold text-lg text-cream-100">Teléfono</h4>
              <p className="text-cream-200">682 84 76 22 / 958 34 22 82</p>
            </div>
            <div className="px-4 text-center">
              <h4 className="font-bold text-lg text-cream-100">Email</h4>
              <p className="text-cream-200">info@oleomontes.com</p>
            </div>
            <div className="px-4 text-center">
              <h4 className="font-bold text-lg text-cream-100">Horario</h4>
              <p className="text-cream-200">Lunes a Viernes: 9:00 - 14:00 / 16:00 - 19:00</p>
              <p className="text-cream-200">Sábados: 9:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cream-50 text-center">     Mapa de ubicación</h3>
            {/* Google Maps iframe con la ubicación correcta de Oleomontes */}
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12732.445483025472!2d-3.356635371582036!3d37.49081767560413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6e3dbb5956288f%3A0x945f016423d6a2d0!2sOleomontes!5e0!3m2!1sen!2ses!4v1716055082854!5m2!1sen!2ses" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-cream-50 text-center">Síguenos</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-cream-100 hover:text-cream-50 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-cream-100 hover:text-cream-50 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-cream-100 hover:text-cream-50 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-cream-50 text-center">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-cream-100">Nombre</label>
                  <Input id="name" type="text" className="bg-olive-700 border-olive-600 text-cream-50 placeholder:text-cream-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-cream-100">Email</label>
                  <Input id="email" type="email" className="bg-olive-700 border-olive-600 text-cream-50 placeholder:text-cream-300" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 text-cream-100">Asunto</label>
                <Input id="subject" type="text" className="bg-olive-700 border-olive-600 text-cream-50 placeholder:text-cream-300" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-cream-100">Mensaje</label>
                <Textarea id="message" rows={5} className="bg-olive-700 border-olive-600 text-cream-50 placeholder:text-cream-300" />
              </div>
              <Button type="submit" className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white" size="lg">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
