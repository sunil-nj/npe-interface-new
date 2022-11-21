import Nav3 from "./Navbar";
import React, { useState } from "react";
import "./PaymentPage.css"
import { useForm } from "react-hook-form";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { callPaymentAPI } from "../../services/PaymentAPI";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setFundDetails } from '../../reducer/reducer'

function PaymentPage(props) {

    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch()
    const userDetails = useSelector((state) => state.app.userDetails);

    let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
    let accountId = "1662904744456";
    console.log(uniqueId);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(inputs);

        let fundData = inputs;

        if(inputs.sender_account_type == undefined) {
            fundData.sender_account_type = initval.sender_account_type;
        }
        if(inputs.description == undefined) {
            fundData.description = initval.description;
        }
        // if(userDetails.id) {
        //     fundData.sender_account_id = userDetails.id;
        // }
        fundData.transaction_id=uniqueId;
        fundData.sender_account_id=accountId;
        dispatch(setFundDetails(fundData));


        navigate('/confirmation',{state:inputs});
    
      };
    const initval={transaction_id: uniqueId,sender_account_id:accountId, sender_account_type:"Savings", recipient_phone_number:"mobile number", recipient_email_id:"mail Id",transfer_amount:"0000",description:"Description1"};

    const handleReset = (event) =>{
        setInputs(initval)
    }

    // payment API configuration

//     const [snackBarOpen, setSnackBarOpen] = useState(false);

//   const handleSnackBarClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setSnackBarOpen(false);
//   };

//     const initState = {
//         senderAccountId: "",
//         senderAccountTpe: "",
//         recepientPhoneNumber: "",
//         recepientMailId: "",
//         transferAmount: "",
//         description: ""
//       };

//     const {
//         state,
//         errors,
//         inputRef,
//       } = useForm({
//         initState,
//         callback: submit,
//       });
//     const submit = (data) => {

//     //setIsLoading(true);
   
//     const payload = {
//       sender_account_id: state.senderAccountId,
//       sender_account_type: state.senderAccountTpe && state.senderAccountTpe,
//       recipient_phone_number: state.recepientPhoneNumber,
//       recipient_email_id: state.recepientMailId,
//       transfer_amount: state.transferAmount,
//       description: state.description
      
//     };

//     callPaymentAPI(payload).then((data) => {
//       if(data) {
//         //setIsLoading(false);
//         //setSnackBarOpen(true);
//       }
//     });
//     //onClose();
//   };


    // JSX code for login form
    const renderForm = (
        <div className="form1" onSubmit={handleSubmit}>
            <div >
                <div className="title2">Funds Transfer</div>
                <br />
                <form >
                    <div >
                        <label className="">Sender Account ID </label>
                        <input type="text" name="sender_account_id" value={accountId}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label>Sender Account Type </label>
                        <select name="sender_account_type" value={inputs.sender_account_type || ""} onChange={handleChange}>
                            <option value="Savings">Savings</option>
                            <option value="Current">Current</option>
                        </select>
                    </div>
                    <br />
                    <div >
                        <label className="">Recepient Phone Number </label>
                        <input type="text" name="recipient_phone_number" value={inputs.recipient_phone_number || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label className="">Recepient Email Id </label>
                        <input type="text" name="recipient_email_id" value={inputs.recipient_email_id || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label className="">Transfer Amount </label>
                        <input type="number" name="transfer_amount" value={inputs.transfer_amount || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label>Description </label>
                        <select name="description" value={inputs.description || ""} onChange={handleChange}>
                            <option value="Description1">Description 1</option>
                            <option value="Description2">Description 2</option>
                        </select>
                    </div>
                    <br />
                    <br />
                    <div className="button-container">
                        <button type="submit">Continue</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );


    return (<body id="paypage">
        <Nav3 />
        <div>{renderForm}</div>
    </body>)
}

export default PaymentPage;