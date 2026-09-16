import React from "react";
import { useState } from "react";
import { setQuery } from "../redux/features/searchSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  bg-gray-400 gap-5 py-10 px-10"
      >
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          className=" w-full px-3 bg-slate-800 text-white placeholder:text-slate-500 rounded border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search..."
        />
        <button className="active:scale-95 cursor-pointer border-2 px-6 py-3 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
