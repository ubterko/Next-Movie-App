import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./assets/movieApi";

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchApp = typeof store.dispatch;
