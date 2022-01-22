import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const Planets = (props) => {
    const [planet, setPlanets] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id)
        .then(res =>{
            console.log(res)
            setPlanets(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    // const onclickHandler = () => {
    //     axios.get("https://swapi.dev/api/planets/" + id)
    //     .then(res =>{
    //         // setPlanets()
    //         console.log(res)
    //     })
    //     .catch(err => console.log(err))
    // }
    return (
        <div>
            <div className="text">
                <h4>{planet.name}</h4>
                <p>
                    <b>Climate:</b> {planet.climate}<br></br>
                    <b>Terrain:</b> {planet.terrain}<br></br>
                    <b>Surface Water:</b> {planet.surface_water}<br></br>
                    <b>Population:</b> {planet.population}<br></br>
                </p>
            </div>
        </div>
    )
}

export default Planets;