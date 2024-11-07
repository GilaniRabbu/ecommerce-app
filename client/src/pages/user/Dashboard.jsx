import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/Auth";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Dashboard - ECommerce"}>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-red-500 col-span-1 p-5">
            <UserMenu />
          </div>
          <div className="border border-teal-500 col-span-2 p-5">
            <h3>Admin Name: {auth?.user?.name}</h3>
            <h3>Admin Email: {auth?.user?.email}</h3>
            <h3>Admin Address: {auth?.user?.address}</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
