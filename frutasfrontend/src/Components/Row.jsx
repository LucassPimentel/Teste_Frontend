import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ModalComponent from "./ModalComponent";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { styles } from "../style";

const Row = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const url = "https://localhost:7053/v1/Fruit/GetFruits";
  let fruits = datas;

  useEffect(() => {
    if (isLoading) {
      const intervalCall = setInterval(() => {
        axios
          .get(url)
          .then((response) => {
            setDatas(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 5000);
      const showModalUnavailableData = setTimeout(() => {
        setShow(true);
      }, 10000);
      return () => {
        clearInterval(intervalCall);
        clearTimeout(showModalUnavailableData);
      };
    }
  }, [datas]);

  return isLoading ? (
    <>
      <tr>
        <td colSpan={9}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton style={styles.CustomConfigModal}>
          <Modal.Title>Que estranho!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.CustomConfigModalBody}>
          Os dados estão demorando mais que o normal para carregar, você tem
          certeza que o backend está sendo executado? E o banco de dados, está
          ok?
        </Modal.Body>
        <Modal.Footer style={styles.CustomConfigModal}>
          <Button variant="primary" onClick={handleClose}>
            Vou Verificar!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    fruits.map((fruit) => {
      return (
        <tr key={fruit.id}>
          <td>{fruit.descricao}</td>
          <td>{fruit.valor_A}</td>
          <td>{fruit.valor_B}</td>
          <td>
            <ModalComponent data={fruit} />
          </td>
        </tr>
      );
    })
  );
};

export default Row;
