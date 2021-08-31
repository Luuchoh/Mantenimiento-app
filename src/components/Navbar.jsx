import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ListarSearch } from "../actions/dogAction";

const Navbar = () => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string().required("Email requerido"),
    }),
    onSubmit: () => {
      dispatch(ListarSearch(search))
    },
  });

  const { search } = formik.values
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            DogsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Agregar
                </Link>
              </li>
            </ul>
          </div>

          <form className="d-flex" onSubmit={formik.handleSubmit}>
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
              name='search'
              id='search'
              value={formik.values.search}
              onChange={formik.handleChange}

            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
