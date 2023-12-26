import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IDishes} from "../types";

export const getContacts = createAsyncThunk(
    'dishes/get',
    async () => {
        const response = await axiosApi.get(`dishes.json` );
        return response.data ?? [];
    });


export const addContact = createAsyncThunk(
    'dishes/add',
    async (contact: IDishes) => {
        await axiosApi.post(`dishes.json`, contact);
    });
