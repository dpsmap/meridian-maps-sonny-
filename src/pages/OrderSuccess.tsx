import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OrderSuccess() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order');
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Order Successful - DPS Map Shop</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center bg-background py-12 px-4">
        <div className="w-full max-w-lg text-center">
          <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="font-display text-3xl font-bold mb-2">Order Placed Successfully!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your order. We've sent a confirmation email with your invoice.
            </p>

            {orderId && (
              <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground">Order ID</p>
                <p className="font-mono text-lg font-medium">{orderId.slice(0, 8).toUpperCase()}</p>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              <div className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4">
                <Mail className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium">Email Sent</p>
                  <p className="text-sm text-muted-foreground">Check your inbox</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4">
                <Package className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium">Cash on Delivery</p>
                  <p className="text-sm text-muted-foreground">Pay when delivered</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <Link to="/products">Continue Shopping</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
