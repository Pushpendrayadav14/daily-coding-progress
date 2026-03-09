import { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    setAllPokemon(response.data.results);
  };

  useEffect(function(){
    getData();
  }, []);

  return (
    <div className="mt-10 ml-10">
      <button
        onClick={getData}
        className="px-2 py-2 text-2xl bg-blue-500 font-bold"
      >
        click
      </button>
      {allPokemon.map(function (elem, idx) {
        return (
          <h1 key={idx} className="mx-2 my-2 text-2xl bg-pink-500 font-bold">
            {elem.name}
          </h1>
        );
      })}
    </div>
  );
};

export default Pokemon;
