import api from "../api.ts";

export const SettingsService = {
    async getAll(): Promise<{ [key: string]: string }> {
        const response = await api.get('/settings');
        return response.data.data;
    },
};
