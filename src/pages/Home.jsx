import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Listar } from "../actions/dogAction";

import ListPet from "../components/ListPet";
import Navbar from "../components/Navbar";

const Home = () => {
  const { dog } = useSelector((state) => state.dog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Listar());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="my-5">Perros</h2>
        <div className="col-md-10 m-auto">
          <div className="row">
            <ListPet pet={dog} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
