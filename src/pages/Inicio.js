import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Cabecalho from "../components/Cabecalho";

const Inicio = () => {
  useEffect(() => {
    document.title = "BOOKHOTEL";
  }, []);

  return (
    <>
      <Container fluid className="p-0">
        <Cabecalho />
        <Jumbotron>
          <h1>Seja Bem Vindo!</h1>
          <p>Esta é a área administrativa do BookHotel</p>
        </Jumbotron>
      </Container>
    </>
  );
};

export default Inicio;
