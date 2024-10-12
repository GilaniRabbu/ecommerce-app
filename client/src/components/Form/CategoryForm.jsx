import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <div className="max-w-md my-3 py-3">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="block h-9 w-full rounded-md px-4 py-2 pl-5 text-sm border border-solid border-black text-black placeholder:text-black"
            placeholder="Enter New Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required=""
          />
          <input
            type="submit"
            value="Submit"
            className="mt-4 inline-block w-full cursor-pointer items-center rounded-md px-4 py-2 text-center font-semibold bg-black text-white"
          />
        </form>
      </div>
    </>
  );
};

export default CategoryForm;
