import React, { Component } from "react";
import { Routes,Router, Switch, Route } from "react-router-dom";
import Login from "./Login/login";
import LandingPage from "./Login/LandingPage";
import PaymentPage from "./payment/PaymentPage";
import ProfilePage from "./payment/ProfilePage";

export default class MainNavigation extends Component {
    render() {
        return (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LandingPage />}/>
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Routes>
        )
    }
}