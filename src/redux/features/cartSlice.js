import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: 'cartslice',
    initialState,
    reducers: {


        addTocart: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            console.log(itemIndex)
            if (itemIndex >= 0) {
                state.cart[itemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                state.cart = [...state.cart, temp]
            }
            //else part for the first time 
            //if part for the multiple times

            // state.cart.push(action.payload)
        },
        //removing specific items
        removeTocart: (state, action) => {
            const data = state.cart.filter((item) => item.id !== action.payload)
            state.cart = data
        },
        //remove individual items
        remove_individual: (state, action) => {
            const itemindex_desc = state.cart.findIndex((item) => item.id === action.payload.id)
            if (state.cart[itemindex_desc].qnty >= 1) {
                state.cart[itemindex_desc].qnty -= 1
            }
        },
        //clear data
        emptycart: (state, action) => {
            state.cart = []
        }
    }
})
//individual export
export const { addTocart, removeTocart, remove_individual, emptycart } = cartSlice.actions

export default cartSlice.reducer