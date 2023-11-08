import React from 'react'
import Calendar from 'react-calendar'
import TimeLine from './timeLine'
import Header from './header/header'

export default function CalendarComponent()  {

    const [date, setDate] = React.useState(new Date())

    const onDateChange = (value) => {
        setDate(value)
    }

    

    return(
        <div className='container'>
            <Header />
            <TimeLine selectedDay={date}/>
            <Calendar 
            onChange={onDateChange} 
            value={date} 
            />
        </div>
    )
}