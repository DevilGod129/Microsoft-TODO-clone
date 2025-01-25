import { createSlice,nanoid } from "@reduxjs/toolkit"; 
import { act } from "react";

const initialState = {
    id:nanoid(),
    todos:[],
    important: false,
    list_id: nanoid(),

}

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        // Addding todo to the string
        addTodo: (state,action) => {
            const add_new_todo = {
                todo_id: nanoid(),
                text: action.payload(),
                completed: false,
                subtodo:[],
            }
            state.todos.push(add_new_todo)
        },

        // Deleting todo 
        deleteTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
            // Here the filter returns back a new array with removed id todo
        },

        // Edit the text in todo.......
        editTodo: (state,action) => {
            const {id,text} =action.payload
            state.todos = state.todos.map((todo) => todo.id === id ? {...todo,text:text}:todo)

        },

        //Toggle the todo.....

        toggleTodo: (state,action) =>{
            const {id} =action.payload
            state.todos = state.todos.map((todo) => todo.id === id ? {...todo,completed: !todo.completed}:todo)
        },

        //set the todo as important....

        importantTodo: (state,action) => {
            const {id}  = action.payload
            state = state.map((obj) => state.id=== id ? {...state,important:!state.important}: obj)
        },

        // substeps: 

        add_sub_todo: (state,action) =>{
            const subtodo_add  = {
                subtodo_id: nanoid(),
                subtodo_text: action.payload(),
                subtodo_completed: false,
            }
            state.todos.subtodo.push(subtodo_add)
        },

        del_sub_todo : (state,action) => {
            state.todos.subtodo = state.todos.subtodo.filter((todo) => todo.subtodo_id !== action.payload )
        },

        edit_sub_todo : (state,action) => {
            const {id,text} =action.payload
            state.todos.subtodo = state.todos.subtodo.map((todo) => todo.subtodo_id === id ? {...todo,subtodo_text:text}:todo)
        },
        
        toggle_sub_todo: (state,action) =>{
            const {id} =action.payload
            state.todos.subtodo = state.todos.subtodo.map((todo) => todo.subtodo_id === id ? {...todo,subtodo_completed: !todo.subtodo_completed}:todo)
        },

    }
})