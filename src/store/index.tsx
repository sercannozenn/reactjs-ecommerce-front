import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
import storage from 'redux-persist/lib/storage'; // localStorage kullanımı için
import { persistReducer, persistStore } from 'redux-persist';
import {BrandCacheService} from "../api/services/BrandCacheService.ts";
import {CategoryCacheService} from "../api/services/CategoryCacheService.ts";
import {FilterCacheService} from "../api/services/FilterCacheService.ts";
import {SettingsCacheService} from "../api/services/SettingsCacheService.ts";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'auth',
        BrandCacheService.reducerPath,
        CategoryCacheService.reducerPath,
        FilterCacheService.reducerPath,
        SettingsCacheService.reducerPath,
    ], // sadece auth saklanacak
};

const rootReducer = combineReducers({
    auth: authSlice,
    [BrandCacheService.reducerPath]: BrandCacheService.reducer,
    [CategoryCacheService.reducerPath]: CategoryCacheService.reducer,
    [FilterCacheService.reducerPath]: FilterCacheService.reducer,
    [SettingsCacheService.reducerPath]: SettingsCacheService.reducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([
            BrandCacheService.middleware,
            CategoryCacheService.middleware,
            FilterCacheService.middleware,
            SettingsCacheService.middleware,
        ]),
});

export const persistor = persistStore(store);
export default store;

export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
