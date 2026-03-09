import React, { useState, useEffect } from "react";
import axios from "axios";

const Username = () => {
  const [num, setnum] = useState(0);
  const [userName, setuserName] = useState("");

  const getUserData = async () => {
    const responseUser = await axios.get("https://randomuser.me/api/");
    setuserName(
      responseUser.data.results[0].name.first +
        " " +
        responseUser.data.results[0].name.last,
    );
  };

  useEffect(
    function () {
      getUserData();
    },
    [num],
  );

  return (
    <div className="mt-10 ml-10">
      <h1 className="mx-2 my-2 text-8xl bg-black-500 font-bold">{num}</h1>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
        className="mt-2 ml-2 text-2xl bg-blue-500 font-bold"
      >
        click to get user
      </button>
      <h1 className="mx-2 my-2 text-2xl bg-red-500 font-bold">{userName}</h1>
    </div>
  );
};

export default Username;
