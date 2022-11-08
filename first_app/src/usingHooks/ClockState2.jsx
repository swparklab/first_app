//ClockState2


import React from "react";
import { useState } from "react"


function Clockstate2(props) {

    const[time, setTime] = useState(1)

    const handelClick = () => {
        setTime(time +1)
    }

    return (
        <div>
            <span> 현재시각 : {time}시</span>
            <button onClick={handelClick}>Update</button>
        </div>
    );
}

export default Clockstate2;