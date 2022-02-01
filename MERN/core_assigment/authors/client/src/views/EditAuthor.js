import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const EditAuthor = (props) => {
    const {_id} = useParams();
    const [authors, setAuthors] = useState({});
    const history = useHistory();

    const oneChangeHandler = (event) => {
        setAuthors({
            ...authors,
            [event.target.name]: event.target.value,
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/find/${_id}`)
            .then(res => {
                console.log(res)
                setAuthors(res.data.results)
                // console.log(authors)
            })
            .catch(err => console.log(err))
    }, [_id]);

    const OneSubmithandler = (event) => {
        event.preventDefault();
        console.log(authors);
        const newAutaur = {...authors}
        newAutaur.books = newAutaur.books.split(";")
        console.log(newAutaur)
        setAuthors(newAutaur)
        // sending the info to our backend with axios post request and the form
        axios.patch(`http://localhost:8000/edit/${_id}`, newAutaur)
            .then(res => {
                console.log(res);
                // setAuthors([...authors, res.data.results])
                history.push("/");
            })
            .catch(err => console.log("Erorr!!", err))
    }

    return (
        <div>
            <h1>Edit Authors</h1>
            <a href="/">Home</a>
            <p>Edit this authors:</p>
            < form onSubmit={OneSubmithandler} id="center">
                <div className="wrap">
                    <h2>Favorite Authors</h2>
                    <div className="line">
                        <label htmlFor="name">Name:</label>
                        <input id ="name" name="name" value={authors.name} onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="age">Age:</label>
                        <input id ="age" type="number"  name="age" value={authors.age} onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="books">Books:</label>
                        <input id ="books"  name="books" value={authors.books} onChange={oneChangeHandler}></input>
                    </div>
                    <p>
                    <Link to="/"><button>Cancel</button></Link>  |  <button>Submit</button>
                    </p>
                </div>
            </form >
        </div>
    )
}

export default EditAuthor;