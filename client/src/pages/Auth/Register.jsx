import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register - Ecommerce App"}>
      <div>
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
          {/* Component */}
          <h2 className="text-3xl font-bold md:text-5xl mb-4 md:mb-8 lg:mb-12">
            Register Page
          </h2>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-4 text-left sm:px-4 md:px-20"
          >
            <div className="mb-4">
              <label htmlFor="name" className="mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                required
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                required
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                required
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="mb-1 font-medium">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                required
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="mb-1 font-medium">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                id="address"
                required
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="inline-block w-full rounded-md cursor-pointer bg-black px-6 py-3 text-center font-semibold text-white"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
