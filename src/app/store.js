import { configureStore } from "@reduxjs/toolkit"
import todoreducer from '../features/todoSlice'
import listreducer from '../features/listSlice'
import groupreducer from '../features/groupSlice'
import activereducer from '../features/activeSlice' 
import activeListreducer from '../features/activeList'

export const store = configureStore({
    reducer:{
        Todo: todoreducer,
        List: listreducer,
        Group: groupreducer,
        ActiveTodo: activereducer,
        ActiveList: activeListreducer,
    }
})

