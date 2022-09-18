import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MainNavbar = (props) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">FormAndViz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/fill">Home</Nav.Link>
            <Nav.Link href="/results">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MainNavbar.propTypes = {};

export default MainNavbar;
