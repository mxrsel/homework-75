import {configureStore} from "@reduxjs/toolkit";
import {cipherReducer} from "../store/slice/cipherSlice.ts";

export const store = configureStore({
    reducer: {
        cipher: cipherReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
