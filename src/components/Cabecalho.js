import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Cabecalho = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#inicio">BOOKHOTEL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#inicio">Home</Nav.Link>
          <Nav.Link href="#/quartos">Quartos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Cabecalho;
