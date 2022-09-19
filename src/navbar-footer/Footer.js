import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container fluid id="footer" className="p-5 mt-5">
      <p className="copyright">Faris Durrani © {new Date().getFullYear()}</p>
      <a
        href="https://github.com/farisdurrani/FormAndViz"
        target="_blank"
        rel="noopener noreferrer"
        className="github"
      >
        GitHub
      </a>
    </Container>
  );
};

export default Footer;
