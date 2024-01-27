import React from 'react'
import {useParams} from 'react-router-dom'
import axios from  "axios"
import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import {Link} from "react-router-dom"

const ProductDetails = () => {
    const {productId} = useParams()

    const dispatch = useDispatch()

    const fetchproduct = async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(
            (err) => {
                console.log(err)
            }
        )
        dispatch(selectedProduct(response.data))

    }

    useEffect(
        () =>{
            if (productId && productId !== "") {
                fetchproduct(productId);
            }
            
            return () =>{
                dispatch(removeSelectedProduct())
            }
        },[]
    )

    const product = useSelector((state) => state.reducer.product) 

    const {title,price,category,description,image, rating} = product
    

    return (
        <>
        {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (

        <div className="box box-in">

            <div className="card">
                <div className="image">
                    <img src={image} alt={title}/>
                </div>
                <div className="carddetails">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>Rs : {price}</p>
                    <p>Category : {category}</p>
                    
                    <Link to ="/">Back</Link>
                </div>
            </div>
         </div>

)}

        </>

  

    )
}

export default ProductDetails
