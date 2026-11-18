import { ShieldCheck, Truck, BadgePercent, HeadphonesIcon, Award, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "AZ150 Protective Shield",
      description: "Patented 55% Aluminum-Zinc alloy delivers 4x the corrosion resistance of ordinary galvanized iron sheets.",
      badge: "Anti-Rust Formula",
    },
    {
      icon: BadgePercent,
      title: "Direct Mill Pricing",
      description: "Cut out middlemen and unauthorized markup. Buy directly from our automated roll-forming mills.",
      badge: "Best Value / m",
    },
    {
      icon: Truck,
      title: "Nationwide Fleet Transit",
      description: "Fast, reliable transit across all 47 counties in Kenya with free transport on qualifying orders > 100m.",
      badge: "24-48h Delivery",
    },
    {
      icon: Award,
      title: "15 to 20 Year Warranty",
      description: "Official manufacturer replacement warranty covering color retention, structural integrity, and perforation.",
      badge: "Official Certificate",
    },
    {
      icon: Wrench,
      title: "Free Custom Length Cutting",
      description: "We cut precision sheet lengths from 1.5m to 12.0m to eliminate roof joins and prevent leaking.",
      badge: "Zero Cut Fee",
    },
    {
      icon: HeadphonesIcon,
      title: "Certified Roofing Engineers",
      description: "Get technical support on rafter spacing, purlin spans, roof pitch angles, and material take-offs.",
      badge: "Free Consultation",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Glow Backdrops */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            <span>The Mabati Advantage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built Stronger. Coated Better. <br />
            <span className="text-gradient">Engineered to Last Generations.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Why thousands of Kenyan homeowners, quantity surveyors, and structural contractors insist on MRM.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-4 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold border border-slate-700">
                    {reason.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-[11px] font-semibold text-accent">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>MRM Quality Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
