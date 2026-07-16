import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-sky-100 flex flex-col justify-center items-center px-6">
      <h1 className="text-5xl font-bold text-sky-700 mb-6">
        Welcome to Notes App
      </h1>

      <p className="text-lg text-gray-700 text-center max-w-2xl leading-8">
        Organize your daily notes easily. Create, manage, edit and delete your
        notes anytime. Keep all your important information in one secure place.
      </p>

      <button className="mt-8 px-8 py-3 bg-sky-500 text-white rounded-lg text-lg font-semibold hover:bg-sky-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default Home;
