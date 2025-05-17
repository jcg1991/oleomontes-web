
import React, { memo } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductOption as ProductOptionType } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductOptionProps {
  option: ProductOptionType;
}

const ProductOption: React.FC<ProductOptionProps> = memo(({ option }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(option, 1, true);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={option.image} 
          alt={option.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-olive-800">{option.name}</h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-olive-800">{option.price.toFixed(2)}€</span>
          <Button 
            size="sm" 
            className="bg-olive-600 hover:bg-olive-700"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            <span>Añadir al carrito</span>
          </Button>
        </div>
      </div>
    </div>
  );
});

ProductOption.displayName = "ProductOption";

export default ProductOption;
