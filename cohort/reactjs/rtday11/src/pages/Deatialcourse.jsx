import React from 'react'
import { useParams } from "react-router-dom";

const Deatialcourse = () => {
    const param=useParams();
  return (
    <div className="w-full h-[80%] bg-blue-300 flex justify-center align-center">
      <h1 className="text-5xl bold px-2 py-2 rounded mt-10 ">{param.Courseid} course Detail Page</h1>
    </div>
  )
}

export default Deatialcourse
