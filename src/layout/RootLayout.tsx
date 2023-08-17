import { useState, useContext, createContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Card } from "react-bootstrap";
import PokedexNavBar from "../Components/PokedexNavBar/PokedexNavBar";
import getPokedex from "../Api/apis";
import PokedexList from "../Components/PokedexPage/PokedexList";

export const PokedexContent = createContext({});

function RootLayout() {
  const [pokedexLimit, setPokedexLimit] = useState("151");
  const [pokemonList, setPokemonList] = useState({});

  function pokedexLimitHandler(limit: string) {
    setPokedexLimit(limit);
  }

  useEffect(() => {
    async function getPokedexList() {
      const list = await getPokedex(pokedexLimit);
      console.log(list);
      return list;
    }
    const newList = getPokedexList();
    setPokemonList(newList);
  }, [pokedexLimit]);

  return (
    <PokedexContent.Provider value={pokemonList}>
      <Card>
        <PokedexNavBar pokedexLimitHandler={pokedexLimitHandler} />
        <Outlet />
      </Card>
    </PokedexContent.Provider>
  );
}
export default RootLayout;
