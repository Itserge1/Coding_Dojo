import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const People = (props) => {
    const [person, setPerson] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // axios.get("https://swapi.dev/api/people/" + id)
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res)
                setPerson(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            <div className="text">
                <h4>{person?.name}</h4>
                <p>
                    <strong>Height:</strong> {person?.height}cm<br></br> {/* person?.height is going to as the API if have the key "height". if e have it , it will display it , if not it will show an empty space instead of an error*/}
                    <b>Mass:</b> {person?.mass}kg<br></br>
                    <b>Hair:</b> {person?.hair_color}<br></br>
                    <b>Skin Color:</b> {person?.skin_color}<br></br>
                </p>
            </div>
        </div>
    )
}

export default People;