import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/find")
            .then(res => {
                console.log(res.data.results)
                setAuthors(res.data.results)
            })
            .catch(err => console.log("Error!!", err))
    }, [])

    const OnDeleteHandler = (_id, index) => {
        // console.log(_id)
        // console.log(index)
        if(window.confirm(`are you sure you wnat to delete ${authors[index].title} ?`)){
            axios.delete("http://localhost:8000/delete/" + _id)
            .then(res => {
                console.log(res)
                const copyAuthors = [...authors]
                copyAuthors.splice(index, 1)
                setAuthors(copyAuthors)
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <div className="page">
                <div className="text">
                    <h1>Favorite Authors</h1>
                    <a href="/new">Add Authors</a>
                    <p>We have quotes by:</p>
                </div>
                <div className="container">
                    <div className="wrapper">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Authors</th>
                                    <th scope="col">Books</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    authors.map((author, i) => {
                                        return <tr key={i}>
                                            <td>{author.name}</td>
                                            <td>{author.books}</td>
                                            <td> <a class="btn btn-warning btn-sm" href={"/edit/" + author._id} role="button">Edit</a> |   <button type="button" class="btn btn-danger btn-sm" onClick={() =>OnDeleteHandler(author._id, i)}>Delete</button> </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;