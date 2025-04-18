import api from '../api';

export const AnnouncementService = {
    getHomepageItems: async (params = { limit: 2, offset: 0 }) => {
        const response = await api.get('/announcements/home', { params });
        return response.data.data;
    }
};
