import {configureStore} from '@reduxjs/toolkit'
import selectedDayReducer from './selectedDay/selectedDaySlice'
import aEventReducer from './aEvent/aEventSlice'

// redux Store
export const store = configureStore({
    reducer:{
        selectedDay: selectedDayReducer,
        aEvent: aEventReducer
    }
})