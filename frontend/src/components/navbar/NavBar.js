import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes.js";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavigationBar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-dark navbar-dark position-fixed w-100 top-0 z-3"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to={ROUTES.HOME}>
            MelonMix
          </Navbar.Brand>
          {/* //? Enable to add search input
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse> */}
        </Container>
      </Navbar>
      <Container className="py-3"></Container>
    </>
  );
};
