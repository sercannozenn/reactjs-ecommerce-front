import api from "../api.ts";

export const SettingsService = {
    async getAll(): Promise<{ [key: string]: string }> {
        const response = await api.get('/settings');
        console.log(response);
        return response.data.data;
    },
};
