
import React from "react";
import { Link } from "react-router-dom";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

interface ProductBreadcrumbProps {
  categoryName: string;
  productName: string;
}

const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({ categoryName, productName }) => {
  // Convertir el nombre de la categoría para URL (slug)
  const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
  
  // Capitalizar la primera letra de cada palabra en la categoría para mostrarla
  const formattedCategory = categoryName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center">
              <HomeIcon className="h-4 w-4 mr-1" />
              Inicio
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator />
        
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/#products">Productos</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator />
        
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={`/#${categorySlug}`}>{formattedCategory}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator />
        
        <BreadcrumbItem>
          <BreadcrumbPage>{productName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ProductBreadcrumb;
