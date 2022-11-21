import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import ProfilePage from '../payment/ProfilePage';
import { useDispatch } from 'react-redux'
import { setUserDetails } from '../../reducer/reducer'
import { callUserDetailsAPI}  from '../../services/UserDetailsAPI';

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cutsomerId, setCustomerId] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const navigateHome =() =>{
    navigate('/');
  };
  const navigateProfile =() =>{
    navigate('/profile');
  };
  // User Login info
  const database = [
    {
      username: "testCustomer123",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    //const {uname, pass }= event.currentTarget.elements;
    setCustomerId(uname);

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        callUserDetailsAPI(uname.value).then((data) => {
          if(data) {
            //setData(data);
            dispatch(setUserDetails(data));
          }
        });
        navigate('/profile');
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <div className="login-form">
      <div className="title">Sign In</div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <br />
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <br />
        <br />
        <br />
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      </div>
    </div>
  );

  return (
    
    <div>
      <div style={{ 
        backgroundImage: `url("/Images/pexels-mikhail-nilov-6969809.jpg")`
        }}>

      </div>
      <div className="header2">
      <a onClick={navigateHome} class="logo">NPE BANK</a>
      </div>
      
      {/* {isSubmitted ? 
        <div>
          <ProfilePage name={cutsomerId && cutsomerId.value} />
        </div> : <div className="app">{renderForm} </div>
    } */}
     <div className="app">{renderForm} </div>
    </div>
    
  );
}

export default Login;