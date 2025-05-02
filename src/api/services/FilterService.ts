import api from '../api';
import { Brand } from '../../types/Brand';
import { Category } from '../../types/Category';
import {GenderOption} from "../../types/GenderOptipn.ts";

export interface FiltersResponse {
    genders:   GenderOption[];
    categories: Category[];
    brands:     Brand[];
}

export const FilterService = {
    async getFilters(): Promise<FiltersResponse> {
        const resp = await api.get<{ data: FiltersResponse }>('/products/filters');
        return resp.data.data;
    },
};
