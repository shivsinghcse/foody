import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: localStorage.getItem('items')
            ? JSON.parse(localStorage.getItem('items'))
            : [],
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(
                (item) => item?.card?.info?.id === action?.payload?.card?.info?.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (index !== -1) {
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity -= 1;
                } else {
                    state.items.splice(index, 1);
                }
            }
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.setItem('items', JSON.stringify(state.items));
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
