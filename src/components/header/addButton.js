import React from "react"

export default function AddButton ()  {

    const [popUp, setPopUp] = React.useState(false)
    console.log(popUp)

    const formColorChange = (color)=>{
        const root = document.documentElement;
        // css color variable affected to the color picked 
        root?.style.setProperty("--form-color", color+"90");
    }

    const createEvent = (event) => {
        event.preventDefault()
        // get all values of the form
        const title = event.target.title.value
        const colorPicked = event.target.colorPicked.value
        const startDate = event.target.startDate.value
        const endDate = event.target.endDate.value
        const startTime = event.target.startTime.value
        const endTime = event.target.endTime.value
        const comment = event.target.comment.value
        
    }

    return(
        <div>
            <div className="addEvent">
                <button onClick={()=> setPopUp(!popUp)}>+</button>
            </div>

            <div className="addPopUp" style={{display: popUp === true ? "flex" : "none"}}>
                <div className="blackBG"></div>
                <div className="popUpContent">
                    <form onSubmit={createEvent}>
                        <div>
                            <input type="text" placeholder="Add Title" name="title"/>
                            <input type="color" onChange={(e)=> formColorChange(e.target.value)} name="colorPicked"/>
                        </div>
                        <div>
                            <input type="date" name="startDate"/>
                            <input type="date" name="endDate"/>
                        </div>
                        <div>
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