import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchLogin = createAsyncThunk('auth/fetchUserData', async(params) =>{
    const {data } = await axios.post("/auth/login", params)
    return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async() =>{
    const { data } = await axios.get("/auth/me")
    console.log(data)
    return data
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async(params) =>{
    const { data } = await axios.post("/auth/register", params)
    console.log(data)
    return data
})

export const fetchFavourite = createAsyncThunk('auth/addFavouriteItem', async(params) =>{
    const { data } = await axios.post("/auth/addFavouriteItem", params)
    return data
})

export const fetchDeleteFavourite = createAsyncThunk('auth/deleteFavouriteItem', async(params) =>{
    const { data } = await axios.post("/auth/deleteFavouriteItem", params)
    return data
})

export const fetchAddCart = createAsyncThunk('auth/addCart', async(params) =>{
    const { data } = await axios.post("/auth/addCart", params)
    return data
})

export const fetchDeleteCart = createAsyncThunk('auth/deleteCart', async(params) =>{
    const { data } = await axios.post("/auth/deleteCart", params)
    return data
})


const initialState = {
    data: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchLogin.pending, (state) => {
            state.data = null
            state.status = 'loading'
        })
        builder.addCase(fetchLogin.rejected, (state) => {
            state.data = null
            state.status = 'rejected'
        })


        builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchAuthMe.pending, (state) => {
            state.data = null
            state.status = 'loading'
        })
        builder.addCase(fetchAuthMe.rejected, (state) => {
            state.data = null
            state.status = 'rejected'
        })



        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchRegister.pending, (state) => {
            state.data = null
            state.status = 'loading'
        })
        builder.addCase(fetchRegister.rejected, (state) => {
            state.data = null
            state.status = 'rejected'
        })



        builder.addCase(fetchFavourite.fulfilled, (state, action) => {
            state.favouriteItems = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchFavourite.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchFavourite.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})

export const selectIsAuth = state => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;