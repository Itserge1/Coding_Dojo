import React, { Component} from "react";

class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age,
        }
    }
    increaseBirthday = () => {
        const person = {age: this.state.age + 1}
        this.setState(person);
        console.log("hey it work")
    }
    // increaseBirthday = () => {
    //     document.getElementById("age").innerHTML++
    // }

    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: <span id = "age" > {this.state.age} </span></p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {this.increaseBirthday} > Birthday button for {lastName}, {firstName} </button>
            </div>
        );
    }
}

export default PersonCard;