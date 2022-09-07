import React from 'react'
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom';




const Products = () => {
    const [Data, setData] = useState([]);
    const [Fliter, setFliter] = useState(Data);
    const [loading, setLoading] = useState(false);

    let componentsMounted = true;

    useEffect(() => {
        const getproduts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentsMounted) {
                setData(await response.clone().json());
                setFliter(await response.json());
                setLoading(false);
                console.log(Fliter)
            }
            return () => {

                componentsMounted = false;
            }
        }
        getproduts();
    }, []);


    const Loading = () => {
        return (
            <>
             <div className="col-md-3">
                <Skeleton height={350}/>
             </div>
             <div className="col-md-3">
                <Skeleton height={350}/>
             </div>
             <div className="col-md-3">
                <Skeleton height={350}/>
             </div>
             <div className="col-md-3">
                <Skeleton height={350}/>
             </div>
              
            </>
        )
    }
    const fliterproduct = (cat) => {
        const updatedList = Data.filter((x)=>x.category === cat);
        setFliter(updatedList);
    }

    const Showproducts = () => {
        return (

            <div>
                <div className="container">
                    <div className="row">
                        
                <div className="buttons d-flex  justify-content-center mb-5 py-5">
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFliter(Data)}>All</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>fliterproduct("men's clothing")}>Men's clothing</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>fliterproduct("women's clothing")}>Women's clothing</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>fliterproduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>fliterproduct("electronics")}>Electronics</button>
                </div>
                {Fliter.map((Produt) => {
                    return (
                        <div className="col-md-3 mb-4 pb-1">
                            <div className="card h-100 text-center p-4"key={Produt.id} >
                                <img src={Produt.image} className="card-img-top" alt={Produt.title} height='250px'/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{Produt.title.substring(0,12)}..</h5>
                                        <p className="card-text lead fw-bold"> ₹ {Produt.price}</p>
                                        <NavLink to={`/Products/${Produt.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                            </div>
                        </div>
                    )

                })}
                    </div>
                </div>
            </div>

        )

    }


    return (
        <div>
            <div className="container my-4 py-5">
                <div className="row">
                    <div className="col-12 ">
                        <h1 className='display-6 fw-bolder text-center '>Laste Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? < Loading /> : <Showproducts />}

                </div>
            </div>

        </div>
    )
}

export default Products
