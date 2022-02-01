import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const NewAuthor = (props) => {

    const history = useHistory();

    const [form, setFrom] = useState({
        name: "",
        age: 0,
        books: ""
    });
    const oneChangeHandler = (event) => {
        setFrom({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const OneSubmithandler = (event) => {
        event.preventDefault();
        console.log(form);
        // sending the info to our backend with axios post request and the form
        axios.post("http://localhost:8000/new", form)
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <a href="/">Home</a>
            <p>Add a new authors:</p>
            < form onSubmit={OneSubmithandler} id="center">
                <div className="wrap">
                    <h2>Favorite Authors</h2>
                    <div className="line">
                        <label htmlFor ="name">Name:</label>
                        <input id ="name" name="name" onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label  htmlFor ="age">Age:</label>
                        <input id ="age" type="number"  name="age" onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label  htmlFor ="books">Books:</label>
                        <input  id ="books"  name="books" onChange={oneChangeHandler}></input>
                    </div>
                    <p>
                    <Link to="/"><button>Cancel</button></Link>  |  <button type="submit">Submit</button>
                    </p>
                </div>
            </form >
        </div>
    )
}

export default NewAuthor;