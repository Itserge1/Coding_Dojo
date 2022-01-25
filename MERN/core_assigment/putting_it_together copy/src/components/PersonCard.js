import React, { Component} from "react";

class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: this.props.person.firstName,
            lastName: this.props.person.lastName,
            age: this.props.person.age,
            hairColor: this.props.person.hairColor
        }
    }
    increaseBirthday = () => {
        this.setState( {age: this.state.age += 1});
    }
    // increaseBirthday = () => {
    //     document.getElementById("age").innerHTML++
    // }

    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{this.state.lastName}, {this.state.firstName}</h1>
                <p>Age: <span id = "age" > {this.state.age} </span></p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button onClick = {this.increaseBirthday} > Birthday button for {this.state.lastName}, {this.state.firstName} </button>
            </div>
        );
    }


}

export default PersonCard;