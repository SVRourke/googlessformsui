import React, { useState } from "react";
import { Form } from "react-bootstrap";
const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <Form onChange={updateForm} onSubmit={submit} className={"mb-4"}>
      <Form.Label for="email">Email:</Form.Label>
      <Form.Control type="email" name="email" required />
      <Form.Label for="password">Password:</Form.Label>
      <Form.Control type="password" name="password" required />
      <Form.Control className={"btn btn-primary"} type="submit" value="login" />
    </Form>
  );
};

export default LoginForm;
