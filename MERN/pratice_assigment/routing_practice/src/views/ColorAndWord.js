import React from "react";
import { useParams } from "react-router-dom";

const ColorAndWord = (props) => {
    const {word} = useParams();
    const {color} = useParams();
    const {backgroundColor} = useParams();
    return (
        <div style={{color:color, backgroundColor:backgroundColor}}>
            <h2>The Word is: {word}</h2>
        </div>
    )
}

export default ColorAndWord;