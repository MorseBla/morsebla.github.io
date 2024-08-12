import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation({ selectedItem, setSelectedItem }) {
  function handleClick(item) {
    setSelectedItem(item);
  }

  return (
    <Navbar
      expand="lg"
      className="container fixed-top navbar-dark bg-dark bg-opacity-75  "
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/">
          <p className="h1 fw-bold mb-0 ">Blake Morse</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div onClick={() => handleClick("about")}>
              <Nav.Link
                eventKey="1"
                className={[
                  selectedItem === "about" ? "active" : undefined,
                  " text-end w-lg-25 ms-auto ",
                ]}
                href=""
              >
                <p className="h4 mb-0">About</p>
              </Nav.Link>
            </div>
            <div onClick={() => handleClick("skills")}>
              <Nav.Link
                eventKey="2"
                className={[
                  selectedItem === "skills" ? "active" : undefined,
                  " text-end w-lg-25 ms-auto ",
                ]}
                href=""
              >
                <p className="h4 mb-0">Skills</p>
              </Nav.Link>
            </div>
            <div onClick={() => handleClick("projects")}>
              <Nav.Link
                eventKey="3"
                className={[
                  selectedItem === "projects" ? "active" : undefined,
                  " text-end w-lg-25 ms-auto ",
                ]}
                href=""
              >
                <p className="h4 mb-0">Projects</p>
              </Nav.Link>
            </div>
            <NavDropdown
              align="end"
              title="Links"
              id="basic-nav-dropdown"
              className="text-end text-lg-start w-lg-25 ms-auto h4 mb-0"
            >
              <NavDropdown.Item
                target="_blank"
                href="https://linkedin.com/in/blake-morse-12768b226/"
                className="text-center"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://github.com/MorseBla"
                className="text-center"
              >
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
