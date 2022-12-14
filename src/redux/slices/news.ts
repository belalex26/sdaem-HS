import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

type News = {
  id: number,
  title: string,
  text: string,
  preview: string,
  imgPrev: string,
  date: string,
  img: string,
  img2x: string
  
}

interface NewsState {
    news: News[]
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