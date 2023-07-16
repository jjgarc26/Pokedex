import { Card, Col, Row } from "react-bootstrap";
import CardComponents from "../../Utils/CardComponents";

function PageComponents() {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <CardComponents
          title="Pokedex"
          bodyText="Pokedex allows users to search for pokemon informations"
          color="info"
          textColor="white"
        />
      </Col>
      <Col>
        <CardComponents
          title="Moves"
          bodyText="Checkout different styles of moves"
          color="warning"
          textColor="white"
        />
      </Col>
      <Col>
        <CardComponents
          title="Events"
          bodyText="Get involved with other trainers through out the world"
          color="success"
          textColor="white"
        />
      </Col>
      <Col>
        <CardComponents
          title="Unknowns"
          bodyText="Unknowns"
          color="danger"
          textColor="white"
        />
      </Col>
    </Row>
  );
}

export default PageComponents;
