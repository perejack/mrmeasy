import { useState } from 'react';
import { Layers, ShieldCheck, Sun, Umbrella, Sparkles, CheckCircle2 } from 'lucide-react';

const STEEL_LAYERS = [
  {
    id: 1,
    name: "Layer 1: UV-Resistant Baked Color Topcoat",
    thickness: "25-30 Microns",
    description: "Premium thermoset polyester resin baked at 240°C. Resists severe tropical sunlight, prevents chalking, and maintains vibrant shade for over 20 years.",
    color: "bg-gradient-to-r from-amber-500 to-orange-600",
    badge: "Anti-Fade Shield",
  },
  {
    id: 2,
    name: "Layer 2: Corrosion-Inhibiting Epoxy Primer",
    thickness: "5-7 Microns",
    description: "Chemically bonded primer formulated with active zinc-chromate inhibitors to seal against microscopic moisture ingress.",
    color: "bg-gradient-to-r from-yellow-600 to-amber-700",
    badge: "Moisture Barrier",
  },
  {
    id: 3,
    name: "Layer 3: AZ150 Zinc-Aluminum Alloy Coating",
    thickness: "150 g/m² Double-Sided",
    description: "Patented 55% Aluminum & 45% Zinc metallurgical bond. Aluminum creates an impenetrable barrier; Zinc provides sacrificial galvanic edge-protection.",
    color: "bg-gradient-to-r from-slate-400 to-slate-500",
    badge: "Sacrificial Galvanic Armor",
  },
  {
    id: 4,
    name: "Layer 4: High-Tensile Steel Core (G550)",
    thickness: "0.32mm - 0.40mm",
    description: "Cold-rolled structural steel with 550 MPa minimum yield strength. Resists severe hail, fallen tree branches, and heavy walking load without permanent denting.",
    color: "bg-gradient-to-r from-slate-700 to-slate-900",
    badge: "Structural High-Tensile Core",
  },
  {
    id: 5,
    name: "Layer 5: Protective Underside Backer Coat",
    thickness: "10 Microns Grey Epoxy",
    description: "Resistant to condensation, attic humidity, and ammonia fumes in agricultural poultry and livestock structures.",
    color: "bg-gradient-to-r from-slate-500 to-slate-600",
    badge: "Under-Roof Seal",
  },
];

export default function DurabilityShowcase() {
  const [activeLayer, setActiveLayer] = useState(STEEL_LAYERS[0]);

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
            <Layers className="w-4 h-4" />
            <span>5-Layer Metallurgical Technology</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Why Our Steel Outlasts <span className="text-gradient">Standard Mabati by 4x</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Click on each protective layer below to explore how MRM's multi-tier engineering shields your roof from coastal corrosion, tropical UV rays, and extreme weather.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Exploded 5-Layer Stack (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {STEEL_LAYERS.map((layer, index) => {
              const isSelected = activeLayer.id === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayer(layer)}
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 transform ${
                    isSelected
                      ? 'bg-slate-800 border-primary scale-[1.02] shadow-glow'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-600 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${layer.color} flex items-center justify-center font-bold text-xs text-white shadow-md`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm sm:text-base text-white">{layer.name}</h4>
                        <span className="text-xs text-slate-400 font-mono">{layer.thickness}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold hidden sm:inline-block ${
                        isSelected ? 'bg-primary/20 text-primary border border-primary/40' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {layer.badge}
                      </span>
                      <div className={`w-3 h-3 rounded-full border-2 ${isSelected ? 'border-primary bg-primary' : 'border-slate-600'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Layer Deep-Dive Info Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 border border-primary/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
                <div className={`w-12 h-12 rounded-2xl ${activeLayer.color} flex items-center justify-center shadow-lg`}>
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-primary font-bold">Layer {activeLayer.id} of 5</span>
                  <h3 className="font-display font-bold text-lg text-white leading-tight">{activeLayer.name}</h3>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>{activeLayer.description}</p>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Layer Specification:</span>
                    <span className="font-mono font-bold text-white">{activeLayer.thickness}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Core Purpose:</span>
                    <span className="font-semibold text-accent">{activeLayer.badge}</span>
                  </div>
                </div>
              </div>

              {/* Trust Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2 text-xs">
                  <Sun className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>50°C Thermal Heat Reflective</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2 text-xs">
                  <Umbrella className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>100% Saline Rust Resistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}