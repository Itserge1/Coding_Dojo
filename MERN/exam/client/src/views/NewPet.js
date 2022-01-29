import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewPet = (props) => {
    const [form, setFrom] = useState({
        name: "",
        type: "",
        description: "",
        skill_1: "",
        skill_2: "",
        skill_3: "",
        like: 0,
    });

    const [error, setError] = useState({});
    const [checkName, setCheckName] = useState([]);

    const lenthValidator = (input) => {
        if (input.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }

    const history = useHistory();

    const oneChangeHandler = (event) => {
        setFrom({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const OneSubmithandler = (event) => {
        event.preventDefault();
        console.log(form);

        axios.get("http://localhost:8000/findname/" + form.name)
            .then(res => {
                console.log(res.data.results);
                setCheckName(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
        if (checkName.length > 0) {
            history.push("/");
        }
        else {
            return axios.post("http://localhost:8000/new", form)
                .then(res => {
                    console.log(res);
                    history.push("/");
                    // setProducts([...products, res.data.results])
                })
                .catch(err => {
                    console.log(err.response.data.error.errors)
                    setError(err.response.data.error.errors)
                })
        }
        // sending the info to our backend with axios post request and the form
        // axios.post("http://localhost:8000/new", form)
        //     .then(res => {
        //         console.log(res);
        //         history.push("/");
        //         // setProducts([...products, res.data.results])
        //     })
        //     .catch(err => {
        //         console.log(err.response.data.error.errors)
        //         setError(err.response.data.error.errors)
        //     })
    }

    return (
        <div>
            <form onSubmit={OneSubmithandler}>
                <div className="wrap">
                    <h2>Product Manager</h2>
                    <div className="line">
                        <label htmlFor="name">Pet Name:</label>
                        <input id="name" name="name" onChange={oneChangeHandler}></input>
                        <span className="alert-danger">{!lenthValidator(form.name) && form.name.length > 0 && "You need at least 3 characters"}</span>
                        <span className="alert-danger">{error.name && error.name.message}</span>
                    </div>
                    <div className="line">
                        <label htmlFor="type">Pet Type:</label>
                        <input id="type" name="type" onChange={oneChangeHandler}></input>
                        <span className="alert-danger">{!lenthValidator(form.type) && form.type.length > 0 && "You need at least 3 characters"}</span>
                        <span className="alert-danger">{error.type && error.type.message}</span>
                    </div>
                    <div className="line">
                        <label htmlFor="description">Pet Description:</label>
                        <input id="description" name="description" onChange={oneChangeHandler}></input>
                        <span className="alert-danger">{!lenthValidator(form.description) && form.description.length > 0 && "You need at least 3 characters"}</span>
                        <span className="alert-danger">{error.description && error.description.message}</span>
                    </div>
                    <div className="line">
                        <label htmlFor="skill_1">Skill 1:</label>
                        <input id="skill_1" name="skill_1" onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="skill_2">Skill 2:</label>
                        <input id="skill_2" name="skill_2" onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="skill_3">Skill 3:</label>
                        <input id="skill_3" name="skill_3" onChange={oneChangeHandler}></input>
                    </div>
                </div>
                <button type="submit">Add Pet</button>
            </form>

        </div>
    )
}

export default NewPet;