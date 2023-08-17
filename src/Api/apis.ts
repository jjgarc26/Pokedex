export default async function getPokedex(
  limit: string
): Promise<object | string> {
  try {
    const url = `http://127.0.0.1:5000/pokedex/${limit}`;

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
