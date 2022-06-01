import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUpSignIn/SignUp';
import SignIn from './SignUpSignIn/SignIn';
import Hero from "./Hero/Hero";
import NewsFeedDashBoard from './DashBoard/NewsFeedDashBoard';
import Confirm from './SignUpSignIn/Confirm';

const DisplayPidgin = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Hero /> } />
                    <Route path="/confirm" element={ <Confirm /> } />
                    <Route path="/signUp" element={ <SignUp /> } />
                    <Route path="/signIn" element={ <SignIn /> } />
                    <Route path="/NewsFeedDashBoard" element={ <NewsFeedDashBoard /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default DisplayPidgin;
