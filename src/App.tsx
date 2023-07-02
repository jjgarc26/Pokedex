import { Container } from "react-bootstrap";
import { RouterProvider } from "react-router";
import Router from "./Route/Router";

const router = Router();
function App() {
  return (
    <Container className="text-center">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
