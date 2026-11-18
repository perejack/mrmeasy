import { useState } from 'react';
import { HelpCircle, ChevronDown, Search, ShieldCheck } from 'lucide-react';

const FAQS = [
  {
    category: "Gauges & Quality",
    q: "What is the difference between 28 Gauge and 30 Gauge roofing sheets?",
    a: "28 Gauge is thicker (approx. 0.38mm-0.40mm) and engineered for maximum durability, hail resistance, and heavy rains. It is the gold standard for permanent residential homes and commercial plazas. 30 Gauge is slightly thinner (approx. 0.32mm) and provides a cost-effective, high-quality solution for rentals, sheds, perimeter fencing, and budget constructions.",
  },
  {
    category: "Ordering & Delivery",
    q: "Can I order custom sheet lengths to eliminate roof overlaps?",
    a: "Yes! Mabati Rolling Mills cuts your sheets to your exact custom lengths from 1.5 meters up to 12.0 meters at zero additional cutting charge. Custom lengths ensure fewer joints, faster installation, and zero water leakage risks.",
  },
  {
    category: "Ordering & Delivery",
    q: "How fast is delivery to upcountry construction sites?",
    a: "Within Nairobi, Kiambu, and Machakos, delivery is same-day or within 24 hours. For Mombasa, Nakuru, Kisumu, Eldoret, Mt. Kenya, and surrounding counties, delivery is handled via our regional factory depots within 24 to 48 hours. Orders above 100 meters qualify for free transportation.",
  },
  {
    category: "Gauges & Quality",
    q: "How does the Alu-Zinc coating protect against rust in coastal areas?",
    a: "Our sheets use an AZ150 coating containing 55% Aluminum, 43.5% Zinc, and 1.5% Silicon. The aluminum forms an inert protective oxide film against humidity and salt air, while zinc provides sacrificial protection at cut edges, lasting 4 times longer than conventional galvanized zinc sheets.",
  },
  {
    category: "Installation & Accessories",
    q: "What accessories do I need for a complete roof installation?",
    a: "For a complete watertight installation, you typically need: Roll-Top Ridge Caps for the top crests, Valley Gutters (if your roof has intersections), Barge Boards for side edges, and Self-Drilling Screws with weather-tight EPDM rubber washers (approx. 5 to 6 screws per linear meter).",
  },
  {
    category: "Installation & Accessories",
    q: "What is the minimum recommended roof pitch slope?",
    a: "For Box Profile (IT5), the minimum slope can be as low as 5°. For Versatile and Elegantile step-tile profiles, we recommend a minimum slope of 12° to 15° to ensure optimal water evacuation and aesthetic definition.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Gauges & Quality', 'Ordering & Delivery', 'Installation & Accessories'];

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) || item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-wider uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked <span className="text-gradient">Roofing Questions</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about gauges, custom cutting, delivery lead times, and factory warranties.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Search bar & Category filters */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics (e.g. 28 gauge, delivery, slope, warranty)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white border-primary shadow-glow'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion list */}
          <div className="space-y-3 pt-2">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900 border-primary/50 shadow-lg'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-primary' : 'text-slate-500'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 animate-slide-up">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}