import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const [id, setId] = useState();
    const [word, setWord] = useState("people");
    const history = useHistory();

    const onsubmitHandler = (event) => {
        event.preventDefault();
        history.push("/" + word + "/" + id);
    }
    return (
        <div>
            <div >
                <form className="search" onSubmit= {onsubmitHandler}>
                    <p>Search for:</p>
                    <select defaultValue = "people" onChange= {(event) => setWord(event.target.value)}>
                        {/* <option selected disabled hidden >chose</option> */}
                        <option defaultValue="people" >people</option>
                        <option defaultValue="planets">planets</option>
                    </select>
                    <p>ID:</p>
                    <input type="number" onChange= {(event) => setId(event.target.value)}/>
                    <button type= "submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Home;