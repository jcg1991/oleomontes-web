
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CartDrawer from "@/components/Cart/CartDrawer";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navLinks = [
    { name: "Inicio", href: "/#home" },
    { name: "Sobre Nosotros", href: "/#about" },
    { name: "Productos", href: "/#products" },
    { name: "Servicios", href: "/#services" },
    { name: "Nuestra Almazara", href: "/#mill" },
    { name: "Socios", href: "/socios" },
    { name: "Contacto", href: "/#contact" }
  ];

  // Handle navigation for both hash links and regular routes from any page
  const handleNavClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    if (href.startsWith('/#')) {
      const targetId = href.substring(2); // Remove the /# prefix
      
      // Check if we're already on the home page
      if (location.pathname === '/') {
        // We're on the home page, just scroll
        const element = document.getElementById(targetId);
        if (element) {
          setIsOpen(false); // Close mobile menu
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're on another page, navigate to home with hash
        setIsOpen(false); // Close mobile menu
        navigate('/', { state: { scrollToId: targetId } });
      }
    } else {
      // For non-hash links (like /socios), navigate to the page
      setIsOpen(false); // Close mobile menu
      navigate(href);
    }
  };
  
  // Handle home navigation when clicking on logo
  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    
    // If we're not on the homepage, navigate to it
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // If we're on the homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };
  
  // Handle scrolling to section when navigating from another page
  useEffect(() => {
    if (location.state && location.state.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the page has loaded
        
        // Clean up the state so we don't scroll again on other navigation actions
        navigate('/', { replace: true, state: {} });
      }
    }
  }, [location.state, navigate]);
  
  return (
    <header className="fixed w-full bg-cream-50/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="/" 
          className="flex items-center gap-2 relative z-50 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src="/uploads/3ab57274-22d8-45ef-a92c-5d4d21c6a1a5.png" alt="Oleomontes Logo" className="h-8" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-olive-800 hover:text-olive-500 font-medium transition-colors"
              onClick={(e) => handleNavClick(link.href, e)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Cart & Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <CartDrawer 
            triggerClassName="flex items-center gap-2 text-olive-800 hover:text-olive-500 transition-colors cursor-pointer" 
            showLabel={true}
          />
        </div>

        {/* Mobile Navigation Button and Cart */}
        <div className="flex items-center space-x-3 md:hidden">
          <CartDrawer className="text-olive-800 relative z-50 bg-white/80 p-1.5 rounded-full" />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
            className="relative z-50 bg-white/80 text-olive-800 rounded-full p-1.5 shadow-sm"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Dropdown from top */}
      <div 
        className={cn(
          "fixed left-0 right-0 z-40 bg-gray-200 shadow-lg transition-all duration-300 ease-in-out md:hidden",
          isOpen 
            ? "top-[3.5rem] max-h-[calc(100vh-3.5rem)] overflow-y-auto" 
            : "top-[-100vh] max-h-0 overflow-hidden"
        )}
      >
        <div className="px-6 py-8 w-full">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a
                key={link.name} 
                href={link.href}
                className="text-lg text-olive-800 hover:text-olive-600 font-medium py-3 border-b border-olive-300/50 w-full block transition-colors" 
                onClick={(e) => handleNavClick(link.href, e)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
