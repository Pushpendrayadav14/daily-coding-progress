import React, { useState } from "react";

export const Form = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form is submited by " + title);
    setTitle('');
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name "
          className="m-10 px-5 py-3 bg-blue-100 text-xl font-bold"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="p-2 h-20 w-30 bg-blue-800 text-xl font-bold text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
