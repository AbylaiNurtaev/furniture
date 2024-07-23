import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'

export const getCalls = createAsyncThunk('calls/getCalls', async (params) => {
    const { data } = await axios.get("/calls");
    console.log(data);
    return data;
});

export const deleteCall = createAsyncThunk('calls/deleteCall', async (params) => {
    console.log("параметры", params);
    const { data } = await axios.delete("/calls", {
        data: { phone: params }
    });
    console.log(data);
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
    smth: ""
}

const callSlice = createSlice({
    name: 'calls',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCalls.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'success';
            })
            .addCase(getCalls.rejected, (state, action) => {
                state.status = 'error';
            })
            .addCase(deleteCall.fulfilled, (state, action) => {
                state.status = 'success';
                // Здесь можно обновить состояние, удалив вызов из state.data
            })
            .addCase(deleteCall.rejected, (state, action) => {
                state.status = 'error';
            });
    }
});

export const callReducer = callSlice.reducer;
