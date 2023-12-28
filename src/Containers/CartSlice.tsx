import {createSlice} from '@reduxjs/toolkit';
import {IDishes} from '../types';

interface tvMoviesState {
  CartDishes: IDishes[],
  isLoading: boolean;
  isError: boolean;
}

const initialState: tvMoviesState = {
  CartDishes: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {


  }
})


export const CartReducer = CartSlice.reducer;