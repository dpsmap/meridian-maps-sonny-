import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">DPS Map</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted source for high-quality Yangon maps and custom map prints. 
              Precision cartography since 2015.
            </p>
            <div className="flex gap-3">
              <a href="#" className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products?category=vinyl" className="hover:text-primary">Wall Maps</Link></li>
              <li><Link to="/products?category=a4-book" className="hover:text-primary">Map Books</Link></li>
              <li><Link to="/products?category=canvas" className="hover:text-primary">Canvas Prints</Link></li>
              <li><Link to="/products?category=sticker" className="hover:text-primary">Stickers</Link></li>
              <li><Link to="/products" className="hover:text-primary">All Products</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/shipping" className="hover:text-primary">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-primary">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>No. 123, Pyay Road, Kamayut Township, Yangon, Myanmar</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+959123456789" className="hover:text-primary">+95 9 123 456 789</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@dpsmap.com" className="hover:text-primary">info@dpsmap.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>&copy; {new Date().getFullYear()} DPS Map Shop. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
