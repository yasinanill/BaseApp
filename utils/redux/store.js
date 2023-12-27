import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalCalories: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalCalories += newItem.productCalorie;
    },
    // Diğer reducer'ları buraya ekleyin (örneğin, ürünü sepetten çıkarma)
  },
});

export const { addToCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    // Diğer reducer'ları buraya ekleyin
  },
});

export default store;