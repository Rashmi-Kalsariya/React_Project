import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Assign from "../page/Assign";
import Login from "../page/Login";
import Signup from "../page/Signup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assign" element={<Assign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
