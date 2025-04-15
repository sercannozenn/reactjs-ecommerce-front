import api from '../api';

export const ProductService = {
    async getLatest(count: number = 8) {
        const response = await api.get(`/products/latest`, {
            params: { count }
        });
        console.log(response)
        return response.data.data;
    },
};