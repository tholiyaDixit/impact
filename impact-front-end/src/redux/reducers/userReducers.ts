// export const data = null

import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser: (state, {payload}) => {
            return {...state, user: payload}
        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;