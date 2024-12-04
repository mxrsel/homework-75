import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {decodedMessage, encodedMessage} from "../thunks/cipherThunks.ts";

interface ICipherSlice {
    encodedMessage: string | null;
    decodedMessage: string | null;
    isLoading: boolean;
    isError: boolean;
}

const initialState: ICipherSlice = {
    encodedMessage: null,
    decodedMessage: null,
    isLoading: false,
    isError: false,
}

const cipherSlice = createSlice({
    name: "cipher",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                encodedMessage.pending, (state) => {
                    state.isLoading = true
                    state.isError = false
                })
            .addCase(
                encodedMessage.fulfilled, (state, action: PayloadAction<string>) => {
                    state.isLoading = false
                    state.encodedMessage = action.payload
                })
            .addCase(
                encodedMessage.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
            .addCase(
                decodedMessage.pending, (state) => {
                    state.isLoading = true
                    state.isError = false
                })
            .addCase(
                decodedMessage.fulfilled, (state, action: PayloadAction<string>) => {
                    state.isLoading = false
                    state.decodedMessage = action.payload
                })
            .addCase(
                decodedMessage.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
    }
})

export const cipherReducer = cipherSlice.reducer