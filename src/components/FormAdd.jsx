import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { dogNew, Edit, startUploading } from "../actions/dogAction";

const FormAdd = ({ active }) => {
  const activeId = useRef(active.id);

  // console.log(active.id);
  // console.log(activeId);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      url: "",
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      url: Yup.string().url().required("URL requerido"),
      name: Yup.string()
        .min(2, "El nombre es muy corto")
        .required("Escribe tu contraseña."),
      description: Yup.string()
        .min(50, "Porfavor especifica mas tu mascota")
        .required("Mensaje requerido!"),
    }),
    onSubmit: () => {
      console.log(formik);

      if (active.name === "") {
        dispatch(dogNew(formik.values));
        formik.resetForm();
      } else if (active.id !== "") {
        dispatch(Edit(formik.values));
      }
    },
  });

  const { url, name, description } = formik.values;

  const handleClickFile = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChange = async(e)=>{
    // console.log(e);
    const file =e.target.files[0];
    if(file){
        let fileURL = await dispatch(startUploading(file));
        let inputURl = document.querySelector('#inputURL');
        inputURl.value = fileURL;
        formik.values.url = fileURL;

    }
  }


  useEffect(() => {
    if (active.id !== activeId.current) {
      console.log("No son iguales");
      formik.resetForm();
    } else if (active.id === activeId.current) {
      formik.setValues(active);
    }
  }, [active]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="card card-body border-primary"
    >
      <div className="form-group input-group ">
        <div className="input-group-text bg-light ">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Url"
          name="url"
          id='inputURL'
          value={url}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled
        />
      </div>

      <input
        id="fileSelector"
        type="file"
        name="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="w-50 btn btn-primary p-0 my-2 text-uppercase fw-bold">
        <input
          type="button"
          className="btn text-white fw-bold"
          value="Picture"
          onClick={handleClickFile}
        />
      </div>

      {formik.touched.url && formik.errors.url ? (
        <div className="text-danger mb-3">{formik.errors.url}</div>
      ) : null}

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
          value={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      {formik.touched.name && formik.errors.name ? (
        <div className="text-danger mb-3">{formik.errors.name}</div>
      ) : null}

      <div className="form-group mt-3">
        <textarea
          rows="3"
          className="form-control"
          placeholder="Write a Description"
          name="description"
          value={description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
      </div>

      {formik.touched.description && formik.errors.description ? (
        <div className="text-danger mb-3">{formik.errors.description}</div>
      ) : null}

      <button type="submit" className="btn btn-dark mt-3">
        Save
      </button>
    </form>
  );
};

export default FormAdd;
