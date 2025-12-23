import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Product } from '@/lib/mockData';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOptions: Record<string, string>;
  priceModifier: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number, options?: Record<string, string>) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product, quantity = 1, options: Record<string, string> = {}) => {
    setItems(current => {
      const existingIndex = current.findIndex(
        item => item.product.id === product.id && 
        JSON.stringify(item.selectedOptions) === JSON.stringify(options)
      );

      if (existingIndex > -1) {
        const updated = [...current];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      // Calculate price modifier based on options
      let priceModifier = 0;
      if (options.Size?.includes('A0') || options.Size?.includes('Custom')) {
        priceModifier = 25000;
      } else if (options.Size?.includes('100×120') || options.Size?.includes('80×100')) {
        priceModifier = 50000;
      }
      if (options.Binding === 'Hardcover') {
        priceModifier += 15000;
      }

      return [...current, { product, quantity, selectedOptions: options, priceModifier }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: number) => {
    setItems(current => current.filter(item => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    setItems(current =>
      current.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen(prev => !prev), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => {
    const itemPrice = parseInt(item.product.price) + item.priceModifier;
    return sum + itemPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
      totalItems,
      subtotal,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
