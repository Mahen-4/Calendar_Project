import React from "react"
import AddEvent from "./addEvent"
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Header ()  {

    //get selectedDay value from the store
    const selectedDay = useSelector((state)=> state.selectedDay.value)
    // convert to a Date
    const date = new Date(selectedDay);
    
    // formating the date to "Month Day"
    const options = {month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);


    return(
        <div className="header">
            <h1>{formattedDate}</h1>
            <AddEvent />
        </div>
    )
}