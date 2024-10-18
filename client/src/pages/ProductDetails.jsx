import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  // Initial Details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  // Get Product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto flex gap-5 justify-start">
        <div className="p-4 border border-black">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            alt={product.name}
            className="mb-4 mx-auto inline-block w-40 object-cover"
          />
        </div>
        <div className="p-4 border border-black">
          <h1>Product Details</h1>
          <h4>Name: {product.name}</h4>
          <h4>Description: {product.description}</h4>
          <h4>Category: {product.category.name}</h4>
          <h4>Quantity: {product.quantity}</h4>
          <h4>Price: {product.price}</h4>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="container mx-auto flex">Similar Products</div>
    </Layout>
  );
};

export default ProductDetails;
