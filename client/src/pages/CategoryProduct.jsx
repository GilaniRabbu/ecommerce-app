import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout/Layout";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const getProductsByCategory = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductsByCategory();
  }, [params?.slug]);

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="text-center">
          <h1>Category - {category?.name}</h1>
          <h2>{products?.length} results found</h2>
        </div>

        <div className="flex flex-wrap gap-4 mt-5">
          {products?.map((p) => (
            <div
              key={p._id}
              className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start"
            >
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                alt={p.name}
                className="mb-4 mx-auto inline-block w-40 object-cover"
              />
              <p className="font-bold">{p.name}</p>
              <p className="text-sm text-gray-500">
                {p.description.substring(0, 30)}...
              </p>
              <p className="text-md text-blue-600">$ {p.price}</p>
              <button onClick={() => navigate(`/product/${p.slug}`)}>
                More Details
              </button>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
