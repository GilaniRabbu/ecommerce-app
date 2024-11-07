import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/Auth";
import moment from "moment";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Dashboard - All Orders"}>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-red-500 col-span-1 p-5">
            <UserMenu />
          </div>
          <div className="border border-teal-500 col-span-2 p-5">
            <h1>All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div key={i} className="relative overflow-x-auto shadow-md">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          # Product Count
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Buyer
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Payment
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Quantity
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td className="px-6 py-4">{o?.status}</td>
                        <td className="px-6 py-4">{o?.buyer?.name}</td>
                        <td className="px-6 py-4">
                          {moment(o?.createAt).fromNow()}
                        </td>
                        <td className="px-6 py-4">
                          {o?.payment.success ? "Success" : "Failed"}
                        </td>
                        <td className="px-6 py-4">{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, i) => (
                      <div
                        key={p._id}
                        className="flex flex-wrap gap-4 justify-start mb-4"
                      >
                        <div className="p-2 border border-black">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            alt={p.name}
                            className="mb-4 mx-auto inline-block w-32 object-cover"
                          />
                        </div>
                        <div className="p-2 border border-black">
                          <h4>{p.name}</h4>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price: ${p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
