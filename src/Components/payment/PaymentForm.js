import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Divider,
  Slide,
  LinearProgress,
  Box,
  Typography,
  InputLabel,
  NativeSelect
} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';


//import { ProgressBar } from "react-bootstrap";
//import { validator } from "./Validator";
import useForm from "./useForm";
import "../../App.css";
//import * as constants from "../../constants/constants";
import {
  callPaymentAPI,
} from "../../services/PaymentAPI";
import {
  DialogTitle,
  DialogContent,
  Dialog,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import _ from "lodash";
import '../Login/login.css';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 5 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function PaymentForm({ onClose, setSnackBarOpen, setIsLoading }) {
  const initState = {
    senderAccountId: "",
    senderAccountTpe: "",
    recepientPhoneNumber: "",
    recepientMailId: "",
    transferAmount: "",
    description: ""
  };
  const [reportType, setReportType] = useState([]);
  const [uuid, setUuid] = useState("");
  const [fileUploadMessage, setFileUploadMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const cancelFileUpload = useRef(null);
  const [isReset, setIsReset] = useState(false);
  const mounted = useRef(true);
  const [accType, setAccType] = React.useState('');

  const submit = (data) => {
    //This patientId has to be changed to props and check how to value from My Patient 360 App
    setIsLoading(true);
   
    const payload = {
      sender_account_id: state.senderAccountId,
      sender_account_type: state.senderAccountTpe && state.senderAccountTpe,
      recipient_phone_number: state.recepientPhoneNumber,
      recipient_email_id: state.recepientMailId,
      transfer_amount: state.transferAmount,
      description: state.description
      
    };

    callPaymentAPI(payload).then((data) => {
      if(data) {
        setIsLoading(false);
        setSnackBarOpen(true);
      }
    });
  
    onClose();
  };

  const {
    handleChange,
    handleSubmit,
    state,
    errors,
    inputRef,
  } = useForm({
    initState,
    callback: submit,
  });

  const handleChange2 = (event: SelectChangeEvent) => {
    setAccType(event.target.value);
  };

  let isValidForm =
    Object.values(errors).filter((error) => typeof error !== "undefined")
      .length === 0;

  const handleReset = () => {
    setIsReset(true);
  };

  const handleResetClose = () => {
    setIsReset(false);
  };

  const handleResetYes = () => {
    //handleResetCallBack();
    setIsReset(false);
  };

  const isResetDisabled = () => {
    return _.isEqual(state, initState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* sender accountId */}
        <TextField
          required
          sx={{ width: 280 }}
          label="Sender Account ID"
          name="senderAccountId"
          defaultValue={state.senderAccountId}
          onChange={handleChange}
          error={errors.reportType ? true : false}
          helperText={errors.senderAccountId}
          
          value={state.senderAccountId}
        />
        <br />

        {/* sender accountType */}
        <TextField
          required
          sx={{ width: 280 }}
          label="Sender Account Type"
          name="senderAccountTpe"
          defaultValue={state.senderAccountTpe}
          onChange={handleChange}
          error={errors.senderAccountTpe ? true : false}
          helperText={errors.senderAccountTpe}
          className="input-field-margin"
          value={state.senderAccountTpe}
        />
        {/* <InputLabel id="account-type">Account Type</InputLabel>
  <Select
    labelId="account-type"
    label="Account Type"
    value={accType}
    name="senderAccountId"
    defaultValue={state.senderAccountTpe}
    onChange={handleChange2}
  >
    <MenuItem value="">
          <em>None</em>
        </MenuItem>
    <MenuItem value={1}>Savings</MenuItem>
    <MenuItem value={2}>Current</MenuItem>
  </Select>
  */}

        <br />

        {/* recepient phoneNumber */}
        <TextField
          required
          sx={{ width: 280 }}
          label="Recepient Phone Number"
          name="recepientPhoneNumber"
          defaultValue={state.recepientPhoneNumber}
          onChange={handleChange}
          error={errors.recepientPhoneNumber ? true : false}
          helperText={errors.recepientPhoneNumber}
          className="input-field-margin"
          value={state.recepientPhoneNumber}
        />
        <br />

        {/* recepient email Id */}
        <TextField
          required
          sx={{ width: 280 }}
          label="Recepient Email Id"
          name="recepientMailId"
          defaultValue={state.recepientMailId}
          onChange={handleChange}
          error={errors.recepientMailId ? true : false}
          helperText={errors.recepientMailId}
          className="input-field-margin"
          value={state.recepientMailId}
        />
        <br />

        {/* Transfer Amount */}
        <TextField
          required
          sx={{ width: 280 }}
          label="Transfer Amount"
          name="transferAmount"
          defaultValue={state.transferAmount}
          onChange={handleChange}
          error={errors.transferAmount ? true : false}
          helperText={errors.transferAmount}
          className="input-field-margin"
          value={state.transferAmount}
        />
        <br />

        {/* Description */}
        <TextField
          required
          sx={{ width: 280 }}
          label="Description"
          name="description"
          defaultValue={state.description}
          onChange={handleChange}
          error={errors.description ? true : false}
          helperText={errors.description}
          className="input-field-margin"
          value={state.description}
        />
        <br />
        
      </div>

      <Divider className="divider-margin" />

      <Dialog
        open={isReset}
        onClose={handleResetClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Confirmation Dailog
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure, want to reset all the fields ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleResetClose}>
            No
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleResetYes}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <div class="btns">
        <Button
          variant="outlined"
          disabled={isResetDisabled()}
          color="secondary"
          onClick={handleReset}
          className="close-button"
        >
          Reset
        </Button>
        <Button
          disabled={!isValidForm}
          type="submit"
          variant="contained"
          color="primary"
          className="upload-button"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
