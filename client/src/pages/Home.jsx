import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best Offers"}>
      <div className="min-h-[50vh] p-20">
        <h1 className="text-4xl">Home Page</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
    </Layout>
  );
};

export default Home;
