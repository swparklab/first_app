//ClockState3


import React from "react";
import { useState } from "react"


function Clockstate3(props) {

    const[time, setTime] = useState(1)

    const handelClick = () => {
        let newTime;
        if (time >= 24){
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime)
    }

    return (
        <div>
            <span> 현재시각 : {time}시</span>
            <button onClick={handelClick}>Update</button>
        </div>
    );
}

export default Clockstate3;