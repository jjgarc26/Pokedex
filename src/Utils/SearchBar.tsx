import { Form, Button } from "react-bootstrap";
function SearchBar(props: any) {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder={props.placeholder}
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}
export default SearchBar;
