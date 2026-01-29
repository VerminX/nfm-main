import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/useScrollAnimation";
import {
  storefrontApiRequest,
  STOREFRONT_COLLECTION_PRODUCTS_QUERY,
  ShopifyProduct,
} from "@/lib/shopify";

interface FeaturedProductsProps {
  collectionHandle: string;
  title?: string;
  subtitle?: string;
  maxProducts?: number;
  showViewAll?: boolean;
  viewAllLink?: string;
  columns?: 2 | 3 | 4;
}

export const FeaturedProducts = ({
  collectionHandle,
  title,
  subtitle,
  maxProducts = 4,
  showViewAll = true,
  viewAllLink,
  columns = 4,
}: FeaturedProductsProps) => {
  const animation = useScrollAnimation();

  const { data: collectionData, isLoading, error } = useQuery({
    queryKey: ["shopify-featured-products", collectionHandle],
    queryFn: async () => {
      const response = await storefrontApiRequest(STOREFRONT_COLLECTION_PRODUCTS_QUERY, {
        handle: collectionHandle,
        first: maxProducts,
      });
      return response.data.collection;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  const products: ShopifyProduct[] = collectionData?.products?.edges || [];
  const collectionTitle = collectionData?.title || title;

  const getProductPrice = (product: ShopifyProduct): string => {
    const amount = parseFloat(product.node.priceRange.minVariantPrice.amount);
    return amount.toFixed(2);
  };

  const getProductImage = (product: ShopifyProduct): string => {
    return product.node.images.edges[0]?.node.url || "/placeholder.svg";
  };

  const isProductAvailable = (product: ShopifyProduct): boolean => {
    return product.node.variants.edges.some((v) => v.node.availableForSale);
  };

  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  if (error) {
    return null; // Silently fail - don't break the page
  }

  return (
    <section ref={animation.ref} className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        {(title || collectionTitle) && (
          <div
            {...getAnimationClasses(animation.isVisible, 0)}
            className={`text-center mb-8 ${getAnimationClasses(animation.isVisible, 0).className}`}
          >
            {subtitle && (
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-2">
                {subtitle}
              </p>
            )}
            <h2 className="font-serif text-3xl sm:text-4xl font-light">
              {title || collectionTitle}
            </h2>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className={`grid ${gridCols[columns]} gap-6`}>
            {Array.from({ length: maxProducts }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="aspect-square w-full" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-5 w-1/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && products.length > 0 && (
          <div
            {...getAnimationClasses(animation.isVisible, 100)}
            className={`grid ${gridCols[columns]} gap-6 ${getAnimationClasses(animation.isVisible, 100).className}`}
          >
            {products.map((product, index) => {
              const available = isProductAvailable(product);
              return (
                <Link
                  key={product.node.id}
                  to={`/shop/${product.node.handle}`}
                  className="block"
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                  }}
                >
                  <Card className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300 h-full">
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
                    <div className="p-4 space-y-2">
                      <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {product.node.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary">
                        ${getProductPrice(product)}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                        {product.node.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}

        {/* View All Link */}
        {showViewAll && !isLoading && products.length > 0 && (
          <div
            {...getAnimationClasses(animation.isVisible, 200)}
            className={`text-center mt-8 ${getAnimationClasses(animation.isVisible, 200).className}`}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to={viewAllLink || `/shop?collection=${collectionHandle}`}>
                View All {collectionTitle}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
