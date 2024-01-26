import { combineReducers, configureStore, createSlice ,getDefaultMiddleware   } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalCalories: 0,
    totalCarbo: 0,
    totalPro: 0,
    totalFat: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalCalories = newItem.reduce((total, item) => total + item.productCalorie, 0);
      state.totalCarbo = newItem.reduce((total, item) => total + item.productCarbo, 0);
      state.totalPro = newItem.reduce((total, item) => total + item.productProtein, 0);
      state.totalFat = newItem.reduce((total, item) => total + item.productFAt, 0);
  
      console.log('wwwwww' ,state.totalCalories)
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
    bmiResults: null,
    calorieResults: null,
    idealWeights: null,
  },
  reducers: {
    setUserData: (state, action) => {
        return { ...state, ...action.payload };
    },
    
    // Diğer reducer'ları buraya ekleyin
  },
});
const activiteCalorieSlice = createSlice({
  name: 'activiteCalories',
  initialState: {
    totalCalories: 0,
  },
  reducers: {
    addCalorie: (state, action) => {
      state.totalCalories += action.payload;
    },
  },
});


export const { addCalorie } = activiteCalorieSlice.actions;
export const { setUserData } = userSlice.actions;
export const { addToCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    activiteCalories: activiteCalorieSlice.reducer,
  
    // Diğer reducer'ları buraya ekleyin
  },
});

export default store;