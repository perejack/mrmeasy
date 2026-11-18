import { ArrowRight, Phone, ShieldCheck, Award, Sparkles, Calculator, CheckCircle2, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/products";
import heroImage from "@/assets/hero-house.jpg";

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

const Hero = ({ onOpenQuoteModal }: HeroProps) => {
  const stats = [
    { value: "25+", label: "Years Excellence", desc: "Kenya's #1 Roofing Brand" },
    { value: "50,000+", label: "Roofs Supplied", desc: "Residential & Commercial" },
    { value: "15-20 Yrs", label: "Factory Warranty", desc: "AZ150 Anti-Rust Alloy" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-8 pb-16 overflow-hidden bg-slate-950 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-orange-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 py-6 md:py-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 animate-slide-up">
            {/* Live Trust Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-900/90 border border-slate-800 rounded-full shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-slate-200 tracking-wide">
                Direct From Rolling Mills · 100% Authentic Guaranteed
              </span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Elevate Your Home With <br className="hidden sm:inline" />
              <span className="text-gradient">Architectural Mabati</span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Engineered with 55% Aluminum-Zinc alloy and baked UV-resistant resin. 
              Enjoy 4x longer rust-free lifespan, cooler indoor temperatures, and authentic European tile aesthetics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-brand hover:opacity-95 text-white font-bold text-sm sm:text-base rounded-2xl shadow-glow transition-all hover:scale-[1.02] group"
              >
                <Calculator className="w-5 h-5 text-white" />
                <span>Calculate Your Roof</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm sm:text-base rounded-2xl border border-slate-700/80 shadow-lg transition-all hover:border-slate-500"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Request Custom Quote</span>
              </button>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-medium text-sm rounded-2xl border border-slate-800 transition-all sm:hidden"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Dispatch: {PHONE_NUMBER}</span>
              </a>
            </div>

            {/* Live Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-primary leading-none">{stat.label}</p>
                  <p className="text-[11px] text-slate-400 hidden sm:block">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 aspect-[4/3] sm:aspect-square max-h-[500px]">
                <img
                  src={heroImage}
                  alt="Modern architectural home with premium MRM Versatile Charcoal roofing"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Overlay Badge Top */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-bold text-white">Versatile Charcoal Matte</span>
                </div>

                {/* Overlay Bottom Price Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Factory-Direct From</span>
                    <span className="font-display font-extrabold text-xl sm:text-2xl text-white">KES 376<span className="text-xs font-normal text-slate-400">/meter</span></span>
                  </div>
                  <a
                    href="#products"
                    className="px-4 py-2 bg-primary hover:bg-primary/90 text-white font-bold text-xs rounded-xl shadow-glow transition-all"
                  >
                    View Catalog
                  </a>
                </div>
              </div>

              {/* Floating Quality Shield Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900/95 border border-primary/40 p-4 rounded-2xl shadow-2xl backdrop-blur-xl animate-float hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center text-white shadow-glow">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-white">ISO 9001 Certified</p>
                  <p className="text-[11px] text-accent font-semibold">15 - 20 Yr Anti-Fade Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
