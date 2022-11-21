import React, { Component } from "react";
import { Routes,Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import LandingPage from "./login/LandingPage";
import PaymentPage from "./payment/PaymentPage";
import ProfilePage from "./payment/ProfilePage";
import AccountsPage from "./payment/AccountsPage";
import ConfirmationPage from "./payment/ConfirmationPage";
import StatusPage from "./payment/StatusPage";

export default class MainNavigation extends Component {
    render() {
        return (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LandingPage />}/>
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/accounts" element={<AccountsPage/>}/>
            <Route path="/confirmation" element={<ConfirmationPage/>}/>
            <Route path="/status" element={<StatusPage/>}/>
          </Routes>
        )
    }
}