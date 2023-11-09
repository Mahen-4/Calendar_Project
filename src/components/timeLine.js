import { ScheduleComponent, Day,Inject,ViewsDirective, ViewDirective  } from '@syncfusion/ej2-react-schedule';
// import data from '../lib/data.json'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import React from 'react';
import { deleteEvent } from '../functions/eventHelpers';
import { useDispatch } from 'react-redux';
import { setAevent } from '../state/aEvent/aEventSlice';

export default function TimeLine(){

    //get selectedDay & aEvent value from the store
    const selectedDay = useSelector((state)=> state.selectedDay.value)
    const aEvent = useSelector((state)=> state.aEvent.value)
    const dispatch = useDispatch()
    

    //event design / structure 
    function eventTemplate(value) {
        return(
            <div className='eventTemplate' style={{backgroundColor: value.ColorPicked+"90"}}>
                <p>{value.Subject}</p>
                <button onClick={()=>deleteEvent(value.Id, dispatch, setAevent)}>Delete</button>
                </div>
        )
    }

    
  const timeScale = { enable: true, interval: 60, slotCount: 1 };
   
    return(
        //schedule component showing only one day
        <ScheduleComponent 

            showHeaderBar={false} 
            width='65%' 
            height='100vh' 
            selectedDate={selectedDay}  
            eventClick={(args)=> args.cancel = true}
            popupOpen={(args)=> args.cancel = true}
            allowMultiCellSelection={false}
            timeScale={timeScale}
            timeFormat="HH:mm"
            workHours={{highlight: true, end: '21:00'}}
            eventSettings={{
                dataSource: aEvent,
                allowInline: false, /* Disable the event popup*/
                template: eventTemplate.bind(this) /*this refer to the ScheduleComponent here */ 
            }}
        >
            <ViewsDirective>
                <ViewDirective option='Day' startHour='09:00' endHour='21:00' />
            </ViewsDirective>
            <Inject services={[Day]} />
        </ScheduleComponent>
        
    )
}