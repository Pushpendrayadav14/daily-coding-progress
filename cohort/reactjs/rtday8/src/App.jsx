import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setuserName] = useState("");
  const [imageURl, setimageURl] = useState("");
  const [userRole, setuserRole] = useState("");
  const [userDes, setuserDes] = useState("");

  const localData = JSON.parse(localStorage.getItem("all-Users")) || [];

  const [allUsers, setallUsers] = useState(localData);

  const submiteHandler = (e) => {
    e.preventDefault();

    const oldUsers = [...allUsers];

    oldUsers.push({ userName, imageURl, userRole, userDes });

    setallUsers(oldUsers);

    localStorage.setItem("all-Users", JSON.stringify(oldUsers));

    setuserName("");
    setimageURl("");
    setuserRole("");
    setuserDes("");
  };
  const elementDeletedHandler = (idx) => {
    const copyUser = [...allUsers];
    const conf = confirm("Are you really want to delet this card!!!");
    if (conf) {
      copyUser.splice(idx, 1);
    } else {
      alert("Element not deleted!!!");
    }

    setallUsers(copyUser);
    localStorage.setItem("all-Users", JSON.stringify(copyUser));
  };

  return (
    <div className="h-screen  bg-black flex align-middle flex-col gap-10">
      <div className="h-[40%] w-[100%] bg-blue-100 rounded-2xl mt-1 flex gap-5">
        <form
          className="w-full max-w-3xl mx-auto p-5 grid grid-cols-2 gap-4"
          onSubmit={(e) => {
            submiteHandler(e);
          }}
        >
          <input
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            className="border-2 rounded-xl text-lg font-semibold px-3 py-2"
            type="text"
            placeholder="emter the name"
          />
          <input
            value={imageURl}
            onChange={(e) => {
              setimageURl(e.target.value);
            }}
            className="border-2 rounded-xl text-lg font-semibold px-3 py-2"
            type="text"
            placeholder="emte the Img URL"
          />
          <input
            value={userRole}
            onChange={(e) => {
              setuserRole(e.target.value);
            }}
            className="border-2 rounded-xl text-lg font-semibold px-3 py-2"
            type="text"
            placeholder="emter the Role"
          />
          <input
            value={userDes}
            onChange={(e) => {
              setuserDes(e.target.value);
            }}
            className="border-2 rounded-xl text-lg font-semibold px-3 py-2"
            type="text"
            placeholder="emter the Description"
          />
          <button className="col-span-2 bg-blue-500 rounded-xl text-white text-xl font-semibold py-2 mt-2 hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
      </div>
      <div className="h-[60%]  w-full bg-black flex flex-wrap mt-5 gap-5">
        {allUsers.map(function (elem, idx) {
          return (
            <Card
              key={idx}
              userName={elem.userName}
              imageURl={elem.imageURl}
              userRole={elem.userRole}
              userDes={elem.userDes}
              elementDeleted={() => {
                elementDeletedHandler(idx);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
