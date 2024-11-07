import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
      <div>
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
          <h2 className="text-3xl font-bold md:text-5xl mb-4 md:mb-8 lg:mb-12">
            Login Page
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-4 text-left sm:px-4 md:px-20"
          >
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
            <div className="flex gap-2">
              <input
                type="button"
                value="Forgot Password"
                onClick={() => {
                  navigate("/forgot-password");
                }}
                className="inline-block w-full rounded-md cursor-pointer bg-black px-6 py-3 text-center font-semibold text-white"
              />
              <input
                type="submit"
                value="Login"
                className="inline-block w-full rounded-md cursor-pointer bg-black px-6 py-3 text-center font-semibold text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
