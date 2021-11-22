import React, { useState } from "react";
import { Form } from "react-bootstrap";
const SignUpForm = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: inputs }),
    };

    const req = await fetch("http://localhost:3000/users", options);

    const resp = await req.json();
    console.log(resp);
  };

  return (
    <Form onChange={updateForm} onSubmit={submit}>
      <Form.Label for="username">Username:</Form.Label>
      <Form.Control type="text" name="username" />
      <Form.Label for="email">Email:</Form.Label>
      <Form.Control type="email" name="email" required />
      <Form.Label for="password">Password:</Form.Label>
      <Form.Control type="password" name="password" required />
      <Form.Control
        className={"btn btn-primary"}
        type="submit"
        value="Sign Up"
      />
    </Form>
  );
};

export default SignUpForm;
