import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    active_todo_id: null,
}

const activeSlice =  createSlice({
    name: 'active_or_not',
    initialState,
    reducers: {
        setActiveTodo: (state,action) => {
            const {todo_id} = action.payload
            state.active_todo_id = todo_id
        },
        
    }
}) 

export const {setActiveTodo} = activeSlice.actions
export default activeSlice.reducer