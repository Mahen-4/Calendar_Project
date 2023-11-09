

export const createEvent = (event, dispatch, setAevent) => {
    event.preventDefault()
    // get all values of the form
    const title = event.target.title.value
    const colorPicked = event.target.colorPicked.value
    const startDate = event.target.startDate.value
    const endDate = event.target.endDate.value
    const startTime = event.target.startTime.value
    const endTime = event.target.endTime.value
    const comment = event.target.comment.value

    // Combine the start date and start time into a single string
    const dateTimeStart = startDate + "T" + startTime;
    // Create a Date object from the combined date and time string
    const combinedDateStart = new Date(dateTimeStart);
    // Convert the combined date to ISO string format
    const isoDateStart = combinedDateStart.toISOString();

    const dateTimeEnd = endDate + "T" + endTime;
    const combinedDateEnd = new Date(dateTimeEnd);
    const isoDateEnd = combinedDateEnd.toISOString();

    // case first event added ever
    if(!Object.keys(localStorage).includes("eventCALENDAR")){
        const oneEvent = {
            Id: 0,
            Subject: title,
            StartTime: isoDateStart ,
            EndTime: isoDateEnd,
            Description: comment,
            ColorPicked: colorPicked
        }
        localStorage.setItem("eventCALENDAR", JSON.stringify([oneEvent]));
        dispatch(setAevent([oneEvent]))
    }else { // case events already exist

        //get all event stored in the localStorage
        const allEvent = localStorage.getItem("eventCALENDAR")
        //allEvent (string) to an array / deserializes 
        const allEventArray = JSON.parse(allEvent);

        const oneEvent = {
            Id: allEventArray.length,
            Subject: title,
            StartTime: isoDateStart ,
            EndTime: isoDateEnd,
            Description: comment,
            ColorPicked: colorPicked
        }
        allEventArray.push(oneEvent)
        localStorage.setItem("eventCALENDAR", JSON.stringify(allEventArray));
        // set aEvent global state to the new array of event
        dispatch(setAevent(allEventArray))
    }
    

    
}