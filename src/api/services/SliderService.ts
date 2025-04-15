import api from '../api';
import {Slider} from "../../types/Slider.ts";


export const SliderService = {
    async getAll(): Promise<Slider[]> {
        const response = await api.get('/sliders');
        console.log(response);
        return response.data.data;
    },
};
