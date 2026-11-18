import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import ProductCompare from "./ProductCompare";
import { Search, SlidersHorizontal, Scale, CheckCircle2 } from "lucide-react";

interface ProductsProps {
  onQuickQuote?: (slug: string) => void;
}

const Products = ({ onQuickQuote }: ProductsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGauge, setSelectedGauge] = useState<'gauge28' | 'gauge30'>('gauge28');
  const [comparedIds, setComparedIds] = useState<string[]>(['1', '2']);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const categories = ["All", "Tile Profile", "Box Profile", "Corrugated", "Budget"];

  const handleToggleCompare = (id: string) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 3) {
          return [...prev.slice(1), id];
        }
        return [...prev, id];
      }
    });
  };

  const filteredProducts = products.filter((prod) => {
    const matchesCat = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-950 text-white relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-wider uppercase">
            <span>Official Factory Catalog</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Explore Premium <span className="text-gradient">Mabati Profiles</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Select your preferred profile, compare gauge thicknesses, and order cut-to-length sheets directly from the manufacturer.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-6 mb-10 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by profile (e.g. Versatile, Box, Dumuzas)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-950 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Gauge Switcher */}
            <div className="flex items-center justify-between sm:justify-start gap-3 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 pl-2 font-medium hidden sm:inline">Active Pricing:</span>
              <button
                type="button"
                onClick={() => setSelectedGauge('gauge28')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedGauge === 'gauge28'
                    ? 'bg-primary text-white shadow-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                28 Gauge (Heavy Duty)
              </button>
              <button
                type="button"
                onClick={() => setSelectedGauge('gauge30')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedGauge === 'gauge30'
                    ? 'bg-primary text-white shadow-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                30 Gauge (Standard)
              </button>
            </div>
          </div>

          {/* Category Tabs & Compare Action */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white border-primary shadow-glow'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Compare Drawer Trigger */}
            <button
              type="button"
              onClick={() => setIsCompareOpen(true)}
              className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-all"
            >
              <Scale className="w-3.5 h-3.5 text-primary" />
              <span>Compare Selected ({comparedIds.length})</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <p className="text-lg text-slate-300 font-semibold">No profiles found matching "{searchQuery}"</p>
            <p className="text-xs mt-1">Try clearing your search query or selecting "All" categories.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                selectedGauge={selectedGauge}
                isCompared={comparedIds.includes(product.id)}
                onToggleCompare={handleToggleCompare}
                onQuickQuote={onQuickQuote}
              />
            ))}
          </div>
        )}
      </div>

      {/* Compare Modal */}
      <ProductCompare
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        selectedProductIds={comparedIds}
        onToggleProduct={handleToggleCompare}
      />
    </section>
  );
};

export default Products;
