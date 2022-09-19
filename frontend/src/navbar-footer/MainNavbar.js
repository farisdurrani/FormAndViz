import React, { useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { signOutUser } from "../firebase";
import { toast } from "react-toastify";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const MainNavbar = (props) => {
  const [user, setUser] = useState();
  const auth = getAuth();
  onAuthStateChanged(auth, (detected_user) => {
    if (detected_user) setUser(detected_user.email);
  });

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign out successful");
        setUser(null);
      })
      .catch((error) => {
        toast.error(`Error in signing out: ${JSON.stringify(error.code)}`);
      });
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">FormAndViz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/fill">Fill Form</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
            <Nav.Link
              onClick={() => {
                user ? signOutUser() : null;
              }}
              href={user ? "#" : "/login"}
            >
              {user ? "Sign Out" : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MainNavbar.propTypes = {};

export default MainNavbar;
