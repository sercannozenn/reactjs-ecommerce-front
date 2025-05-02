import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FilterService, FiltersResponse } from './FilterService'

export const FilterCacheService = createApi({
    reducerPath: 'FilterCacheService',      // BrandCacheService’le paralel
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    keepUnusedDataFor: 600,                 // 5 dk cache
    tagTypes: ['Filter'],
    endpoints: (builder) => ({
        getFilters: builder.query<FiltersResponse, void>({
            async queryFn(_arg, _api, _extra, _fetchWithBQ) {
                try {
                    const data = await FilterService.getFilters()
                    return { data }
                } catch (err: any) {
                    return {
                        error: {
                            status: err.response?.status ?? 'FETCH_ERROR',
                            data: err.message,
                        },
                    }
                }
            },
            providesTags: (result) =>
                result
                    ? [
                        // Örneğin: her brand, category ve gender için birer tag
                        ...result.brands.map(b => ({ type: 'Filter' as const, id: `brand-${b.id}` })),
                        ...result.categories.map(c => ({ type: 'Filter' as const, id: `cat-${c.id}` })),
                        ...result.genders.map(g => ({ type: 'Filter' as const, id: `gen-${g.value}` })),
                        { type: 'Filter', id: 'LIST' },
                    ]
                    : [{ type: 'Filter', id: 'LIST' }],
        }),
    }),
})

export const { useGetFiltersQuery } = FilterCacheService
