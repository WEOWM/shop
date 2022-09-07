import React, { useState, useEffect } from 'react'
import {useDispatch } from 'react-redux';
// import { addcart } from '../redux/action'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';


const Product = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const addproduct = (Product) => {
 //   dispatch(addcart(Product));
  // }

  useEffect(() => {
    const getproducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json());
      setLoading(false);

    }
    getproducts()
  }, []);
  const Loadi = () => {
    return (
      <>

        Loading.....
      </>
    )
  }

  const Showproducts = () => {
    return (
      <>
        <div className="col-md-6  ">
          <img src={Product.image} alt={Product.title}
            height='400px' width='400px' />
        </div>
        <div className="col-md-6">
          <h4 className='text-uppercase text-black-50'>{Product.category}</h4>
          <h1 className='display-5'>{Product.title}</h1>
          <p className='lead fw-bolder'>rating {Product.rating && Product.rating.rate}
            <i className='fa fa-star  '></i>
          </p>
          <h3 className='display-6 fw-bold my-4'>{Product.price}</h3>
          <p className='lead'>{Product.description}</p>
          {/* <buttom className="btn btn-outline-dark px-4 py-2" onClick={()=>addcart.Product}>Add to Cart</buttom> */}
          <NavLink to='/cart' className="btn btn-outline-dark ms-2 px-4 py-2">Go to Cart</NavLink>

        </div>


      </>
    )
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {Loading ? <Loadi /> : <Showproducts />}
        </div>
      </div>
    </div>
  )
}

export default Product
