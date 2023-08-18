import { useState, useContext, createContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Card } from "react-bootstrap";
import PokedexNavBar from "../Components/PokedexNavBar/PokedexNavBar";
import getPokedex from "../Api/apis";

export const PokedexContent = createContext({});

function RootLayout() {
  const [pokedexLimit, setPokedexLimit] = useState("151");
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedexList, setPokedexList] = useState([]);

  function pokedexLimitHandler(limit: string) {
    setPokedexLimit(limit);
  }

  useEffect(() => {
    async function getPokedexList() {
      const list = await getPokedex(pokedexLimit);
      setPokemonList(list.slice(0, 151));
      setPokedexList(list.slice(0, 151));
    }
    getPokedexList();
  }, []);

  useEffect(() => {
    const limit = parseInt(pokedexLimit);
    const updatedList = pokemonList.slice(0, limit);
    setPokedexList(updatedList);
  }, [pokedexLimit]);

  return (
    <PokedexContent.Provider value={pokedexList}>
      <Card>
        <PokedexNavBar pokedexLimitHandler={pokedexLimitHandler} />
        <Outlet />
      </Card>
    </PokedexContent.Provider>
  );
}
export default RootLayout;
