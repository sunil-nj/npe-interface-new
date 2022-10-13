import React, { useState } from "react";
//import "../../App.css";
import { Snackbar, Slide, Alert } from "@mui/material";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import PaymentForm from "./PaymentForm";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
//import * as constants from "../../constants/constants";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, marginLeft: 1.2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

function Payment(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false);
  };

  return (
    <div className="payment">
      <Button variant="contained" onClick={handleOpen}>
        Payment
      </Button>

      <Dialog
        sx={{ "& .MuiDialog-paper": { width: "100%", maxHeight: 800 } }}
        maxWidth="xs"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Payment Information
        </BootstrapDialogTitle>
        <DialogContent dividers className="content-scroll-hide">
          <PaymentForm onClose={handleClose} setSnackBarOpen={setSnackBarOpen} setIsLoading={props.setIsLoading} />
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackBarOpen}
        onClose={handleSnackBarClose}
        autoHideDuration={3000}
        TransitionComponent={TransitionUp}
        key={TransitionUp}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          API was successfull
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Payment;
