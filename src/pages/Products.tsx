import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductFilters } from '@/components/products/ProductFilters';
import { products, categories } from '@/lib/mockData';
import { cn } from '@/lib/utils';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const selectedCategory = searchParams.get('category');

  const setSelectedCategory = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) =>
        p.categories.some((c) => c.slug === selectedCategory)
      );
    }

    // Filter by price range
    result = result.filter((p) => {
      const price = parseInt(p.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Filter by materials
    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        p.categories.some((c) =>
          selectedMaterials.some((m) => c.name.toLowerCase().includes(m.toLowerCase()))
        )
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        break;
      case 'price-desc':
        result.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());
        break;
      case 'rating':
        result.sort((a, b) => parseFloat(b.average_rating) - parseFloat(a.average_rating));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, priceRange, selectedMaterials, sortBy]);

  const categoryName = selectedCategory
    ? categories.find((c) => c.slug === selectedCategory)?.name || 'Products'
    : 'All Products';

  return (
    <>
      <Helmet>
        <title>{categoryName} - DPS Map Shop | Yangon Maps & Custom Prints</title>
        <meta
          name="description"
          content={`Browse our ${categoryName.toLowerCase()} collection. High-quality Yangon maps and custom map prints for professionals and enthusiasts.`}
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-secondary/30 py-8 md:py-12">
          <div className="container">
            <h1 className="font-display text-3xl font-bold md:text-4xl">{categoryName}</h1>
            <p className="mt-2 text-muted-foreground">
              {filteredProducts.length} products available
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Filters Sidebar */}
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedMaterials={selectedMaterials}
              onMaterialsChange={setSelectedMaterials}
            />

            {/* Products Grid */}
            <div>
              {/* Toolbar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Best Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products */}
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <p className="font-display text-xl font-semibold">No products found</p>
                  <p className="mt-2 text-muted-foreground">Try adjusting your filters</p>
                </div>
              ) : (
                <div
                  className={cn(
                    'grid gap-6',
                    viewMode === 'grid'
                      ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                      : 'grid-cols-1'
                  )}
                >
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
