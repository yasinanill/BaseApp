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

const userSlice = createSlice({
  name: 'user',
  initialState: {
    age: null,
    height: null,
    weight: null,
    gender: null,
    activityLevel: null,
    bmiResult: null,
    calorieResult: null,
    idealWeight: null,
  },
  reducers: {
    setUserData: (state, action) => {
        return { ...state, ...action.payload };
    },
    // Diğer reducer'ları buraya ekleyin
  },
});

export const { setUserData } = userSlice.actions;
export const { addToCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,

    // Diğer reducer'ları buraya ekleyin
  },
});




export default store;