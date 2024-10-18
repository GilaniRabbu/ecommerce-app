import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/Search";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form role="search" className="flex" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          className="mr-2 px-4 py-2 border border-black"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="mr-2 px-4 py-2 border border-black" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
