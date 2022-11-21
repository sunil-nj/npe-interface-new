import Nav3 from "./Navbar";
import Divider from '@mui/material/Divider';
import "./ProfilePage.css"
import { useDispatch } from 'react-redux'
import { setAccountDetails } from '../../reducer/reducer'
import { callAccountDetailsAPI}  from '../../services/AccountDetailsAPI';
import { useSelector } from 'react-redux'

function AccountsPage(){
    const userDetails = useSelector((state) => state.app.userDetails);
    const accountDetails = useSelector((state) => state.app.accountDetails);
    console.log(accountDetails);
    const dispatch = useDispatch();
    const accountId = '1662904744456';
    callAccountDetailsAPI(accountId).then((data) => {
        if(data) {
          //setData(data);
          dispatch(setAccountDetails(data));
        }
    });
    return(<body id="accpage"><Nav3/>
    <div className="proftitle">ACCOUNT DETAILS</div>
    <Divider variant="middle" sx={{
          marginLeft:'4%',
          marginRight:'4%'
        }}/>
    <table className="details">
        <tr className="row">
            <td className="c1">Account Id</td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.accountId}</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Name</td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.accountname}</td>
        </tr>
        <tr className="row">
            <td className="c1">Address </td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.address}</td>
        </tr>
        {/* <tr className="row">
            <td className="c1"> </td>
            <td className="c2">  </td>
            <td className="c3"> city</td>
        </tr>
        <tr className="row">
            <td className="c1"> </td>
            <td className="c2">  </td>
            <td className="c3"> pincode</td>
        </tr> */}
    </table>
    <table className="details">
        <tr className="row">
            <td className="c1">Total Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.totalBalance}</td>
        </tr>
        <tr className="row">
            <td className="c1">Available Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.availableBalance}</td>
        </tr>
        <tr className="row">
            <td className="c1">Blocked Credit Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.blockedCreditBalance}</td>
        </tr>
        <tr className="row">
            <td className="c1">Blocked Debit Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.blockedDebitBalance}</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Created Date</td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.accountcreateddate}</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Status</td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.accountstatus} </td>
        </tr>
        <tr className="row">
            <td className="c1">Account Type</td>
            <td className="c2"> : </td>
            <td className="c3"> {accountDetails.accounttype}</td>
        </tr>
        </table>
    </body>)
}


export default AccountsPage;