import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalItems } = useCart();
  const { t } = useLanguage();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-lg transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-semibold">{t('cart.title')}</h2>
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
              {totalItems}
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <div className="rounded-full bg-secondary p-6">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold">{t('cart.empty')}</p>
                <p className="text-sm text-muted-foreground">{t('cart.emptyDesc')}</p>
              </div>
              <Button onClick={closeCart} asChild>
                <Link to="/products">{t('cart.browseProducts')}</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item, index) => {
                const itemPrice = parseInt(item.product.price) + item.priceModifier;
                return (
                  <li
                    key={`${item.product.id}-${index}`}
                    className="animate-fade-in flex gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    {/* Image */}
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-secondary">
                      <img
                        src={item.product.images[0]?.src || '/placeholder.svg'}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col">
                      <h3 className="line-clamp-2 text-sm font-medium">{item.product.name}</h3>
                      {Object.keys(item.selectedOptions).length > 0 && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {Object.entries(item.selectedOptions).map(([key, value]) => (
                            <span key={key}>{key}: {value} </span>
                          ))}
                        </p>
                      )}
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="font-semibold text-primary">{formatPrice(itemPrice * item.quantity)}</p>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border bg-secondary/30 px-6 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-muted-foreground">{t('cart.subtotal')}</span>
              <span className="font-display text-xl font-bold">{formatPrice(subtotal)}</span>
            </div>
            <p className="mb-4 text-xs text-muted-foreground">{t('cart.shippingNote')}</p>
            <div className="flex flex-col gap-2">
              <Button size="lg" className="w-full" asChild onClick={closeCart}>
                <Link to="/checkout">{t('cart.checkout')}</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full" onClick={closeCart}>
                {t('cart.continueShopping')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
