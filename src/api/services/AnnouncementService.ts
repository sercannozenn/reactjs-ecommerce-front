import api from '../api';
import {Announcement} from "../../types/Announcement.ts";

export const AnnouncementService = {
    getHomepageItems: async (params = { limit: 2, offset: 0, is_active:1 }) => {
        const response = await api.get('/announcements/home', { params });
        return response.data.data;
    },
    getById: async (id: number): Promise<Announcement> => {
        const response = await api.get(`/announcements/${id}`);
        return response.data.data;
    },
};
