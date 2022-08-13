import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link href={"/"}>
            <img
              alt=""
              src="/LogoSinFondo1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ cursor: "pointer" }}
            />
          </Link>{" "}
          Smart Toolbox
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link href={"/"} >Inicio</Link>
            </Nav.Link>

            <Nav.Link>
              <Link href={"/funcionamiento"}>Funcionamiento</Link>
            </Nav.Link>

            <Nav.Link>
              <Link href={"/nosotros"}>Sobre nosotros</Link>
            </Nav.Link>

            <Nav.Link>
              <Link href={"/circuitos"}>Planos y circuitos</Link>
            </Nav.Link>

            <Nav.Link>
              <Link href={"/materiales"}>Materiales</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
