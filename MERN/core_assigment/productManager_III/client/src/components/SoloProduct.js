import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SoloProduct = (props) => {
    const [oneProduct, setOneProduct] = useState([]);
    const {_id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/product/${_id}`)
            .then(res => {
                console.log(res)
                setOneProduct(res.data.results)
            })
            .catch(err => console.log(err))
    }, [_id]);

    const OnDeleteHandler = (_id, name) => {
        // console.log(_id)
        // console.log(index)
        if(window.confirm(`are you sure you wnat to delete ${name} ?`)){
            axios.delete("http://localhost:8000/delete/" + _id)
            .then(res => {
                console.log(res)
                const copyProducts = [...oneProduct]
                copyProducts[0].pop()
                setOneProduct(copyProducts)
                history.push("/")
            })
            .catch(err => console.log(err))
        }
    }


    return (
        <div>
            <div>
                <h1>{oneProduct.title}</h1>
                <p> Price: ${oneProduct.price}</p>
                <p> Description: {oneProduct.description}</p>
            </div>
            <a href="/">Home</a> | <Link to = "/"><button onClick={() =>OnDeleteHandler(oneProduct._id, oneProduct.title)} >Delete</button></Link>
        </div>
    )
}

export default SoloProduct;