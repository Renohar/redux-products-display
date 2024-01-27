import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import axios from "axios"
import {useEffect} from 'react'
import {setProducts} from "../redux/actions/productActions"
import ProductComponent from "../containers/ProductContent"


const ProductAll = () => {

    const products = useSelector((state) => state.reducer.allProducts.products)

    const dispatch = useDispatch();


    const fetchProducts  =  async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err)
        })

        dispatch(setProducts(response.data))

        

    }

    useEffect(
        () =>{
            fetchProducts();
        },[]
    )

    
    return (
        <div className="boxall" >
        
           <ProductComponent />
        </div>
    )
}

export default ProductAll
