
import { ElementType } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number | null;
  image: string;
  category: string;
  icon?: ElementType;
}

export interface ProductOption {
  id: number;
  name: string;
  price: number;
  image: string;
}
