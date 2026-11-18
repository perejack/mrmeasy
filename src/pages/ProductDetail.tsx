import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, MessageCircle, CheckCircle2, ShieldCheck, Truck, Star, Sparkles, Scale, Layers, HelpCircle } from "lucide-react";
import { getProductBySlug, products, PHONE_NUMBER, WHATSAPP_LINK, PRODUCT_COLORS } from "@/lib/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductCard from "@/components/ProductCard";
import QuickQuoteModal from "@/components/QuickQuoteModal";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  const [selectedGauge, setSelectedGauge] = useState<'gauge28' | 'gauge30'>('gauge28');
  const [selectedColor, setSelectedColor] = useState(product ? product.colors[0] : PRODUCT_COLORS[0]);
  const [calculatedMeters, setCalculatedMeters] = useState<number>(100);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center space-y-4">
          <h1 className="font-display text-3xl font-bold">Profile Not Found</h1>
          <p className="text-slate-400 text-sm">The roofing profile you requested does not exist or has moved.</p>
          <Link to="/" className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold text-xs">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const currentPrice = product.prices[selectedGauge];
  const totalCost = calculatedMeters * currentPrice;
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  const handleWhatsAppOrder = (gaugeLabel: string, price: number) => {
    const message = `*MRM DIRECT ORDER INQUIRY* 🏗️
• *Product:* ${product.name}
• *Gauge Thickness:* ${gaugeLabel} (KES ${price}/m)
• *Color Shade:* ${selectedColor.name}
• *Quantity:* ${calculatedMeters} meters
• *Estimated Subtotal:* KES ${totalCost.toLocaleString()}

Please confirm factory lead time and delivery schedule.`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <div className="pt-6 pb-4 bg-slate-900/60 border-b border-slate-800">
        <div className="container">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/#products" className="hover:text-primary transition-colors">
              Catalog
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Image Gallery Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex items-center justify-center">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full shadow-md">
                      {product.category}
                    </span>
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto max-h-[380px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />

                  {/* Active Color Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: selectedColor.hex }} />
                      <span className="text-xs font-semibold text-white">{selectedColor.name}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">{product.finish}</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
                    <ShieldCheck className="w-5 h-5 text-accent mx-auto" />
                    <span className="font-bold text-xs text-white block">{product.warrantyYears} Years</span>
                    <span className="text-[10px] text-slate-400">Anti-Fade Warranty</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
                    <Truck className="w-5 h-5 text-primary mx-auto" />
                    <span className="font-bold text-xs text-white block">24-48h</span>
                    <span className="text-[10px] text-slate-400">Nationwide Transit</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
                    <Layers className="w-5 h-5 text-emerald-400 mx-auto" />
                    <span className="font-bold text-xs text-white block">AZ150 Alloy</span>
                    <span className="text-[10px] text-slate-400">4x Rust Defense</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details & Purchase Form Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <Link
                  to="/#products"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-primary transition-colors mb-3"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to all roofing profiles</span>
                </Link>

                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  {product.name}
                </h1>
                <p className="text-base text-primary font-semibold mt-1">{product.tagline}</p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3">
                  {product.description}
                </p>
              </div>

              {/* Color Swatch Selector */}
              <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white">Select Architectural Color</h4>
                  <span className="text-xs font-semibold text-primary">{selectedColor.name}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor.name === c.name;
                    return (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`p-2.5 rounded-2xl border flex items-center gap-2 transition-all ${
                          isSelected
                            ? 'bg-slate-800 border-primary shadow-glow ring-2 ring-primary/40'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full border border-white/20 shadow-sm" style={{ backgroundColor: c.hex }} />
                        <span className="text-xs font-medium text-slate-200">{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Interactive Pricing & Quantity Estimator */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-primary/40 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <h3 className="font-display font-bold text-lg text-white">Select Thickness &amp; Quantity</h3>
                  
                  {/* Gauge Toggle Buttons */}
                  <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setSelectedGauge('gauge28')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        selectedGauge === 'gauge28'
                          ? 'bg-primary text-white shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      28 Gauge (Heavy)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedGauge('gauge30')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        selectedGauge === 'gauge30'
                          ? 'bg-primary text-white shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      30 Gauge (Standard)
                    </button>
                  </div>
                </div>

                {/* Meter Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Estimated Total Length Needed</span>
                    <span className="font-bold text-primary font-mono text-sm">{calculatedMeters} meters</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={calculatedMeters}
                    onChange={(e) => setCalculatedMeters(parseInt(e.target.value))}
                    className="w-full accent-primary h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>10m</span>
                    <span>100m (Qualifies for Free Transit)</span>
                    <span>500m</span>
                  </div>
                </div>

                {/* Total Cost Display Box */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                      Estimated Factory-Direct Total ({selectedGauge === 'gauge28' ? '28 Gauge' : '30 Gauge'} @ KES {currentPrice}/m)
                    </span>
                    <span className="font-display font-black text-2xl sm:text-3xl text-white mt-1 block">
                      KES {totalCost.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Incl. VAT
                  </span>
                </div>

                {/* Ordering Buttons */}
                <div className="space-y-3 pt-1">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppOrder(selectedGauge === 'gauge28' ? '28 Gauge (Heavy)' : '30 Gauge (Standard)', currentPrice)}
                    className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm sm:text-base rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Order Specification On WhatsApp</span>
                  </button>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-slate-700"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>Call Sales: {PHONE_NUMBER}</span>
                    </a>

                    <Link
                      to="/#calculator"
                      className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-slate-700"
                    >
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Launch Full Roof Calculator</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-white">Technical Specifications</h3>
                <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden">
                  <div className="divide-y divide-slate-800 text-xs sm:text-sm">
                    <div className="grid grid-cols-2 p-4">
                      <span className="text-slate-400">Effective Cover Width</span>
                      <span className="font-semibold text-white">{product.effectiveWidth}</span>
                    </div>
                    <div className="grid grid-cols-2 p-4 bg-slate-950/40">
                      <span className="text-slate-400">Minimum Recommended Slope</span>
                      <span className="font-semibold text-white">{product.minPitch}</span>
                    </div>
                    <div className="grid grid-cols-2 p-4">
                      <span className="text-slate-400">Surface Coating System</span>
                      <span className="font-semibold text-white">{product.finish}</span>
                    </div>
                    <div className="grid grid-cols-2 p-4 bg-slate-950/40">
                      <span className="text-slate-400">Warranty Coverage</span>
                      <span className="font-semibold text-accent">{product.warrantyYears} Years Factory Replacement</span>
                    </div>
                    <div className="grid grid-cols-2 p-4">
                      <span className="text-slate-400">Recommended Architecture</span>
                      <span className="font-semibold text-white">{product.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-white">Engineered Advantages</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feat, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Compare Other Popular Profiles
              </h2>
              <p className="text-xs text-slate-400 mt-1">Explore alternative designs for your architectural style</p>
            </div>
            <Link to="/#products" className="text-xs font-semibold text-primary hover:underline">
              View All
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p, index) => (
              <ProductCard key={p.id} product={p} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultProductSlug={product.slug}
      />
    </div>
  );
};

export default ProductDetail;
