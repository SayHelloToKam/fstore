import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  // show categories when page loads
  // https://fakestoreapi.com/products/categories

  useEffect(
    () => {
      // console.log("homepage loaded");
      axios
        .get(`https://fakestoreapi.com/products/categories`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => console.log(err));
    },
    [] //runs once only when page loads
  );

  useEffect(
    () => {
      // console.log("homepage loaded");
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => console.log(err));
    },
    [] //runs once only when page loads
  );

  return (
    <div className='homepage-container'>
      <div className='categories-container'>
        <a href='#'>All</a>
        {categories.map((item) => (
          <a href='#' key={item}>
            {item}
          </a>
        ))}
      </div>
      <div className='products-container'>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
