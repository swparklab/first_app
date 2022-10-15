import React from "react";

function Clock(props){
    return(

            <div id="clock-header">
                <h1 className="neonText">안녕, 리액트!</h1>
                <h2 className="neonText">현재 시간 : {new Date().toLocaleTimeString()} </h2>
            </div>
    );
}

export default Clock;