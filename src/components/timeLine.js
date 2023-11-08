import { ScheduleComponent, Day,Inject,ViewsDirective, ViewDirective  } from '@syncfusion/ej2-react-schedule';
import data from '../lib/data.json'

export default function TimeLine({selectedDay}){
    
    function eventTemplate(value) {
        return(
            <div className='eventTemplate'>{value.Subject}</div>
        )
    }
    return(
        <ScheduleComponent showHeaderBar={false} width='65%' height='100vh' selectedDate={selectedDay} eventSettings={{dataSource: data, template: eventTemplate.bind(this) }}>
            <ViewsDirective>
                <ViewDirective option='Day' startHour='09:30' endHour='18:00' />
            </ViewsDirective>
            <Inject services={[Day]} />
        </ScheduleComponent>
        
    )
}