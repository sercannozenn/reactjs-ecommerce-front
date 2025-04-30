import api from "../api";
import { Category } from "../../types/Category";

export const CategoryService = {
    async getSubcategories(slug: string): Promise<Category[]> {
        const response = await api.get(`/categories/${slug}/subcategories`);
        return response.data.data;
    },
}
