import { ProductImage } from './ProductImage';
import { Brand } from './Brand';
import { ProductPrice } from './ProductPrice';

export interface Product {
    id: number;
    name: string;
    short_description: string;
    final_price: number;
    latest_price: ProductPrice;
    images: ProductImage[];
    featured_image: ProductImage;
    brand: Brand;
}