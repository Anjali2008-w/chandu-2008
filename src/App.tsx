import React, { useState, useEffect } from 'react';
import { PRODUCTS, LOOKBOOK_PINS, REVIEWS_DATA, CURRENCY_RATES } from './data/products';
import { Product, CartItem, Currency } from './types/store';

export const App: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeGender, setActiveGender] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedCart = localStorage.getItem('an_cart');
    if (savedCart) setCart(JSON.parse(savedCart));

    const savedWish = localStorage.getItem('an_wishlist');
    if (savedWish) setWishlist(JSON.parse(savedWish));

    const savedCurr = localStorage.getItem('an_currency') as Currency;
    if (savedCurr && CURRENCY_RATES[savedCurr]) setCurrency(savedCurr);

    const savedTheme = localStorage.getItem('an_theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const formatPrice = (usd: number) => {
    const { symbol, rate } = CURRENCY_RATES[currency];
    const converted = Math.round(usd * rate);
    return `${symbol}${converted.toLocaleString()}`;
  };

  const handleAddToCart = (product: Product, size: string, color: string) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.productId === product.id && i.size === size && i.color === color);
      let updated: CartItem[];
      if (idx > -1) {
        updated = [...prev];
        updated[idx].quantity += 1;
      } else {
        updated = [
          ...prev,
          {
            id: `${product.id}-${size}-${color}-${Date.now()}`,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            size,
            color,
            quantity: 1,
          },
        ];
      }
      localStorage.setItem('an_cart', JSON.stringify(updated));
      return updated;
    });
    setIsCartOpen(true);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const updated = prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId];
      localStorage.setItem('an_wishlist', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Film grain noise overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Main Storefront is rendered with high fidelity */}
      <main className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="text-center space-y-3 mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            Autumn / Winter 2026 Collection
          </span>
          <h1 className="font-fraunces text-4xl sm:text-6xl font-semibold tracking-tight">
            ATELIER NOIR
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto">
            Contemporary luxury apparel founded on architectural tailoring, low-impact organic raw materials, and mindful permanence.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
