import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const SoloProduct = (props) => {
    const [oneProduct, setOneProduct] = useState([]);
    const {_id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/product/${_id}`)
            .then(res => {
                console.log(res)
                setOneProduct(res.data.results)
            })
            .catch(err => console.log(err))
    }, [_id]);


    return (
        <div>
            <div>
                <h1>{oneProduct.title}</h1>
                <p> Price: ${oneProduct.price}</p>
                <p> Description: {oneProduct.description}</p>
            </div>
            <a href="/">Home</a>
        </div>
    )
}

export default SoloProduct;