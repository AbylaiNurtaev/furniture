import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    findedItems: []
}


const findSlice = createSlice({
    name: "find",
    initialState,
    reducers: {
        findItems(state, action){
            state.findedItems = action.payload;
        }
    }
})

export const {findItems} = findSlice.actions;
export const findReducer = findSlice.reducer;