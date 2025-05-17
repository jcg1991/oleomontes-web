
import React, { memo } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductMainDetailProps {
  product: Product;
  isPremiumOil: boolean;
}

const ProductMainDetail: React.FC<ProductMainDetailProps> = memo(({ product, isPremiumOil }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    if (!isPremiumOil && product.price) {
      addToCart(product);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-olive-800 mb-4">{product.name}</h1>
          <div className="w-24 h-1 bg-terracotta-500 mb-6"></div>
          
          {isPremiumOil ? (
            <>
              <p className="text-lg text-olive-700 mb-4">
                Nuestro aceite de mayor calidad, con un equilibrio perfecto entre notas frutadas, un aroma intenso y un ligero toque de picor característico del mejor AOVE.
              </p>
              <p className="text-lg text-olive-700 mb-4">
                Elaborado a partir de aceitunas cuidadosamente seleccionadas en su punto óptimo de maduración, este aceite premium conserva todas sus propiedades naturales.
              </p>
              <p className="text-lg text-olive-700 mb-4">
                Disponemos de varias presentaciones adaptadas a cada cliente: desde botellas pequeñas ideales para uso diario, hasta garrafas familiares o formatos profesionales.
              </p>
              <p className="text-lg text-olive-700 mb-4">
                Elija la opción que mejor se ajuste a sus necesidades y disfrute de un producto de excelencia, directo del productor a su mesa.
              </p>
            </>
          ) : (
            product.description && (
              <p className="text-lg text-olive-700 mb-6">
                Almendras cultivadas en nuestra comarca, de calidad superior.
                Estas almendras se obtienen de plantaciones locales situadas en el entorno natural de Torre-Cardela, 
                donde el clima y el suelo favorecen una producción excepcional.

                Su sabor es intenso, su textura crujiente y su aporte nutricional excelente, 
                siendo una fuente natural de proteínas, fibra y antioxidantes.

                Se recolectan de forma cuidadosa, manteniendo procesos tradicionales que respetan 
                el medio ambiente y garantizan un producto final de primera calidad.

                Disponibles en diferentes formatos, son ideales tanto para consumo directo como para 
                su uso en repostería, cocina gourmet o elaboración de aceites vegetales.
              </p>
            )
          )}
          
          {!isPremiumOil && product.price && (
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-bold text-olive-800">{product.price.toFixed(2)} €</span>
              <Button 
                className="bg-olive-600 hover:bg-olive-700"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Añadir al carrito
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ProductMainDetail.displayName = "ProductMainDetail";

export default ProductMainDetail;
