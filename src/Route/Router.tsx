import { Route, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import PokedexPage from "../Components/PokedexPage/PokedexPage";
import RootLayout from "../layout/RootLayout";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
      </Route>
    )
  );
  return router;
}
