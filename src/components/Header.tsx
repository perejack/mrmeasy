import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Calculator, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/products";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

const Header = ({ onOpenQuoteModal }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/#products" },
    { name: "Calculator", path: "/#calculator" },
    { name: "Visualizer", path: "/#visualizer" },
    { name: "Delivery", path: "/#delivery" },
    { name: "FAQ", path: "/#faq" },
  ];

  return (
    <>
      {/* Top Ticker Notification Banner */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-1.5 border-b border-slate-800/80 px-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-white">Direct Mill Discounts Active:</span>
            <span className="text-slate-400 hidden sm:inline">Free custom cutting up to 12m &amp; FREE transit on 100m+ orders</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="hover:text-primary transition-colors flex items-center gap-1 font-semibold text-slate-200"
            >
              <Phone className="w-3 h-3 text-primary" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Nairobi · Mombasa · Kisumu · Nakuru · Eldoret</span>
          </div>
        </div>
      </div>

      {/* Main Floating Header */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-3"
            : "bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary via-orange-500 to-amber-600 flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
                <span className="text-white font-display font-extrabold text-base sm:text-lg tracking-wider">MRM</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="font-display font-black text-base sm:text-xl text-white tracking-tight leading-none group-hover:text-primary transition-colors">
                    Mabati Rolling Mills
                  </h1>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide">
                  Architectural Roofing Solutions
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={cn(
                  "font-medium text-xs tracking-wide uppercase transition-colors hover:text-primary py-1 relative",
                  location.pathname === link.path && !link.path.includes("#")
                    ? "text-primary font-bold"
                    : "text-slate-300"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/#calculator"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Calculator className="w-3.5 h-3.5 text-primary" />
              <span>Roof Calculator</span>
            </a>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 bg-gradient-to-r from-primary via-orange-500 to-amber-600 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-glow transition-all hover:scale-[1.02]"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors sm:hidden"
              aria-label="Call Sales"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-slate-900 border-b border-slate-800",
            isMobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
          )}
        >
          <nav className="container flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl font-medium text-sm text-slate-300 hover:bg-slate-800 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <a
                href="/#calculator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 rounded-xl bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-primary" />
                <span>Roof Sheet &amp; Cost Calculator</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="py-3 px-4 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Sales: {PHONE_NUMBER}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 bg-gradient-brand text-white font-bold text-xs rounded-xl text-center shadow-glow"
              >
                Request Instant Factory Quote
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
