import React, { useState } from "react";

const CreateForm = () => {
  const [title, setTitle] = useState({ title: "" });

  const changeHandler = (e) => {
    setTitle({ ...title, title: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch thunk
  };

  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <input type="text" name="title" placeholder="create a form" />
      <input type="submit" value="+" />
    </form>
  );
};

export default CreateForm;
