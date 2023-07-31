import { Card } from "react-bootstrap";
import PokedexNavBar from "../../Utils/PokedexNavBar/PokedexNavBar";
import PageComponents from "./PageComponents";

function LandingPage() {
  return (
    <Card>
      <PokedexNavBar />
      <Card.Title>
        <h1>Welcome</h1>
      </Card.Title>
      <Card.Img
        src="pokemon_logo_crop.png"
        style={{
          width: "50%",
          height: "50%",
          display: "block",
          margin: "auto",
        }}
      />
      <Card.Body>
        <PageComponents />
      </Card.Body>
    </Card>
  );
}

export default LandingPage;
