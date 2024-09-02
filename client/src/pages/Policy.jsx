import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
          We get results
        </h2>
        {/* Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Item */}
          <div className="relative p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">1.5M</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus
            </p>
            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          {/* Item */}
          <div className="relative p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">41%</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus
            </p>
            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          {/* Item */}
          <div className="p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">3657+</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
