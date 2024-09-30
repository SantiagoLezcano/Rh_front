/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div classNameName="container">
      <nav className="navbar navbar-expand-lg narbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
           Sistema de Recursos Humanos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <Link className="nav-link" to="/add">
                Agregar Empleado
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
