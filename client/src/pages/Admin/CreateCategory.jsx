import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import CategoryForm from "../../components/Form/CategoryForm";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  // Handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form");
    }
  };

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-red-500 col-span-1 p-5">
            <AdminMenu />
          </div>
          <div className="border border-teal-500 col-span-2 p-5">
            <h1>Manage Category</h1>
            <div className="p-3">
              <CategoryForm />
            </div>
            <div>
              <table className="table-fixed border-separate border-spacing-2 border border-slate-400">
                <thead>
                  <tr>
                    <th className="border border-slate-300">Name</th>
                    <th className="border border-slate-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((c) => {
                    <>
                      <tr className="border border-slate-300">
                        <td key={c._id}>{c.name}</td>;
                        <td className="border border-slate-300">
                          <button className="">Edit</button>
                        </td>
                      </tr>
                    </>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
