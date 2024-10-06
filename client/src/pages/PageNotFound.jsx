import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Go Back - Page Not Found"}>
      {/* Container */}
      <div className="px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <img
            src="/404-error.svg"
            alt=""
            className="mx-auto mb-5 inline-block h-60 w-60 flex-none object-cover"
          />
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 Error</h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
            Oops! Page Not Found
          </p>
          <Link
            to="/"
            className="inline-block items-center rounded-md bg-black px-8 py-4 text-center font-semibold text-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
