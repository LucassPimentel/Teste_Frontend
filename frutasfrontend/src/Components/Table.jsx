import Row from "./Row";

function Table() {
  return (
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Valor A</th>
          <th scope="col">Valor B</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <Row />
      </tbody>
    </table>
  );
}

export default Table;
