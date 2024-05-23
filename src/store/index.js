import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "../redux/slices/goods";
import { authReducer } from "../redux/slices/auth";

export const store = configureStore({
    reducer: {
        goods: goodsReducer,
        auth: authReducer
    }
})