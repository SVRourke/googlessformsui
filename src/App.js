// import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import FormIndex from "./routes/form_index";
import NewForm from "./routes/new_form";
import FormPage from "./routes/form_page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<FormIndex />} />
        <Route path="/forms/:id" element={<FormPage />} />
        <Route path="/forms/new" element={<NewForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
