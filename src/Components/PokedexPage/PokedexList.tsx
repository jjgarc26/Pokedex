import { Container, Row, Col, Dropdown } from "react-bootstrap";
import SearchBar from "../../Utils/SearchBar";
function PokedexList() {
  // TODO: Add filter by, for now only UI
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <SearchBar placeholder="Search by name..." />
        </Col>
        <Col xs={3}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              +Add Filter
            </Dropdown.Toggle>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
}
export default PokedexList;
