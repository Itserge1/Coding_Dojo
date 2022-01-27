import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/findall")
        .then(res =>{
            console.log(res.data.results)
            setProducts(res.data.results)
        })
        .catch(err => console.log("Error!!",err))
    }, [])

    const OnDeleteHandler = (_id, index) => {
        // console.log(_id)
        // console.log(index)
        if(window.confirm(`are you sure you wnat to delete ${products[index].title} ?`)){
            axios.delete("http://localhost:8000/delete/" + _id)
            .then(res => {
                console.log(res)
                const copyProducts = [...products]
                copyProducts.splice(index, 1)
                setProducts(copyProducts)
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <div>
                <h1>All Products</h1>
                <ul>
                    {
                        products.map((product, i) => {
                            return <li key={i}><a href={"product"+ "/" +product._id}>{product.title}</a> | <a href={"/edit/"+ product._id}>Edit</a> | <button onClick={() =>OnDeleteHandler(product._id, i)} >Delete</button></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductList;