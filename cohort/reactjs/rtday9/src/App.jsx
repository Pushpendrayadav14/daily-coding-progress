import React from "react";
import {useState} from "react";
import axios from "axios";
import User from "./components/User";
import { useEffect } from "react";

const App = () => {
  const [allData, setAllData] = useState([])

  const getData = async ()=>{
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setAllData(response.data)
  }
  useEffect(function(){
    getData()
  },[]);
  
  return (
    <div>
      <button
        onClick={getData}
        className="h-30 w-60 bg-blue-600 text-2xl font-bold text-white px-2 py-2 rounded"
      >
        Get Data
      </button>
      {allData.map(function(elem,idx) {
        return <div className="bg-black flex flex-wrap">
          <User key={idx} elem={elem} />
        </div>
          
      })}
    </div>
  );
};

export default App;
