import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-Warning">
        <Container>
          <Navbar.Brand href="#home">Registration Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to={"/"}>Home</Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to={"/AboutUs"}>About Us</Link>
              </Nav.Link>
              <NavDropdown title="Registration" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link to={"/CreateUser"}>Create User</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to={"/Details"}>Details</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">
                <Link to={"/Edit"}>Edit</Link>
              </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
