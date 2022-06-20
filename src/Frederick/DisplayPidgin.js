import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirm from "./Confirm";
// import Hero from "./Hero/Hero";
import NewsFeedDashBoard from "./DashBoard/NewsFeedDashBoard";
import Profile from "./DashBoard/Profile";
import Saved from "./DashBoard/Saved";
import Post from "./DashBoard/Post";
import Notes from "./DashBoard/Notes";
import UserSignUp from "./UserSignUp";
import UserSignIn from "./UserSignIn";
import MainView from "./mainView/MainView";
import EditProfile from "./DashBoard/EditProfile";
import EditPost from "./DashBoard/EditPost";
import DetailPage from "./mainView/DetailPage";
import Personal from "./mainView/Personal";
import BioFill from "./BioFill";

const DisplayPidgin = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/Detail" element={<DetailPage />} />
          <Route path="/Personal" element={<Personal />} />
          {/* <Route path="/" element={<Hero />} /> */}
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route path="/UserSignIn" element={<UserSignIn />} />
          <Route path="/BioFill" element={<BioFill />} />
          <Route path="/NewsFeedDashBoard" element={<NewsFeedDashBoard />} />
          <Route path="/Saved" element={<Saved />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/EditPost" element={<EditPost />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default DisplayPidgin;
