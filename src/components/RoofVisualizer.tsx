import { useState } from 'react';
import { Palette, Sparkles, Check, ArrowRight, ShieldCheck, Eye } from 'lucide-react';
import { PRODUCT_COLORS, products, ProductColor } from '@/lib/products';
import { Link } from 'react-router-dom';

export default function RoofVisualizer() {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(PRODUCT_COLORS[0]);
  const [finishType, setFinishType] = useState<'matte' | 'gloss' | 'stone'>('matte');
  const [roofProfile, setRoofProfile] = useState<'versatile' | 'box' | 'corrugated'>('versatile');

  // Realistic visual gradients / styles depending on color & finish
  const getRoofSurfaceStyle = () => {
    let baseHex = selectedColor.hex;
    if (selectedColor.name === 'Galvanized Silver') {
      return {
        background: 'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 40%, #e2e8f0 70%, #64748b 100%)',
        filter: finishType === 'gloss' ? 'contrast(1.2) brightness(1.1)' : 'none',
      };
    }

    if (finishType === 'gloss') {
      return {
        backgroundColor: baseHex,
        backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, rgba(0,0,0,0.4) 100%)',
        boxShadow: 'inset 0 10px 30px rgba(255,255,255,0.2)',
      };
    } else if (finishType === 'stone') {
      return {
        backgroundColor: baseHex,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0), radial-gradient(rgba(0,0,0,0.25) 1px, transparent 0)',
        backgroundSize: '6px 6px',
        backgroundPosition: '0 0, 3px 3px',
      };
    } else {
      // Matte
      return {
        backgroundColor: baseHex,
        backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.25) 100%)',
      };
    }
  };

  const matchingProducts = products.filter((p) => 
    p.colors.some((c) => c.name === selectedColor.name)
  );

  return (
    <section id="visualizer" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-wider uppercase">
            <Palette className="w-4 h-4" />
            <span>Interactive Color &amp; Finish Visualizer</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Preview Colors On Your <span className="text-gradient">Dream Architecture</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Test our certified UV-resistant architectural color palettes and textured finishes in real time.
          </p>
        </div>

        {/* Visualizer Workbench */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Visual House Model (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border border-slate-700/70 shadow-2xl p-6 sm:p-10">
              {/* Badge overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedColor.hex }} />
                <span className="font-semibold text-white">{selectedColor.name}</span>
                <span className="text-slate-400">·</span>
                <span className="text-accent uppercase text-[10px] font-bold">{finishType}</span>
              </div>

              {/* Dynamic Simulated House Roof Vector Display */}
              <div className="relative w-full aspect-[16/10] max-h-[380px] flex items-center justify-center pt-8">
                {/* Sky & Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-950/40 via-transparent to-slate-900/80 rounded-2xl" />

                {/* House Structure */}
                <div className="relative z-10 w-full max-w-[480px]">
                  {/* Roof Top Ridge */}
                  <div className="w-full flex justify-center">
                    <div 
                      className="w-16 h-3 rounded-t-sm shadow-md transition-all duration-500"
                      style={getRoofSurfaceStyle()}
                    />
                  </div>

                  {/* Main Roof Pitch Triangles */}
                  <div className="relative flex justify-center items-end -mt-1">
                    {/* Left Roof Slope */}
                    <div 
                      className="w-1/2 h-36 sm:h-44 rounded-tl-2xl relative overflow-hidden transition-all duration-500 shadow-xl"
                      style={{
                        ...getRoofSurfaceStyle(),
                        clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                        transform: 'skewX(-15deg)',
                      }}
                    >
                      {/* Corrugation / Tile step lines */}
                      <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_16px,rgba(0,0,0,0.5)_16px,rgba(0,0,0,0.5)_18px)]" />
                      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(255,255,255,0.4)_24px,rgba(255,255,255,0.4)_26px)]" />
                    </div>

                    {/* Right Roof Slope */}
                    <div 
                      className="w-1/2 h-36 sm:h-44 rounded-tr-2xl relative overflow-hidden transition-all duration-500 shadow-xl"
                      style={{
                        ...getRoofSurfaceStyle(),
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                        transform: 'skewX(15deg)',
                      }}
                    >
                      <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_16px,rgba(0,0,0,0.5)_16px,rgba(0,0,0,0.5)_18px)]" />
                      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(255,255,255,0.4)_24px,rgba(255,255,255,0.4)_26px)]" />
                    </div>
                  </div>

                  {/* Fascia & Gutter Line */}
                  <div className="w-[106%] -ml-[3%] h-3.5 bg-slate-900 border-b border-primary/50 rounded-sm shadow-md flex items-center justify-between px-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  </div>

                  {/* House Body (Walls & Windows) */}
                  <div className="w-[96%] mx-auto bg-slate-200 h-28 sm:h-36 rounded-b-xl shadow-2xl p-4 flex justify-between items-end border-t-2 border-slate-300 relative">
                    {/* Modern Left Window */}
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-slate-900 rounded-lg p-1 shadow-inner border border-slate-400">
                      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
                        <div className="bg-sky-400/40 rounded-sm" />
                        <div className="bg-sky-300/50 rounded-sm" />
                        <div className="bg-sky-500/40 rounded-sm" />
                        <div className="bg-sky-400/30 rounded-sm" />
                      </div>
                    </div>

                    {/* Modern Entrance Door */}
                    <div className="w-14 sm:w-16 h-22 sm:h-26 bg-amber-900 rounded-t-lg border-2 border-amber-950 p-1 flex items-center justify-end pr-1 shadow-md">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-sm" />
                    </div>

                    {/* Right Window */}
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-slate-900 rounded-lg p-1 shadow-inner border border-slate-400">
                      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
                        <div className="bg-sky-400/40 rounded-sm" />
                        <div className="bg-sky-300/50 rounded-sm" />
                        <div className="bg-sky-500/40 rounded-sm" />
                        <div className="bg-sky-400/30 rounded-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Guarantee Ribbon */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-accent font-medium">
                  <ShieldCheck className="w-4 h-4" /> 100% Anti-Fade Color Technology
                </span>
                <span>AZ150 Protective Primer Undercoat</span>
              </div>
            </div>
          </div>

          {/* Color & Finish Selection Controls (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Color Swatches */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg text-white">Select Roof Color</h3>
                <span className="text-xs font-semibold text-primary">{selectedColor.name}</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {PRODUCT_COLORS.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col items-center gap-2.5 ${
                        isSelected
                          ? 'bg-slate-800 border-primary ring-2 ring-primary/40 shadow-glow'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-transform"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && <Check className="w-5 h-5 text-white drop-shadow" />}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-200 text-center leading-tight">
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Surface Finish Selector */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl">
              <h3 className="font-display font-bold text-lg text-white mb-4">Texture &amp; Finish</h3>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'matte', label: 'Ultra-Matte', desc: 'Non-glare luxury' },
                  { id: 'gloss', label: 'High-Gloss', desc: 'Vibrant shine' },
                  { id: 'stone', label: 'Stone-Coated', desc: 'Granular texture' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFinishType(f.id as any)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      finishType === f.id
                        ? 'bg-primary/20 border-primary text-white shadow-md'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <p className="font-bold text-xs sm:text-sm">{f.label}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{f.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Available Matching Products */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Available In This Color</span>
                <span className="text-xs text-primary font-bold">{matchingProducts.length} Profiles</span>
              </div>
              <div className="space-y-2">
                {matchingProducts.slice(0, 3).map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/product/${prod.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={prod.image} alt={prod.name} className="w-9 h-9 object-contain rounded bg-slate-900 p-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white group-hover:text-primary transition-colors">{prod.name}</p>
                        <p className="text-[10px] text-slate-400">{prod.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">KES {prod.prices.gauge28}/m</span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}