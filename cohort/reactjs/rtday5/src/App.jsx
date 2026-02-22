import React from "react";
import Navbar from "./components/Navbar";
import Male from "./components/Male";
import Female from "./components/Female";

const App = () => {
  // const user1 = {
  //   name: "Prathamesh",
  //   age: 23,
  //   city: "delhi",
  //   gender: "male",
  // };
  // const user2 = {
  //   name: "Priyanka",
  //   age: 23,
  //   city: "delhi",
  //   gender: "female",
  // };
  // const user3 = {
  //   name: "preet",
  //   age: 8,
  //   city: "delhi",
  //   gender: "male",
  // };

  function btnClick(a) {
    alert(`Button ${a} is Clicked` );
  }

  return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <button
        onClick={(a) => btnClick("click me")}
        className="active:scale-95 w-65 h-20 my-10 bg-blue-700 text-4xl text-white rounded-lg">
          Click me
        </button>
      </div>
    // <div>
    //   {user1.gender=="male"?<Male />:<Female />};
    //   {user2.gender=="male"?<Male />:<Female />};
    //   {user3.age>10?<Male />:<Female />};

    // </div>
    // <div>
    //   <Navbar title="Pryme" ank={["Home", "About", "Contact", "Services"]} btn='Signin' color='bg-amber-400' btnc='bg-amber-800'/>
    //   <Navbar title="GoPryme" ank={["Home", "pryme", "game", "Services"]} btn='login' color='bg-blue-400' btnc='bg-blue-800'/>
    //   <Navbar title="PalTechenology" ank={["Home", "farming", "coding", "Services"]} btn='profile' color='bg-green-400' btnc='bg-green-800'/>

    // </div>
  );
};

export default App;
