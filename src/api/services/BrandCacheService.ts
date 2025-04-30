import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BrandService } from './BrandService'
import {Brand} from "../../types/Brand.ts";

export const BrandCacheService = createApi({
    reducerPath: 'BrandCacheService',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    keepUnusedDataFor: 300,              // 5 dk cache
    tagTypes: ['Brand'],
    endpoints: (builder) => ({
        getBrands: builder.query<Brand[], void>({
            async queryFn(_arg, _api, _extra, _fetchWithBQ) {
                try {
                    const data = await BrandService.getAll()
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
                        ...result.map(b => ({ type: 'Brand' as const, id: b.id })),
                        { type: 'Brand', id: 'LIST' },
                    ]
                    : [{ type: 'Brand', id: 'LIST' }],
        }),
    }),
})

export const { useGetBrandsQuery } = BrandCacheService
