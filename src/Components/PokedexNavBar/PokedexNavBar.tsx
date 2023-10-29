import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function PokedexNavBar(props: any) {
  const [titleName, setTitleName] = useState("Kanto Pokedex");

  function titleNameHandler(event: any) {
    let pokedexRegion: string;
    switch (event) {
      case "Kanto":
        pokedexRegion = "kanto";
        break;
      case "Johto":
        pokedexRegion = "johto";
        break;
      case "Hoen":
        pokedexRegion = "hoen";
        break;
      case "Sinoh":
        pokedexRegion = "sinoh";
        break;
      default:
        pokedexRegion = "kanto";
    }
    props.pokedexRegionHandler(pokedexRegion);

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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default PokedexNavBar;
