import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/Auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  // Context
  const [auth, setAuth] = useAuth();

  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Get User Data
  useEffect(() => {
    const { name, email, phone, address } = auth?.user;
    setName(name);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
  }, [auth?.user]);

  // Form Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:8080/api/v1/auth/profile",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Profile"}>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-red-500 col-span-1 p-5">
            <UserMenu />
          </div>
          <div className="border border-teal-500 col-span-2 p-4">
            <div className="mx-auto max-w-2xl text-center p-4">
              <h2 className="font-bold text-4xl mb-5">USER PROFILE</h2>
              <form onSubmit={handleSubmit} className="mx-auto text-left">
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
                    disabled
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
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
                  />
                </div>
                <input
                  type="submit"
                  value="UPDATE"
                  className="inline-block w-full rounded-md cursor-pointer bg-black px-6 py-3 text-center font-semibold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
