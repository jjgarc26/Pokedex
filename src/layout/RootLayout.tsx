import { useState, useContext, createContext, useEffect, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Card } from "react-bootstrap";
import PokedexNavBar from "../Components/PokedexNavBar/PokedexNavBar";
import getPokedex, { getRegionalPokedex } from "../Api/apis";

export const PokedexContent = createContext({});

function RootLayout() {
  const [region, setRegion] = useState("kanto");
  const [pokedexList, setPokedexList] = useState([]);

  async function pokedexRegionHandler(region: string) {
    setRegion(region);
  }

  useEffect(() => {
    async function getPokedexList() {
      const list = await getRegionalPokedex(region);
      setPokedexList(list);
    }
    getPokedexList();
  }, [region]);

  console.log(pokedexList);

  return (
    <PokedexContent.Provider value={pokedexList}>
      <Card>
        <PokedexNavBar pokedexRegionHandler={pokedexRegionHandler} />
        <Outlet />
      </Card>
    </PokedexContent.Provider>
  );
}
export default RootLayout;
