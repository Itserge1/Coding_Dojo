import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const EditProduct = (props) => {
    const {_id} = useParams();
    const [products, setProducts] = useState({});
    const history = useHistory();
    
    const oneChangeHandler = (event) => {
        setProducts({
            ...products,
            [event.target.name]: event.target.value,
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/product/${_id}`)
            .then(res => {
                console.log(res)
                setProducts(res.data.results)
            })
            .catch(err => console.log(err))
    }, [_id]);

    const OneSubmithandler = (event) => {
        event.preventDefault();
        console.log(products);
        // sending the info to our backend with axios post request and the form
        axios.patch(`http://localhost:8000/update/${_id}`, products)
            .then(res => {
                console.log(res);
                // setProducts([...products, res.data.results])
                history.push("/");
            })
            .catch(err => console.log("Erorr!!", err))
    }

    return (
        <div>
            <form onSubmit={OneSubmithandler}>
                <div className="wrap">
                    <h2>Edit Product</h2>
                    <div className="line">
                        <label htmlFor="title">Title:</label>
                        <input id="title" value={products.title} name="title" onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="price">Price:</label>
                        <input type="number" value={products.price} id="price" name="price" onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="description">Description:</label>
                        {/* <textarea id="description" name="description" style={{ width: 145 }} onChange={oneChangeHandler}>{products.description}</textarea> */}
                        <input value= {products.description} placeholder="comment" id="description" name="description" style={{ width: 145 }} onChange={oneChangeHandler}></input>
                    </div>
                </div>
                <button type="submit">Update</button> | <a href="/">Home</a>
            </form>
        </div>
    )
}

export default EditProduct;