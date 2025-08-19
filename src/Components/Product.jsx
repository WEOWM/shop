import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useCart } from "../CartContext"; // import our context hook

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400" width="400" />
        </div>
        <div className="col-md-6">
          <h4>{product.category}</h4>
          <h1>{product.title}</h1>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-4 py-2">
            Go to Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
