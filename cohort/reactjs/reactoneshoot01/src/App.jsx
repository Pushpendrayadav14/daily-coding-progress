import React from "react";
import ProfileCard from "./components/profileCard";
import users from "./data/userdata";

const App = () => {
  return (
    <div className="bg-black p-6 flex space-between flex-wrap gap-10">
      {users.map((user) => (
        <div key={user.id}>
          <ProfileCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default App;
