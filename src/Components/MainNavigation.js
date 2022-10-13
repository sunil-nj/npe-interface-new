import React, { Component } from "react";
import { Routes,Router, Switch, Route } from "react-router-dom";
import Login from "./Login/login";
import LandingPage from "./Login/LandingPage";

export default class MainNavigation extends Component {
    render() {
        return (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LandingPage />}/>
          </Routes>
        )
    }
}