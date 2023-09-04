"use client";
import { createSlice  } from '@reduxjs/toolkit'
import { type game } from './games';

const initDataSlice ={
    games : []
}
const dataSlice =createSlice({
    name: 'games',
    initialState: initDataSlice,
    reducers :{
        GetData:(state ,action)=>{
            return action.payload;
        }
    }
})
export const { GetData }=dataSlice.actions
export default dataSlice.reducer