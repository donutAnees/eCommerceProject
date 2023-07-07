import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount:0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.totalCount += action.payload.count;
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
       state.items[index].count += action.payload.count;
      } else {
        state.items.push({
          id: action.payload.id,
          count: action.payload.count,
        });
      }
    },
    
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
    },

    deleteCart: () => {
      return initialState;
    },

    buyNow: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (index === -1) {
        state.items.push({
          id: action.payload,
          count: 1,
        });
      } else {
        return;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;

export default store;
