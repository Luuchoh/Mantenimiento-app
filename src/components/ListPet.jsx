import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import DetailPet from "./DetailPet";
import { activeDog, Delete } from "../actions/dogAction";

const ListPet = ({ pet }) => {
  const dispatch = useDispatch();

  const handleEdit = async (data) => {
    await dispatch(activeDog(data));
    // console.log(data);
    
  };

  const handleDelete = async(id) => {
    await dispatch(Delete(id));
  };
  return (
    <>
      {pet.map((data, index) => (
        <div
          className="col-md-4 mx-2"
          key={`${index}-${data.id}`}
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal${data.id}`}
        >
          <div className="card mb-1">
            <div className="card-body">
              <div className="w-100 d-flex flex-wrap justify-content-center align-items-center text-center">
                <div className="w-100">
                  <img src={data.url} alt="" width="100px" />
                </div>
                <div className="w-100">
                  <p className="m-0">{data.name}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal" id={`exampleModal${data.id}`}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{data.name}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true"></span>
                  </button>
                </div>

                <div className="modal-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="w-50">
                      <img src={data.url} alt={data.name} width="150px" />
                    </div>
                    <div className="w-50">
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <Link
                    type="button"
                    className="btn btn-primary"
                    to="/edit"
                    onClick={() => handleEdit(data)}
                  >
                    Editar
                  </Link>
                  <Link
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    to="/"
                    onClick={() => handleDelete(data.id)}
                  >
                    Eliminar 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListPet;
