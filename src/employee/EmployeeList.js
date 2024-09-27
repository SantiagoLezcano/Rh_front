import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EmployeeList() {
  const urlBase = "http://localhost:8081/rh-app/employee";

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const result = await axios.get(urlBase);
    console.log("Result employees");
    console.log(result.data);
    setEmployee(result.data);
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Sistema de Recursos Humanos</h3>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            //Iteration array
            employee.map((employee, index) => (
              <tr key={index}>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
