import {type Action, configureStore, type ThunkAction} from "@reduxjs/toolkit";
import {baseApi} from "./api.ts";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk = ThunkAction<void, RootState, unknown, Action>
