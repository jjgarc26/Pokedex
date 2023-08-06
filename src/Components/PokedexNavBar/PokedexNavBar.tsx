import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
function PokedexNavBar() {
  const [titleName, setTitleName] = useState("Pokedex");

  function titleNameHandler(event: any) {
    // TODO: set limit for API depending on region

    setTitleName(`${event} Pokedex`);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>{titleName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title="Region"
              id="navbarScrollingDropdown"
              onSelect={titleNameHandler}
            >
              <NavDropdown.Item eventKey="Kanto">Kanto</NavDropdown.Item>
              <NavDropdown.Item eventKey="Johto">Johto</NavDropdown.Item>
              <NavDropdown.Item eventKey="Hoen">Hoen</NavDropdown.Item>
              <NavDropdown.Item eventKey="Sinoh">Sinoh</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pokedex">Pokedex</Nav.Link>
            <Nav.Link>Moves</Nav.Link>
            <Nav.Link>Events</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default PokedexNavBar;
