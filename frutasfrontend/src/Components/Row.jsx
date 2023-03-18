import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

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

  return fruits.map((fruit) => {
    return (
      <tr>
        <td>{fruit.descricao}</td>
        <td>{fruit.valor_A}</td>
        <td>{fruit.valor_B}</td>
        <td>
          <button>Selecionar</button>
        </td>
      </tr>
    );
  });
};

export default Row;
