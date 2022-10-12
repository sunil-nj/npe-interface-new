import React from "react";
import './Login.css'
import Button from '@mui/material/Button';

function LandingPage() {
  return (
    <div>
      <div className="header">
        <a href="#default" class="logo">NPE BANK</a>
      </div>
      <div className="background1">
        <h1>Continue to the OnlineBanking Login Page</h1>
        <Button variant="contained">Proceed Now</Button>
      </div>
    </div>
    
  );
}

export default LandingPage;