import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, CreditCard, Truck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/mockData';

export default function Checkout() {
  const { items, subtotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const shipping = subtotal > 100000 ? 0 : 5000;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold">Your cart is empty</h1>
        <Button asChild className="mt-4">
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout - DPS Map Shop</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary/30 py-4">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/products" className="hover:text-foreground">Shop</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Checkout</span>
            </nav>
          </div>
        </div>

        <div className="container py-8 md:py-12">
          <h1 className="font-display text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
            {/* Form */}
            <form className="space-y-8">
              {/* Contact */}
              <section className="space-y-4">
                <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Contact Information
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+95 9 XXX XXX XXX" />
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section className="space-y-4">
                <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  Shipping Address
                </h2>
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Textarea id="address" placeholder="House number, street name, ward" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="township">Township</Label>
                    <Input id="township" placeholder="e.g., Kamayut" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="e.g., Yangon" defaultValue="Yangon" />
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section className="space-y-4">
                <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Method
                </h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 rounded-lg border border-border p-4 cursor-pointer hover:bg-secondary/50">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <span className="font-medium">Cash on Delivery</span>
                      <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded-lg border border-border p-4 cursor-pointer hover:bg-secondary/50">
                    <RadioGroupItem value="kbzpay" id="kbzpay" />
                    <Label htmlFor="kbzpay" className="flex-1 cursor-pointer">
                      <span className="font-medium">KBZ Pay</span>
                      <p className="text-sm text-muted-foreground">Pay with KBZ mobile wallet</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded-lg border border-border p-4 cursor-pointer hover:bg-secondary/50">
                    <RadioGroupItem value="wave" id="wave" />
                    <Label htmlFor="wave" className="flex-1 cursor-pointer">
                      <span className="font-medium">Wave Pay</span>
                      <p className="text-sm text-muted-foreground">Pay with Wave mobile wallet</p>
                    </Label>
                  </div>
                </RadioGroup>
              </section>

              {/* Order Notes */}
              <section className="space-y-4">
                <h2 className="font-display text-xl font-semibold">Order Notes (Optional)</h2>
                <Textarea placeholder="Special instructions for your order..." />
              </section>
            </form>

            {/* Order Summary */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-display text-xl font-semibold mb-6">Order Summary</h2>

                {/* Items */}
                <ul className="space-y-4 mb-6">
                  {items.map((item, index) => {
                    const itemPrice = parseInt(item.product.price) + item.priceModifier;
                    return (
                      <li key={`${item.product.id}-${index}`} className="flex gap-4">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-secondary">
                          <img
                            src={item.product.images[0]?.src || '/placeholder.svg'}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium truncate">{item.product.name}</h3>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="text-sm font-medium">{formatPrice(itemPrice * item.quantity)}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Totals */}
                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3">
                    <span className="font-display text-lg font-semibold">Total</span>
                    <span className="font-display text-lg font-bold text-primary">{formatPrice(total)}</span>
                  </div>
                </div>

                <Button size="lg" className="w-full mt-6">
                  Place Order
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  By placing this order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
