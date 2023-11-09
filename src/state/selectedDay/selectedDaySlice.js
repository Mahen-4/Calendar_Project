import { createSlice } from "@reduxjs/toolkit"

//initial value 
const initialState = { value: new Date().toISOString()}

const selectedDaySlice = createSlice({
    name: "selectedDay",
    initialState,
    reducers: {
        setSelectedDay: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setSelectedDay} = selectedDaySlice.actions
export default selectedDaySlice.reducer