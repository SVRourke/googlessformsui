import React, { useState } from "react";
import LoginForm from "../forms/Login";
import SignUpForm from "../forms/SignUp";

function Home() {
  return (
    <div>
      <header>
        <h1>HOME</h1>
        <LoginForm />
        <SignUpForm />
      </header>
    </div>
  );
}

export default Home;
