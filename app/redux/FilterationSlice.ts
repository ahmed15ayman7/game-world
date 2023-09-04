"use client";
import { createSlice  } from '@reduxjs/toolkit'

import { games, type game } from './games';

const initDataSlice ={
    games : games
    ,item: null
}
const FilterationSlice =createSlice({
    name: 'FilterationSlice',
    initialState: initDataSlice,
    reducers :{
        ResultSearch:(state ,action )=>{
            return {
                games: action.payload.games.filter(
                (e:game) =>
                  e.title.toLowerCase().includes(action.payload.name) ||
                  e.title.includes(action.payload.name)  
              )
            ,item:state.item
        }
        },
        SeletedSearh:(state,action)=>{
            return {
                games:state.games,
                item:action.payload
            }
        }
    }
})
export const { ResultSearch ,SeletedSearh}=FilterationSlice.actions
export default FilterationSlice.reducer