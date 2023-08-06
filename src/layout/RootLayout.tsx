import { Outlet } from "react-router-dom";
import { Card } from "react-bootstrap";
import PokedexNavBar from "../Components/PokedexNavBar/PokedexNavBar";
function RootLayout() {
  return (
    <Card>
      <PokedexNavBar />
      <Outlet />
    </Card>
  );
}
export default RootLayout;
