import Nav3 from "./Navbar";
import {useLocation} from 'react-router-dom';
import './ConfirmationPage.css'

import {Routes, Route, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { callPaymentAPI}  from '../../services/PaymentAPI';
import { callStatusAPI}  from '../../services/StatusAPI';
import { setFundStatus } from '../../reducer/reducer'
import { setPaymentStatus } from '../../reducer/reducer'
import { useDispatch } from 'react-redux'

function ConfirmationPage() {
    const location = useLocation();
    const fundDetails = useSelector((state) => state.app.fundDetails);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const navigatePayment =() =>{
        navigate('/payment');
      };
      const navigateStatus =() =>{
        callPaymentAPI(fundDetails).then((data) => {
            if(data) {
              //setData(data);
              dispatch(setFundStatus(data));
            }
          });
          setTimeout(() => {
            callStatusAPI(fundDetails.transaction_id).then((data) => {
                if(data) {
                  //setData(data);
                  dispatch(setPaymentStatus(data));
                }
              });
              navigate('/status');
          }, 3000);
      };

    return (<body id="paypage"><Nav3 />
        <div>
            <table className="table">
            
                <tr className="row">
                    <td className="cell1">Sender Account ID </td>
                    <td className="cell2"> : </td>
                    <td className="cell3">{1662904744456}</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Sender Account Type </td>
                    <td className="cell2"> : </td>
                    <td className="cell3">{fundDetails.sender_account_type}</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Recepient Phone Number </td>
                    <td className="cell2"> : </td>
                    <td className="cell3"> {fundDetails.recipient_phone_number}</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Recepient Email Id </td>
                    <td className="cell2"> : </td>
                    <td className="cell3">{fundDetails.recipient_email_id}</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Transfer Amount </td>
                    <td className="cell2"> : </td>
                    <td className="cell3"> {fundDetails.transfer_amount}</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Description </td>
                    <td className="cell2"> : </td>
                    <td className="cell3"> {fundDetails.description}</td>
                </tr>
             
            </table>

            <div className="cell4">Do you want to confirm the transfer? </div>
            <div className="button-container">
            <button className="buttoncnfrmpg" onClick={navigateStatus}>Confirm</button>
            <button className="buttoncnfrmpg" onClick={navigatePayment}>Cancel</button>
            </div>
        </div></body>)
}

export default ConfirmationPage;