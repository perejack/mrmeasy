import { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, MessageCircle, ShieldAlert, Layers } from 'lucide-react';
import { products, WHATSAPP_LINK } from '@/lib/products';

export default function RoofCalculator() {
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(8);
  const [pitchType, setPitchType] = useState<'gable' | 'hip' | 'monoslope'>('gable');
  const [pitchSlope, setPitchSlope] = useState(25);
  const [overhang, setOverhang] = useState(0.6);
  const [selectedProductSlug, setSelectedProductSlug] = useState(products[0].slug);
  const [selectedGauge, setSelectedGauge] = useState<'gauge28' | 'gauge30'>('gauge28');
  const [includeRidge, setIncludeRidge] = useState(true);
  const [includeScrews, setIncludeScrews] = useState(true);
  const [includeValley, setIncludeValley] = useState(false);

  const selectedProduct = products.find((p) => p.slug === selectedProductSlug) || products[0];

  const calculation = useMemo(() => {
    const slopeMultiplier = 1 / Math.cos((pitchSlope * Math.PI) / 180);
    const halfWidth = width / 2;
    
    let effectiveWidth = 1.0;
    if (selectedProduct.slug === 'corrugated-mabati' || selectedProduct.slug === 'dumuzas-unpainted') {
      effectiveWidth = 0.762;
    } else if (selectedProduct.slug === 'elegantile-mabati') {
      effectiveWidth = 0.98;
    }

    let roofArea = 0;
    let sheetLength = 0;
    let totalSheets = 0;
    let totalLinearMeters = 0;

    if (pitchType === 'gable') {
      sheetLength = Number(((halfWidth + overhang) * slopeMultiplier).toFixed(2));
      const sheetsPerSide = Math.ceil((length + overhang * 2) / effectiveWidth);
      totalSheets = sheetsPerSide * 2;
      totalLinearMeters = Number((totalSheets * sheetLength).toFixed(1));
      roofArea = Number((totalLinearMeters * effectiveWidth).toFixed(1));
    } else if (pitchType === 'hip') {
      sheetLength = Number(((halfWidth + overhang) * slopeMultiplier).toFixed(2));
      const perimeter = (length + width) * 2;
      totalSheets = Math.ceil((perimeter / effectiveWidth) * 0.75);
      totalLinearMeters = Number((totalSheets * sheetLength * 0.9).toFixed(1));
      roofArea = Number((totalLinearMeters * effectiveWidth).toFixed(1));
    } else {
      sheetLength = Number(((width + overhang * 2) * slopeMultiplier).toFixed(2));
      totalSheets = Math.ceil((length + overhang * 2) / effectiveWidth);
      totalLinearMeters = Number((totalSheets * sheetLength).toFixed(1));
      roofArea = Number((totalLinearMeters * effectiveWidth).toFixed(1));
    }

    const pricePerMeter = selectedProduct.prices[selectedGauge];
    const sheetCost = Math.round(totalLinearMeters * pricePerMeter);

    const ridgeCount = includeRidge && pitchType !== 'monoslope' ? Math.ceil((length + overhang * 2) / 2.8) : 0;
    const ridgeCost = ridgeCount * 850;

    const screwsPacks = includeScrews ? Math.max(1, Math.ceil((totalLinearMeters * 5) / 100)) : 0;
    const screwsCost = screwsPacks * 650;

    const valleyCount = includeValley ? Math.ceil((sheetLength * 2) / 2.8) : 0;
    const valleyCost = valleyCount * 920;

    const totalEstimate = sheetCost + ridgeCost + screwsCost + valleyCost;

    return {
      roofArea,
      sheetLength,
      totalSheets,
      totalLinearMeters,
      pricePerMeter,
      sheetCost,
      ridgeCount,
      ridgeCost,
      screwsPacks,
      screwsCost,
      valleyCount,
      valleyCost,
      totalEstimate,
    };
  }, [length, width, pitchType, pitchSlope, overhang, selectedProduct, selectedGauge, includeRidge, includeScrews, includeValley]);

  const handleWhatsAppQuote = () => {
    let msg = `*MRM ROOFING ESTIMATE REQUEST* 📐
• *Product:* ${selectedProduct.name} (${selectedGauge === 'gauge28' ? '28 Gauge Heavy' : '30 Gauge Standard'})
• *Building Dimensions:* ${length}m Length × ${width}m Width
• *Roof Style:* ${pitchType.toUpperCase()} (Pitch: ${pitchSlope}°)
• *Estimated Roof Area:* ~${calculation.roofArea} m²
• *Sheet Length:* ${calculation.sheetLength}m each
• *Total Sheets Required:* ${calculation.totalSheets} pcs (${calculation.totalLinearMeters}m total)
• *Sheet Cost:* KES ${calculation.sheetCost.toLocaleString()}`;

    if (calculation.ridgeCount > 0) {
      msg += `\n• *Ridge Caps (3m):* ${calculation.ridgeCount} pcs (KES ${calculation.ridgeCost.toLocaleString()})`;
    }
    if (calculation.screwsPacks > 0) {
      msg += `\n• *Roofing Screws:* ${calculation.screwsPacks} pkts (KES ${calculation.screwsCost.toLocaleString()})`;
    }
    if (calculation.valleyCount > 0) {
      msg += `\n• *Valley Gutters:* ${calculation.valleyCount} pcs (KES ${calculation.valleyCost.toLocaleString()})`;
    }
    msg += `\n\n*TOTAL ESTIMATE: ~KES ${calculation.totalEstimate.toLocaleString()}*
Please provide official discounted quote and delivery schedule.`;

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative overflow-hidden bg-slate-900 text-slate-100">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-foreground text-xs font-semibold tracking-wider uppercase">
            <Calculator className="w-4 h-4 text-primary" />
            <span>Interactive Roofing Estimator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Calculate Roof Sheets &amp; <span className="text-gradient">Cost Instantly</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Get precision measurements for your project. Adjust building length, slope, and gauge to see real-time sheets and pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6 bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Step 1: Dimensions */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-display font-semibold text-lg text-white">Building Dimensions (Meters)</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Length (Ridge Span)</span>
                    <span className="font-bold text-primary text-sm">{length} m</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="40"
                    step="0.5"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value))}
                    className="w-full accent-primary h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>4m</span>
                    <span>20m</span>
                    <span>40m</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Width (Span across)</span>
                    <span className="font-bold text-primary text-sm">{width} m</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="25"
                    step="0.5"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    className="w-full accent-primary h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>3m</span>
                    <span>14m</span>
                    <span>25m</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Roof Pitch */}
            <div className="pt-5 border-t border-slate-700/60">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-display font-semibold text-lg text-white">Roof Architecture Style</h3>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { id: 'gable', label: 'Gable (2 Slopes)', desc: 'Standard Dual Slope' },
                  { id: 'hip', label: 'Hip (4 Slopes)', desc: 'Pyramid / Hip Ends' },
                  { id: 'monoslope', label: 'Mono-pitch / Shed', desc: 'Single Direction' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setPitchType(type.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      pitchType === type.id
                        ? 'bg-primary/20 border-primary text-white shadow-glow'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <p className="font-semibold text-xs sm:text-sm">{type.label}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">{type.desc}</p>
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Pitch Slope Angle</span>
                  <span className="font-bold text-accent">{pitchSlope}° ({pitchSlope < 20 ? 'Low Slope' : pitchSlope > 30 ? 'Steep Architectural' : 'Standard Pitch'})</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="45"
                  step="1"
                  value={pitchSlope}
                  onChange={(e) => setPitchSlope(parseInt(e.target.value))}
                  className="w-full accent-accent h-2 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Step 3: Profile & Gauge */}
            <div className="pt-5 border-t border-slate-700/60">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">3</span>
                  <h3 className="font-display font-semibold text-lg text-white">Choose Profile &amp; Gauge</h3>
                </div>

                <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setSelectedGauge('gauge28')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                      selectedGauge === 'gauge28'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    28 Gauge (Heavy Duty)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedGauge('gauge30')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                      selectedGauge === 'gauge30'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    30 Gauge (Standard)
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {products.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setSelectedProductSlug(prod.slug)}
                    className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                      selectedProductSlug === prod.slug
                        ? 'bg-primary/20 border-primary text-white ring-2 ring-primary/50'
                        : 'bg-slate-900/50 border-slate-700/80 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <img src={prod.image} alt={prod.name} className="w-8 h-8 object-contain rounded bg-slate-800 p-0.5" />
                      <div>
                        <p className="font-semibold text-xs text-white leading-tight">{prod.name}</p>
                        <span className="text-[10px] text-slate-400">{prod.category}</span>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-primary mt-1">
                      KES {prod.prices[selectedGauge]}/m
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Accessories */}
            <div className="pt-5 border-t border-slate-700/60">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-semibold">Recommended Accessories</h4>
              <div className="grid sm:grid-cols-3 gap-3">
                <label className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700 cursor-pointer hover:border-slate-500">
                  <input
                    type="checkbox"
                    checked={includeRidge}
                    onChange={(e) => setIncludeRidge(e.target.checked)}
                    className="w-4 h-4 rounded text-primary accent-primary"
                  />
                  <div className="text-xs">
                    <p className="font-medium text-white">Ridge Caps (3m)</p>
                    <p className="text-[10px] text-slate-400">KES 850/pc</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700 cursor-pointer hover:border-slate-500">
                  <input
                    type="checkbox"
                    checked={includeScrews}
                    onChange={(e) => setIncludeScrews(e.target.checked)}
                    className="w-4 h-4 rounded text-primary accent-primary"
                  />
                  <div className="text-xs">
                    <p className="font-medium text-white">EPDM Screws (100pk)</p>
                    <p className="text-[10px] text-slate-400">KES 650/pkt</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700 cursor-pointer hover:border-slate-500">
                  <input
                    type="checkbox"
                    checked={includeValley}
                    onChange={(e) => setIncludeValley(e.target.checked)}
                    className="w-4 h-4 rounded text-primary accent-primary"
                  />
                  <div className="text-xs">
                    <p className="font-medium text-white">Valley Gutters</p>
                    <p className="text-[10px] text-slate-400">KES 920/pc</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-primary/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Live Quotation Breakdown</span>
                  <h3 className="font-display text-xl font-bold text-white">{selectedProduct.name}</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold">
                  {selectedGauge === 'gauge28' ? '28 Gauge Heavy' : '30 Gauge Standard'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                  <span className="text-[11px] text-slate-400 block">Total Roof Area</span>
                  <span className="font-display font-bold text-lg text-white">~{calculation.roofArea} m²</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                  <span className="text-[11px] text-slate-400 block">Sheet Cut Length</span>
                  <span className="font-display font-bold text-lg text-primary">{calculation.sheetLength} m</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                  <span className="text-[11px] text-slate-400 block">Total Sheets Needed</span>
                  <span className="font-display font-bold text-lg text-white">{calculation.totalSheets} pcs</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                  <span className="text-[11px] text-slate-400 block">Total Linear Meters</span>
                  <span className="font-display font-bold text-lg text-white">{calculation.totalLinearMeters} m</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-700/80 pt-4 mb-6">
                <div className="flex justify-between">
                  <span>Roofing Sheets ({calculation.totalLinearMeters}m @ KES {calculation.pricePerMeter}/m)</span>
                  <span className="font-semibold text-white">KES {calculation.sheetCost.toLocaleString()}</span>
                </div>
                {calculation.ridgeCount > 0 && (
                  <div className="flex justify-between">
                    <span>Ridge Caps ({calculation.ridgeCount} pcs @ KES 850)</span>
                    <span className="font-semibold text-white">KES {calculation.ridgeCost.toLocaleString()}</span>
                  </div>
                )}
                {calculation.screwsPacks > 0 && (
                  <div className="flex justify-between">
                    <span>Roofing Screws ({calculation.screwsPacks} pkts @ KES 650)</span>
                    <span className="font-semibold text-white">KES {calculation.screwsCost.toLocaleString()}</span>
                  </div>
                )}
                {calculation.valleyCount > 0 && (
                  <div className="flex justify-between">
                    <span>Valley Gutters ({calculation.valleyCount} pcs @ KES 920)</span>
                    <span className="font-semibold text-white">KES {calculation.valleyCost.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-primary/15 border border-primary/40 mb-6">
                <span className="text-xs text-primary-foreground/90 font-medium block">Estimated Total Factory-Direct Cost</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    KES {calculation.totalEstimate.toLocaleString()}
                  </span>
                  <span className="text-xs text-accent font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Incl. VAT
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order Specification on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-primary" />
                  Custom lengths up to 12m cut free at factory. Direct transit available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}