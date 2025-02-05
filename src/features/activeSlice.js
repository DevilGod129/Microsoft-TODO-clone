import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    active_todo_id: null,
    visible: false,
}

const activeSlice =  createSlice({
    name: 'activeTodo',
    initialState,
    reducers: {
        setActiveTodo: (state,action) => {
            const {todo_id} = action.payload
            state.active_todo_id = todo_id
            state.visible = !state.visible
        },
        
    }
}) 

export const {setActiveTodo} = activeSlice.actions
export default activeSlice.reducer