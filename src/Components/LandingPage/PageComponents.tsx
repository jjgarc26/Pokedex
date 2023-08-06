import { Col, Row } from "react-bootstrap";
import CardComponents from "../../Utils/CardComponents";

function PageComponents() {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <CardComponents
          title="Pokedex"
          bodyText="Pokedex allows users to search for pokemon informations"
          color="purple"
          textColor="white"
          image="pokedex_icon_small.png"
          navigate="/pokedex"
        />
      </Col>
      <Col>
        <CardComponents
          title="Moves"
          bodyText="Checkout different styles of moves"
          color="blue"
          textColor="white"
          image="moves_icon.png"
        />
      </Col>
      <Col>
        <CardComponents
          title="Unknowns"
          bodyText="Unknowns maybe just need to add more"
          color="red"
          textColor="white"
          image="pokedex_icon_small.png"
        />
      </Col>
      <Col>
        <CardComponents
          title="Events"
          bodyText="Get involved with other trainers through out the world"
          color="orange"
          textColor="white"
          image="calander.png"
        />
      </Col>
    </Row>
  );
}

export default PageComponents;
