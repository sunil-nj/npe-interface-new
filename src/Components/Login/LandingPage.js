import React from "react";
import "./Login.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

const navigate = useNavigate();
const navigateHome =() =>{
  navigate('/');
};
const handleProceed =() =>{
  navigate('/login');
};

  return (
    <div>
      <div className="header">
        <a onClick={navigateHome} class="logo">NPE BANK</a>
      </div>
      <div className="background1">
        <div className="bgText">Continue to the OnlineBanking Login Page</div>
        <Button id="button0" variant="contained" onClick={handleProceed}>Proceed Now &#10140;</Button>
      </div>
    </div>
    
  );
}

export default LandingPage;