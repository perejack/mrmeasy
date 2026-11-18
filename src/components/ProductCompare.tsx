import { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Scale, MessageCircle } from 'lucide-react';
import { products, Product, WHATSAPP_LINK } from '@/lib/products';
import { Link } from 'react-router-dom';

interface ProductCompareProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductIds: string[];
  onToggleProduct: (id: string) => void;
}

export default function ProductCompare({
  isOpen,
  onClose,
  selectedProductIds,
  onToggleProduct,
}: ProductCompareProps) {
  if (!isOpen) return null;

  const comparedProducts = products.filter((p) => selectedProductIds.includes(p.id));

  const handleWhatsAppOrder = (product: Product) => {
    const text = `Hello MRM! I compared options and I want to order *${product.name} (28 Gauge)* at KES ${product.prices.gauge28}/m. Please guide me on stock & delivery.`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl text-white p-6 sm:p-8 relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">Compare Roofing Profiles</h3>
              <p className="text-xs text-slate-400">Side-by-side technical specification &amp; pricing breakdown</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product selector chips */}
        <div className="mb-6">
          <span className="text-xs text-slate-400 block mb-2 font-medium">Select profiles to compare (up to 3):</span>
          <div className="flex flex-wrap gap-2">
            {products.map((p) => {
              const isSelected = selectedProductIds.includes(p.id);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onToggleProduct(p.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-primary text-white border-primary shadow-glow'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {comparedProducts.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <Scale className="w-12 h-12 mx-auto text-slate-600 mb-3" />
            <p className="text-base font-semibold text-slate-300">No products selected for comparison</p>
            <p className="text-xs mt-1">Please select at least 1 or 2 products from the tags above.</p>
          </div>
        ) : (
          /* Comparison Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {comparedProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-primary/50 transition-all"
              >
                {/* Top Image & Title */}
                <div>
                  <div className="relative h-36 bg-slate-900 rounded-xl p-3 flex items-center justify-center mb-3">
                    <img src={prod.image} alt={prod.name} className="h-full object-contain" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary/20 border border-primary/40 text-primary text-[10px] font-bold">
                      {prod.category}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">{prod.name}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">{prod.tagline}</p>
                </div>

                {/* Price Highlights */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">28 Gauge (Heavy):</span>
                    <span className="font-bold text-primary">KES {prod.prices.gauge28}/m</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">30 Gauge (Standard):</span>
                    <span className="font-bold text-slate-200">KES {prod.prices.gauge30}/m</span>
                  </div>
                </div>

                {/* Specs List */}
                <div className="space-y-2 text-xs border-t border-slate-800 pt-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Warranty:</span>
                    <span className="font-semibold text-accent flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> {prod.warrantyYears} Years
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Effective Width:</span>
                    <span className="font-semibold text-white">{prod.effectiveWidth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Min. Pitch:</span>
                    <span className="font-semibold text-white">{prod.minPitch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Surface Finish:</span>
                    <span className="font-semibold text-white">{prod.finish}</span>
                  </div>
                </div>

                {/* Best For */}
                <div className="bg-slate-900/60 p-3 rounded-xl text-[11px] text-slate-300">
                  <span className="text-slate-400 block font-semibold mb-0.5">Best Application:</span>
                  {prod.bestFor}
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => handleWhatsAppOrder(prod)}
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order via WhatsApp</span>
                  </button>

                  <Link
                    to={`/product/${prod.slug}`}
                    onClick={onClose}
                    className="w-full py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1 transition-all"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}