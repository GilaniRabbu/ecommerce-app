import React from "react";
import Layout from "../components/Layout/Layout";
import { useSearch } from "../context/Search";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search Results"}>
      <div className="container mx-auto">
        <div className="text-center">
          <h1>Search Results</h1>
          <h4>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h4>
          <div className="flex flex-wrap gap-4">
            {values?.results.map((p) => (
              <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  alt={p.name}
                  className="mb-4 mx-auto inline-block w-40 object-cover"
                />
                <p className="font-bold">{p.name}</p>
                <p className="text-sm text-gray-500">
                  {p.description.substring(0, 30)}...
                </p>
                <p className="text-md text-blue-600">$ {p.price}</p>
                <button>More Details</button>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
