import { Card, Button } from "react-bootstrap";

function CardComponents(props: any) {
  return (
    <Card bg={props.color} text={props.textColor} border={"dark"}>
      <Card.Body>
        <Card.Img
          style={{ height: "50%", width: "20%" }}
          alt={"no image for now"}
          // variant="top"
          src={props.image}
        ></Card.Img>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.bodyText}</Card.Text>
        <Button>Here to go</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponents;
