import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-3xl">Admin Panel</h3>
        <NavLink to="/dashboard/admin/create-category">Create Category</NavLink>
        <NavLink to="/dashboard/admin/create-product">Create Product</NavLink>
        <NavLink to="/dashboard/admin/products">Products</NavLink>
        <NavLink to="/dashboard/admin/orders">Orders</NavLink>
        <NavLink to="/dashboard/admin/users">Users</NavLink>
      </div>
    </>
  );
};

export default AdminMenu;
