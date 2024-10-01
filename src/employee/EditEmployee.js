import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditEmployee() {
  const urlBase = "http://localhost:8081/rh-app/employee";
  let navegacion = useNavigate();
  const { id } = useParams();

  // Asegúrate de que los valores predeterminados no sean undefined
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const { name, department, salary } = employee;

  useEffect(() => {
    getEmployee();
  },[]);

  const getEmployee = async () => {
    try {
      const result = await axios.get(`${urlBase}/${id}`);
      setEmployee(result.data);
    } catch (error) {
      console.error("Error fetching employee data", error);
    }
  };

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value || "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${id}`, employee);
    navegacion('/');
  };

  return (
    <div className='container'>
      <div className='container text-center' style={{ margin: "30px" }}>
        <h3>Editar employee</h3>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" 
            id="name" name='name' required={true} 
            value={name} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Departamento</label>
          <input type="text" className="form-control" 
            id="department" name='department' 
            value={department} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Sueldo</label>
          <input type="number" step="any" className="form-control" 
            id="salary" name='salary' 
            value={salary} onChange={(e) => onInputChange(e)} />
        </div>
        <div className='text-center'>
          <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
          <a href='/' className='btn btn-danger btn-sm'>Regresar</a>    
        </div>
      </form>
    </div>
  );
}
