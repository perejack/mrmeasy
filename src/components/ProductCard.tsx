import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Check, Plus, Scale } from "lucide-react";
import { Product, PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
  selectedGauge?: 'gauge28' | 'gauge30';
  isCompared?: boolean;
  onToggleCompare?: (id: string) => void;
  onQuickQuote?: (slug: string) => void;
}

const ProductCard = ({
  product,
  index,
  selectedGauge = 'gauge28',
  isCompared = false,
  onToggleCompare,
  onQuickQuote,
}: ProductCardProps) => {
  const currentPrice = product.prices[selectedGauge];

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Hello MRM! I'd like to order *${product.name} (${selectedGauge === 'gauge28' ? '28 Gauge' : '30 Gauge'})* at KES ${currentPrice}/m. Please check availability and delivery schedule.`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className={cn(
        "group relative bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col justify-between",
        "animate-slide-up"
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top Image Box */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 p-6 flex items-center justify-center">
        {/* Glow backdrop on hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-500 drop-shadow-2xl"
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-[11px] font-bold rounded-full shadow-md">
            {product.category}
          </span>
          {product.popular && (
            <span className="px-2.5 py-0.5 bg-amber-500/90 backdrop-blur-md text-slate-950 text-[10px] font-black rounded-full uppercase tracking-wider">
              ⭐ Top Seller
            </span>
          )}
        </div>

        {/* Compare Toggle Button */}
        {onToggleCompare && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleCompare(product.id);
            }}
            className={cn(
              "absolute top-3.5 right-3.5 z-20 px-2.5 py-1 rounded-xl text-[11px] font-semibold flex items-center gap-1 transition-all backdrop-blur-md",
              isCompared
                ? "bg-primary text-white border border-primary shadow-glow"
                : "bg-slate-900/80 text-slate-300 border border-slate-700 hover:border-slate-500"
            )}
          >
            <Scale className="w-3 h-3" />
            <span>{isCompared ? "Comparing" : "Compare"}</span>
          </button>
        )}

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
          <Link
            to={`/product/${product.slug}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-5 py-2.5 bg-white text-slate-950 font-bold text-xs rounded-xl shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary hover:text-white"
          >
            Inspect Technical Specs
          </Link>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <Link
              to={`/product/${product.slug}`}
              className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors"
            >
              {product.name}
            </Link>
            <span className="text-[11px] font-semibold text-accent flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> {product.warrantyYears}Y Warranty
            </span>
          </div>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Color swatches preview dots */}
          <div className="flex items-center gap-1.5 mt-3">
            <span className="text-[10px] text-slate-500 font-medium">Colors:</span>
            <div className="flex items-center gap-1">
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="w-3.5 h-3.5 rounded-full border border-slate-700 shadow-sm"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
            <span className="text-[10px] text-slate-500 ml-auto font-mono">{product.effectiveWidth}</span>
          </div>
        </div>

        {/* Pricing Tile */}
        <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
              {selectedGauge === 'gauge28' ? '28 Gauge (Heavy)' : '30 Gauge (Standard)'}
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-display font-extrabold text-xl text-primary">
                KES {currentPrice}
              </span>
              <span className="text-xs text-slate-400">/meter</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md transition-all hover:scale-105"
            title="Order via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-1">
          <Link
            to={`/product/${product.slug}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-1 py-3 px-4 bg-gradient-brand text-white font-bold text-xs rounded-xl text-center shadow-glow hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="p-3 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
            aria-label="Call Sales"
            title={`Call ${PHONE_NUMBER}`}
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
