import Nav3 from "./Navbar";
import React, { useState } from "react";
import "./PaymentPage.css"

function PaymentPage() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    // JSX code for login form
    const renderForm = (
        <div className="form1">
            <div >
                <div className="title2">Payment Form</div>
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
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );


    return (<div>
        <Nav3 />
        <div>{renderForm}</div>
    </div>)
}

export default PaymentPage;