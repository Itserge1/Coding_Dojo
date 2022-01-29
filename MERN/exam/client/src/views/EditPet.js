import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';


const EditPet = (props) => {

    const { _id } = useParams();
    const history = useHistory();
    const [pets, setPets] = useState({});

    const [error, setError] = useState({});

    const lenthValidator = (input) => {
        if (input.length > 3){
            return true;
        }
        else {
            return false;
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/find/${_id}`)
            .then(res => {
                console.log(res)
                setPets(res.data.results)
            })
            .catch(err => console.log(err))
    }, [_id]);

    const oneChangeHandler = (event) => {
        setPets({
            ...pets,
            [event.target.name]: event.target.value,
        })
    }

    const OneSubmithandler = (event) => {
        event.preventDefault();
        console.log(pets);
        // sending the info to our backend with axios post request and the form
        axios.patch(`http://localhost:8000/edit/${_id}`, pets)
            .then(res => {
                console.log(res);
                // setProducts([...products, res.data.results])
                history.push("/");
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
                setError(err.response.data.error.errors)
            })
        }

    return (
        <div>
            <form onSubmit={OneSubmithandler}>
                <div className="wrap">
                    <h2>Product Manager</h2>
                    <div className="line">
                        <label htmlFor="name">Pet Name:</label>
                        <input id="name" name="name" value={pets.name} onChange={oneChangeHandler}></input>
                        <span className= "alert-danger">{error.name && error.name.message}</span>
                    </div>
                    <div className="line">
                        <label htmlFor="type">Pet Type:</label>
                        <input id="type" name="type" value={pets.type} onChange={oneChangeHandler}></input>
                        <span className= "alert-danger">{error.type && error.type.message}</span>
                    </div>
                    <div className="line">
                        <label htmlFor="description">Pet Description:</label>
                        <input id="description" name="description" value={pets.description} onChange={oneChangeHandler}></input>
                        <span className= "alert-danger">{error.description && error.description.message}</span>
                    </div>
                    <div className="line">
                        <label htmlFor="skill_1">Skill 1:</label>
                        <input id="skill_1" name="skill_1" value={pets.skill_1} onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="skill_2">Skill 2:</label>
                        <input id="skill_2" name="skill_2" value={pets.skill_2} onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="skill_3">Skill 3:</label>
                        <input id="skill_3" name="skill_3" value={pets.skill_3} onChange={oneChangeHandler}></input>
                    </div>
                </div>
                <button type="submit">Update</button>
            </form>

        </div>
    )
}

export default EditPet;