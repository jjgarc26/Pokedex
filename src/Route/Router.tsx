import { Route, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Welcome from "../Components/WelcomePage/WelcomePage";
import HomePage from "../Components/HomePage/HomePage";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Welcome />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );
  return router;
}
