import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Star, Minus, Plus, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { products, formatPrice } from '@/lib/mockData';
import { useCart } from '@/contexts/CartContext';
import { ProductCard } from '@/components/products/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { addItem } = useCart();
  
  const product = products.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold">Product not found</h1>
        <Button asChild className="mt-4">
          <Link to="/products">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  // Calculate price modifier based on selected options
  let priceModifier = 0;
  if (selectedOptions.Size?.includes('A0') || selectedOptions.Size?.includes('Custom')) {
    priceModifier = 25000;
  } else if (selectedOptions.Size?.includes('100×120') || selectedOptions.Size?.includes('80×100')) {
    priceModifier = 50000;
  }
  if (selectedOptions.Binding === 'Hardcover') {
    priceModifier += 15000;
  }

  const currentPrice = parseInt(product.price) + priceModifier;

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.categories.some((c) => product.categories.some((pc) => pc.id === c.id)))
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedOptions);
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - DPS Map Shop</title>
        <meta name="description" content={product.short_description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.short_description} />
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
              <Link to={`/products?category=${product.categories[0]?.slug}`} className="hover:text-foreground">
                {product.categories[0]?.name}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Content */}
        <div className="container py-8 md:py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={product.images[activeImage]?.src || '/placeholder.svg'}
                  alt={product.images[activeImage]?.alt || product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, index) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveImage(index)}
                      className={`aspect-square w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                        index === activeImage ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex gap-2">
                {product.on_sale && <Badge className="bg-terracotta">Sale</Badge>}
                {product.featured && <Badge variant="secondary">Bestseller</Badge>}
              </div>

              {/* Title & Rating */}
              <div>
                <h1 className="font-display text-3xl font-bold md:text-4xl">{product.name}</h1>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(parseFloat(product.average_rating)) ? 'fill-terracotta text-terracotta' : 'text-muted'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium">{product.average_rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.rating_count} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-primary">
                  {formatPrice(currentPrice)}
                </span>
                {product.on_sale && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(parseInt(product.regular_price) + priceModifier)}
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-muted-foreground">{product.short_description}</p>

              {/* Options */}
              {product.attributes.map((attr) => (
                <div key={attr.id} className="space-y-3">
                  <label className="font-medium">{attr.name}</label>
                  <div className="flex flex-wrap gap-2">
                    {attr.options.map((option) => (
                      <Button
                        key={option}
                        variant={selectedOptions[attr.name] === option ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedOptions((prev) => ({ ...prev, [attr.name]: option }))}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Quantity */}
              <div className="space-y-3">
                <label className="font-medium">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex flex-col items-center text-center">
                  <Truck className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Fast Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Verified Data</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RotateCcw className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="description" className="mt-16">
            <TabsList className="w-full justify-start border-b bg-transparent p-0">
              <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Description
              </TabsTrigger>
              <TabsTrigger value="shipping" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Shipping Info
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Reviews ({product.rating_count})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
            </TabsContent>
            <TabsContent value="shipping" className="pt-6">
              <div className="space-y-4">
                <h3 className="font-display text-lg font-semibold">Shipping Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Standard shipping: 3-5 business days within Myanmar</li>
                  <li>• Express shipping available for Yangon orders</li>
                  <li>• International shipping available to select countries</li>
                  <li>• Free shipping on orders over K100,000</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <p className="text-muted-foreground">Customer reviews will be displayed here.</p>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="font-display text-2xl font-bold mb-8">Frequently Bought Together</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
