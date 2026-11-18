import { useState } from 'react';
import { Truck, MapPin, Clock, ShieldCheck, CheckCircle2, MessageCircle, PhoneCall } from 'lucide-react';
import { KENYA_COUNTIES, PHONE_NUMBER, WHATSAPP_LINK } from '@/lib/products';

export default function DeliveryEstimator() {
  const [selectedCounty, setSelectedCounty] = useState(KENYA_COUNTIES[0]);
  const [estimatedMeters, setEstimatedMeters] = useState<number>(120);

  const handleWhatsAppDelivery = () => {
    const text = `Hello MRM Logistics! I'm planning an order of ~${estimatedMeters} meters to *${selectedCounty.county}*. Please confirm delivery rates and schedule.`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="delivery" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-wider uppercase">
            <Truck className="w-4 h-4" />
            <span>Nationwide Express Logistics</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Direct Delivery Across <span className="text-gradient">All 47 Kenya Counties</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            From our state-of-the-art roll-forming mills directly to your construction site with zero middleman markups.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* County Selector Box */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Select Your Destination</span>
            </h3>

            <div className="space-y-3">
              <label className="text-xs text-slate-400 block font-medium">Destination Region / County</label>
              <select
                value={selectedCounty.county}
                onChange={(e) => {
                  const c = KENYA_COUNTIES.find((item) => item.county === e.target.value);
                  if (c) setSelectedCounty(c);
                }}
                className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 text-white text-sm font-medium focus:ring-2 focus:ring-primary focus:outline-none"
              >
                {KENYA_COUNTIES.map((c) => (
                  <option key={c.county} value={c.county} className="bg-slate-900 text-white">
                    {c.county}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Estimated Order Quantity</span>
                <span className="font-bold text-primary">{estimatedMeters} meters</span>
              </div>
              <input
                type="range"
                min="30"
                max="500"
                step="10"
                value={estimatedMeters}
                onChange={(e) => setEstimatedMeters(parseInt(e.target.value))}
                className="w-full accent-primary h-2 bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>30m (Small project)</span>
                <span>100m+ (FREE Transit Qualifying)</span>
                <span>500m</span>
              </div>
            </div>

            {/* Quick benefits */}
            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Bubble-wrapped &amp; strapped protective transit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Driver offloading support directly at site</span>
              </div>
            </div>
          </div>

          {/* Delivery Details Card */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-b from-slate-900 to-slate-850 border border-primary/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Route Transit Breakdown</span>
                  <h4 className="font-display font-bold text-xl text-white mt-0.5">{selectedCounty.county}</h4>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-glow">
                  <Truck className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <span className="text-xs text-slate-400 block">Estimated Lead Time</span>
                      <span className="font-display font-bold text-base text-white">{selectedCounty.transitDays}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold">Fast Fleet</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Logistics Policy</span>
                    <span className="font-semibold text-sm text-primary">{selectedCounty.feeNote}</span>
                  </div>
                  {estimatedMeters >= 100 && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                      FREE Transport
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppDelivery}
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book Delivery &amp; Confirm Rates</span>
                </button>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-2xl flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Dispatch Desk ({PHONE_NUMBER})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}