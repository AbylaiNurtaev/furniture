import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchGoods = createAsyncThunk('goods/fetchGoods', async() => {
    const {data} = await axios.get('/posts');
    console.log("data from ", data);
    return data;
})
export const fetchRemoveGoods = createAsyncThunk('goods/fetchRemoveGoods', async(title) => {
    const {data} =await axios.delete(`/posts/${title}`);
    console.log(data)
    return data;
})


const initialState = {
    goods: {
        items: [],
        status: 'loading'
    },
    deleting: {
        status: false
    }
}

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Получение статьей
        builder.addCase(fetchGoods.fulfilled, (state, action) => {
            state.goods.items = action.payload
            state.goods.status = 'success'
        })
        builder.addCase(fetchGoods.pending, (state) => {
            state.goods.items = []
            state.goods.status = 'loading'
        })
        builder.addCase(fetchGoods.rejected, (state) => {
            state.goods.items = []
            state.goods.status = 'rejected'
        })
        // Удаление статьей
        builder.addCase(fetchRemoveGoods.fulfilled, (state, action) => {
            state.goods.status = 'Товар успешно удалён'
            state.goods.items = state.goods.items.filter(obj => obj.title !== action.meta.arg)
            console.log("meta:",action.meta.arg);
        })
        builder.addCase(fetchRemoveGoods.rejected, (state) => {
            state.goods.status = 'Не удалось удалить товар'
        })
        builder.addCase(fetchRemoveGoods.pending, (state) => {
            state.deleting.status = 'Происходит удаление'
        })
    }
})

export const goodsReducer = goodsSlice.reducer;