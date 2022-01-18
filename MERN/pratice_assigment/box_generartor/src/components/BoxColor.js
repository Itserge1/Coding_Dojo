import React from "react";
import { useState } from 'react';

const BoxColor = (props) => {
    const [boxs, setBoxs] = useState([])

    const addColor = () =>{
        // e.preventDefault;
        var str = document.getElementById("color").value;
        setBoxs([...boxs, str])
        return boxs
    }
    return (
        <div>
            {/* <form class="form"  >
                <p> Color <input class ="input" id = "color"></input> <button onClick = {addColor} id="button">Add</button></p>
            </form> */}
            <p id="wrapper"> Color <input  className ="input" id = "color"></input> <button onClick = {addColor} id="button">Add</button></p>
            <div class="container">
                {
                    boxs.map((str, i) => {
                        return <div style = {{ backgroundColor: str }} key={i} id="box" ></div>
                    })
                }
            </div>
        </div>
    )
}

export default BoxColor;