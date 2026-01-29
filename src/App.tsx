import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useCartSync } from "@/hooks/useCartSync";
import Index from "./pages/Index";
import WeddingFlowers from "./pages/WeddingFlowers";
import WeddingsEvents from "./pages/WeddingsEvents";
import CustomBouquets from "./pages/CustomBouquets";
import Workshops from "./pages/Workshops";
import JoyJars from "./pages/JoyJars";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import StemStylists from "./pages/StemStylists";
import ForDesigners from "./pages/ForDesigners";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Wholesale from "./pages/Wholesale";
import ProductDetail from "./pages/ProductDetail";
import CompanyGifting from "./pages/CompanyGifting";
import NotFound from "./pages/NotFound";
import DIY from "./pages/weddings/DIY";
import FullService from "./pages/weddings/FullService";
import HelpMeDecidePage from "./pages/weddings/HelpMeDecidePage";
import Events from "./pages/weddings/Events";

const queryClient = new QueryClient();

// Component to handle cart sync inside providers
function AppContent() {
  useCartSync();
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/company-gifting" element={<CompanyGifting />} />
        <Route path="/shop/:handle" element={<ProductDetail />} />
        <Route path="/weddings-events" element={<WeddingsEvents />} />
        <Route path="/weddings/diy" element={<DIY />} />
        <Route path="/weddings/full-service" element={<FullService />} />
        <Route path="/weddings/help-me-decide" element={<HelpMeDecidePage />} />
        <Route path="/weddings/events" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        {/* Redirects from old routes */}
        <Route path="/weddings" element={<Navigate to="/weddings-events" replace />} />
        <Route path="/wedding-flowers" element={<Navigate to="/weddings-events" replace />} />
        <Route path="/custom-bouquets" element={<CustomBouquets />} />
        <Route path="/joy-jars" element={<JoyJars />} />
        <Route path="/stem-stylists" element={<StemStylists />} />
        <Route path="/for-designers" element={<Navigate to="/wholesale" replace />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SpeedInsights />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
