import { ScheduleComponent, Day,Inject,ViewsDirective, ViewDirective  } from '@syncfusion/ej2-react-schedule';
// import data from '../lib/data.json'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import React from 'react';

export default function TimeLine(){

    //get selectedDay & aEvent value from the store
    const selectedDay = useSelector((state)=> state.selectedDay.value)
    const aEvent = useSelector((state)=> state.aEvent.value)

    

    //event design / structure 
    function eventTemplate(value) {
        return(
            <div className='eventTemplate' style={{backgroundColor: value.ColorPicked+"90"}}>
                <p>{value.Subject}</p>
                <button>Delete</button>
                </div>
        )
    }

    return(
        //schedule component showing only one day
        <ScheduleComponent showHeaderBar={false} width='65%' height='100vh' selectedDate={selectedDay} eventSettings={{dataSource: aEvent, template: eventTemplate.bind(this) /*this refer to the ScheduleComponent here */ }}>
            <ViewsDirective>
                <ViewDirective option='Day' startHour='09:30' endHour='18:00' />
            </ViewsDirective>
            <Inject services={[Day]} />
        </ScheduleComponent>
        
    )
}