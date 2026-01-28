import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChevronLeft,
  Minus,
  Plus,
  Truck,
  MapPin,
  ShoppingCart,
  ExternalLink,
  Loader2,
} from "lucide-react";
import {
  storefrontApiRequest,
  STOREFRONT_PRODUCT_BY_HANDLE_QUERY,
  STOREFRONT_COLLECTION_PRODUCTS_QUERY,
  ShopifyProduct,
  SHOPIFY_STORE_PERMANENT_DOMAIN,
} from "@/lib/shopify";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const SHOPIFY_STORE_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}`;

  // Fetch product data
  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shopify-product", handle],
    queryFn: async () => {
      const response = await storefrontApiRequest(
        STOREFRONT_PRODUCT_BY_HANDLE_QUERY,
        { handle }
      );
      return response.data.productByHandle;
    },
    enabled: !!handle,
    staleTime: 1000 * 60 * 5,
  });

  // Get collection handle for related products
  const collectionHandle =
    productData?.collections?.edges?.[0]?.node?.handle || "all";

  // Fetch related products
  const { data: relatedData } = useQuery({
    queryKey: ["shopify-related-products", collectionHandle],
    queryFn: async () => {
      const response = await storefrontApiRequest(
        STOREFRONT_COLLECTION_PRODUCTS_QUERY,
        {
          handle: collectionHandle,
          first: 5,
        }
      );
      return response.data.collection?.products?.edges || [];
    },
    enabled: !!collectionHandle && !!productData,
    staleTime: 1000 * 60 * 5,
  });

  // Filter out current product from related
  const relatedProducts = (relatedData as ShopifyProduct[] | undefined)?.filter(
    (p) => p.node.handle !== handle
  )?.slice(0, 4);

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <Skeleton className="h-6 w-32 mb-8" />
          <div className="grid lg:grid-cols-2 gap-12">
            <Skeleton className="aspect-square w-full rounded-xl" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error || !productData) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the product you're looking for.
          </p>
          <Button asChild>
            <Link to="/shop">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const images = productData.images?.edges || [];
  const variants = productData.variants?.edges || [];
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const options = productData.options || [];

  const price = selectedVariant?.price?.amount
    ? parseFloat(selectedVariant.price.amount).toFixed(2)
    : parseFloat(productData.priceRange.minVariantPrice.amount).toFixed(2);

  const isAvailable = selectedVariant?.availableForSale ?? true;

  // Get color options if they exist
  const colorOption = options.find(
    (opt: { name: string; values: string[] }) =>
      opt.name.toLowerCase() === "color"
  );

  const handleVariantChange = (colorValue: string) => {
    const variantIndex = variants.findIndex((v: { node: { selectedOptions: Array<{ name: string; value: string }> } }) =>
      v.node.selectedOptions.some(
        (opt) => opt.name.toLowerCase() === "color" && opt.value === colorValue
      )
    );
    if (variantIndex !== -1) {
      setSelectedVariantIndex(variantIndex);
    }
  };

  const getSelectedColor = () => {
    return selectedVariant?.selectedOptions?.find(
      (opt: { name: string; value: string }) => opt.name.toLowerCase() === "color"
    )?.value;
  };

  const handleBuyNow = () => {
    // Open Shopify product page with selected variant
    const variantId = selectedVariant?.id;
    let url = `${SHOPIFY_STORE_URL}/products/${handle}`;
    if (variantId) {
      // Extract numeric ID from Shopify GID
      const numericId = variantId.split("/").pop();
      url += `?variant=${numericId}`;
    }
    window.open(url, "_blank");
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Shop
          </Link>
        </nav>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {images.length > 1 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map(
                    (
                      image: { node: { url: string; altText: string | null } },
                      index: number
                    ) => (
                      <CarouselItem key={index}>
                        <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                          <ImageWithSkeleton
                            src={image.node.url}
                            alt={image.node.altText || productData.title}
                            className="w-full h-full object-cover"
                            containerClassName="w-full h-full"
                          />
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : (
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <ImageWithSkeleton
                  src={images[0]?.node?.url || "/placeholder.svg"}
                  alt={images[0]?.node?.altText || productData.title}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Price */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                {productData.title}
              </h1>
              <p className="text-2xl font-semibold text-primary mt-2">
                ${price}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {productData.description}
            </p>

            {/* Delivery Info */}
            <div className="space-y-2 py-4 border-y border-border">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Same-Day Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    Order by 1pm for same-day delivery in the Nashville area.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Pickup Available</p>
                  <p className="text-sm text-muted-foreground">
                    Choose pickup at checkout. Select your delivery or pickup
                    date at checkout.
                  </p>
                </div>
              </div>
            </div>

            {/* Color Selector */}
            {colorOption && colorOption.values.length > 1 && (
              <div className="space-y-3">
                <label className="text-sm font-medium">Choose your color</label>
                <div className="flex flex-wrap gap-2">
                  {colorOption.values.map((color: string) => (
                    <Button
                      key={color}
                      variant={getSelectedColor() === color ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleVariantChange(color)}
                      className="min-w-[80px]"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Availability Badge */}
            {!isAvailable && (
              <Badge variant="secondary" className="text-sm">
                Out of Stock
              </Badge>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!isAvailable}
                onClick={handleBuyNow}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={handleBuyNow}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Store
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Checkout is handled securely by Shopify
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <section className="mt-16 pt-16 border-t border-border">
            <h2 className="font-serif text-2xl sm:text-3xl font-light mb-8">
              You May Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.node.id}
                  to={`/shop/${product.node.handle}`}
                  className="block"
                >
                  <Card className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <ImageWithSkeleton
                        src={
                          product.node.images.edges[0]?.node.url ||
                          "/placeholder.svg"
                        }
                        alt={product.node.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        containerClassName="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {product.node.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary">
                        $
                        {parseFloat(
                          product.node.priceRange.minVariantPrice.amount
                        ).toFixed(2)}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default ProductDetail;
