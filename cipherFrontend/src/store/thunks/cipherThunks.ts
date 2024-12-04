import axiosApi from "../../axiosApi.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const encodedMessage = createAsyncThunk<string, string>(
    "cipher/encodedMessage",
    async (message: string) => {
        try {
            const response = await axiosApi.post("/encode", { message });
            return response.data.encodedMessage;
        } catch (err) {
            console.error(err);
        }
    }
);

export const decodedMessage = createAsyncThunk<string, string>(
    "cipher/decodedMessage",
    async (message: string) => {
        try {
            const response = await axiosApi.post("/decode", { message });
            return response.data.decodedMessage;
        } catch (err) {
            console.error(err);
        }
    }
);
