import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModalComponent({ data }) {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState();

  const handleClose = () => {
    setResult();
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const Multiplication = (a, b) => setResult(a * b);

  const Division = (a, b) =>
    setResult(Intl.NumberFormat("pt-BR").format(a / b));

  return (
    <div>
      <Button variant="outline-light" onClick={handleShow}>
        Selecionar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#212529",
            color: "white",
          }}
        >
          <Modal.Title>Fruta</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#2c3034", color: "white" }}>
          <fieldset disabled>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                placeholder="Fruta selecionada..."
                defaultValue={data.descricao}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Valor A</Form.Label>
              <Form.Control
                placeholder="Valor A..."
                defaultValue={data.valor_A}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Valor B</Form.Label>
              <Form.Control
                placeholder="Valor B..."
                defaultValue={data.valor_B}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Resultado</Form.Label>
              <Form.Control placeholder="Resultado..." defaultValue={result} />
            </Form.Group>
          </fieldset>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center"
          style={{ backgroundColor: "#212529" }}
        >
          <Button variant="outline-danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button
            variant="outline-light"
            onClick={() => Division(data.valor_A, data.valor_B)}
          >
            Dividir
          </Button>
          <Button
            variant="outline-light"
            onClick={() => Multiplication(data.valor_A, data.valor_B)}
          >
            Multiplicar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;
