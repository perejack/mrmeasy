import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK, products } from "@/lib/products";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-8 border-t border-slate-800 relative">
      <div className="container">
        {/* Top Newsletter / Factory Price Alert Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-12 gap-6 items-center relative z-10">
            <div className="md:col-span-7 space-y-2">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                Direct Mill Updates
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Get Monthly Factory Price Alerts &amp; Discounts
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Receive updated roofing steel price lists, new architectural profile launches, and transport deals directly on WhatsApp.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col sm:flex-row gap-2.5">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hello MRM! Please add me to your factory price updates and new profile broadcast list.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join WhatsApp Broadcast</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Columns Directory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
                <span className="text-white font-display font-black text-lg">MRM</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white">Mabati Rolling Mills</h4>
                <p className="text-[10px] text-slate-400">Premium Steel Roofing Kenya</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Kenya's premier manufacturer of high-grade architectural roofing sheets, versatile profiles, box profiles, and steel roofing accessories with guaranteed factory-direct pricing.
            </p>

            <div className="flex items-center gap-2 text-xs text-accent font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001:2015 Certified Manufacturing</span>
            </div>
          </div>

          {/* Popular Profiles */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
              Roofing Profiles
            </h4>
            <ul className="space-y-2.5 text-xs">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/product/${product.slug}`}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    <span>{product.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono group-hover:text-primary">28G/30G</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Interactive Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
              Interactive Tools
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: "Roof Sheet & Cost Calculator", path: "/#calculator" },
                { name: "3D Color & Finish Visualizer", path: "/#visualizer" },
                { name: "County Delivery Lead Times", path: "/#delivery" },
                { name: "5-Layer Steel Technology", path: "/#about" },
                { name: "Frequently Asked Questions", path: "/#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Dispatch Desk */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
              Dispatch &amp; Orders
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px]">Direct Order Hotline</p>
                  <a href={`tel:${PHONE_NUMBER}`} className="font-bold text-white hover:text-primary transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px]">Direct Email Desk</p>
                  <a href="mailto:sales@mabati.com" className="font-medium text-white hover:text-primary transition-colors">
                    sales@mabati.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px]">Factory Head Office</p>
                  <p className="text-white font-medium">Mombasa Road / Industrial Area, Nairobi, Kenya</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px]">Operating Hours</p>
                  <p className="text-white font-medium">Monday - Saturday: 7:30 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Mabati Rolling Mills. All Rights Reserved. Kenya's Trusted Roofing Brand.
          </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine Certified Steel
            </span>
            <a href="#about" className="hover:text-primary transition-colors">
              Privacy &amp; Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
