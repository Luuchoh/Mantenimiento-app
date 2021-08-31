import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Listar } from "../actions/dogAction";


import ListPet from "../components/ListPet";
import Navbar from "../components/Navbar";

const Home = () => {

    const { dog } = useSelector(state => state.dog);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Listar())
    }, [dispatch])

  return (
    <>
      <Navbar />
      <div className="col-md-8">
        <div className="row">
          <main>
            <ListPet pet={dog}/>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
