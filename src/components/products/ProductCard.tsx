import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product, formatPrice } from '@/lib/mockData';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.images[0]?.src || '/placeholder.svg'}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.on_sale && (
          <Badge className="absolute left-3 top-3 bg-terracotta text-primary-foreground">
            Sale
          </Badge>
        )}
        {product.featured && !product.on_sale && (
          <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category */}
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.categories[0]?.name}
        </span>

        {/* Title */}
        <Link to={`/product/${product.slug}`}>
          <h3 className="mt-1 line-clamp-2 font-display text-base font-semibold leading-snug text-foreground transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-terracotta text-terracotta" />
          <span className="text-sm font-medium">{product.average_rating}</span>
          <span className="text-xs text-muted-foreground">({product.rating_count})</span>
        </div>

        {/* Price & Action */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.on_sale && product.regular_price !== product.price && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.regular_price)}
              </span>
            )}
          </div>
          <Button
            size="icon"
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="shrink-0"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
