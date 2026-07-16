import React from "react";

const MainSection = () => {
  return (
    <section className="min-h-[85vh] bg-sky-100 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-sky-800 leading-tight">
            Welcome to NotesApp
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            Create, organize and manage your notes easily. Save important ideas,
            reminders and daily tasks in one beautiful place.
          </p>

          <button className="mt-8 bg-sky-500 hover:bg-sky-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition">
            Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3022/3022259.png"
            alt="Notes"
            className="w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
