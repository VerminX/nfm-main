import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown, ExternalLink } from "lucide-react";
import logoEspresso from "@/assets/logo-espresso.png";
import { SHOPIFY_STORE_PERMANENT_DOMAIN } from "@/lib/shopify";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const SHOPIFY_STORE_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}`;

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Buy Flowers",
      href: "/shop",
      dropdown: [
        { name: "All Flowers", href: "/shop" },
        { name: "Company Gifting", href: "/shop/company-gifting" },
      ]
    },
    {
      name: "Weddings",
      href: "/weddings-events",
      dropdown: [
        { name: "DIY Wedding Flowers", href: "/weddings/diy" },
        { name: "Hybrid Wedding Flowers", href: "/weddings/diy" },
        { name: "Designed Wedding Florals", href: "/weddings/full-service" },
        { name: "Help Me Decide", href: "/weddings/help-me-decide" },
      ]
    },
    { name: "Events", href: "/events" },
    { name: "Workshops", href: "/workshops" },
    { name: "Contact", href: "/contact" },
    { name: "Wholesale", href: "/wholesale" },
  ];

  const scrollToConsultation = () => {
    window.open('https://calendly.com/d/cxpt-5nc-btn?primary_color=ff3d94', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Contact Info - NFM Hot Pink */}
      <div className="bg-nfm-hot-pink text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-8 text-xs">
            <div className="flex items-center gap-4">
              <a href="tel:+16159288001" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <Phone className="h-3 w-3" />
                <span className="hidden sm:inline">(615) 928-8001</span>
              </a>
              <a href="mailto:hello@nashvilleflowermarket.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <Mail className="h-3 w-3" />
                <span className="hidden md:inline">hello@nashvilleflowermarket.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <img
                src={logoEspresso}
                alt="Nashville Flower Market"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-6">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.name} className="relative group">
                    <button
                      className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 whitespace-nowrap flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[180px]">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : 'external' in link && link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 whitespace-nowrap flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                size="sm"
                className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm px-3 sm:px-4"
                onClick={scrollToConsultation}
              >
                Book Consultation
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="xl:hidden py-4 space-y-1 border-t border-border animate-fade-in bg-background">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.name}>
                    <button
                      className="w-full flex items-center justify-between py-2 px-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    >
                      {link.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block py-2 px-2 text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : 'external' in link && link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block py-2 px-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-4 px-2">
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    scrollToConsultation();
                    setIsOpen(false);
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
