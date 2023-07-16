import { Card, Button } from "react-bootstrap";

function CardComponents(props: any) {
  return (
    <Card bg={props.color} text={props.textColor} border={"dark"}>
      <Card.Body>
        <Card.Img alt={"no image for now"}></Card.Img>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.bodyText}</Card.Text>
        <Button>Here to go</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponents;
