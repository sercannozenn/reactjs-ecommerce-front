import api from "../api";
import { Brand } from "../../types/Brand";

export const BrandService = {
     async getAll(): Promise<Brand[]> {
        const response = await api.get("/brands");
        return response.data.data;
    },
}
