import { Card, Container, Row } from "react-bootstrap";
import PageComponents from "./PageComponents";
import SearchBar from "../../Utils/SearchBar";

function HomePage() {
  return (
    <Card>
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
        <Container>
          <Row>
            <SearchBar />
          </Row>
          <Row>
            <PageComponents />
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default HomePage;
