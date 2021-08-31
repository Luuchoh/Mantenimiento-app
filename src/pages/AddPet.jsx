import React from "react";
import { useSelector } from "react-redux";

import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar";

const AddPet = () => {

  const { active } = useSelector((state) => state.dog);

  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="row mt-4">
          <div className="col-md-4 text-center py-3">
            <img
              src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1625536708/perros_e1bfpk.png"
              className="App-logo "
              alt="logo"
            />
            <FormAdd active={active}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPet;
