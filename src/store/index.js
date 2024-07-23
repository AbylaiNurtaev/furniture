import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "../redux/slices/goods";
import { authReducer } from "../redux/slices/auth";
import { findReducer } from '../redux/slices/find'
import { callReducer } from "../redux/slices/call";

export const store = configureStore({
    reducer: {
        goods: goodsReducer,
        auth: authReducer,
        find: findReducer,
        calls: callReducer
    }
})