import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CardComponents(props: any) {
  const navigate = useNavigate();
  return (
    <Card
      style={{ backgroundColor: props.color }}
      text={props.textColor}
      border={"dark"}
    >
      <Card.Body>
        <Card.Img
          style={{ height: "50%", width: "20%" }}
          alt={"no image for now"}
          // variant="top"
          src={props.image}
        ></Card.Img>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.bodyText}</Card.Text>
        <Button onClick={() => navigate(props.navigate)}>Here to go</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponents;
