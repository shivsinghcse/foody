import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import restaurantReducer from './resSlice'
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        restaurant: restaurantReducer,
    },
});

export default appStore;
