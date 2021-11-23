import React from "react";
import { useParams } from "react-router-dom";

const FormPage = () => {
  let { id } = useParams();

  return (
    <>
      <h1>Form Page</h1>
      <p>Form {id}</p>
    </>
  );
};

export default FormPage;
