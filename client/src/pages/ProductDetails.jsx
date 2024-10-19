import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

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
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Similar Product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProduct(data?.products);
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
          <h4>Category: {product?.category?.name}</h4>
          <h4>Quantity: {product.quantity}</h4>
          <h4>Price: {product.price}</h4>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <h1>Similar Products</h1>
        {relatedProduct.length < 1 && <p>No Similar Products Found</p>}
        <div className="flex flex-wrap gap-4">
          {relatedProduct?.map((p) => (
            <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
              <img
                src={`/api/v1/product/product-photo/${p?._id}`}
                alt={p.name}
                className="mb-4 mx-auto inline-block w-40 object-cover"
              />
              <p className="font-bold">{p.name}</p>
              <p className="text-sm text-gray-500">
                {p.description.substring(0, 30)}...
              </p>
              <p className="text-md text-blue-600">$ {p.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
