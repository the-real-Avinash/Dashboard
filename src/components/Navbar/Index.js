import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Dummy = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MyDash</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Dashboard</Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Project 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Project 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Calender</Nav.Link>
            <Nav.Link href="#action2">Todo</Nav.Link>
            <NavDropdown title="People" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">People 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">People 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">People 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">invoice</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Image
            src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg"
            roundedCircle
            width={70}
            height={50}
          />
          <div className="name">
            <p className="title">Avinash Gavandhe</p>
            <p className="status">Online</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Dummy;
