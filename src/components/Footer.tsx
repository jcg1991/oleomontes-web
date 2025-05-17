
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1); // Remove the # prefix
      
      // Check if we're already on the home page
      if (location.pathname === '/') {
        // We're on the home page, just scroll
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're on another page, navigate to home with hash
        navigate('/', { state: { scrollToId: targetId } });
      }
    }
  };
  
  return <footer className="bg-olive-900 text-cream-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-cream-50">Oleomontes</h3>
            <p className="mb-4">
              Nuestra cooperativa lleva desde 2015 produciendo el mejor aceite de oliva 
              virgen extra, combinando tradición e innovación en Torre Cardela, Granada.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cream-50">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => handleNavClick('#home', e)} className="hover:text-cream-50 transition-colors">Inicio</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick('#about', e)} className="hover:text-cream-50 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick('#products', e)} className="hover:text-cream-50 transition-colors">Productos</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick('#services', e)} className="hover:text-cream-50 transition-colors">Servicios</a></li>
              <li><a href="#mill" onClick={(e) => handleNavClick('#mill', e)} className="hover:text-cream-50 transition-colors">Nuestra Almazara</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick('#contact', e)} className="hover:text-cream-50 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cream-50">Productos</h3>
            <ul className="space-y-2">
              <li><Link to="/productos/1" className="hover:text-cream-50 transition-colors">Aceite de Oliva</Link></li>
              <li><Link to="/productos/3" className="hover:text-cream-50 transition-colors">Almendras</Link></li>
              <li><a href="#" className="hover:text-cream-50 transition-colors">Cereales</a></li>
              <li><a href="#" className="hover:text-cream-50 transition-colors">Piensos</a></li>
              <li><a href="#" className="hover:text-cream-50 transition-colors">Materiales para Recolecta</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cream-50">Contacto</h3>
            <address className="not-italic space-y-2">
              <p>Carretera Úbeda - Moreda Km71</p>
              <p>18563 Torre Cardela, Granada</p>
              <p>Teléfono: 682 84 76 22 / 958 34 22 82</p>
              <p>Email: info@oleomontes.com</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-olive-700 text-center">
          <p>&copy; 2015 Oleomontes. Todos los derechos reservados.</p>
        </div>

        <div className="mt-8 flex justify-center">
          
        </div>
      </div>
    </footer>;
};
export default Footer;
