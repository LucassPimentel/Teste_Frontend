import Row from "./Row";
import Table from "react-bootstrap/Table";

function CustomTable() {
  return (
    <Table
      striped
      bordered
      variant="dark"
      className="text-center border-secondary align-middle"
    >
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor A</th>
          <th>Valor B</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <Row />
      </tbody>
    </Table>
  );
}

export default CustomTable;
