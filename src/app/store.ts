import {configureStore} from "@reduxjs/toolkit";
import {DishesReducer} from "../Containers/DishesSlice";
import {CartReducer} from '../Containers/CartSlice';

export const store = configureStore({
  reducer: {
    dishes: DishesReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;