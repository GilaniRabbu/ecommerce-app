import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const Products = () => {
  return (
    <Layout title={"Dashboard - All Products"}>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-red-500 col-span-1 p-5">
            <AdminMenu />
          </div>
          <div className="border border-teal-500 col-span-2 p-5">
            <h1>All Products List</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
