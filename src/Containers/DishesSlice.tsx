import {createSlice} from '@reduxjs/toolkit';
import {IDishes, IDishesForm} from '../types';
import {addDish, getDishes} from './DishesThunk';


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
    name: 'dishes',
    initialState,
    reducers: {
    },

  extraReducers: (builder) => {

    builder.addCase(getDishes.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getDishes.fulfilled, (state, action ) => {
      const contactsObject: {[key: string]: IDishesForm} = action.payload;
      const dishesArray: IDishesForm[] = [];

      if (contactsObject) {
        for (const [key, value] of Object.entries(contactsObject)) {
          dishesArray.push({
            id: key,
            title: value.title,
            price: value.price,
            photo: value.photo,
          });
        }
      }

      state.isLoading = false;
      state.dishes = dishesArray;
    });
    builder.addCase(getDishes.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });


    builder.addCase(addDish.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(addDish.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addDish.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    })

  }
})


export const DishesReducer = DishesSlice.reducer;