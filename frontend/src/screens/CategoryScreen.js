import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const CategoryScreen = ({ match }) => {
    const keyword = match.params.keyword
    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList;
    let arr = [];
  for (let i = 0; i < products.length; i++) {
    if (!arr.includes(products[i].category)) {
        arr.push(products[i].category);
    }
  }
  
  useEffect(() => {
      console.log(arr);
  },[arr])
    return(
        <div>
            <Link to='/' className='btn btn-light'>
            Go Back
            </Link>
            <div>{
                arr.map((product, el) => (
                    <div key={el}>{product}</div>
                ))
                }</div>
        </div>
    )
}

export default CategoryScreen;