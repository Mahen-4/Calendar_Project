import { createSlice } from "@reduxjs/toolkit"

//initial value 
const initialState = { value: []}

const aEventSlice = createSlice({
    name: "aEvent",
    initialState,
    reducers: {
        setAevent: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setAevent} = aEventSlice.actions
export default aEventSlice.reducer