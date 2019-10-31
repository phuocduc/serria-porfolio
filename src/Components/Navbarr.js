import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Navbarr.css";

export default function Navbarr() {
  return (
    <Navbar expand="lg" className="navbar-wrap">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav-collapsee">
        <Nav className="navbar-wrap-inside mr-auto">
          <Link to="/dashboard" className="navbar-linkk">
            Home
          </Link>
          <Link className="navbar-linkk" href="#features">
            About
          </Link>
          <Link className="navbar-linkk" href="#product">
            Product
          </Link>
          <Link to="/login" className="navbar-linkk">
            Login
          </Link>
          <Link to="/contact" className="navbar-linkk">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
