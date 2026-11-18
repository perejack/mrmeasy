export interface ProductColor {
  name: string;
  hex: string;
  bgClass: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: "Tile Profile" | "Box Profile" | "Corrugated" | "Stone Coated" | "Budget";
  description: string;
  image: string;
  finish: "Ultra-Matte Textured" | "High-Gloss Poly" | "Stone Coated" | "Galvanized Alu-Zinc";
  prices: {
    gauge28: number;
    gauge30: number;
  };
  effectiveWidth: string;
  warrantyYears: number;
  minPitch: string;
  bestFor: string;
  popular?: boolean;
  colors: ProductColor[];
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export const PRODUCT_COLORS: ProductColor[] = [
  { name: "Charcoal Slate", hex: "#2b2d42", bgClass: "bg-slate-800" },
  { name: "Crimson Brick", hex: "#b91c1c", bgClass: "bg-red-700" },
  { name: "Forest Emerald", hex: "#15803d", bgClass: "bg-emerald-700" },
  { name: "Deep Royal Blue", hex: "#1d4ed8", bgClass: "bg-blue-700" },
  { name: "Chocolate Brown", hex: "#451a03", bgClass: "bg-amber-950" },
  { name: "Galvanized Silver", hex: "#94a3b8", bgClass: "bg-slate-400" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Versatile / Bricktile Mabati",
    slug: "versatile-mabati",
    tagline: "The King of Modern Architectural Roofing",
    category: "Tile Profile",
    finish: "Ultra-Matte Textured",
    description: "Kenya's most celebrated tile-profile roofing sheet. Combines the timeless beauty of Roman ceramic tiles with the unbreakable strength of high-tensile steel.",
    image: "https://shop.mabati.com/media/catalog/product/v/e/versatile_c_thb_sm.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    prices: {
      gauge28: 680,
      gauge30: 570,
    },
    effectiveWidth: "1,000 mm (1.0m)",
    warrantyYears: 15,
    minPitch: "15 Degrees",
    bestFor: "Luxury Residential Homes, Villas, Commercial Plazas",
    popular: true,
    colors: [
      { name: "Charcoal Slate", hex: "#2b2d42", bgClass: "bg-slate-800" },
      { name: "Crimson Brick", hex: "#b91c1c", bgClass: "bg-red-700" },
      { name: "Forest Emerald", hex: "#15803d", bgClass: "bg-emerald-700" },
      { name: "Deep Royal Blue", hex: "#1d4ed8", bgClass: "bg-blue-700" },
    ],
    features: [
      "Authentic Roman tile step profile",
      "Multi-layer anti-fading UV paint system",
      "Superior sound dampening in heavy rains",
      "15-Year Factory Replacement Warranty",
      "Resistant to coastal saline corrosion",
    ],
    specs: [
      { label: "Profile Depth", value: "28 mm step tile" },
      { label: "Effective Width", value: "1,000 mm" },
      { label: "Recommended Pitch", value: "≥ 15°" },
      { label: "Base Metal", value: "AZ150 Alu-Zinc High Tensile Steel" },
    ],
  },
  {
    id: "2",
    name: "Box Profile (IT5)",
    slug: "box-profile",
    tagline: "Engineered for Maximum Strength & Contemporary Lines",
    category: "Box Profile",
    finish: "High-Gloss Poly",
    description: "Crisp trapezoidal ridges engineered for superior water evacuation, maximum purlin spacing span, and striking contemporary architectural aesthetics.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2c3SYYLyZie8QwmnZ7PF1PHgaldPbOaT3Ag&s",
    prices: {
      gauge28: 590,
      gauge30: 450,
    },
    effectiveWidth: "1,000 mm (1.0m)",
    warrantyYears: 12,
    minPitch: "5 Degrees",
    bestFor: "Modern Mansions, Warehouses, Churches, Canopy Roofs",
    popular: true,
    colors: [
      { name: "Charcoal Slate", hex: "#2b2d42", bgClass: "bg-slate-800" },
      { name: "Forest Emerald", hex: "#15803d", bgClass: "bg-emerald-700" },
      { name: "Crimson Brick", hex: "#b91c1c", bgClass: "bg-red-700" },
      { name: "Deep Royal Blue", hex: "#1d4ed8", bgClass: "bg-blue-700" },
    ],
    features: [
      "Ultra-high load bearing capacity",
      "Fast rainwater runoff with anti-siphon ribs",
      "Can be laid at ultra-low roof slopes (down to 5°)",
      "Zero purlin sag engineering",
    ],
    specs: [
      { label: "Profile Shape", value: "Trapezoidal 5-Crest" },
      { label: "Effective Width", value: "1,000 mm" },
      { label: "Minimum Pitch", value: "5° (Low slope capable)" },
      { label: "Tensile Strength", value: "550 MPa Yield" },
    ],
  },
  {
    id: "3",
    name: "Elegantile Mabati",
    slug: "elegantile-mabati",
    tagline: "Sophisticated European Tile Aesthetics",
    category: "Tile Profile",
    finish: "Ultra-Matte Textured",
    description: "Designed for premium residences desiring a refined Mediterranean tile appearance without the heavy dead-weight of clay roof tiles.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2jXX9-I2znxgItA3WOvgzOZuBbcPSTfLMw&s",
    prices: {
      gauge28: 620,
      gauge30: 520,
    },
    effectiveWidth: "980 mm",
    warrantyYears: 20,
    minPitch: "12 Degrees",
    bestFor: "Executive Homes, Gated Estates, Resort Cottages",
    colors: [
      { name: "Chocolate Brown", hex: "#451a03", bgClass: "bg-amber-950" },
      { name: "Crimson Brick", hex: "#b91c1c", bgClass: "bg-red-700" },
      { name: "Charcoal Slate", hex: "#2b2d42", bgClass: "bg-slate-800" },
    ],
    features: [
      "Curved Mediterranean scalloped crests",
      "Thermal reflective coating reduces interior heat by 4°C",
      "20-Year Anti-Fade & Anti-Perforation Warranty",
      "Interlocking side-lap prevents leaks",
    ],
    specs: [
      { label: "Profile Pattern", value: "Scalloped Wave Tile" },
      { label: "Effective Width", value: "980 mm" },
      { label: "Coating", value: "Color-Plus Thermoset Resin" },
      { label: "Warranty", value: "20 Years Official" },
    ],
  },
  {
    id: "4",
    name: "Eurotile Mabati",
    slug: "eurotile-mabati",
    tagline: "Prestigious Scandinavian Profile with Deep Definition",
    category: "Tile Profile",
    finish: "Ultra-Matte Textured",
    description: "Sculpted European profile featuring distinct shadow lines that give your roof a deep, rich 3-dimensional texture from any street angle.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BHsJRXsSqzUqBZdeMLUk6_7EOHMb1osvsg&s",
    prices: {
      gauge28: 620,
      gauge30: 520,
    },
    effectiveWidth: "1,000 mm",
    warrantyYears: 15,
    minPitch: "14 Degrees",
    bestFor: "Contemporary Mansions, Townhouses, High-End Projects",
    colors: [
      { name: "Charcoal Slate", hex: "#2b2d42", bgClass: "bg-slate-800" },
      { name: "Forest Emerald", hex: "#15803d", bgClass: "bg-emerald-700" },
      { name: "Crimson Brick", hex: "#b91c1c", bgClass: "bg-red-700" },
    ],
    features: [
      "Deep stepped embossing",
      "Scratch-guard protective transit film",
      "Optimal strength-to-weight ratio",
      "UV-Resistant pigment technology",
    ],
    specs: [
      { label: "Effective Width", value: "1,000 mm" },
      { label: "Step Height", value: "25 mm" },
      { label: "Coating Thickness", value: "25 Micron Topcoat" },
    ],
  },
  {
    id: "5",
    name: "Classic Corrugated",
    slug: "corrugated-mabati",
    tagline: "Timeless Heritage Profile with Unrivaled Toughness",
    category: "Corrugated",
    finish: "High-Gloss Poly",
    description: "The time-tested sinusoidal corrugated profile that has roofed Kenya for generations. Highly cost-effective and dependable in all climates.",
    image: "https://shop.mabati.com/media/catalog/product/r/e/resincot_tr_tmb_sm_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=288&width=288&canvas=288:288",
    prices: {
      gauge28: 490,
      gauge30: 370,
    },
    effectiveWidth: "762 mm (11/3 Corrugations)",
    warrantyYears: 10,
    minPitch: "10 Degrees",
    bestFor: "Residential Extensions, Farming Sheds, Commercial Roofs",
    colors: [
      { name: "Crimson Brick", hex: "#b91c1c", bgClass: "bg-red-700" },
      { name: "Forest Emerald", hex: "#15803d", bgClass: "bg-emerald-700" },
      { name: "Deep Royal Blue", hex: "#1d4ed8", bgClass: "bg-blue-700" },
    ],
    features: [
      "Sinusoidal wave design for natural water shedding",
      "Quick, straightforward installation",
      "High rigidity across standard rafters",
      "Affordable without quality compromise",
    ],
    specs: [
      { label: "Corrugation Pitch", value: "76 mm" },
      { label: "Effective Width", value: "762 mm" },
      { label: "Coating", value: "Prepainted Galvanized Steel" },
    ],
  },
  {
    id: "6",
    name: "Dumuzas Unpainted (Resincot Base)",
    slug: "dumuzas-unpainted",
    tagline: "The Unmatched Longevity Champion for Budget-Smart Builders",
    category: "Budget",
    finish: "Galvanized Alu-Zinc",
    description: "Infused with 55% Aluminum and 45% Zinc alloy. Lasts up to 4x longer than standard galvanized corrugated sheets at an unbeatable factory-direct price.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMtsw_JYUxkzMnn0ogQ1jXPrn2vZYfweeZA&s",
    prices: {
      gauge28: 420,
      gauge30: 320,
    },
    effectiveWidth: "762 mm",
    warrantyYears: 10,
    minPitch: "8 Degrees",
    bestFor: "Budget-Conscious Projects, Rentals, Perimeter Fences, Sheds",
    colors: [
      { name: "Galvanized Silver", hex: "#94a3b8", bgClass: "bg-slate-400" },
    ],
    features: [
      "Superior 55% Alu-Zinc sacrificial anti-rust barrier",
      "Reflects 85% of solar heat away from living spaces",
      "Unbeatable price per square meter in Kenya",
      "Zero paint peeling risks",
    ],
    specs: [
      { label: "Alloy Coating", value: "AZ100 Alu-Zinc" },
      { label: "Effective Width", value: "762 mm" },
      { label: "Corrosion Resistance", value: "4x Longer than Normal Zinc" },
    ],
  },
  {
    id: "7",
    name: "Romantile / Orientile",
    slug: "romantile-orientile",
    tagline: "Classic Roman Arch Profile with Distinctive Elegance",
    category: "Tile Profile",
    finish: "Ultra-Matte Textured",
    description: "Inspired by traditional Mediterranean barrel clay tiles, Romantile / Orientile delivers an eye-catching textured silhouette with maximum water runoff and thermal reflection.",
    image: "https://shop.mabati.com/media/catalog/product/v/e/versatile_c_thb_sm.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    prices: {
      gauge28: 650,
      gauge30: 550,
    },
    effectiveWidth: "1,000 mm (1.0m)",
    warrantyYears: 15,
    minPitch: "15 Degrees",
    bestFor: "Residential Villas, Bungalows, Modern Townhouses",
    popular: true,
    colors: [
      { name: "Charcoal Slate", hex: "#2b2d42", bgClass: "bg-slate-800" },
      { name: "Crimson Brick", hex: "#b91c1c", bgClass: "bg-red-700" },
      { name: "Forest Emerald", hex: "#15803d", bgClass: "bg-emerald-700" },
      { name: "Chocolate Brown", hex: "#451a03", bgClass: "bg-amber-950" },
    ],
    features: [
      "Deep Mediterranean curved tile crown",
      "Anti-capillary side-lap groove prevents water seeping",
      "High UV resistance and color stability",
      "15-Year Factory Replacement Warranty",
    ],
    specs: [
      { label: "Step Height", value: "26 mm step tile" },
      { label: "Effective Width", value: "1,000 mm" },
      { label: "Recommended Pitch", value: "≥ 15°" },
      { label: "Base Metal", value: "AZ150 Alu-Zinc High Tensile Steel" },
    ],
  },
  {
    id: "8",
    name: "Zeetile / Curve Tile",
    slug: "zeetile-curve-tile",
    tagline: "Bold Architectural Step with Curved Interlocking Profile",
    category: "Tile Profile",
    finish: "Ultra-Matte Textured",
    description: "Features a modern angular Z-profile with continuous flowing curved crests. Engineered for extreme weather durability and distinctive curb appeal.",
    image: "https://shop.mabati.com/media/catalog/product/v/e/versatile_c_thb_sm.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    prices: {
      gauge28: 630,
      gauge30: 530,
    },
    effectiveWidth: "1,000 mm (1.0m)",
    warrantyYears: 15,
    minPitch: "12 Degrees",
    bestFor: "Contemporary Mansions, Churches, Commercial Pavilions",
    colors: [
      { name: "Charcoal Slate", hex: "#2b2d42", bgClass: "bg-slate-800" },
      { name: "Crimson Brick", hex: "#b91c1c", bgClass: "bg-red-700" },
      { name: "Forest Emerald", hex: "#15803d", bgClass: "bg-emerald-700" },
      { name: "Deep Royal Blue", hex: "#1d4ed8", bgClass: "bg-blue-700" },
    ],
    features: [
      "Interlocking Z-groove design resists hurricane-level winds",
      "Reinforced rib crests for heavy rain deflection",
      "Thermo-insulated acoustic dampening",
      "15-Year Premium Warranty",
    ],
    specs: [
      { label: "Profile Pattern", value: "Stepped Z-Curve" },
      { label: "Effective Width", value: "1,000 mm" },
      { label: "Recommended Pitch", value: "≥ 12°" },
      { label: "Base Metal", value: "AZ150 Alu-Zinc High Tensile Steel" },
    ],
  },
];

export const ACCESSORIES = [
  { id: "ridge", name: "Roll Top Ridge Cap (3m)", price: 850, unit: "pc" },
  { id: "valley", name: "Valley Gutter Flashing (3m)", price: 920, unit: "pc" },
  { id: "screws", name: "Self-Drilling Roofing Screws w/ EPDM Washer (Pack of 100)", price: 650, unit: "pkt" },
  { id: "barge", name: "Barge Board / Side Flashing (3m)", price: 780, unit: "pc" },
];

export const KENYA_COUNTIES = [
  { county: "Nairobi & Kiambu", transitDays: "Same Day / 24 Hours", feeNote: "FREE on orders > 100m" },
  { county: "Mombasa & Coast Region", transitDays: "24 - 48 Hours", feeNote: "Factory Hub in Mombasa" },
  { county: "Nakuru & Central Rift", transitDays: "24 Hours", feeNote: "Direct Depot Transit" },
  { county: "Kisumu & Western Region", transitDays: "24 - 48 Hours", feeNote: "Regional Hub Delivery" },
  { county: "Eldoret & North Rift", transitDays: "24 - 48 Hours", feeNote: "Daily Scheduled Transit" },
  { county: "Nyeri, Meru & Mt Kenya", transitDays: "24 Hours", feeNote: "Express Direct Routes" },
  { county: "Machakos, Kitui & Makueni", transitDays: "24 Hours", feeNote: "Direct Delivery Daily" },
  { county: "Rest of Kenya (Garissa, Turkana, etc.)", transitDays: "2 - 3 Days", feeNote: "Nationwide Fleet Coverage" },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const PHONE_NUMBER = "+254 737 893370";
export const WHATSAPP_LINK = `https://wa.me/254737893370`;

