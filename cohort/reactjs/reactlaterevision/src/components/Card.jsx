import React from "react";

const Card = (props) => {
  // console.log(props.userName);
  return (
    <div className="card">
      <img src={props.image} alt="Profile" className="profile-img" />

      <h1>{props.userName}</h1>

      <p>{props.userProfile}</p>

      <button>View Profile</button>
    </div>
  );
};

export default Card;
