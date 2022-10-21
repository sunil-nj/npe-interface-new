import Nav3 from "./Navbar";
import React, { useState } from "react";
import "./PaymentPage.css"
import { useForm } from "react-hook-form";

function PaymentPage() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
  
    const initval={uname:"account id", accType:"Savings", mobilen:"mobile number", mailid:"mail Id",amt:"0000",descrptn:"Description1"};

    const handleReset = (event) =>{
        setInputs(initval)
    }
  
    // JSX code for login form
    const renderForm = (
        <div className="form1">
            <div >
                <div className="title2">Funds Transfer</div>
                <br />
                <form >
                    <div >
                        <label className="">Sender Account ID </label>
                        <input type="text" name="uname" value={inputs.uname || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label>Sender Account Type </label>
                        <select name="accType" value={inputs.accType || ""} onChange={handleChange}>
                            <option value="Savings">Savings</option>
                            <option value="Current">Current</option>
                        </select>
                    </div>
                    <br />
                    <div >
                        <label className="">Recepient Phone Number </label>
                        <input type="text" name="mobilen" value={inputs.mobilen || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label className="">Recepient Email Id </label>
                        <input type="text" name="mailid" value={inputs.mailid || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label className="">Transfer Amount </label>
                        <input type="number" name="amt" value={inputs.amt || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label>Description </label>
                        <select name="descrptn" value={inputs.descrptn || ""} onChange={handleChange}>
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