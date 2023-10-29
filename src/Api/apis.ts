import { PokemonData } from "../Utils/types";
export default async function getPokedex(limit: string) {
  try {
    const url = `http://127.0.0.1:5000/pokedex/${limit}`;

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    // console.log(JSON.parse(data));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getRegionalPokedex(region: string) {
  try {
    const url = `http://127.0.0.1:5000/regions/${region}`;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
