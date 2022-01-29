import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const OnePet = (props) => {
    const {_id} = useParams()
    const [pet, setPets] = useState({})
    const history = useHistory();
    const [reload, setreload] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/find/${_id}`)
            .then(res => {
                console.log(res)
                setPets(res.data.results)
            })
            .catch(err => console.log(err))
    }, [_id]);

    const OnDeleteHandler = (_id) => {
        // console.log(_id)
        // console.log(index)
        if(window.confirm(`are you sure you want to delete ${pet.name} ?`)){
            axios.delete("http://localhost:8000/delete/" + pet._id)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => console.log(err))
        }
    }

    const onLikeHandler = (_id) => {
        console.log(_id);
        setreload(true);
        axios.patch(`http://localhost:8000/like/${_id}`)
            .then(res => {
                console.log(res)

                // const copyPet = [...pet];
                // // copyPet.like++;
                // setPets(copyPet);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Detail About:  {pet.name}</h1>
            <a href="/">Back home</a>  |   <button type="button" class="btn btn-danger btn-sm" onClick={() =>OnDeleteHandler(pet._id)}>Adopte</button> 
            <p><b>Pet Type: {pet.type}</b></p>
            <p><b>Pet Description: {pet.description} </b></p>
            <p><b>Pet Skills:</b>
                <span> {pet.skill_1}</span>
                <span> {pet.skill_2}</span>
                <span> {pet.skill_3}.</span>
            </p>
            <button disabled={reload} className="button" type="button" onClick={ () => onLikeHandler(pet._id)} class="btn btn-success">Like {pet.name}</button>
            <p> <span> {pet.like} </span>Like(s)</p>
        </div>
    )
}

export default OnePet;