import { PropaneSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import {
  callUserDetailsAPI,
} from "../services/UserDetailsAPI";

function UserDetails(props) {

  const [data, setData] = useState('');

  useEffect(() => {
    if(props.name)
    callUserDetailsAPI(props.name).then((data) => {
      if(data) {
        setData(data);
      }
    });
  }, [props.name]) 

    return (<div>
      <h1>UserProfile</h1>
      <form>
        <h3>Customer Id: {data.customerId}</h3>
        <input type="text" value={data.customerId} name="customerId" />
        <input type="text" value={data.emailId} name="emailId" />
        <input type="text" value={data.phoneNumber} name="phoneNumber" />
        {/* <h3>Customer Id: {data.adresses.city}</h3> */}
        {/* <input type="text" value={data.adresses.map((city) =>  {city})} name="name" /> */}
        {/* <input type="text" value={data.services.map((product) => ( {product} ))} name="name" />
        <input type="text" value={data.services.map((serviceName) => ( {serviceName}))} name="name" /> */}
      </form>
      </div>
    );

  }
  
  export default UserDetails;