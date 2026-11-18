import { useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { products, KENYA_COUNTIES, WHATSAPP_LINK } from '@/lib/products';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProductSlug?: string;
}

export default function QuickQuoteModal({
  isOpen,
  onClose,
  defaultProductSlug,
}: QuickQuoteModalProps) {
  if (!isOpen) return null;

  const [selectedSlug, setSelectedSlug] = useState(defaultProductSlug || products[0].slug);
  const [gauge, setGauge] = useState<'28' | '30'>('28');
  const [approxMeters, setApproxMeters] = useState<string>('120');
  const [county, setCounty] = useState<string>('Nairobi & Kiambu');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');

  const currentProduct = products.find((p) => p.slug === selectedSlug) || products[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*MRM DIRECT FACTORY QUOTE REQUEST* 🏗️
• *Client Name:* ${clientName || 'Valued Client'}
• *Phone:* ${clientPhone || 'Not provided'}
• *Product:* ${currentProduct.name} (${gauge} Gauge)
• *Estimated Length/Quantity:* ${approxMeters} meters
• *Delivery Destination:* ${county}

Please send me an official quotation with current discounted rates and delivery schedule.`;

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-lg shadow-2xl text-white p-6 sm:p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-primary tracking-wider uppercase">Direct Factory Desk</span>
        </div>

        <h3 className="font-display font-bold text-2xl text-white mb-2">Request an Instant Quote</h3>
        <p className="text-xs text-slate-400 mb-6">
          Get verified factory-direct pricing, custom cutting advice, and free delivery eligibility.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Samuel Omondi"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">Phone Number</label>
              <input
                type="tel"
                placeholder="e.g. 0712 345 678"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1.5">Select Roofing Profile</label>
            <select
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-primary focus:outline-none"
            >
              {products.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} — KES {p.prices.gauge28}/m (28G)
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">Gauge Thickness</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGauge('28')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    gauge === '28'
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  28G (Heavy)
                </button>
                <button
                  type="button"
                  onClick={() => setGauge('30')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    gauge === '30'
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  30G (Standard)
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">Est. Meters Needed</label>
              <input
                type="number"
                value={approxMeters}
                onChange={(e) => setApproxMeters(e.target.value)}
                placeholder="e.g. 150"
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1.5">Delivery County</label>
            <select
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-primary focus:outline-none"
            >
              {KENYA_COUNTIES.map((c) => (
                <option key={c.county} value={c.county}>
                  {c.county} ({c.transitDays})
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all mt-6"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Generate WhatsApp Quotation</span>
          </button>

          <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            Instant response from certified MRM roofing engineers within 5 minutes.
          </p>
        </form>
      </div>
    </div>
  );
}