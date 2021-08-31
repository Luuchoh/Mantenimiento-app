import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar";

const AddPet = () => {

  const [title, setTitle] = useState(false);

  const { active } = useSelector((state) => state.dog);

  useEffect(() => {
    if(active.name.length < 0){
      setTitle(true)
    }
  }, [active])

  return (
    <>
      <Navbar />
      <div className="container ">
      {
        title 
          ?<h2 className="my-5">Editar Perro</h2>
          :<h2 className="my-5">Registrar Perro</h2>
      }
        <div className="row">
          <div className="col-md-4 text-center py-3 m-auto">
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
