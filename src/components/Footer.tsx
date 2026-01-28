import { Link } from "react-router-dom";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import logoTerracotta from "@/assets/logo-terracotta.png";

export const Footer = () => {

  return (
    <footer className="bg-nfm-hot-pink text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 text-xs">
          {/* Left Column - Navigation Links */}
          <div className="space-y-1.5">
            <a
              href="https://buytickets.at/nashvilleflowermarket"
              target="_blank"
              rel="noopener noreferrer"
              className="block underline hover:no-underline uppercase tracking-wide"
            >
              Sign Up for a Class
            </a>
            <Link
              to="/contact"
              className="block underline hover:no-underline uppercase tracking-wide"
            >
              Chat with a Designer
            </Link>
            <Link
              to="/shop"
              className="block underline hover:no-underline uppercase tracking-wide"
            >
              Send Flowers in Nashville
            </Link>
            <Link
              to="/weddings/full-service"
              className="block underline hover:no-underline uppercase tracking-wide"
            >
              Plan the Wedding of Your Dreams
            </Link>
          </div>

          {/* Center Column - Logo Only */}
          <div className="text-center flex items-center justify-center">
            <Link to="/">
              <ImageWithSkeleton
                src={logoTerracotta}
                alt="Nashville Flower Market"
                className="max-w-[220px] h-auto brightness-0 invert"
                containerClassName="max-w-[220px]"
              />
            </Link>
          </div>

          {/* Right Column - Full Address + Social */}
          <div className="text-right space-y-3">
            <div className="space-y-0.5">
              <p>2615 Lebanon Pike</p>
              <p>Suite B (Behind O'Reilly Auto Parts)</p>
              <p>Nashville, TN 37214</p>
              <div className="pt-2">
                <a href="tel:615-928-8001" className="block hover:underline">
                  615.928.8001
                </a>
                <a href="mailto:hello@nashvilleflowermarket.com" className="block hover:underline">
                  hello@nashvilleflowermarket.com
                </a>
              </div>
              <p className="text-[10px] font-serif pt-3 opacity-70">
                © 2026 Nashville Flower Market. All rights reserved.
                <br />
                Built by 17 Social
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden text-center text-xs space-y-4">
          <nav className="space-y-1.5">
            <a
              href="https://buytickets.at/nashvilleflowermarket"
              target="_blank"
              rel="noopener noreferrer"
              className="block underline hover:no-underline uppercase tracking-wide"
            >
              Sign Up for a Class
            </a>
            <Link
              to="/contact"
              className="block underline hover:no-underline uppercase tracking-wide"
            >
              Chat with a Designer
            </Link>
            <Link
              to="/shop"
              className="block underline hover:no-underline uppercase tracking-wide"
            >
              Send Flowers in Nashville
            </Link>
            <Link
              to="/weddings/full-service"
              className="block underline hover:no-underline uppercase tracking-wide"
            >
              Plan the Wedding of Your Dreams
            </Link>
          </nav>

          <Link to="/" className="block pt-2 flex justify-center">
            <ImageWithSkeleton
              src={logoTerracotta}
              alt="Nashville Flower Market"
              className="max-w-[200px] h-auto brightness-0 invert"
              containerClassName="max-w-[200px]"
            />
          </Link>

          <div className="space-y-0.5 pt-2">
            <p>2615 Lebanon Pike</p>
            <p>Suite B (Behind O'Reilly Auto Parts)</p>
            <p>Nashville, TN 37214</p>
            <div className="pt-2">
              <a href="tel:615-928-8001" className="block hover:underline">
                615.928.8001
              </a>
              <a href="mailto:hello@nashvilleflowermarket.com" className="block hover:underline">
                hello@nashvilleflowermarket.com
              </a>
            </div>
            <p className="text-[10px] font-serif pt-3 opacity-70">
              © 2026 Nashville Flower Market. All rights reserved.
              <br />
              Built by 17 Social
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};