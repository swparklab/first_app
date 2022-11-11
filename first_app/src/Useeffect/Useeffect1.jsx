import React, {useState, useEffect} from "react";

function Useeffect_1 () {
    const [count, setCount] = useState(1);
    const [name, setName] = useState(1);

    const handleCountUpdate = () => {
        setCount(count +1);
    };

    const handleInputChange = (event) => {
        setName(event.target.value);
    }

    //1. useEffect는 랜더링 될때마다 실행되어서 로그가 찍힘
    useEffect(() => {
        console.log('랜더링 되었습니다!')
    }, [count])

    return (
        <div>
            <button onClick={handleCountUpdate}>
                update
            </button>
            <span>
                count : {count}
            </span>

            <br></br>
            
            <input type="text" value={name} onChange={handleInputChange}>
            </input>
            <span>
                name: {name}
            </span>
        </div>
    );

}

export default Useeffect_1;