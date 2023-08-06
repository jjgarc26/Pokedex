import { Container, Row, Col } from "react-bootstrap";
import styles from "./PreviewDisplay.module.css";
function PreviewDisplay() {
  return (
    <Container>
      <Row>
        <Col className={styles.pokemonId}>
          <h3>Id</h3>
        </Col>
        <Col xs={9} className={styles.pokemonName}>
          <h3>PokemonName</h3>
        </Col>
      </Row>
      <Row className={styles.pokemonImg}>
        <img src="pokedex_icon_small.png" />
      </Row>
      <Row>
        <h3>Type</h3>
      </Row>
    </Container>
  );
}

export default PreviewDisplay;
