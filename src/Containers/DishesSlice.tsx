import {createSlice} from '@reduxjs/toolkit';
import {IDishes, IDishesForm} from '../types';
import {addDish, deleteDish, editDish, getDishes, getOrders, makeOrder} from './DishesThunk';


interface dishesState {
  dishes: IDishes[],
  orders: {id: string, order: {id: string, order: {id: string, count: number}}[] }[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: dishesState = {
  dishes: [],
  orders: [],
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
      if (contactsObject) {
        for (const [key, value] of Object.entries(contactsObject)) {
          contactsObject[key] = {
            id: key,
            title: value.title,
            price: value.price,
            photo: value.photo,
          };
        }
      }

      state.isLoading = false;
      state.dishes = contactsObject;
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

    builder.addCase(deleteDish.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(deleteDish.fulfilled, (state ) => {
      state.isLoading = false;
    });
    builder.addCase(deleteDish.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(editDish.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(editDish.fulfilled, (state ) => {
      state.isLoading = false;
    });
    builder.addCase(editDish.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      const ordersObject: {[key: string]: {[key: string]: string}} = action.payload;
      const ordersArray: {id: string, order: {id: string, order: {id: string, count: number}}[] }[] = [];


      if (ordersObject) {
        for (const [key, value] of Object.entries(ordersObject)) {
          let newOrder: {id: string, order: {id: string, count: number}} = {
            id: '',
            order: {
              id: '',
              count: 0
            }
          };

          let orders: {id: string, order: {id: string, count: number}}[] = []
          newOrder.id = key;

          for (const [key, dishFromOrder] of Object.entries(value)) {
            orders.push({id: key, count: dishFromOrder})
          }

          ordersArray.push({
            id: key,
            order: orders,
          });
        }
      }

      state.orders = ordersArray;
      state.isLoading = false;
    });
    builder.addCase(getOrders.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    })

    builder.addCase(makeOrder.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(makeOrder.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(makeOrder.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    })



  }
})


export const DishesReducer = DishesSlice.reducer;