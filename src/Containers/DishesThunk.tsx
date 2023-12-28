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
    async (dish: IDishes) => {
        await axiosApi.post(`dishes.json`, dish);
    });


export const deleteDish = createAsyncThunk(
  'dishes/delete',
  async (id: string) => {
    await axiosApi.delete(`dishes/${id}.json`);
  });

export const editDish = createAsyncThunk(
  'dishes/edit',
  async (dish: IDishes) => {
    const dishCopy: IDishes = {...dish};

    if ('id' in dishCopy) {
      delete dishCopy.id;
    }

    await axiosApi.put<IDishes>(`dishes/${dish.id}.json`, dishCopy);
  });

