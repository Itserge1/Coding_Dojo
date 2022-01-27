import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const [form, setFrom] = useState({
        title: "",
        price: 0,
        description: ""
    });
    const oneChangeHandler = (event) => {
        setFrom({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const OneSubmithandler = (event) => {
        event.preventDefault();
        console.log(form);
        // sending the info to our backend with axios post request and the form
        axios.post("http://localhost:8000/create", form)
            .then(res => {
                console.log(res);
                // setProducts([...products, res.data.results])
            })
            .catch(err => console.log("Erorr!!", err))
    }
    //     const [products, setProducts] = useState([]);

    //     useEffect(() => {
    //         axios.get("http://localhost:8000/findall")
    //         .then(res =>{
    //             console.log(res.data.results)
    //             setProducts(res.data.results)
    //         })
    //         .catch(err => console.log("Error!!",err))
    //     }, [])

    return (
        <div>
            <form onSubmit={OneSubmithandler}>
                <div className="wrap">
                    <h2>Product Manager</h2>
                    <div className="line">
                        <label htmlFor="title">Title:</label>
                        <input id="title" name="title" onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" name="price" onChange={oneChangeHandler}></input>
                    </div>
                    <div className="line">
                        <label htmlFor="description">Description:</label>
                        <textarea placeholder="comment" id="description" name="description" style={{ width: 145 }} onChange={oneChangeHandler}></textarea>
                    </div>
                </div>
                <button type="submit">Create</button>
            </form>
            {/* <div>
                <h1>All Products</h1>
                <ul>
                    {
                        products.map((product, i) => {
                            return <li key={i}>{product.title}</li>
                        })
                    }
                </ul>
            </div> */}
        </div>
    )
}

export default Form;