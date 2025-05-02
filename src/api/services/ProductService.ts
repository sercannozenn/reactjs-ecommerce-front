import api from '../api';
import {Product} from "../../types/Product.ts";

interface ProductPaginatedResponse {
    data: Product[];
    meta: {
        current_page: number;
        last_page: number;
        total: number;
        per_page: number;
    };
}

export const ProductService = {
    async getLatest(count: number = 8) {
        const response = await api.get(`/products/latest`, {
            params: { count }
        });
        console.log(response)
        return response.data.data;
    },
    async list(filter: any): Promise<ProductPaginatedResponse> {
        const response = await api.get('/products', { params: filter });
        return response.data.data;
    },
};