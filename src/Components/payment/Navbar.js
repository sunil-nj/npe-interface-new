
import {Routes, Route, useNavigate} from 'react-router-dom';
import "./Nav3.css"

function Nav3(){

    const navigate = useNavigate();

  const navigateHome =() =>{
    navigate('/');
  };

  const navigatePayment =() =>{
    navigate('/payment');
  };
  const navigateProfile =() =>{
    navigate('/profile');
  };
return(<div>
    
    <div className="header3">
    <a onClick={navigateHome} class="logo">NPE BANK</a>
    </div>
    <div className="navs">
      <a class="logo" onClick={navigateProfile}>Profile</a>
      <a class="logo" onClick={navigatePayment}>Payments</a>
    </div>

  </div>);
}

export default Nav3;