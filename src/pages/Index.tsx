import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoofCalculator from "@/components/RoofCalculator";
import RoofVisualizer from "@/components/RoofVisualizer";
import Products from "@/components/Products";
import DurabilityShowcase from "@/components/DurabilityShowcase";
import DeliveryEstimator from "@/components/DeliveryEstimator";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import QuickQuoteModal from "@/components/QuickQuoteModal";

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProductSlug, setQuoteProductSlug] = useState<string | undefined>(undefined);

  const handleOpenQuote = (slug?: string) => {
    setQuoteProductSlug(slug);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-primary/20 selection:text-primary">
      <Header onOpenQuoteModal={() => handleOpenQuote()} />
      <Hero onOpenQuoteModal={() => handleOpenQuote()} />
      <Products onQuickQuote={handleOpenQuote} />
      <RoofCalculator />
      <RoofVisualizer />
      <DurabilityShowcase />
      <DeliveryEstimator />
      <About />
      <WhyChooseUs />
      <BeforeAfterGallery />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
      
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultProductSlug={quoteProductSlug}
      />
    </div>
  );
};

export default Index;
