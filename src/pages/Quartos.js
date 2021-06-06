import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";

import Cabecalho from "../components/Cabecalho";
import { BACKEND } from "../constants";

import {
  MdRestaurantMenu,
  MdWeb,
  MdSave,
  MdModeEdit,
  MdDelete,
  MdCancel,
} from "react-icons/md";

const Quartos = () => {
  const valorInicial = { numero: "", andar: "", tipo: "" };

  const [quarto, setQuarto] = useState(valorInicial);
  const [quartos, setQuartos] = useState([]);
  const [carregandoQuartos, setCarregandoQuartos] = useState(false);
  const [salvandoQuartos, setSalvandoQuartos] = useState(false);
  const [confirmaExclusao, setConfirmaExclusao] = useState(false);

  const [aviso, setAviso] = useState("");
  const [erros, setErros] = useState({});

  const { numero, andar, tipo } = quarto;

  async function obterQuartos() {
    setCarregandoQuartos(true);
    let url = `${BACKEND}/quartos`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuartos(data.quartos);
      })
      .catch(function (error) {
        console.error(`Erro ao obter os quartos: ${error.message}`);
      });
    setCarregandoQuartos(false);
  }

  useEffect(() => {
    document.title = "Cadastro de Quartos";
    obterQuartos();
  }, []);

  const validaErrosQuarto = () => {
    const novosErros = {};

    if (!numero || numero === "")
      novosErros.numero = "O número do quarto não pode ser vazio";
    if (!andar || andar === "")
      novosErros.andar = "O andar do quarto não pode ser vazio";
    if (!tipo || tipo === "")
      novosErros.tipo = "O tipo do quarto não pode ser vazio";

    return novosErros;
  };

  const alteraDadosQuarto = (e) => {
    setQuarto({ ...quarto, [e.target.name]: e.target.value });
    setErros({});
  };

  async function salvarQuarto(e) {
    e.preventDefault();
    const novosErros = validaErrosQuarto();
    // Caso exista algum erro no array
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
    } else {
      const metodo = quarto.hasOwnProperty("_id") ? "PUT" : "POST";
      
      setSalvandoQuartos(true);
      let url = `${BACKEND}/quartos`;
      await fetch(url, {
        method: metodo,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quarto),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
           data.sucesso
            ? setAviso("Quarto salvo com sucesso")
            : setAviso(data.errors[0].message);
          setQuarto(valorInicial); //limpa a tela
          obterQuartos();
        })
        .catch(function (error) {
          console.error(`Erro ao salvar o quarto: ${error.message}`);
        });
      setSalvandoQuartos(false);
    }
  }

  async function excluirQuarto() {
    let url = `${BACKEND}/quartos/${quarto._id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.message ? setAviso(data.message) : setAviso("");
        setQuarto(valorInicial);
        obterQuartos();
      })
      .catch(function (error) {
        console.error(`Erro ao excluir o quarto: ${error.message}`);
      });
  }

  return (
    <>
      <Container fluid className="p-0">
        <Cabecalho />
        <Row className="bg-info text-light">
          <Col>
            <h3>
              <MdRestaurantMenu /> Quartos do BOOKHOTEL
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            {/* Formulário do Quarto */}
            <h4>
              <MdWeb /> Cadastro de Quartos
            </h4>
            <Form method="post">
              <Form.Group controlId="numero">
                <Form.Label>Número do quarto</Form.Label>
                <Form.Control
                  name="numero"
                  placeholder="Ex: 1"
                  onChange={alteraDadosQuarto}
                  value={numero}
                  isInvalid={!!erros.numero}
                />
                <Form.Control.Feedback type="invalid">
                  {erros.numero}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="andar">
                <Form.Label>Andar do quarto</Form.Label>
                <Form.Control
                  name="andar"
                  placeholder="Ex: 1"
                  onChange={alteraDadosQuarto}
                  value={andar}
                  isInvalid={!!erros.andar}
                />
                <Form.Control.Feedback type="invalid">
                  {erros.andar}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="tipo">
                <Form.Label>Tipo do quarto</Form.Label>
                <Form.Control
                  name="tipo"
                  placeholder="Ex: Luxo"
                  onChange={alteraDadosQuarto}
                  value={tipo}
                  isInvalid={!!erros.tipo}
                />
                <Form.Control.Feedback type="invalid">
                  {erros.tipo}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                title="Salvar o registro"
                onClick={(e) => salvarQuarto(e)}
              >
                {salvandoQuartos ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  <MdSave />
                )}
                Salvar
              </Button>
              &nbsp;
              <Button
                variant="danger"
                type="button"
                title="Cancelar"
                onClick={() => setQuarto(valorInicial)}
              >
                <MdCancel /> Cancelar
              </Button>
            </Form>
          </Col>
          <Col xs={12} lg={6}>
            {/* Listagem dos Quartos */}
            {carregandoQuartos && (
              <>
                <Spinner animation="border" size="sm" />
                <Spinner animation="grow" variant="info" />
                <p>Aguarde, enquanto os quartos são carregados...</p>
              </>
            )}
            <Table striped bordered hover>
              <thead>
                <tr className="bg-warning text-dark">
                  <th>Número</th>
                  <th>Andar</th>
                  <th>Tipo</th>
                  <th>Data de cadastro</th>
                  <th>Opções</th>
                </tr>
              </thead>
              <tbody>
                {
                quartos.map((item) => (
                  <tr key={item._id}>
                    <td>{item.numero}</td>
                    <td>{item.andar}</td>
                    <td>{item.tipo}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        title="Editar"
                        onClick={() => setQuarto(item)}
                      >
                        <MdModeEdit />
                      </Button>
                      &nbsp;
                      <Button
                        variant="outline-danger"
                        title="Deletar"
                        onClick={() => {
                          setQuarto(item);
                          setConfirmaExclusao(true);
                        }}
                      >
                        <MdDelete />
                      </Button>
                    </td>
                  </tr>
                ))}
                <tr className="bg-dark text-light">
                  <td colspan="3">Total de Quartos:</td>
                  <td>{quartos.length}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Modal
          animation={false}
          show={confirmaExclusao}
          onHide={() => setConfirmaExclusao(false)}
        >
          <Modal.Header>
            <Modal.Title>Confirmação da Exclusão</Modal.Title>
          </Modal.Header>
          <Modal.Body>Confirma a exclusão do quarto selecionado?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => setConfirmaExclusao(!confirmaExclusao)}
            >
              Cancelar
            </Button>
            <Button
              variant="success"
              onClick={() => {
                setConfirmaExclusao(!confirmaExclusao);
                excluirQuarto();
              }}
            >
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>

        <Toast
          onClose={() => setAviso("")}
          show={aviso.length > 0}
          animation={false}
          className="bg-success"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <Toast.Header>Aviso</Toast.Header>
          <Toast.Body classname="text-light">{aviso}</Toast.Body>
        </Toast>
      </Container>
    </>
  );
};

export default Quartos;
