import { CheckCircle2, Award, ShieldCheck, Factory, Sparkles, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const highlights = [
    { title: "25+ Years Industrial Leadership", desc: "Roofing Kenya's finest residential and commercial landmarks since 1999." },
    { title: "AZ150 Metallic Coating", desc: "55% Aluminum-Zinc alloy providing 4x longevity compared to standard zinc." },
    { title: "ISO 9001:2015 Certified", desc: "Rigorous quality control and computerized continuous roll-forming lines." },
    { title: "Custom Precision Cuts to 12m", desc: "Zero transverse overlap joints for leak-proof architectural integrity." },
    { title: "Nationwide 24-48h Transit", desc: "Dedicated logistics hubs in Nairobi, Mombasa, Kisumu, Nakuru & Eldoret." },
    { title: "15 - 20 Year Factory Warranty", desc: "Backed by direct manufacturer anti-fade and anti-perforation replacement guarantees." },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background illumination */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 aspect-[4/5]">
              <img
                src={aboutImage}
                alt="Mabati Rolling Mills manufacturing facility and precision roofing sheets"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* In-Image Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Direct-From-Mill Quality</h4>
                    <p className="text-[11px] text-slate-400">Manufactured in Kenya to international standards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-brand p-5 rounded-2xl shadow-glow text-white text-center animate-float hidden sm:block">
              <span className="font-display font-black text-3xl block leading-none">25+</span>
              <span className="text-[11px] font-bold uppercase tracking-wider">Years In Kenya</span>
            </div>
          </div>

          {/* Right Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage of Excellence</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Engineering Kenya's Most <br />
                <span className="text-gradient">Durable &amp; Beautiful Roofs</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                At <strong>Mabati Rolling Mills (MRM)</strong>, we combine metallurgical engineering with architectural elegance. 
                Whether you are building your family home, an executive gated estate, or a commercial development, 
                our profiles provide superior weather defense, acoustic dampening, and radiant thermal reflection.
              </p>
            </div>

            {/* Key Advantages Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-primary/40 transition-all space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <h4 className="font-semibold text-xs text-white">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-6 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#calculator"
                className="px-7 py-3.5 bg-gradient-brand text-white font-bold text-xs rounded-xl shadow-glow hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <span>Calculate Your Roofing Bill</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#visualizer"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition-all"
              >
                Launch Color Visualizer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
