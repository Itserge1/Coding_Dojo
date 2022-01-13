import React from "react";


const PersonCard = props => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: <span id="age" > {props.age} </span></p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    );
}

export default PersonCard;