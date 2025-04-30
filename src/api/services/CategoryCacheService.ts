import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Category} from "../../types/Category.ts";
import {CategoryService} from "./CategoryService.ts";


export const CategoryCacheService = createApi({
    reducerPath: 'CategoryCacheService',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    keepUnusedDataFor: 300,
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getSubcategories: builder.query<Category[], string>({
            async queryFn(slug) {
                try {
                    const data = await CategoryService.getSubcategories(slug)
                    return { data }
                } catch (err: any) {
                    return { error: { status: err.response?.status ?? 'FETCH_ERROR', data: err.message } }
                }
            },
            providesTags: (result, _err, slug) =>
                result
                    ? [
                        ...result.map(c => ({ type: 'Category' as const, id: c.id })),
                        { type: 'Category', id: `SUBLIST-${slug}` },
                    ]
                    : [{ type: 'Category', id: `SUBLIST-${slug}` }],
        }),
    }),
})

export const { useGetSubcategoriesQuery } = CategoryCacheService

