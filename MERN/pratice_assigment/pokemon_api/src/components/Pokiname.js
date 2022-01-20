import React, { useState } from "react"

const Pokiname = (props) => {
    const [pokemons, setPokemons] = useState([]);

    const clickHandler = () => {
        // fetch is getting all the information from the api. ps fetch already use promise (assosiate with then() and catch())
        // then(res => res.json()) is turning our data to some readable javascript object
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            // setting state
            setPokemons(res.results);
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <button onClick={clickHandler} id="button">Fetch Pokemon</button>
                    <ul>
                        {
                            pokemons.map((pokemon, i) => {
                                return <li key={i}>{pokemon.name}</li>
                            })
                        }
                    </ul>
                </header>
            </div>
        </div>
    );
}

export default Pokiname;