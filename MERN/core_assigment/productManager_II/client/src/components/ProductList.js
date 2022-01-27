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

    return (
        <div>
            <div>
                <h1>All Products</h1>
                <ul>
                    {
                        products.map((product, i) => {
                            return <li key={i}><a href={"product"+ "/" +product._id}>{product.title}</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductList;