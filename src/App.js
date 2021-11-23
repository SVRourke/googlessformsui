// import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, FormIndex, NewForm, FormPage } from "./pages";
import Menu from "./components/menu";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/forms" element={<FormIndex />} />
        <Route path="/forms/:id" element={<FormPage />} />
        <Route path="/forms/new" element={<NewForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
