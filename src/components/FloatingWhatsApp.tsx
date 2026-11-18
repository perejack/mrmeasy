import { useState } from "react";
import { MessageCircle, X, Send, Calculator, Truck, HelpCircle, Phone } from "lucide-react";
import { WHATSAPP_LINK, PHONE_NUMBER } from "@/lib/products";
import { cn } from "@/lib/utils";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePresetClick = (presetText: string) => {
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(presetText)}`, "_blank");
    setIsOpen(false);
  };

  const handleDirectChat = () => {
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent("Hello MRM! I would like to inquire about your roofing products and factory pricing.")}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Interactive Chat Popup */}
      <div
        className={cn(
          "absolute bottom-20 right-0 w-84 sm:w-92 bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right text-white",
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center relative">
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="w-3 h-3 rounded-full bg-emerald-300 border-2 border-emerald-600 absolute -bottom-0.5 -right-0.5" />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-bold text-sm">MRM Roofing Concierge</h4>
            <p className="text-white/80 text-[11px]">Factory Engineers Online · Replies instantly</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Body Message */}
        <div className="p-4 bg-slate-950/80 space-y-3">
          <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl rounded-tl-none shadow-sm text-xs leading-relaxed text-slate-200">
            <p>👋 Hello! Welcome to <strong>Mabati Rolling Mills</strong>.</p>
            <p className="mt-1 text-slate-400">Choose a quick option below or send your building dimensions for an instant free quotation:</p>
          </div>

          {/* Preset Buttons */}
          <div className="space-y-1.5 pt-1">
            <button
              onClick={() => handlePresetClick("Hello! I need a roof sheets calculation for my building.")}
              className="w-full text-left p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-primary/50 text-xs font-medium text-slate-200 hover:text-white transition-all flex items-center gap-2"
            >
              <Calculator className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>📐 Need Roof Sheet Calculation</span>
            </button>

            <button
              onClick={() => handlePresetClick("Hello! Please share today's factory price list for 28G and 30G mabati.")}
              className="w-full text-left p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-primary/50 text-xs font-medium text-slate-200 hover:text-white transition-all flex items-center gap-2"
            >
              <span className="text-amber-400">💰</span>
              <span>Today's 28G &amp; 30G Factory Prices</span>
            </button>

            <button
              onClick={() => handlePresetClick("Hello! What is your delivery schedule and rate to my county?")}
              className="w-full text-left p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-primary/50 text-xs font-medium text-slate-200 hover:text-white transition-all flex items-center gap-2"
            >
              <Truck className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
              <span>🚚 County Delivery &amp; Transit Rates</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
          <button
            onClick={handleDirectChat}
            className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Start WhatsApp Chat</span>
          </button>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors border border-slate-700"
            title={`Call ${PHONE_NUMBER}`}
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 px-3.5 py-1.5 rounded-full shadow-2xl hidden sm:block">
            <p className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Instant Roofing Help</span>
            </p>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 border",
            isOpen
              ? "bg-slate-900 border-slate-700 rotate-0 text-white"
              : "bg-emerald-600 border-emerald-400 text-white hover:bg-emerald-500 shadow-emerald-900/40 animate-pulse-subtle"
          )}
          aria-label="Chat with MRM on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
