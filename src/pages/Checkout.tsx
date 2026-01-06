import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, CreditCard, Truck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/mockData';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    township: '',
    city: 'Yangon',
  });

  const shipping = subtotal > 100000 ? 0 : 5000;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!formData.firstName || !formData.email || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const orderItems = items.map(item => ({
        name: item.product.name,
        quantity: item.quantity,
        price: (parseInt(item.product.price) + item.priceModifier) * item.quantity,
      }));

      const customerName = `${formData.firstName} ${formData.lastName}`.trim();
      const customerAddress = `${formData.address}, ${formData.township}, ${formData.city}`;

      // Create order in database
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: customerName,
          customer_email: formData.email,
          customer_phone: formData.phone || null,
          customer_address: customerAddress,
          items: orderItems,
          total_amount: total,
          status: 'pending',
          payment_method: paymentMethod,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Send confirmation email
      const { error: emailError } = await supabase.functions.invoke('send-order-email', {
        body: {
          customerName,
          customerEmail: formData.email,
          customerPhone: formData.phone || 'N/A',
          customerAddress,
          orderId: order.id,
          items: orderItems,
          totalAmount: total,
          paymentMethod,
        },
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't fail the order if email fails
      }

      clearCart();
      toast.success('Order placed successfully!');
      navigate(`/order-success?order=${order.id}`);
    } catch (error: any) {
      console.error('Order error:', error);
      toast.error(error.message || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold">{t('cart.empty')}</h1>
        <Button asChild className="mt-4">
          <Link to="/products">{t('cart.browseProducts')}</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{t('checkout.title')} - DPS Map Shop</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary/30 py-4">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">{t('nav.home')}</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/products" className="hover:text-foreground">{t('nav.shop')}</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">{t('checkout.title')}</span>
            </nav>
          </div>
        </div>

        <div className="container py-8 md:py-12">
          <h1 className="font-display text-3xl font-bold mb-8">{t('checkout.title')}</h1>

          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
            {/* Form */}
            <div className="space-y-8">
              {/* Contact */}
              <section className="space-y-4">
                <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t('checkout.contact')}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('checkout.firstName')} *</Label>
                    <Input 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter first name" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('checkout.lastName')}</Label>
                    <Input 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter last name" 
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('checkout.phone')}</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+95 9 XXX XXX XXX" 
                    />
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section className="space-y-4">
                <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  {t('checkout.shipping')}
                </h2>
                <div className="space-y-2">
                  <Label htmlFor="address">{t('checkout.address')} *</Label>
                  <Textarea 
                    id="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House number, street name, ward" 
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="township">Township</Label>
                    <Input 
                      id="township" 
                      value={formData.township}
                      onChange={handleInputChange}
                      placeholder="e.g., Kamayut" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">{t('checkout.city')}</Label>
                    <Input 
                      id="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g., Yangon" 
                    />
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section className="space-y-4">
                <h2 className="font-display text-xl font-semibold flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  {t('checkout.payment')}
                </h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 rounded-lg border border-border p-4 cursor-pointer hover:bg-secondary/50">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <span className="font-medium">{t('checkout.cod')}</span>
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
            </div>

            {/* Order Summary */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-display text-xl font-semibold mb-6">{t('checkout.orderSummary')}</h2>

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
                    <span className="text-muted-foreground">{t('cart.subtotal')}</span>
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

                <Button 
                  size="lg" 
                  className="w-full mt-6" 
                  onClick={handlePlaceOrder}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : t('checkout.placeOrder')}
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
