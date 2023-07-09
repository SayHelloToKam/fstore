import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <img src={product?.image} />
      <p className='title'>{product?.title}</p>
      <p className='category'>{product?.category}</p>
      <p className='price'>${product?.price}</p>
    </div>
  );
}

export default ProductCard;
