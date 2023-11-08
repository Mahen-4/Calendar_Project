import React from "react"
import AddButton from "./addButton"

export default function Header ()  {

    const dateString = "Tue Nov 07 2023 12:11:49 GMT+0100 (Central European Standard Time)";
    const date = new Date(dateString);
    
    const options = {month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);


    return(
        <div className="header">
            <h1>{formattedDate}</h1>
            <AddButton />
        </div>
    )
}