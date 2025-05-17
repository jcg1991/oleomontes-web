
import { ShoppingCart, Package2, Nut, Box, Wheat } from "lucide-react";
import { Product, ProductOption } from "@/types/product";

// Productos disponibles
export const products: Product[] = [
  {
    id: 1,
    name: "Aceite Virgen Extra Premium",
    description: "Nuestro aceite de mayor calidad, con notas frutadas y un ligero picor.",
    price: null,
    image: "/uploads/992ca4fa-8ded-4d17-bde2-1d7144db5931.png",
    category: "aceites",
  },
  {
    id: 2,
    name: "Aceite Ecológico",
    description: "Elaborado con aceitunas de cultivo ecológico certificado.",
    price: 14.99,
    image: "/uploads/219c1563-dc01-4f08-a2ca-9a1b7b7bd073.png",
    category: "aceites",
    icon: Package2,
  },
  {
    id: 3,
    name: "Almendras de Torre-Cardela",
    description: "Almendras cultivadas en nuestra comarca, de calidad superior.",
    price: null,
    image: "/uploads/e37a29b5-236b-4cdc-bcc8-bf745a91cb8c.png",
    category: "frutos secos",
    icon: Nut,
  },
  {
    id: 4,
    name: "Hueso de Aceituna",
    description: "Hueso de aceituna para estufas y calefacción.",
    price: 5.99,
    image: "/uploads/b45c1f51-0db3-41b7-84bc-9f26c6fd198a.png",
    category: "combustibles",
    icon: Box,
  },
  {
    id: 5,
    name: "Cebada en Grano",
    description: "Cebada de alta calidad para alimentación animal.",
    price: 7.25,
    image: "/uploads/fb18c5f6-2fc7-4291-87f6-bd21c01676b9.png",
    category: "cereales",
    icon: Wheat,
  },
  {
    id: 6,
    name: "Pienso para Perros",
    description: "Pienso de calidad para el cuidado de tus mascotas.",
    price: 9.99,
    image: "/uploads/efed0e32-cd6a-450a-be20-c45132cdf422.png",
    category: "mascotas",
    icon: Box,
  },
  {
    id: 7,
    name: "Materiales para Recolecta",
    description: "Todo lo necesario para la recolección de aceituna.",
    price: 24.99,
    image: "/uploads/6ab68bd8-c262-477e-8539-5bf1028c4017.png",
    category: "herramientas",
    icon: Box,
  },
  {
    id: 8,
    name: "Pienso para Animales",
    description: "Piensos especiales para ganado y animales de granja.",
    price: 11.50,
    image: "/uploads/a90b2565-f72f-4338-b740-1562ee9e89cb.png",
    category: "alimentación animal",
    icon: Wheat,
  },
];

// Opciones específicas para el aceite premium con imágenes actualizadas
export const premiumOilOptions: ProductOption[] = [
  {
    id: 101,
    name: "AOVE Eco PET 2L (Caja De 6 Garrafas)",
    price: 77.40,
    image: "/uploads/54c6ad57-d59a-4e29-a808-25ed2d3c687f.png"
  },
  {
    id: 102,
    name: "AOVE Ecológico Lata 500 ml (Caja De 6 Latas)",
    price: 26.10,
    image: "/uploads/d5286138-1e06-4c9f-ba95-3ebcd7151192.png"
  },
  {
    id: 103,
    name: "OLEOMONTES AOVE Primera Cosecha Lata 1L (Caja de 12 latas)",
    price: 83.25,
    image: "/uploads/bebda94a-7076-4d7e-ad15-e145c498f7d4.png"
  },
  {
    id: 104,
    name: "OLEOMONTES AOVE Primera Cosecha PET 2L (Caja De 6 Botellas)",
    price: 75.65,
    image: "/uploads/8f245fc9-317b-4d6e-a812-b227cd75e2db.png"
  },
  {
    id: 105,
    name: "OLEOMONTES AOVE Primera Cosecha Cristal 500 ML (Caja De 6 Botellas)",
    price: 26.10,
    image: "/uploads/7c905979-029c-4cdf-889e-ceec1bfb6d78.png"
  },
  {
    id: 106,
    name: "OLEOMONTES AOVE Primera Cosecha Lata 500 ML (Caja De 6 Latas)",
    price: 25.40,
    image: "/uploads/5731839e-5137-42a1-8e95-b83af10b6be1.png"
  },
  {
    id: 107,
    name: "Caja 3 Garrafas De 5L AOVE",
    price: 110.50,
    image: "/uploads/d5b5f318-04de-4f11-9410-644883dc921b.png"
  }
];

// Opciones para las almendras de Torre-Cardela
export const almondsOptions: ProductOption[] = [
  {
    id: 201,
    name: "Almendra frita (Caja de 15) 500 GR",
    price: 94.50,
    image: "/uploads/cc3fb92b-6bf9-4e85-b615-bfbbab2aaca9.png"
  },
  {
    id: 202,
    name: "Almendra Frita 500 GR",
    price: 6.30,
    image: "/uploads/cc3fb92b-6bf9-4e85-b615-bfbbab2aaca9.png"
  },
  {
    id: 203,
    name: "Almendra Frita (Caja de 6) 1KG",
    price: 71.15,
    image: "/uploads/ec46583e-b966-439e-9a20-b53232dc000a.png"
  },
  {
    id: 204,
    name: "Almendra Frita 1KG",
    price: 12.00,
    image: "/uploads/ec46583e-b966-439e-9a20-b53232dc000a.png"
  }
];
