
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/products";

const ProductCard = ({ product }) => {
  // Making the entire card clickable
  return (
    <Link to={`/productos/${product.id}`} className="block h-full">
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={`${product.name} - Producto de calidad de Oleomontes`} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-olive-800 flex items-center gap-2">
            {product.icon && <product.icon className="h-5 w-5" aria-hidden="true" />} {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-olive-700">{product.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between pt-2 border-t border-cream-200">
          <span className="font-bold text-olive-800">
            {product.price !== null ? `${product.price.toFixed(2)} €` : "Ver opciones"}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-20 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">Nuestros Productos</h2>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
          <p className="text-lg text-olive-700">
            Descubre nuestra amplia gama de productos, desde nuestro excelente aceite de oliva hasta cereales, almendras y materiales para el campo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-olive-600 hover:bg-olive-700 text-white font-medium"
            aria-label="Ver catálogo completo de productos"
          >
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
