import React from "react"
import { useDispatch} from 'react-redux'
import { setAevent } from "../../state/aEvent/aEventSlice"
import {createEvent} from '../../functions/eventHelpers'
import {FaRegCalendar,FaRegClock} from 'react-icons/fa6'

export default function AddEvent ()  {
    const dispatch = useDispatch()

    // get all event already on the localStorage and store it in the aEvent global state
    React.useEffect(()=>{
        if(Object.keys(localStorage).includes("eventCALENDAR")){
            const allEvent = localStorage.getItem("eventCALENDAR")
            const allEventArray = JSON.parse(allEvent);
            dispatch(setAevent(allEventArray))
        }
    },[])

    const [popUp, setPopUp] = React.useState(false)

    const formColorChange = (color)=>{
        const root = document.documentElement;
        // css color variable affected to the color picked / root? check if root is defined
        root?.style.setProperty("--form-color", color+"90");
    }

    const test = (event)=>{
        try {
            createEvent(event,dispatch,setAevent)
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <div>
            <div className="addEvent">
                <button onClick={()=> setPopUp(!popUp)}>+</button>
            </div>

            <div className="addPopUp" style={{display: popUp === true ? "flex" : "none"}}>
                <div className="blackBG" onClick={()=> setPopUp(!popUp)}></div>
                <div className="popUpContent">
                    <form onSubmit={(event)=> test(event)}cat>
                        <div>
                            <input type="text" placeholder="Add Title" name="title"/>
                            <input type="color" onChange={(e)=> formColorChange(e.target.value)} name="colorPicked"/>
                        </div>
                        <div>
                            <FaRegCalendar size="30px" />
                            <input type="date" name="startDate"/>
                            <input type="date" name="endDate"/>
                        </div>
                        <div>
                            <FaRegClock size="30px"/>
                            <input type="time" name="startTime"/>
                            <input type="time" name="endTime"/>
                        </div>
                        <input type="text" placeholder="comment" style={{fontSize: "20px"}} name="comment"/>
                        <input type="submit" value="Add"/>
                    </form>
                </div>
            </div>
        </div>
    )
}