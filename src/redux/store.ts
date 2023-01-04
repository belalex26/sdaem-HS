import { configureStore } from '@reduxjs/toolkit';
import { newsReduсer } from './slices/news';

const store = configureStore({
    reducer: {
        news: newsReduсer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;