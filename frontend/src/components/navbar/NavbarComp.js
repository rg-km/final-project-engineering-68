import React from "react";
import { Navbar, Container, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "./nakama.png";
import axios from "axios";

export default function NavbarComp() {
  const [user, setUser] = React.useState("Kevin");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const checkUser = async () => {
    const response = await axios.get("http://localhost:8082/api/user");
    if (response.data.user) {
      setUser(response.data.user);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const [isActive, setIsActive] = React.useState("home");

  React.useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <Navbar bg="light text-dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            <img src={logo} alt="" width="100" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link
                className={`${
                  isActive === "/" ? "nav-link active" : "nav-link"
                }`}
                onClick={() => setIsActive("/")}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`${
                  isActive === "category" ? "nav-link active" : "nav-link"
                }`}
                onClick={() => setIsActive("category")}
                to="/category"
              >
                Category
              </Link>
              <Link
                className={`${
                  isActive === "about-us" ? "nav-link active" : "nav-link"
                }`}
                onClick={() => setIsActive("about-us")}
                to="/about-us"
              >
                About Us
              </Link>
              {isLoggedIn ? (
                <NavDropdown title={`Halo, ${user}`} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className={`${
                        isActive === "register" ? "nav-link active" : "nav-link"
                      }`}
                      onClick={() => setIsActive("register")}
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${
                        isActive === "login" ? "nav-link active" : "nav-link"
                      }`}
                      onClick={() => setIsActive("login")}
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
