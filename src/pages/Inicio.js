import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Cabecalho from "../components/Cabecalho";
import { Card, CardDeck } from "react-bootstrap";
import book from "../img/book.png";
import hotel from "../img/hotel.jpg";
import mapa from "../img/mapa.jpg";
import quarto from "../img/quarto.jpg";

const Inicio = () => {
  useEffect(() => {
    document.title = "BOOKHOTEL";
  }, []);

  return (
    <>
      <Container fluid className="p-0">
        <Cabecalho />
        <Jumbotron className="text-center">
          <h1>Olá! Seja bem vindo(a)!</h1>
          <p>Esta é a área administrativa do BOOKHOTEL</p>
        </Jumbotron>
      </Container>
      <Card className="text-center">
        <Card.Img variant="top" src={book} alt="Logo do book hotel" />
        <Card.Body>         
        </Card.Body>
      </Card>
      <footer className="text-center">
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={quarto}
              alt="imagem do quarto luxo do bookhotel"
            />
            <Card.Body>
              <Card.Title>NOSSOS QUARTOS</Card.Title>
              <Card.Text>
                Temos: apto. standard; apto. familia; suíte master e luxo.
              </Card.Text>
            </Card.Body>     
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={mapa}
              alt="localização do bookhotel pelo google maps"
            />
            <Card.Body>
              <Card.Title>LOCALIZAÇÃO</Card.Title>
              <Card.Text>
                Av. Perdizes, nº 568 - Jardins, São Paulo CEP: 95632-3233{" "}
              </Card.Text>
            </Card.Body>            
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={hotel}
              alt="imagem do hall do bookhotel"
            />
            <Card.Body>
              <Card.Title>CONTATOS</Card.Title>
              <Card.Text>contato@bookhotel.com || +55 11 9658-6235</Card.Text>
            </Card.Body>           
          </Card>
        </CardDeck>
        <br></br>
        BOOKHOTEL 2021 - Todos os direitos reservados.<br></br>
        Nome da Empresa: Bookhotel Brasil Hotelaria Ltda.<br></br>
        Endereço Comercial: Al. Bralisia, 6523. São Paulo, Brasil. CEP:
        66584-658 <br></br>
        CNPJ: 66.022.000/0001-22<br></br>
        <b>Política de Privacidade, troca, devolução e reembolso</b>
      </footer>
    </>
  );
};

export default Inicio;
