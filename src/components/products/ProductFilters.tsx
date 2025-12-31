import { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { categories, formatPrice } from '@/lib/mockData';
import { cn } from '@/lib/utils';

interface ProductFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  selectedMaterials: string[];
  onMaterialsChange: (materials: string[]) => void;
}

const materials = ['Paper', 'Vinyl', 'Canvas', 'Photopaper', 'Sticker'];

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  selectedMaterials,
  onMaterialsChange,
}: ProductFiltersProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    materials: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleMaterial = (material: string) => {
    if (selectedMaterials.includes(material)) {
      onMaterialsChange(selectedMaterials.filter((m) => m !== material));
    } else {
      onMaterialsChange([...selectedMaterials, material]);
    }
  };

  const clearFilters = () => {
    onCategoryChange(null);
    onPriceChange([0, 500000]);
    onMaterialsChange([]);
  };

  const hasActiveFilters = selectedCategory || priceRange[0] > 0 || priceRange[1] < 500000 || selectedMaterials.length > 0;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div className="border-b border-border pb-6">
        <button
          onClick={() => toggleSection('categories')}
          className="flex w-full items-center justify-between py-2 text-left"
        >
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Categories</h3>
          <ChevronDown className={cn("h-4 w-4 transition-transform", expandedSections.categories && "rotate-180")} />
        </button>
        {expandedSections.categories && (
          <ul className="mt-3 space-y-2">
            <li>
              <button
                onClick={() => onCategoryChange(null)}
                className={cn(
                  "w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors",
                  !selectedCategory ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                All Products
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => onCategoryChange(cat.slug)}
                  className={cn(
                    "w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors flex justify-between items-center",
                    selectedCategory === cat.slug ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {cat.name}
                  <span className="text-xs opacity-60">{cat.count}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b border-border pb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex w-full items-center justify-between py-2 text-left"
        >
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Price Range</h3>
          <ChevronDown className={cn("h-4 w-4 transition-transform", expandedSections.price && "rotate-180")} />
        </button>
        {expandedSections.price && (
          <div className="mt-4 space-y-4">
            <Slider
              value={priceRange}
              onValueChange={(value) => onPriceChange(value as [number, number])}
              min={0}
              max={500000}
              step={5000}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{formatPrice(priceRange[0])}</span>
              <span className="text-muted-foreground">{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        )}
      </div>

      {/* Materials */}
      <div className="pb-6">
        <button
          onClick={() => toggleSection('materials')}
          className="flex w-full items-center justify-between py-2 text-left"
        >
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Material</h3>
          <ChevronDown className={cn("h-4 w-4 transition-transform", expandedSections.materials && "rotate-180")} />
        </button>
        {expandedSections.materials && (
          <ul className="mt-3 space-y-3">
            {materials.map((material) => (
              <li key={material} className="flex items-center gap-3">
                <Checkbox
                  id={`material-${material}`}
                  checked={selectedMaterials.includes(material)}
                  onCheckedChange={() => toggleMaterial(material)}
                />
                <label
                  htmlFor={`material-${material}`}
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                >
                  {material}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          <X className="mr-2 h-4 w-4" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="mb-6 lg:hidden">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsMobileOpen(true)}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              Active
            </span>
          )}
        </Button>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-foreground/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-background p-6 shadow-lg lg:hidden animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <FilterContent />
          </div>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block">
        <FilterContent />
      </aside>
    </>
  );
}
