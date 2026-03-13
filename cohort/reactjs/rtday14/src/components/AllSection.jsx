import React, { useContext } from "react";
import { userDataContext } from "../context/UserContex";

const AllSection = ({children}) => {
  const userData=useContext(userDataContext);
  console.log(userData);
  
  return (
    <div className="h-90 bg-black-700">
      <h1 className="text-xl font-bold">All Section </h1>
    </div>
  );
};

export default AllSection;
