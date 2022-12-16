import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name:'counter',
    initialState:{
        name:'wujiayu',
    },
    // 将新增的action的信息转移到state当中
    reducers:{
        changeName:(state,action) => {
            state.name = action.payload
            console.log('action.payload', action.payload);
        }
    }
})

export const { changeName } = pageSlice.actions
export const selectName = (state) =>state.couter.name

export default pageSlice.reducer