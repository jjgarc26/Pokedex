import { Route, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";
import HomePage from "../Components/HomePage/HomePage";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LandingPage />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );
  return router;
}
