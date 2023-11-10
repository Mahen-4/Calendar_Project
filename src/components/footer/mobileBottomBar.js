import React from "react";
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";

const MobileBottomBar = ()=>{

    const root = document.documentElement;
    const [view, setView] = React.useState("none")

    const changeView = (value) => {
        root?.style.setProperty("--onScreen", value);
        setView(value)
    }

    return(
        <div className="mobileBottomBar">
            <div onClick={()=> changeView("none")} style={{backgroundColor: view === "none" ? "#3c82f9" :"#5c5f6d"}}>
                <AiOutlineHome  size={"30px"}/>
            </div>
            <div onClick={()=> changeView("flex")} style={{backgroundColor: view === "flex" ?  "#3c82f9" : "#5c5f6d"}}>
                <AiOutlineCalendar size={"30px"}/>
            </div>
        </div>
    )
}

export default MobileBottomBar