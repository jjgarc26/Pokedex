import { Card } from "react-bootstrap";
import { RouterProvider } from "react-router";
import Router from "./Route/Router";

const router = Router();
function App() {
  return (
    <Card>
      <RouterProvider router={router} />
    </Card>
  );
}

export default App;
