
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface CartIconProps {
  className?: string;
  showCount?: boolean;
}

const CartIcon: React.FC<CartIconProps> = ({ className, showCount = true }) => {
  const { getCartCount } = useCart();
  const count = getCartCount();
  
  return (
    <div className="relative">
      <ShoppingCart className={cn("h-5 w-5", className)} />
      {showCount && count > 0 && (
        <span className="absolute -top-2 -right-2 bg-terracotta-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
