import { Card, Container, Row, Col } from "react-bootstrap";
import PreviewDisplay from "./PreviewDisplay";
import PokedexList from "./PokedexList";
function PokedexPage() {
  console.log("in pokedexpage");
  return (
    <Card.Body>
      <Container>
        <Row>
          <Col>
            {/* Row for image */}
            <PreviewDisplay />
          </Col>
          <Col>
            {/* Row for list */}
            <PokedexList />
          </Col>
        </Row>
      </Container>
    </Card.Body>
  );
}
export default PokedexPage;
