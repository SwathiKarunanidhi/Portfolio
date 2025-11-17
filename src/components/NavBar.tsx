import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTheme } from "../hooks/useTheme";
import { ToggleButton } from "./buttons/ToggleButton";

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <Navbar expand="md" bg={theme} variant={theme}>
      <Container className="gap-3">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ToggleButton />
      </Container>
    </Navbar>
  );
};
export default NavBar;
