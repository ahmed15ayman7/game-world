"use client";
import { configureStore } from '@reduxjs/toolkit';
import search from './FilterationSlice';
import  games  from './gamesSlice';
export const store= configureStore({
    reducer:{
        games:games,
        search:search,
    }}
)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
