import {createSlice} from "@reduxjs/toolkit";

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
})

export const cipherReducer = cipherSlice.reducer