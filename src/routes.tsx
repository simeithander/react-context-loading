import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import CreateUser from "./Pages/Users/CreateUser";
import Profile from "./Pages/Users/Profile";
import NoLoading from "./Pages/Users/NoLoading";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/noload" element={<NoLoading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPath;
