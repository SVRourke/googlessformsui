import React, { useState } from "react";

const SignUpForm = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <form onChange={updateForm}>
      <label for="username">Username:</label>
      <input type="text" name="username" />
      <label for="email">Email:</label>
      <input type="email" name="email" required />
      <label for="password">Password:</label>
      <input type="password" name="password" required />
      <input type="submit" value="login" />
    </form>
  );
};

export default SignUpForm;
