import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Truck, Search, Loader2, ExternalLink } from "lucide-react";
import { useScrollAnimation, getAnimationClasses, getStaggeredAnimationClasses } from "@/hooks/useScrollAnimation";
import { 
  storefrontApiRequest, 
  STOREFRONT_PRODUCTS_QUERY, 
  STOREFRONT_COLLECTIONS_QUERY,
  STOREFRONT_COLLECTION_PRODUCTS_QUERY,
  ShopifyProduct, 
  ShopifyCollection,
  SHOPIFY_STORE_PERMANENT_DOMAIN
} from "@/lib/shopify";

type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const heroAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCollection, setActiveCollection] = useState(searchParams.get("collection") || "all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const SHOPIFY_STORE_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}`;

  // Fetch collections from Shopify
  const { data: collections } = useQuery({
    queryKey: ['shopify-collections'],
    queryFn: async () => {
      const response = await storefrontApiRequest(STOREFRONT_COLLECTIONS_QUERY, { first: 20 });
      return response.data.collections.edges as ShopifyCollection[];
    },
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });

  // Fetch all products when "all" is selected
  const { data: allProducts, isLoading: isLoadingAll, error: errorAll } = useQuery({
    queryKey: ['shopify-products-all'],
    queryFn: async () => {
      const response = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 50 });
      return response.data.products.edges as ShopifyProduct[];
    },
    staleTime: 1000 * 60 * 5,
    enabled: activeCollection === "all",
  });

  // Fetch collection products when a specific collection is selected
  const { data: collectionData, isLoading: isLoadingCollection, error: errorCollection } = useQuery({
    queryKey: ['shopify-collection-products', activeCollection],
    queryFn: async () => {
      const response = await storefrontApiRequest(STOREFRONT_COLLECTION_PRODUCTS_QUERY, { 
        handle: activeCollection, 
        first: 50 
      });
      return response.data.collection;
    },
    staleTime: 1000 * 60 * 5,
    enabled: activeCollection !== "all",
  });

  const isLoading = activeCollection === "all" ? isLoadingAll : isLoadingCollection;
  const error = activeCollection === "all" ? errorAll : errorCollection;
  
  // Get products based on active collection
  const rawProducts = useMemo(() => {
    if (activeCollection === "all") {
      return allProducts || [];
    }
    return collectionData?.products?.edges || [];
  }, [activeCollection, allProducts, collectionData]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = rawProducts.filter((product) => {
      const title = product.node.title.toLowerCase();
      const description = product.node.description.toLowerCase();
      return title.includes(searchQuery.toLowerCase()) || 
             description.includes(searchQuery.toLowerCase());
    });

    // Sort products
    switch (sortBy) {
      case "price-asc":
        products = [...products].sort((a, b) => 
          parseFloat(a.node.priceRange.minVariantPrice.amount) - 
          parseFloat(b.node.priceRange.minVariantPrice.amount)
        );
        break;
      case "price-desc":
        products = [...products].sort((a, b) => 
          parseFloat(b.node.priceRange.minVariantPrice.amount) - 
          parseFloat(a.node.priceRange.minVariantPrice.amount)
        );
        break;
      case "newest":
        products = [...products].sort((a, b) => {
          const dateA = a.node.createdAt ? new Date(a.node.createdAt).getTime() : 0;
          const dateB = b.node.createdAt ? new Date(b.node.createdAt).getTime() : 0;
          return dateB - dateA;
        });
        break;
      // "featured" keeps original order (Shopify's best selling/manual)
    }

    return products;
  }, [rawProducts, searchQuery, sortBy]);

  const getProductPrice = (product: ShopifyProduct): string => {
    const amount = parseFloat(product.node.priceRange.minVariantPrice.amount);
    return amount.toFixed(2);
  };

  const getProductImage = (product: ShopifyProduct): string => {
    return product.node.images.edges[0]?.node.url || "/placeholder.svg";
  };

  const isProductAvailable = (product: ShopifyProduct): boolean => {
    return product.node.variants.edges.some(v => v.node.availableForSale);
  };

  const handleCollectionChange = (collectionHandle: string) => {
    setActiveCollection(collectionHandle);
    if (collectionHandle === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ collection: collectionHandle });
    }
  };


  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-brand-cream to-background">
        <div ref={heroAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p {...getAnimationClasses(heroAnimation.isVisible, 0)} className={`text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4 ${getAnimationClasses(heroAnimation.isVisible, 0).className}`}>
            Order Flowers
          </p>
          <h1 {...getAnimationClasses(heroAnimation.isVisible, 100)} className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-light max-w-3xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 100).className}`}>
            Flowers, <span className="italic text-primary">Your Way!</span>
          </h1>
          <p {...getAnimationClasses(heroAnimation.isVisible, 200)} className={`text-lg text-muted-foreground mt-6 max-w-2xl mx-auto ${getAnimationClasses(heroAnimation.isVisible, 200).className}`}>
            Delivery or pick-up available, same day or schedule ahead
          </p>
          
          {/* Order Options */}
          <div {...getAnimationClasses(heroAnimation.isVisible, 300)} className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 ${getAnimationClasses(heroAnimation.isVisible, 300).className}`}>
            <Button
              size="lg"
              className="bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-medium px-8"
              onClick={() => window.open(`${SHOPIFY_STORE_URL}/collections/all`, '_blank')}
            >
              Shop on Our Store
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-gold bg-brand-gold/20 hover:bg-brand-gold/30 font-medium px-8"
              onClick={() => window.open("https://www.doordash.com/store/nashville-flower-market-nashville-30912690/43286355/", "_blank")}
            >
              <Truck className="mr-2 h-4 w-4 text-accent" />
              Order From DoorDash
              <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Category Tabs + Search + Sort */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Collection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Button
              variant={activeCollection === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => handleCollectionChange("all")}
            >
              All Flowers
            </Button>
            {collections?.map((collection) => (
              <Button
                key={collection.node.id}
                variant={activeCollection === collection.node.handle ? "default" : "outline"}
                size="sm"
                onClick={() => handleCollectionChange(collection.node.handle)}
              >
                {collection.node.title}
              </Button>
            ))}
          </div>
          
          {/* Search + Sort Row */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search flowers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Sort */}
            <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>


      {/* Products */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div ref={productsAnimation.ref} className="container mx-auto px-4 sm:px-6 lg:px-12">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading products...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-serif text-2xl mb-2">Unable to Load Products</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                We're having trouble connecting to our store. Please try again later.
              </p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-serif text-2xl mb-2">No Products Found</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                {rawProducts.length === 0 
                  ? "We're currently adding new products to our store. Check back soon!"
                  : "No products match your search. Try a different term or collection."}
              </p>
              {rawProducts.length > 0 && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    handleCollectionChange("all");
                  }}
                >
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => {
                const available = isProductAvailable(product);
                return (
                  <Link
                    key={product.node.id}
                    to={`/shop/${product.node.handle}`}
                    {...getStaggeredAnimationClasses(productsAnimation.isVisible, index, 0, 50)}
                    className={`block ${getStaggeredAnimationClasses(productsAnimation.isVisible, index, 0, 50).className}`}
                  >
                    <Card className="group overflow-hidden bg-card border-border hover:shadow-medium transition-shadow h-full">
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <ImageWithSkeleton
                          src={getProductImage(product)}
                          alt={product.node.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          containerClassName="w-full h-full"
                          loading="lazy"
                        />
                        {!available && (
                          <Badge
                            variant="secondary"
                            className="absolute top-2 right-2 bg-muted/90 text-muted-foreground"
                          >
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                      <div className="p-4 space-y-3">
                        <div>
                          <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {product.node.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary mt-1">
                            ${getProductPrice(product)}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {product.node.description}
                        </p>
                        <Button className="w-full bg-brand-terracotta hover:bg-brand-terracotta/90">
                          View Details
                        </Button>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Shop;
