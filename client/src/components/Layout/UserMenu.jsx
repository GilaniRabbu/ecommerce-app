import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-3xl">Dashboard</h3>
        <NavLink to="/dashboard/user/profile">Profile</NavLink>
        <NavLink to="/dashboard/user/orders">Orders</NavLink>
      </div>
    </>
  );
};

export default UserMenu;
