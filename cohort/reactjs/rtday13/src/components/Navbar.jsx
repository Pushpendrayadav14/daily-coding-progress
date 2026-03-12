import React, { useState } from "react";

const Navbar = (props) => {
  const [newTheme, setNewTheme] = useState('');
  return (
    <div className="bg-blue-200 p-5 mt-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newTheme)
          setNewTheme('');
        }}
      >
        <input
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value);
          }}
          className="px-5 py-2 border-2 ml-10 mt-5"
          type="text"
          placeholder="enter your theme "
        />
        <button className="text-xl bg-blue-600 text-white px-4 py-2 rounded ml-10">
          submit
        </button>
      </form>
    </div>
  );
};

export default Navbar;
