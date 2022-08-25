import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const CategoryScreen = ({ match }) => {
    const keyword = match.params.keyword
    const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
    return(
        <div>
            <Link to='/' className='btn btn-light'>
            Go Back
            </Link>
            <div>{
                products.map((product, el) => (
                    <div key={el}>{product.category}</div>
                ))
                }</div>
        </div>
    )
}

export default CategoryScreen;