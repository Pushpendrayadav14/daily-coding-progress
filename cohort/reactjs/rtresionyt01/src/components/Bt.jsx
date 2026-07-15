import React, { useState } from "react";
import axios from "axios";

export const Bt = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`,
    );
    setData(response.data);
    // console.log(response.data);
  };

  return (
    <div className="p-10 flex ">
      <button
        className="h-25 w-50 bg-blue-500 text-white font-800 font-extrabold hover:bg-blue-700 text-3xl rounded-2xl"
        onClick={getData}
      >
        get data
      </button>
      <div className="w-[90%] h-screen lg:max-h-screen bg-yellow-300 text-2xl text-black font-bold flex flex-wrap justify-center align-middle p-3 gap-2">
        {data.map((elem, idx) => {
          return (
            <div key={idx} className="h-80 w-80 bg-amber-50 rounded-2xl p-10">
              <h1>{elem.name}</h1>
              <h3>{elem.email}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

