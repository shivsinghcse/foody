import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        res: [],
    },
    reducers: {
        addRestaurant : (state, action) => {
            state.res.push(action.payload);
        },
        clearRestaurant : (state) => {
            state.res.length = 0;
        }
        
    },
});

export const { addRestaurant, clearRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;