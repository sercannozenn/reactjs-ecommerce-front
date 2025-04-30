import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
import storage from 'redux-persist/lib/storage'; // localStorage kullanımı için
import { persistReducer, persistStore } from 'redux-persist';
import {BrandCacheService} from "../api/services/BrandCacheService.ts";
import {CategoryCacheService} from "../api/services/CategoryCacheService.ts";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'auth',
        BrandCacheService.reducerPath,
        CategoryCacheService.reducerPath
    ], // sadece auth saklanacak
};

const rootReducer = combineReducers({
    auth: authSlice,
    [BrandCacheService.reducerPath]: BrandCacheService.reducer,
    [CategoryCacheService.reducerPath]: CategoryCacheService.reducer,

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
        ]),
});

export const persistor = persistStore(store);
export default store;

export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
