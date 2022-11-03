import {createSlice} from "@reduxjs/toolkit";

const initialCartState = {
    showCart: false,
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart
        },
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    key: newItem.id,
                    id: newItem.id,
                    title: newItem.title,
                    quantity: 1,
                    totalPrice: newItem.price,
                    price: newItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            }
            state.totalQuantity++;
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            state.totalQuantity--;
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer