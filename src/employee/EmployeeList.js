import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

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
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td><NumericFormat value={employee.salary}
                displayType="text"
                thousandSeparator=','
                prefix="$"
                decimalScale={2}
                fixedDecimalScale/>
                </td>
                <td className="text-center">
                  <div>
                    <Link to={'/edt/${employee.id}'}
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
