import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    itemList: [],
    saveItemList: []

}

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        saveItem: (state,action) => {
            state.itemList.push(action.payload)
        },
        itemToSave: (state,action) => {
            state.saveItemList.push(action.payload)
        },
        setCheck: (state,action) => {
            state.itemList.map(item => {
                if (action.payload === item.id ) {
                    if (item.done === true) { 
                        item.done = false;
                        

                        
                    }else {
                        item.done = true;
                        state.saveItemList.push(item.item)
                        
                        
                        
                    }
                    
                }
            })
        },

    }
});

export const {saveItem,itemToSave,setCheck} = itemSlice.actions
export const selectItemList = state => state.items.itemList
export const savedItemList = state => state.items.saveItemList

export default itemSlice.reducer