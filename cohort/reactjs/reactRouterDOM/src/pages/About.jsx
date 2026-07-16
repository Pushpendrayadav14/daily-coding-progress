import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-6">
      <div className="max-w-4xl bg-white rounded-xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-sky-700 mb-6">
          About Notes App
        </h1>

        <p className="text-gray-700 text-lg leading-8">
          Notes App is a simple and user-friendly application that helps users
          organize their daily tasks and important information. It allows you to
          create, update, and delete notes with ease while keeping your work
          organized and accessible anytime.
        </p>
      </div>
    </div>
  );
};

export default About;
