import { ProductImage } from './ProductImage';
import { Brand } from './Brand';
import { ProductPrice } from './ProductPrice';
import {Category} from "./Category.ts";

export interface Product {
    id: number;
    name: string;
    slug: string;
    short_description: string;
    long_description: string;
    final_price: number;
    price: number;
    latest_price: ProductPrice;
    images: ProductImage[];
    featured_image: ProductImage;
    brand: Brand;
    categories: Category[];
    sizes: ProductSize[];
    active_price_history: ActivePriceHistory;

}

export interface ProductSize {
    id: number;
    size: string;
    stock: number;
    stock_alert: number;
}

export interface ActivePriceHistory {
    id: number;
    price: number;
    price_discount: number;
    created_at: string;
    discount: ProductDiscount;
}
export interface ProductDiscount {
    id: number;
    discount_type: string;
    discount_amount: string
}