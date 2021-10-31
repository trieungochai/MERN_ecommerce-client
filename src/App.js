import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Header from "./components/nav/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
