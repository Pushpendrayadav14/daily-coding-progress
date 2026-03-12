import React from "react";

const Allcourses = () => {
  const courses = [
    "React.js Complete Guide",
    "Full Stack Web Development",
    "Machine Learning with Python",
    "Data Structures and Algorithms",
  ];
  return (
    <div>
      <h1 className='text-3xl text-red-900 font-bold'> All courses</h1>
      <ul className='text-3xl text-red-900 font-bold' >
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default Allcourses;
