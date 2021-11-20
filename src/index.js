import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import Home from "./routes/home";
import FormIndex from "./routes/form_index";
import NewForm from "./routes/new_form";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<FormIndex />} />
        <Route path="/forms/new" element={<NewForm />} />
        <Route path="/forms/new" element={<NewForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
