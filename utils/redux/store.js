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
      state.totalCalories += newItem.productCalorie;
      state.totalCarbo += newItem.productCarbo;
      state.totalPro += newItem.productProtein;
      state.totalFat += newItem.productFAt;
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

const persistConfigCart = {
  key: 'cart',
  storage: AsyncStorage,
};

const persistConfigUser = {
  key: 'user',
  storage: AsyncStorage,
};

const persistConfigActiviteCalorie = {
  key: 'activiteCalories',
  storage: AsyncStorage,
};

const persistedCartReducer = persistReducer(persistConfigCart, cartSlice.reducer);
const persistedUserReducer = persistReducer(persistConfigUser, userSlice.reducer);
const persistedActiviteCalorieReducer = persistReducer(persistConfigActiviteCalorie, activiteCalorieSlice.reducer);


export const { addCalorie } = activiteCalorieSlice.actions;
export const { setUserData } = userSlice.actions;
export const { addToCart } = cartSlice.actions;






const store = configureStore({

  reducer: {
    cart: persistedCartReducer,
    user: persistedUserReducer,
    activiteCalories: persistedActiviteCalorieReducer,
    // Diğer reducer'ları buraya ekleyin
  }, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [ PERSIST, PURGE, REGISTER],
    },
  }),

});
export const persistor = persistStore(store);

export default store;