import { createSlice,nanoid } from "@reduxjs/toolkit"; 





const initialState = {
    lists:[],
    background_url: '',
    availableIds: Array.from({ length: 101 }, (_, i) => i), // Store available IDs,
}

export const listSlice = createSlice({
    name: 'list_todo',
    initialState,
    reducers  : {
        // Add new list......
        addList: (state,action) => {
            const {group_id} =action.payload

            const new_id = availableIds[0];
            state.availableIds = state.availableIds.filter((num) => num!== new_id)

            
            const add_new_list = {
                id : nanoid(),
                num_id : new_id,
                name: (new_id === 0 ? `Untitled list` : `Untitled list (${new_id})`),
                group_id:group_id,
            }
            state.lists.push(add_new_list)

        // delete list..........
        deleteList: (state,action) => {
            const {id,num_id} =action.payload
            state.lists = state.lists.filter((list) => list.id !== id)
            state.availableIds.push(num_id)
            state.availableIds.sort((a, b) => a - b);
        }

        // edit list...........
        editListName: (state,action) => {
            const {id,text,num_id} = action.payload
            state.lists = state.lists.map((obj) => obj.id === id ? {...obj,name : text} :obj )
            state.availableIds.push(num_id)
            state.availableIds.sort((a, b) => a - b);
        }

        //edit list group.......

        editListGroup: (state,action) => {
            const {id,groupid} = action.payload
            state.lists =state.lists.map((obj) => obj.id === id ? {...obj,group_id:groupid}:obj)
        }
        
        //backgroundURL......

        backgroundEdit : (state,action) => {
            const {background} = action.payload
            state.background_url = background
        }
        }
    },
})


export const {addList,deleteList,editListName,backgroundEdit} = listSlice.actions

export default listSlice.reducer