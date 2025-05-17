
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProductOption from "@/components/ProductOption";
import ProductMainDetail from "@/components/ProductDetail/ProductMainDetail";
import RelatedProducts from "@/components/RelatedProducts";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import { products, premiumOilOptions, almondsOptions } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const productIdNum = parseInt(productId || "0", 10);
  const product = products.find(p => p.id === productIdNum);
  const navigate = useNavigate();
  
  // Determinar si es el aceite premium (ID 1) o almendras (ID 3)
  const isPremiumOil = productIdNum === 1;
  const isAlmonds = productIdNum === 3;
  
  // Get product options based on product type
  const productOptions = isPremiumOil ? premiumOilOptions : isAlmonds ? almondsOptions : [];
  
  // Scroll to the top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  
  // Get related products (same category)
  const relatedProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  const handleBackClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate('/', { state: { scrollToId: 'products' } });
  };

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Producto no encontrado - Oleomontes</title>
          <meta name="description" content="Lo sentimos, el producto que buscas no está disponible." />
          <meta name="robots" content="noindex" />
        </Helmet>
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-olive-800">Producto no encontrado</h1>
          <Link to="/#products">
            <Button className="mt-4 bg-olive-600 hover:bg-olive-700">
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver a productos
            </Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${product.name} - Aceite de Oliva Virgen Extra - Oleomontes`}</title>
        <meta name="description" content={`${product.description} - Aceite de oliva virgen extra de máxima calidad de Torre-Cardela, Jaén.`} />
        <meta name="keywords" content={`${product.name}, aceite de oliva, virgen extra, Jaén, almazara, aceite premium, Torre-Cardela, fábrica de aceite`} />
        <link rel="canonical" href={`https://oleomontes.com/productos/${product.id}`} />
      </Helmet>
      <Navigation />
      <main className="bg-cream-50 py-12 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Breadcrumb navigation */}
          <ProductBreadcrumb 
            categoryName={product.category} 
            productName={product.name} 
          />
          
          {/* Back button - kept for usability but could be removed as breadcrumb provides navigation */}
          <div className="mb-6">
            <a 
              href="/#products" 
              className="text-olive-800 hover:text-olive-600 flex items-center"
              onClick={handleBackClick}
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver a productos
            </a>
          </div>
          
          {/* Product detail */}
          <ProductMainDetail product={product} isPremiumOil={isPremiumOil} />
          
          {/* Product options */}
          {(isPremiumOil || isAlmonds) && productOptions.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-olive-800 mb-6">Opciones disponibles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productOptions.map((option) => (
                  <ProductOption key={option.id} option={option} />
                ))}
              </div>
            </div>
          )}
          
          {/* Related products */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
