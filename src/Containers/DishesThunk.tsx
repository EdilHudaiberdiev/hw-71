import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IDishes} from "../types";

export const getDishes = createAsyncThunk(
    'dishes/get',
    async () => {
        const response = await axiosApi.get(`dishes.json` );
        return response.data ?? [];
    });


export const addDish = createAsyncThunk(
    'dishes/add',
    async (contact: IDishes) => {
        await axiosApi.post(`dishes.json`, contact);
    });
