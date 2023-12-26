import {createSlice} from '@reduxjs/toolkit';
import {IDishes} from "../types";

interface tvMoviesState {
    dishes: IDishes[],
    isLoading: boolean;
    isError: boolean;
}

const initialState: tvMoviesState = {
    dishes: [],
    isLoading: false,
    isError: false,
};

const DishesSlice = createSlice({
    name: 'tvMovies',
    initialState,
    reducers: {


    },
});


export const DishesReducer = DishesSlice.reducer;