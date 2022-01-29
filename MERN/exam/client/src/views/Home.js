import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = (props) => {
    const [pets, setPets] = useState([]);
    // const [NewPetsArray, setNewPetsArray] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/find")
            .then(res => {
                console.log(res.data.results)
                setPets(res.data.results)
                // const copyPets = [...pets]
                // copyPets.sort( (a, b) => {
                //     return a.type.localeCompare(b.type)
                // })
                // setPets(copyPets)
            })
            .catch(err => console.log("Error!!", err))
    }, [])

    const OnDeleteHandler = (_id, index) => {
        // console.log(_id)
        // console.log(index)
        if(window.confirm(`are you sure you wnat to delete ${pets[index].title} ?`)){
            axios.delete("http://localhost:8000/delete/" + _id)
            .then(res => {
                console.log(res)
                const copyPets = [...pets]
                copyPets.splice(index, 1)
                setPets(copyPets)
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <div className="page">
                <div className="text">
                    <h1>Pet Shelter</h1>
                    <a href="/new">Add a pet to the shelter</a>
                    <p>These pets are looking for a good home</p>
                </div>
                <div className="container">
                    <div className="wrapper">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    console.log(pets.sort((a, b) => (a.type > b.type) ? 1 : -1)),
                                    pets.map((pet, i) =>  {
                                        return <tr key={i}>
                                            <td>{pet.name}</td>
                                            <td>{pet.type}</td>
                                            <td> <a class="btn btn-warning btn-sm" href={"/edit/" + pet._id} role="button">Edit</a> |  <a class="btn btn-success btn-sm" href={"/find/" + pet._id} role="button">Details</a> |  <button type="button" class="btn btn-danger btn-sm" onClick={() =>OnDeleteHandler(pet._id, i)}>Delete</button> </td>
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