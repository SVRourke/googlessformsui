import React, { useState, useEffect } from "react";

import { formIndex } from "../lib/api";

import { FormCard } from "../components";
import forms from "../sampledata/forms";

import CreateForm from "../forms/CreateForm";

function FormIndex(props) {
  // order by date later
  const cards = forms.map((form) => <FormCard form={form} />);
  return (
    <div>
      <h1>Forms</h1>
      <CreateForm />
      <ul>{cards}</ul>
    </div>
  );
}

export default FormIndex;
