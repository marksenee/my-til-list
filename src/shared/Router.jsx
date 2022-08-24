import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Edit from "../pages/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/:id" element={<About />} />
        <Route path="edit" element={<Edit />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
