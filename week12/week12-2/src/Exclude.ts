enum eventTypes {
    CLICK = "click",
    MOUSE_UP = "mouse up",
    MOUSE_DOWN = "mouse down",
    SCROLL = "scroll"
}

type mouseEvents = Exclude<eventTypes,eventTypes.CLICK | eventTypes.SCROLL> 


const handleMouseEvents = (event : mouseEvents) => {
    console.log(`you have performed ${event} event`);
}


handleMouseEvents(eventTypes.MOUSE_DOWN)
handleMouseEvents(eventTypes.MOUSE_UP)