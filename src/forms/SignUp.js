import React, { useState } from "react";
import { Form } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { login, create } from "../redux/userSlice";

import { createUser } from "../lib/api";

const SignUpForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    const resp = await createUser(inputs);

    
    console.log(resp);
  };

  console.log(user);

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
