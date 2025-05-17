
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product, ProductOption } from '@/types/product';
import { toast } from '@/hooks/use-toast';

// Definir el tipo para un ítem del carrito
export interface CartItem {
  id: string;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  optionName?: string;
}

// Definir el tipo para el contexto del carrito
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product | ProductOption, quantity?: number, isOption?: boolean) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Proveedor del contexto
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addToCart = (
    product: Product | ProductOption, 
    quantity: number = 1, 
    isOption: boolean = false
  ) => {
    const productId = product.id;
    const price = product.price;
    
    // Verificar que el precio sea válido
    if (price === null || price === undefined) {
      console.error("No se puede añadir al carrito un producto sin precio");
      return;
    }
    
    // Crear un ID único para este ítem basado en el ID del producto y, si es una opción, su nombre
    const optionName = isOption ? (product as ProductOption).name : undefined;
    const itemId = isOption ? `option-${productId}-${optionName}` : `product-${productId}`;
    
    setItems(currentItems => {
      // Verificar si el producto ya está en el carrito
      const existingItemIndex = currentItems.findIndex(item => item.id === itemId);
      
      if (existingItemIndex !== -1) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        
        toast({
          title: "Carrito actualizado",
          description: `${updatedItems[existingItemIndex].name}: ${updatedItems[existingItemIndex].quantity} unidades`,
        });
        
        return updatedItems;
      } else {
        // Si el producto no está en el carrito, añadirlo
        const newItem: CartItem = {
          id: itemId,
          productId: productId,
          name: optionName || (product as Product).name,
          price: price,
          quantity: quantity,
          image: product.image,
          optionName: optionName,
        };
        
        toast({
          title: "Producto añadido",
          description: `${newItem.name} se añadió al carrito`,
        });
        
        return [...currentItems, newItem];
      }
    });
  };
  
  const removeFromCart = (itemId: string) => {
    setItems(currentItems => {
      const itemToRemove = currentItems.find(item => item.id === itemId);
      
      if (itemToRemove) {
        toast({
          title: "Producto eliminado",
          description: `${itemToRemove.name} se eliminó del carrito`,
        });
      }
      
      return currentItems.filter(item => item.id !== itemId);
    });
  };
  
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Carrito vacío",
      description: "Todos los productos han sido eliminados del carrito",
    });
  };
  
  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
