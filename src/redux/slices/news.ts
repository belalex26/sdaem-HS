import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

interface NewsState {
    news: []
    loading: boolean,
    error: string
  }

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const response = await axios.get('/news')
    return response.data
})

const initialState = {
    news: [],
    loading: false,
    error: 'none'
  } as NewsState

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchNews.fulfilled, (state, action) => {
          state.loading = true
          state.error = "none"
          state.news = action.payload
        })
    },
})

export const newsReduсer = newsSlice.reducer