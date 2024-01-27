import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const ProductContent = () => {

    const products = useSelector((state) => state.reducer.allProducts.products);
    const renderList = products.map(
        (product) =>{
            const {id,title,image,price,category} =product
          return (
              <div className="box">
                  <Link to={`product/${id}`}>
                      <div className="card">
                          <div className="image">
                              <img src={image} alt={title}/>
                          </div>
                          <div className="carddetails">
                              <h4>{title}</h4>

                              <p>Rs : {price}</p>
                              <p>Category : {category}</p>
                          </div>
                      </div>
                  </Link>
              </div>
          )
        }
    )
    

    return (
        <div>
            {renderList}
        </div>
    )
}

export default ProductContent
