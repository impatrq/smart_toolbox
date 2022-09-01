import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar className="shadow-lg bg-opacity-50" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link href={"/"}>Inicio</Link>
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
              <Link href={"/imagenes"}>Imágenes</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
