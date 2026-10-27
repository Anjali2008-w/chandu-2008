export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number; // in USD base
  originalPrice?: number;
  category: 'outerwear' | 'knitwear' | 'trousers' | 'footwear' | 'accessories';
  gender: 'women' | 'men' | 'unisex';
  badge?: 'New Drop' | 'Best Seller' | 'Limited 50' | 'Archival' | 'Sale';
  rating: number;
  reviewsCount: number;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  description: string;
  composition: string;
  fit: string;
  care: string[];
  inStock: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export interface LookbookPin {
  id: string;
  x: number; // percentage
  y: number; // percentage
  productId: string;
  label: string;
}

export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY';

export interface CurrencyRate {
  symbol: string;
  rate: number;
}
