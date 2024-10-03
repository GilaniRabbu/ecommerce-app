import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Profile = () => {
  return (
    <Layout title={"Dashboard - Profile"}>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-red-500 col-span-1 p-5">
            <UserMenu />
          </div>
          <div className="border border-teal-500 col-span-2 p-5">
            <h1>My Profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
