

export const createEvent = (event, dispatch, setAevent,notify) => {
    event.preventDefault()
    // get all values of the form
    const title = event.target.title.value
    const colorPicked = event.target.colorPicked.value
    const startDate = event.target.startDate.value
    const endDate = event.target.endDate.value
    const startTime = event.target.startTime.value
    const endTime = event.target.endTime.value
    const comment = event.target.comment.value
    console.log(title)
    if(!title || !colorPicked || !startDate || !endDate || !startTime || !endTime || !comment){
        console.log("error") 
        notify("err")
        return;
    }
    if(startDate > endDate){
        notify("err") 
        return;          
    }
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
    notify("success")
}

export const deleteEvent = (id, dispatch, setAevent) =>{
    const allEvent = localStorage.getItem("eventCALENDAR")
    const allEventArray = JSON.parse(allEvent);
    // filter array with all event having a different id than the id of the deleted one
    const filteredArray = allEventArray.filter(event=> event.Id !== id)

    // update ID's of each element of the array
    filteredArray.forEach(element => {
        element.Id = element.Id - 1
    });
    
    localStorage.setItem("eventCALENDAR", JSON.stringify(filteredArray));
    dispatch(setAevent(filteredArray))
    
}