
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface RelatedProductsProps {
  products: Product[];
}

// Memoized ProductCard component to prevent unnecessary rerenders
const ProductCard = memo(({ product, onAddToCart }: { product: Product, onAddToCart: (product: Product) => void }) => {
  return (
    <Card key={product.id} className="h-full flex flex-col">
      <Link to={`/productos/${product.id}`} className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-olive-800">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-olive-700 text-sm">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2 border-t border-cream-200">
        {product.price ? (
          <span className="font-bold text-olive-800">{product.price.toFixed(2)} €</span>
        ) : (
          <span className="font-bold text-olive-800">Ver opciones</span>
        )}
        <Button 
          size="sm" 
          className="bg-olive-600 hover:bg-olive-700"
          onClick={() => product.price && onAddToCart(product)}
          disabled={!product.price}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Añadir
        </Button>
      </CardFooter>
    </Card>
  );
});

ProductCard.displayName = "ProductCard";

const RelatedProducts: React.FC<RelatedProductsProps> = memo(({ products }) => {
  const { addToCart } = useCart();
  
  if (!products.length) {
    return null;
  }

  const handleAddToCart = (product: Product) => {
    if (product.price) {
      addToCart(product);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-olive-800 mb-6">Productos relacionados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
});

RelatedProducts.displayName = "RelatedProducts";

export default RelatedProducts;
