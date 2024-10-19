import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container mx-auto">
        <h1>All Categories</h1>
        <div className="flex flex-wrap gap-4 mt-5">
          {categories?.map((c) => (
            <div key={c._id} className="p-4 border border-black">
              <Link to={`/category/${c.slug}`}>{c.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
