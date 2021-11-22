import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { formIndex } from "../lib/api";

function FormIndex(props) {


  // let [forms, setForms] = useState([]);
  // formIndex(1)
  // console.log("STATE", forms);
  // let formLinks;

  // useEffect(() => {
  //   setForms(formIndex(1));
  //   formLinks = forms.map((form) => {
  //     console.log(form);
  //     return <Link to={form.id}>{form.title}!</Link>;
  //   });
  // }, []);

  return (
    <div>
      <header>
        <h1>Form Name</h1>
        <Link to="2">Form 2</Link>
        <Link to="3">Form 3</Link>
        <Link to="4">Form 4</Link>
        {/* <p>{state}</p> */}
      </header>
    </div>
  );
}

export default FormIndex;
