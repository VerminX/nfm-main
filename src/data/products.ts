export interface StaticProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  category: "valentines" | "arrangements" | "gifting";
  imageUrl: string;
  shopifyUrl: string;
}

export const products: StaticProduct[] = [
  // Valentine's Day
  {
    id: "fearless-devotion",
    handle: "fearless-devotion-arrangement",
    title: "Fearless Devotion Arrangement",
    description: "A stunning arrangement featuring bold, romantic blooms perfect for expressing your deepest love.",
    price: 60.00,
    category: "valentines",
    imageUrl: "https://nashville-flower-market.myshopify.com/cdn/shop/files/Screenshot2026-01-12at3.47.00PM.jpg?v=1768282557&width=800",
    shopifyUrl: "https://nashville-flower-market.myshopify.com/products/fearless-devotion-arrangement",
  },
  {
    id: "blush-bloom",
    handle: "blush-bloom-arrangement",
    title: "Blush & Bloom Arrangement",
    description: "Soft pink and blush tones create an elegant, romantic arrangement perfect for Valentine's Day.",
    price: 45.00,
    category: "valentines",
    imageUrl: "https://nashville-flower-market.myshopify.com/cdn/shop/files/Screenshot2026-01-12at11.25.04PM.png?v=1768281923&width=800",
    shopifyUrl: "https://nashville-flower-market.myshopify.com/products/blush-bloom-arrangement",
  },
  // Fresh Arrangements
  {
    id: "bright-blooming",
    handle: "bright-blooming-bouquet",
    title: "Bright & Blooming Bouquet",
    description: "A vibrant, cheerful bouquet bursting with seasonal blooms and lush greenery.",
    price: 65.00,
    category: "arrangements",
    imageUrl: "https://nashville-flower-market.myshopify.com/cdn/shop/files/Screenshot2026-01-12at11.26.22PM.png?v=1768281998&width=800",
    shopifyUrl: "https://nashville-flower-market.myshopify.com/products/bright-blooming-bouquet",
  },
  {
    id: "sunset-symphony",
    handle: "fresh-flower-arrangement-sunset-symphony",
    title: "Sunset Symphony",
    description: "A stunning fresh flower arrangement featuring warm sunset tones with roses and seasonal blooms.",
    price: 150.00,
    category: "arrangements",
    imageUrl: "https://nashville-flower-market.myshopify.com/cdn/shop/files/sunsetsymphony.jpg?v=1768330494&width=800",
    shopifyUrl: "https://nashville-flower-market.myshopify.com/products/fresh-flower-arrangement-sunset-symphony",
  },
  // Company Gifting / Joy Jars
  {
    id: "joy-jar",
    handle: "joy-jar",
    title: "Joy Jar",
    description: "A petite jar arrangement perfect for desks, bringing daily joy with fresh seasonal blooms.",
    price: 30.00,
    category: "gifting",
    imageUrl: "https://nashville-flower-market.myshopify.com/cdn/shop/files/View_recent_photos_6.jpg?v=1768281792&width=800",
    shopifyUrl: "https://nashville-flower-market.myshopify.com/products/joy-jar",
  },
  {
    id: "coffee-break",
    handle: "coffee-break-joy-jar",
    title: "Coffee Break",
    description: "A medium-sized arrangement that pairs perfectly with your morning coffee routine.",
    price: 45.00,
    category: "gifting",
    imageUrl: "https://nashville-flower-market.myshopify.com/cdn/shop/files/make_the_a_little_stems_shorter-3.jpg?v=1768284057&width=800",
    shopifyUrl: "https://nashville-flower-market.myshopify.com/products/coffee-break-joy-jar",
  },
  {
    id: "corner-office",
    handle: "company-gifting-flower-arrangement-corner-office",
    title: "Corner Office",
    description: "An impressive arrangement that makes a statement in any professional space.",
    price: 50.00,
    category: "gifting",
    imageUrl: "https://nashville-flower-market.myshopify.com/cdn/shop/files/corneroffice.png?v=1768332197&width=800",
    shopifyUrl: "https://nashville-flower-market.myshopify.com/products/company-gifting-flower-arrangement-corner-office",
  },
  {
    id: "the-closer",
    handle: "company-gifting-flower-arrangement-the-closer",
    title: "The Closer",
    description: "Our premium corporate gift arrangement, designed to impress and celebrate big wins.",
    price: 75.00,
    category: "gifting",
    imageUrl: "https://nashville-flower-market.myshopify.com/cdn/shop/files/foreverandalways_11ba7698-4ff4-4871-b374-9a1632797317.jpg?v=1768332416&width=800",
    shopifyUrl: "https://nashville-flower-market.myshopify.com/products/company-gifting-flower-arrangement-the-closer",
  },
];

export const getProductsByCategory = (category: string): StaticProduct[] => {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
};

export const getProductByHandle = (handle: string): StaticProduct | undefined => {
  return products.find((p) => p.handle === handle);
};
