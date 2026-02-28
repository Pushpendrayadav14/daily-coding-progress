import React from "react";

const Card = (props) => {
  return (
    <div className=" bg-white w-80 rounded-2xl shadow-xl p-6 text-center relative flex flex-col flex-wrap">
      {/* Top Image */}
      <div className="flex justify-center -mt-16">
        <img
          src={props.imageURl}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold mt-4 text-gray-800">
        {props.userName}
      </h1>

      {/* Subheading */}
      <h5 className="text-md text-gray-500 mt-1">{props.userRole}</h5>

      {/* Paragraph */}
      <p className="text-gray-600 text-sm mt-4 leading-relaxed">
        {props.userDes}
      </p>

      {/* Button */}
      <button
        onClick={props.elementDeleted}
        className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
