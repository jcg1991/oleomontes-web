
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import CartIcon from './CartIcon';
import { Trash, Plus, Minus, ShoppingCart } from 'lucide-react';

interface CartDrawerProps {
  className?: string;
  triggerClassName?: string;
  showLabel?: boolean;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  className, 
  triggerClassName, 
  showLabel = false 
}) => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className={triggerClassName || ''}>
          <Button 
            variant="ghost" 
            size={showLabel ? "default" : "icon"} 
            className={className}
            aria-label="Ver carrito de compra"
          >
            <CartIcon showCount={true} className="text-olive-800" />
            {showLabel && <span className="font-medium">Carrito</span>}
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-olive-800 text-xl flex items-center gap-2">
            <CartIcon showCount={false} className="text-olive-800" /> 
            Carrito de compra
          </SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <ShoppingCart className="h-12 w-12 text-olive-400 mb-4" />
            <p className="text-olive-600">Tu carrito está vacío</p>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-start gap-4 border-b border-cream-200 pb-4">
                <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-olive-800">{item.name}</h3>
                  {item.optionName && (
                    <p className="text-sm text-olive-600">{item.optionName}</p>
                  )}
                  <div className="mt-2 flex justify-between items-center">
                    <p className="font-medium text-olive-800">{item.price.toFixed(2)} €</p>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-7 w-7" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-7 w-7" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
            
            <div className="border-t border-cream-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-olive-800">Total</span>
                <span className="font-bold text-olive-800 text-xl">{total.toFixed(2)} €</span>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1" 
                  onClick={clearCart}
                >
                  Vaciar carrito
                </Button>
                <Button 
                  className="flex-1 bg-olive-600 hover:bg-olive-700"
                >
                  Finalizar compra
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
