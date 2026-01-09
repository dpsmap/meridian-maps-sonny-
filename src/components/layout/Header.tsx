import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search, MapPin, Bell, Tag, ChevronDown, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { cn } from '@/lib/utils';
import old from '@/assets/old.png'
import logo from '@/assets/logo.png'


interface HeaderProps {
  onAuthClick: () => void;
}

export function Header({ onAuthClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAd, setShowAd] = useState(true);
  const [isMapsDropdownOpen, setIsMapsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { totalItems, openCart } = useCart();
  const { t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/maps', label: t('nav.map') },
    { href: '/products', label: t('nav.shop') },
    // { href: '/products?category=vinyl', label: t('nav.wallMaps') },
    // { href: '/products?category=a4-book', label: t('nav.mapBooks') },
    { href: 'https://www.facebook.com/DPSMyanmar/', label: t('facebook'), target: '_blank' },
     { href: 'https://maprint.dpsmap.com/', label: t('nav.maprint'), target: '_blank' },
     { href: 'https://myanmar.dpsmap.com/', label: t('nav.target'), target: '_blank' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/maps') {
      return location.pathname.startsWith('/maps');
    }
    return location.pathname.startsWith(href.split('?')[0]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMapsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* --- CSS for Marquee Animation --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 55s linear infinite;
        }
        /* Mouse တင်လိုက်ရင် ရပ်သွားမယ့် effect */
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- Top Marquee Bar --- */}
      <div className="bg-black text-white py-2 text-sm font-medium overflow-hidden relative z-[60]">
        <div className="animate-marquee pause-on-hover whitespace-nowrap flex items-center gap-12 w-full">
          {/* News Item */}
          <span className="flex items-center gap-2">
            <Bell className="h-4 w-4 fill-current" />
            <span>Latest News: 2025 Yangon City Map Update is now available! Pre-order now with promo price 27,000mmk.</span>
          </span>
          
          {/* Coupon Item */}
          <span className="flex items-center gap-2 text-yellow-300">
            <Tag className="h-4 w-4" />
            <span>Special Offer: Use code <strong>DPS2025</strong> to get 10% Discount on all Wall Maps! Limited time only.</span>
          </span>

           {/* Repeat Items for seamless look (Optional) */}
           <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Visit us at Pazundaung Township. Open daily 9am-6pm.ph-09775204020</span>
          </span>
        </div>
      </div>

      {/* --- Main Header --- */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img src={logo} alt="Logo" className="h-16 w-16" />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-foreground">DPS Map</span>
              <span className="hidden text-xs text-muted-foreground sm:block">Precision Cartography</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map(link => (
              link.href === '/maps' ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  {/* <button
                    onClick={() => setIsMapsDropdownOpen(!isMapsDropdownOpen)}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive(link.href) 
                        ? "text-primary" 
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isMapsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button> */}
                  {isMapsDropdownOpen && (
                    <div 
                      className="absolute left-0 mt-1 w-48  border bg-popover p-2 shadow-lg z-50"
                      onMouseLeave={() => setIsMapsDropdownOpen(false)}
                    >
                      <Link target="_blank"
                        to="https://dpsmap.com/yangon/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.yangonMap')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.home')}
                      </Link>
                      {/* <Link target="_blank"
                        to="https://dpsmap.com/pages/map-download/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.freeMapDownload')}
                      </Link> */}
                      <Link target="_blank"
                        to="https://dpsmap.com/mandalay/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.mandalayMap')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/myanmar/index.shtml"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.myanmarMap')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/myanmar/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.myanmarMapMain')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/naypyitaw/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.naypyitawMap')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/administrative-boundaries/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.administrativeBoundaries')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/districts/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.districts')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/industrial/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.industrial')}
                      </Link>
                      {/* <Link target="_blank"
                        to="https://dpsmap.com/onlinemapshop/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.onlineMapShop')}
                      </Link> */}
                      {/* <Link target="_blank"
                        to="https://dpsmap.com/yangon/eomap/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.ympEoMap')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/bago/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.bagoMap')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/downloadmap/kachin.html"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.kachinMapDownload')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/gis/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.gis')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/inlay/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.inlayMap')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/jobs/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.jobs')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/magway/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.magwayMap')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/mapplotting.php"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.mapPlottingServices')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/pyinmana/pyinmana.shtml"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.pyinmanaMap')}
                      </Link>
                      <Link target="_blank"
                        to="https://dpsmap.com/sagaing/"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMapsDropdownOpen(false)}
                      >
                        {t('nav.sagaingMap')}
                      </Link> */}
                    </div>
                  )}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive(link.href) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </Link>
              )
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            
            {/* <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">{t('header.search')}</span>
            </Button> */}

            <Button 
              variant="ghost" 
              size="icon"
              onClick={onAuthClick}
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={openCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-xs font-bold text-primary-foreground">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="animate-slide-up border-t border-border bg-background lg:hidden">
            <nav className="container flex flex-col py-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium transition-colors hover:bg-secondary",
                    isActive(link.href) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* --- Advertisement Floating Card --- */}
      {showAd && (
        <div className="fixed right-4 top-1/2 z-40 w-64 -translate-y-1/2 transform rounded-xl border border-border bg-card p-3 shadow-2xl transition-all duration-300 animate-in slide-in-from-right-10">
          {/* Badge */}
          <span className="absolute -left-2 -top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            Old HomePage
          </span>

          {/* Close Button */}
          <button 
            onClick={() => setShowAd(false)} 
            className="absolute right-2 top-2 z-10 rounded-full bg-black/20 p-1 text-white hover:bg-black/40 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>

          {/* Ad Content */}
          <a href="https://dpsmap.com/index-old.php" target='_blank' className="group block space-y-3">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <img 
                // ဒီနေရာမှာ မိမိထည့်ချင်တဲ့ ပုံ link ကိုထည့်ပါ
                src={old} 
                alt="Old Website" 
                className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="px-1">
              <h4 className="font-display text-sm font-bold leading-tight group-hover:text-primary">
                Click here to Visit Our old HomePage
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">
                See the previous version of our homepage
              </p>
            </div>
          </a>
        </div>
      )}
    </>
  );
}