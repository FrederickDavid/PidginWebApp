import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUpSignIn/SignUp";
import SignIn from "./SignUpSignIn/SignIn";
import Confirm from "./SignUpSignIn/Confirm";
import Hero from "./Hero/Hero";
import NewsFeedDashBoard from "./DashBoard/NewsFeedDashBoard";

const DisplayPidgin = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/NewsFeedDashBoard" element={<NewsFeedDashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default DisplayPidgin;
