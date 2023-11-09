import React from 'react'
import Calendar from 'react-calendar'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { setSelectedDay } from '../state/selectedDay/selectedDaySlice'


export default function CalendarComponent()  {

    //get selectedDay value from the store
    const selectedDay = useSelector((state)=> state.selectedDay.value)
    const dispatch = useDispatch()

    const onDateChange = (value) => {
        //Convert the Date (value)  into a serializable format, here ISO string 
        // serializable -> meaning it can be easily converted to a JSON format.
        const timestamp = value.toISOString();
        // set the selectedDay to the value converted
        dispatch(setSelectedDay(timestamp))
    }

    

    return(
        //calendar component
        <Calendar onClickDay={onDateChange} value={selectedDay} />
    )
}