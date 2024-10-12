import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <div className="mx-auto mb-4 max-w-sm pb-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-4 py-2 pl-14 text-sm text-black placeholder:text-black"
            placeholder="Enter New Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required=""
          />
          <input
            type="submit"
            value="Submit"
            className="mt-4 inline-block w-full cursor-pointer items-center rounded-md bg-black px-4 py-2 text-center font-semibold text-white"
          />
        </form>
      </div>
    </>
  );
};

export default CategoryForm;
