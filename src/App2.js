import React, { useEffect } from "react";
import "./App.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";
import book from "./img/book.png";
import hotel from "./img/hotel.jpg";
import mapa from "./img/mapa.jpg";
import quarto from "./img/quarto.jpg";

function App() {
  useEffect(() => {
    document.title = `BOOKHOTEL`;
  });

  /* Tudo o que é mostrado */
  return (
    <>
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">BOOKHOTEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Quartos</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
      <Card className="text-center">
        <Card.Img variant="top" src={book} alt="Logo do book hotel" />
        <Card.Body>
          <Card.Text>
            Olá! Seja bem vindo(a) ao cadastro de quartos do BOOKHOTEL
          </Card.Text>
        </Card.Body>
      </Card>
      <footer>
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
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
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
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
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
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
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
}

export default App;
