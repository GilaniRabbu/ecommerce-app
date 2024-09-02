import React from "react";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout title={"Best Offers"}>
      <div className="min-h-[50vh] flex justify-center items-center">
        <h1 className="text-4xl">Home Page</h1>
      </div>
    </Layout>
  );
};

export default Home;
