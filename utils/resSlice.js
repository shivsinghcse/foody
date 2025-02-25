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
        
    },
});

export const { addRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;