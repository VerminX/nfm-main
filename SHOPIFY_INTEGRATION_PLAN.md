# Shopify Seamless Integration Plan

## Overview

**Goal:** Make the Shopify store feel native within the Nashville Flower Market website by embedding products directly on the main site rather than linking to a separate subdomain.

**Key Discovery:** The main site already has Shopify Storefront API integration (`/src/lib/shopify.ts`) with GraphQL queries, product types, and a Shop page. The infrastructure exists - we just need to surface it better on the homepage and improve the product detail experience.

## Current State

- **Main Site:** React + Vite + Tailwind + shadcn/ui at nashvilleflowermarket.com
- **Shop:** External link to shop.nashvilleflowermarket.com (Shopify subdomain)
- **Existing Integration:** Storefront API with GraphQL queries for products, collections
- **Product Detail:** Currently redirects to Shopify store (`/src/pages/ProductDetail.tsx`)
- **Valentine's Banner:** Links to `/shop?collection=valentines-day-flowers`

## Target State

- Featured products embedded directly on homepage
- Full product detail pages within the main site
- Cart functionality within main site (drawer/modal)
- Only checkout redirects to Shopify (required)
- Consistent branding throughout the experience

---

## Phase 1: Homepage Product Embedding

### Task 1.1: Create FeaturedProducts Component
**File:** `src/components/FeaturedProducts.tsx`
**Effort:** Medium

- [ ] Create new component that fetches products from a specific collection
- [ ] Use existing `useQuery` pattern from Shop.tsx
- [ ] Display 4-8 products in a responsive grid (2 cols mobile, 4 cols desktop)
- [ ] Reuse existing product card pattern from Shop.tsx
- [ ] Add "View All" link to `/shop` page
- [ ] Include loading skeleton states
- [ ] Add scroll-reveal animations using existing `useScrollAnimation` hook

**Dependencies:** None
**Files to reference:**
- `src/pages/Shop.tsx` (lines 279-324 for card pattern)
- `src/lib/shopify.ts` (GraphQL queries)
- `src/hooks/useScrollAnimation.tsx`

### Task 1.2: Replace Valentine's Banner with Interactive Product Section
**File:** `src/components/ValentinesBanner.tsx` → `src/components/ValentinesSection.tsx`
**Effort:** Medium

- [ ] Keep the banner image as a hero header
- [ ] Add FeaturedProducts component below banner showing Valentine's collection
- [ ] Products should link to `/shop/{handle}` (internal route)
- [ ] Add "Shop the Menu" button that scrolls to products or links to full collection
- [ ] Maintain existing hover animations and styling

**Dependencies:** Task 1.1

### Task 1.3: Update Homepage Layout
**File:** `src/pages/Index.tsx`
**Effort:** Small

- [ ] Replace `ValentinesBanner` with new `ValentinesSection`
- [ ] Optionally add "Everyday Arrangements" section below Valentine's
- [ ] Ensure proper spacing between sections
- [ ] Test scroll animations work with new sections

**Dependencies:** Task 1.2

---

## Phase 2: Product Detail Page Enhancement

### Task 2.1: Build Full Product Detail Page
**File:** `src/pages/ProductDetail.tsx`
**Effort:** Large

- [ ] Remove redirect to Shopify store
- [ ] Fetch full product data using `STOREFRONT_PRODUCT_BY_HANDLE_QUERY`
- [ ] Display product image gallery (use existing Carousel component)
- [ ] Show product title, description, price
- [ ] Implement variant selector (color options)
- [ ] Add quantity selector
- [ ] Add "Add to Cart" button
- [ ] Add "Buy Now" button (direct to Shopify checkout)
- [ ] Show delivery/pickup information
- [ ] Add "You may also like" section with related products

**Dependencies:** None (can work in parallel with Phase 1)
**Files to reference:**
- `src/components/ui/carousel.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/button.tsx`
- Shopify store PDP for UX reference

### Task 2.2: Handle Custom Product Fields (Gift Note)
**File:** `src/pages/ProductDetail.tsx`
**Effort:** Medium

- [ ] Check if product has metafields for custom options
- [ ] Add textarea for "To & From + a Note" field
- [ ] Pass custom attributes to cart line item
- [ ] Validate that custom data flows through to Shopify checkout

**Dependencies:** Task 2.1

---

## Phase 3: Cart Integration

### Task 3.1: Create Cart Store
**File:** `src/stores/cartStore.ts`
**Effort:** Medium

- [ ] Create Zustand store for cart state
- [ ] Implement `addToCart`, `removeFromCart`, `updateQuantity` actions
- [ ] Use Shopify Storefront API Cart mutations
- [ ] Persist cart ID in localStorage
- [ ] Sync cart with Shopify on page load

**Dependencies:** None
**Reference:** Shopify Storefront Cart API documentation

### Task 3.2: Build Cart Drawer Component
**File:** `src/components/CartDrawer.tsx` (exists but may need enhancement)
**Effort:** Medium

- [ ] Display cart line items with images, titles, prices
- [ ] Show variant options selected
- [ ] Allow quantity adjustment
- [ ] Allow item removal
- [ ] Display subtotal
- [ ] Add "Checkout" button that redirects to Shopify checkout URL
- [ ] Add "Continue Shopping" button
- [ ] Show empty cart state

**Dependencies:** Task 3.1

### Task 3.3: Add Cart Icon to Navigation
**File:** `src/components/Navigation.tsx`
**Effort:** Small

- [ ] Add cart icon with item count badge
- [ ] Open CartDrawer on click
- [ ] Animate badge on cart update
- [ ] Position in header next to "Book Consultation" button

**Dependencies:** Task 3.2

### Task 3.4: Update "Add to Cart" Flow
**Files:** `src/pages/ProductDetail.tsx`, `src/components/FeaturedProducts.tsx`
**Effort:** Small

- [ ] Connect Add to Cart buttons to cart store
- [ ] Show success toast/notification on add
- [ ] Optionally open cart drawer after adding item
- [ ] Handle out-of-stock state

**Dependencies:** Tasks 3.1, 3.2, 2.1

---

## Phase 4: Navigation & UX Polish

### Task 4.1: Update "Buy Flowers" Navigation Link
**File:** `src/components/Navigation.tsx`
**Effort:** Small

- [ ] Change from external link to internal `/shop` route
- [ ] Remove external link icon
- [ ] Keep mobile menu behavior consistent

**Dependencies:** None

### Task 4.2: Create Shop Landing Page Enhancement
**File:** `src/pages/Shop.tsx`
**Effort:** Medium

- [ ] Add collection filter/tabs (Valentine's, Everyday)
- [ ] Improve product grid layout
- [ ] Add sorting options (price, name)
- [ ] Ensure product cards link to internal `/shop/{handle}`
- [ ] Add breadcrumb navigation

**Dependencies:** Task 2.1

### Task 4.3: Add Quick-Add to Cart on Product Cards
**Files:** `src/pages/Shop.tsx`, `src/components/FeaturedProducts.tsx`
**Effort:** Medium

- [ ] Add "Quick Add" button on hover for simple products
- [ ] For products with variants, show "Select Options" that opens modal or links to PDP
- [ ] Connect to cart store

**Dependencies:** Tasks 3.1, 3.4

---

## Phase 5: Checkout Flow

### Task 5.1: Implement Checkout Redirect
**File:** `src/lib/shopify.ts` + cart store
**Effort:** Small

- [ ] Create function to get checkout URL from Shopify cart
- [ ] Handle cart → checkout transition
- [ ] Open checkout in same tab (not new tab)
- [ ] Handle checkout completion callback (optional - for analytics)

**Dependencies:** Task 3.1

### Task 5.2: Test End-to-End Purchase Flow
**Effort:** Medium

- [ ] Test adding products to cart from homepage
- [ ] Test adding products from PDP with variants
- [ ] Test adding products with custom notes
- [ ] Test cart updates (quantity, removal)
- [ ] Test checkout redirect
- [ ] Test completing a purchase
- [ ] Verify order appears in Shopify admin

**Dependencies:** All previous tasks

---

## Implementation Order (Recommended)

```
Week 1: Foundation
├── Task 1.1: FeaturedProducts component
├── Task 3.1: Cart store (parallel)
└── Task 2.1: Product detail page (parallel)

Week 2: Integration
├── Task 1.2: Valentine's section
├── Task 1.3: Homepage update
├── Task 3.2: Cart drawer
└── Task 3.3: Nav cart icon

Week 3: Polish
├── Task 2.2: Custom fields
├── Task 3.4: Add to cart flow
├── Task 4.1: Nav link update
├── Task 4.2: Shop page enhancement
└── Task 4.3: Quick-add feature

Week 4: Finalize
├── Task 5.1: Checkout redirect
└── Task 5.2: E2E testing
```

---

## Technical Notes

### Shopify Storefront API Already Configured
```typescript
// src/lib/shopify.ts
SHOPIFY_STOREFRONT_ACCESS_TOKEN = 'cd4ac5dc2073c39f64d3daa7833f258d'
SHOPIFY_STORE_DOMAIN = 'nashville-flower-market.myshopify.com'
API_VERSION = '2025-07'
```

### Existing GraphQL Queries Available
- `STOREFRONT_PRODUCTS_QUERY` - All products
- `STOREFRONT_COLLECTIONS_QUERY` - Collections list
- `STOREFRONT_COLLECTION_PRODUCTS_QUERY` - Products by collection
- `STOREFRONT_PRODUCT_BY_HANDLE_QUERY` - Single product

### Cart API Mutations Needed (to add)
```graphql
mutation cartCreate($input: CartInput!) {
  cartCreate(input: $input) {
    cart { id checkoutUrl lines { ... } }
  }
}

mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart { id checkoutUrl lines { ... } }
  }
}
```

### Key Files to Modify
1. `src/lib/shopify.ts` - Add cart mutations
2. `src/stores/cartStore.ts` - New file
3. `src/components/FeaturedProducts.tsx` - New file
4. `src/components/ValentinesSection.tsx` - Replace ValentinesBanner
5. `src/pages/ProductDetail.tsx` - Major rewrite
6. `src/pages/Index.tsx` - Section updates
7. `src/components/Navigation.tsx` - Cart icon + link update
8. `src/components/CartDrawer.tsx` - Enhancement

---

## Success Criteria

- [ ] Users can browse products without leaving nashvilleflowermarket.com
- [ ] Users can view full product details including variants
- [ ] Users can add items to cart from homepage and PDP
- [ ] Cart persists across page navigation
- [ ] Checkout completes successfully on Shopify
- [ ] Mobile experience is fully functional
- [ ] Page load performance remains acceptable (<3s)
- [ ] No visual branding inconsistencies

---

## Out of Scope (Future Enhancements)

- Customer account management (login, order history)
- Wishlist functionality
- Product reviews/ratings
- Inventory count display
- Advanced filtering (price range, etc.)
- Search functionality improvements
