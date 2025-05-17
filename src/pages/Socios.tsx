
import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Socios = () => {
  return (
    <>
      <Helmet>
        <title>Área de Socios - Oleomontes | Aceite de Oliva Virgen Extra</title>
        <meta name="description" content="Acceso exclusivo para socios de Oleomontes. Gestiona tus pedidos, consulta información sobre la cooperativa y obtén ventajas especiales." />
        <meta name="keywords" content="socios, cooperativa, aceite de oliva, Torre-Cardela, acceso socios, oleomontes, área privada" />
        <link rel="canonical" href="https://oleomontes.com/socios" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <header>
          <Navigation />
        </header>
        
        <main className="flex-grow flex flex-col items-center pt-24 pb-12 px-4 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/uploads/58ca0a08-dfea-42c2-99e9-e028cbb1d652.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "normal",
            imageRendering: "auto"
          }}
        >
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-olive-800 drop-shadow-md">Zona de Socios</h1>
            </div>
            
            <Card className="border-olive-200 shadow-md bg-cream-50/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-center text-olive-800">Identificación</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-olive-700">Nº Socio/Usuario</Label>
                    <Input 
                      id="username" 
                      placeholder="Introduce tu número de socio" 
                      className="bg-cream-50 border-olive-200"
                      aria-label="Número de socio"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-olive-700">Contraseña</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Introduce tu contraseña"
                      className="bg-cream-50 border-olive-200" 
                      aria-label="Contraseña"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm text-olive-600">Recordar detalles</Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-olive-700 hover:bg-olive-600 text-cream-50"
                    aria-label="Acceder a la zona de socios"
                  >
                    Acceder
                  </Button>
                  
                  <div className="text-center">
                    <a href="#" className="text-sm text-olive-600 hover:underline">
                      Olvidé mi contraseña
                    </a>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Socios;
