import Nav3 from "./Navbar";
import Divider from '@mui/material/Divider';
import "./ProfilePage.css"
import { useEffect, useState } from 'react';
//import { callUserDetailsAPI}  from '../../services/UserDetailsAPI';
import { useSelector } from 'react-redux'

function ProfilePage(props){
    const [data, setData] = useState('');
    const userDetails = useSelector((state) => state.app.userDetails);
    console.log(userDetails);
  //     <body id="profpage">
  //     <Nav3/>
  //     <div><h1>Profile details</h1>
  //     <h3>Customer Id: {userDetails.customerId}</h3>
  //     <h3>emailId: {userDetails.emailId}</h3>
  //     <h3>phoneNumber: {userDetails.phoneNumber}</h3>
  //     <h3>Services: Product: {userDetails.services && userDetails.services.map((element) => (element.product + ", enrollDate: " + element.enrollDate))}</h3>
  //     <h3>Address: {userDetails.addresses && userDetails.addresses.map((element) => element.city)}</h3>
  //     <h3>AccountId: {userDetails.id}</h3>
  //     </div>
  // </body>
    return(<body id="profpage"><Nav3/>
    <div className="proftitle">PROFILE DETAILS</div>
    <Divider variant="middle" sx={{
          marginLeft:'4%',
          marginRight:'4%'
        }}/>
        <div className="details">Personal Information</div>

    <table className="details">
        <tr className="row">
            <td className="c1">Customer Id</td>
            <td className="c2"> : </td>
            <td className="c3"> {userDetails.customerId}</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Id</td>
            <td className="c2"> : </td>
            <td className="c3"> {1662904744456}</td>
        </tr>
        <tr className="row">
            <td className="c1">Email Id</td>
            <td className="c2"> : </td>
            <td className="c3"> {userDetails.emailId}</td>
        </tr>
        <tr className="row">
            <td className="c1">Phone Number</td>
            <td className="c2"> : </td>
            <td className="c3"> {userDetails.phoneNumber}</td>
        </tr>
        <tr className="row">
            <td className="c1">Address </td>
            <td className="c2"> : </td>
            <td className="c3">{userDetails.addresses && userDetails.addresses.map((element) => element.city)}</td>
        </tr>
        {/* <tr className="row">
            <td className="c1"> </td>
            <td className="c2">  </td>
            <td className="c3"> city</td>
        </tr> */}
        <tr className="row">
            <td className="c1"> </td>
            <td className="c2">  </td>
            <td className="c3"> pincode:{userDetails.addresses && userDetails.addresses.map((element) => element.pincode)}</td>
        </tr>
    </table>
    <div className="details">Services</div>
    <table className="details">
        <tr className="row">
            <td className="c1">Product</td>
            <td className="c2"> : </td>
            <td className="c3"> {userDetails.services && userDetails.services.map((element) => (element.product))}</td>
        </tr>
        <tr className="row">
            <td className="c1">Service Name</td>
            <td className="c2"> : </td>
            <td className="c3"> {userDetails.services && userDetails.services.map((element) => (element.serviceName))}</td>
        </tr>
        <tr className="row">
            <td className="c1">Enrollment Status</td>
            <td className="c2"> : </td>
            <td className="c3"> {userDetails.services && userDetails.services.map((element) => (element.enrollmentStatus))}</td>
        </tr>
        </table>
    </body>
    )
}

export default ProfilePage;