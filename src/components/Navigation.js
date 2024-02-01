import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import JobListingPage from "./Joblisting";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
function Navigation() {
  let nav, list;
  if (localStorage.getItem("user") !== null) {
    nav = localStorage.getItem("nav");
  } else {
    nav = "/";
  }

  if (!localStorage.getItem("nav")) {
    list = "|";
  } else if (localStorage.getItem("nav") === "dashboard") {
    list = "Companies";
  } else if (localStorage.getItem("nav") === "company-dashboard") {
    list = "Employees";
  }

  return (
    <Navbar
      sticky="top"
      className="navigation"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container className="nav-box">
        <NavLink className={"nav-link brand"} to="/">
          <img src={logo} alt="" />
          <span id="name">Skill_match</span>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto dummy"></Nav>
          <Nav>
            <NavLink className={"nav-link"} to="/">
              Home
            </NavLink>
            <NavLink className={"nav-link"} to={nav}>
              Dashboard
            </NavLink>
            <NavLink className={"nav-link"} to="companies">
              {list}
            </NavLink>
            <NavLink className={"nav-link"} to="news">
            news
            </NavLink>
            <NavLink className={"nav-link"} to={JobListingPage}>
            Job-Listing
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
