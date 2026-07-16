import React from "react";

const Contect = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-6">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-sky-700 mb-8">
          Contact Us
        </h1>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border rounded-lg p-3 outline-none focus:border-sky-500"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="border rounded-lg p-3 outline-none focus:border-sky-500"
          />

          <textarea
            rows="6"
            placeholder="Enter Your Message"
            className="border rounded-lg p-3 outline-none resize-none focus:border-sky-500"
          ></textarea>

          <button className="bg-sky-500 hover:bg-sky-700 text-white py-3 rounded-lg text-lg font-semibold transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contect;
