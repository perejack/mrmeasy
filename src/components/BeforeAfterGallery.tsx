import { useState } from 'react';
import { Star, CheckCircle, MapPin, Quote, ArrowLeftRight } from 'lucide-react';
import heroHouse from '@/assets/hero-house.jpg';
import aboutImage from '@/assets/about-image.jpg';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Arch. David Kimani",
    role: "Lead Architect, Apex Horizon Developments",
    location: "Karen, Nairobi",
    rating: 5,
    comment: "We used Versatile 28 Gauge Charcoal Slate for a 12-villa gated community in Karen. The step tile profile delivered the Mediterranean luxury look we wanted with zero maintenance callbacks.",
    product: "Versatile Mabati (Charcoal Slate)",
  },
  {
    id: 2,
    name: "Eng. Beatrice Mwangi",
    role: "Project Contractor",
    location: "Runda / Kiambu",
    rating: 5,
    comment: "The precision custom cut lengths up to 9.2m eliminated all transverse overlaps on a steep 30° roof pitch. Delivery arrived on site within 24 hours of placing the order.",
    product: "Box Profile IT5 (Forest Emerald)",
  },
  {
    id: 3,
    name: "John & Grace Mutua",
    role: "Homeowners",
    location: "Nakuru Milimani",
    rating: 5,
    comment: "We replaced our old rusted 30-year galvanized roof with Elegantile Crimson Brick. The house temperature dropped noticeably and the curb appeal went through the roof!",
    product: "Elegantile Mabati (Crimson Brick)",
  },
];

export default function BeforeAfterGallery() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-wider uppercase">
            <ArrowLeftRight className="w-4 h-4" />
            <span>Real Project Transformations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Before &amp; After: <span className="text-gradient">Architectural Roof Restorations</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Drag the interactive slider to see how premium MRM mabati completely transforms older residential properties.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 select-none aspect-[16/9] max-h-[460px]">
            {/* After Image (Full background) */}
            <img
              src={heroHouse}
              alt="After MRM Premium Mabati Roofing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold shadow-lg">
              ✨ AFTER: MRM Versatile Charcoal
            </div>

            {/* Before Image (Clipped by slider) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={aboutImage}
                alt="Before Roof Renovation"
                className="absolute inset-0 w-full h-full object-cover filter sepia-[0.3] contrast-90 brightness-90"
                style={{ width: '100%', maxWidth: 'none' }}
              />
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-slate-300 text-xs font-bold shadow-lg">
                ⚠️ BEFORE: Faded Weathered Roof
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30 cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white shadow-glow flex items-center justify-center -ml-0.5 border-2 border-white">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Range input controller over the whole element */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-40 w-full h-full"
              aria-label="Drag to compare before and after roof transformation"
            />
          </div>
          <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
            <span>👈 Drag or swipe slider to compare transformation 👉</span>
          </p>
        </div>

        {/* Customer Testimonials Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-display font-bold text-2xl text-white">Verified Client Experiences</h3>
            <p className="text-xs text-slate-400 mt-1">Trusted by leading Kenyan architects, contractors, and families</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-primary/40 transition-all shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Verified Project
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                  <div className="flex items-center gap-1 text-[11px] text-primary mt-1 font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}