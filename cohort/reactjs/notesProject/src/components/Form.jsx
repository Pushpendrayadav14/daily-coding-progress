import React, { useState } from "react";

export const Form = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.addNote(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-full lg:w-1/2 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Add Notes</h1>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-5"
      >
        {/* Heading Input */}
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full border-2 border-gray-400 bg-transparent text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
        />

        {/* Description */}
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          rows="8"
          placeholder="Write Details here"
          className="w-full border-2 border-gray-400 bg-transparent text-white rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-500 transition"
        ></textarea>

        {/* Button */}
        <button className="w-full bg-white text-black py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition">
          Add Note
        </button>
      </form>
    </div>
  );
};
