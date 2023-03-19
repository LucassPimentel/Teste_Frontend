import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

const Row = () => {
  const [data, setData] = useState([]);
  let fruits = data;

  useEffect(() => {
    axios
      .get("https://localhost:7053/v1/Fruit/GetFruits")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  return fruits.map((fruit) => {
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
  });
};

export default Row;
