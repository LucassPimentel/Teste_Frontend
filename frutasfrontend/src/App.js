import React from "react";
import Table from "./Components/Table";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      class="container d-flex justify-content-center align-items-center"
      style={{ height: 100 + "vh" }}
    >
      <div
        class="row text-center d-flex align-items-center"
        style={{ width: 70 + "vw", height: 50 + "vh" }}
      >
        <Table />
      </div>
    </div>
  );
}
export default App;
