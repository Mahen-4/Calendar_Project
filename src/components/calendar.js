import React from 'react'
import Calendar from 'react-calendar'
import TimeLine from './timeLine'

export default function CalendarComponent()  {

    const [date, setDate] = React.useState(new Date())

    const onDateChange = (value) => {
        setDate(value)
    }

    

    return(
        <div>
            <TimeLine selectedDay={date}/>
            <Calendar 
            onChange={onDateChange} 
            value={date} 
            />
        </div>
    )
}