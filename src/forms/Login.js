import React, { useState } from "react";

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <form onChange={updateForm}>
      <label for="email">Email:</label>
      <input type="email" name="email" required />
      <label for="password">Password:</label>
      <input type="password" name="password" required />
      <input type="submit" value="login" />
    </form>
  );
};

export default LoginForm;
