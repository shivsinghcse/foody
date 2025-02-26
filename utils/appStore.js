import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import restaurantReducer from './resSlice'
import locationReducer from './locationSlice'
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        restaurant: restaurantReducer,
        location: locationReducer,
    },
});

export default appStore;
