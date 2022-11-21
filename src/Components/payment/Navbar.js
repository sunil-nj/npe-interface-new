
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
  const navigateAccounts =() =>{
    navigate('/accounts');

  };
  const navigateSignin =() =>{
    navigate('/login');

  };
return(<div className='completenav'>
    
    <div className="header3">
    <a onClick={navigateHome} class="logo">NPE BANK</a>
    <a onClick={navigateSignin} class="navitem">Logout</a>
    </div>
    <div className="navs">
      <a class="logo" id="profile" onClick={navigateProfile}>Profile</a>
      <a class="logo" id="transfer" onClick={navigatePayment}>Funds Transfer</a>
      <a class="logo" id="acc" onClick={navigateAccounts}>Accounts</a>
    </div>

  </div>);
}

export default Nav3;