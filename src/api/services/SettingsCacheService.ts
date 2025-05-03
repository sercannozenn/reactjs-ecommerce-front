import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SettingsService } from './SettingsService';

export const SettingsCacheService = createApi({
    reducerPath: 'SettingsCacheService',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    keepUnusedDataFor: 300, // 5 dk
    tagTypes: ['Settings'],
    endpoints: (builder) => ({
        getSettings: builder.query<{ [key: string]: string }, void>({
            async queryFn(_arg, _api, _extraOptions, _fetchWithBQ) {
                try {
                    const data = await SettingsService.getAll();
                    return { data };
                } catch (err: any) {
                    return {
                        error: {
                            status: err.response?.status ?? 'FETCH_ERROR',
                            data: err.message,
                        },
                    };
                }
            },
            providesTags: (result) =>
                result
                    ? [{ type: 'Settings', id: 'LIST' }]
                    : [{ type: 'Settings', id: 'LIST' }],
        }),
    }),
});
export const { useGetSettingsQuery } = SettingsCacheService;



